// Copy arbitrary text to the clipboard and show a brief toast.
export function copyText(text, message = 'Copied to clipboard') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => toast(message),
      () => {},
    );
  }
}

function toast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText =
    'position:fixed;left:50%;bottom:32px;transform:translateX(-50%);' +
    'background:#1a1a1a;color:#fff;padding:8px 16px;border-radius:8px;' +
    "font-family:'Lato',Verdana,sans-serif;font-size:14px;z-index:9999;" +
    'opacity:0;transition:opacity .2s;box-shadow:0 4px 14px rgba(0,0,0,.18);';
  document.body.appendChild(t);
  requestAnimationFrame(() => {
    t.style.opacity = '1';
  });
  setTimeout(() => {
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 300);
  }, 1800);
}
