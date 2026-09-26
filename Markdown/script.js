// Markdown to HTML Converter
// Each line of the textarea is handled on its own: first we check whether
// the *whole line* is a heading or a quote (those only count if the
// only thing before the marker is optional leading spaces), then we run
// the inline replacements (images, links, bold, italic) on whatever text
// is left. Working line-by-line keeps separate lines from bleeding into
// each other when a line has more than one of the same marker.

function convertMarkdown() {
  const markdownInput = document.getElementById('markdown-input').value;

  const convertedLines = markdownInput.split('\n').map((line) => {
    let wrapperTag = null;
    let content = line;

    const headingMatch = line.match(/^ *(#{1,3}) (.+)$/);
    const quoteMatch = line.match(/^ *> (.+)$/);

    if (headingMatch) {
      wrapperTag = `h${headingMatch[1].length}`;
      content = headingMatch[2];
    } else if (quoteMatch) {
      wrapperTag = 'blockquote';
      content = quoteMatch[1];
    }

    content = content
      // images first, so a leftover "!" doesn't confuse the link regex
      .replace(/!\[([^\]]*)\]\(([^)]*)\)/g, '<img alt="$1" src="$2">')
      .replace(/\[([^\]]*)\]\(([^)]*)\)/g, '<a href="$2">$1</a>')
      // bold before italic, so **text** isn't read as two italics first
      .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.*)__/g, '<strong>$1</strong>')
      .replace(/\*(.*)\*/g, '<em>$1</em>')
      .replace(/_(.*)_/g, '<em>$1</em>');

    return wrapperTag ? `<${wrapperTag}>${content}</${wrapperTag}>` : content;
  });

  return convertedLines.join('');
}

function updateStats() {
  const input = document.getElementById('markdown-input').value;
  const lines = input.length ? input.split('\n').length : 0;
  const words = input.trim() ? input.trim().split(/\s+/).length : 0;
  const chars = input.length;
  document.getElementById('stat-lines').textContent = `${lines} line${lines === 1 ? '' : 's'}`;
  document.getElementById('stat-words').textContent = `${words} word${words === 1 ? '' : 's'}`;
  document.getElementById('stat-chars').textContent = `${chars} char${chars === 1 ? '' : 's'}`;
}

function renderMarkdown() {
  const input = document.getElementById('markdown-input').value;
  const outputEl = document.getElementById('html-output');
  const previewEl = document.getElementById('preview');

  updateStats();

  if (!input.trim()) {
    outputEl.innerHTML = '<span class="empty-hint">Tags will appear here…</span>';
    previewEl.innerHTML = '<span class="empty-hint">Rendered result will appear here…</span>';
    return;
  }

  const html = convertMarkdown();
  outputEl.textContent = html;
  previewEl.innerHTML = html;
}

document.getElementById('markdown-input').addEventListener('input', renderMarkdown);