export function el(tag, { className, text, attrs } = {}) {
  const node = document.createElement(tag);

  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;

  if (attrs) {
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  }

  return node;
}
