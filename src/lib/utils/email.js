// Email is assembled at runtime from split pieces so it never appears verbatim
// as a single string. Pairs with the CSS-reversed display span in Email.svelte.
export function getEmail() {
  const u = ['j3', 'ssez', 'hang', '102'].join('');
  const d = ['gmail', 'com'].join('.');
  return u + String.fromCharCode(64) + d;
}

// Copy the real address on click, so visitors without a configured mail client
// can still grab it (the visible text is anti-scrape garble).
export function copyEmail() {
  const e = getEmail();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(e).then(
      () => showToast('Email copied: ' + e),
      () => {},
    );
  }
}

function showToast(msg) {
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
