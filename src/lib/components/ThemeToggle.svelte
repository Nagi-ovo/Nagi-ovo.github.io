<script>
  import { onMount } from 'svelte';
  import { icons } from '$lib/icons/index.js';

  // The inline script in app.html applies a saved choice before first paint;
  // without one the page follows the system (see the dark blocks in app.css).
  let dark = $state(false);

  onMount(() => {
    const media = matchMedia('(prefers-color-scheme: dark)');
    const sync = () => {
      const chosen = document.documentElement.dataset.theme;
      dark = chosen ? chosen === 'dark' : media.matches;
    };
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  });

  function toggle() {
    dark = !dark;
    const theme = dark ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage blocked (private mode): the choice lasts for this page view only.
    }
  }
</script>

<button
  class="theme"
  type="button"
  onclick={toggle}
  aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
  title={dark ? 'Light theme' : 'Dark theme'}
>
  {@html dark ? icons.sun : icons.moon}
</button>

<style>
  .theme {
    position: absolute;
    top: 8px;
    right: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: none;
    border-radius: 8px;
    background: none;
    color: var(--c-muted);
    cursor: pointer;
    transition:
      color 0.15s ease,
      background-color 0.15s ease;
  }

  .theme:hover,
  .theme:focus-visible {
    color: var(--c-link);
    background: color-mix(in srgb, var(--c-text) 7%, transparent);
  }

  .theme :global(svg) {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
</style>
