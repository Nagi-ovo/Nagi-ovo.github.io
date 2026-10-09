<script>
  import { site } from '$lib/config/site.js';
  import { icons } from '$lib/icons/index.js';
  import { copyText } from '$lib/utils/clipboard.js';
  import Email from './Email.svelte';
</script>

<nav class="links">
  <Email label="Email">{@html icons.envelope}</Email>
  {#each site.social as l}
    {#if l.copy}
      <button
        class="icon"
        type="button"
        aria-label={l.label}
        title={l.label}
        onclick={() => copyText(l.copy, `${l.label} copied: ${l.copy}`)}
      >
        {@html icons[l.icon]}
      </button>
    {:else}
      <a class="icon" href={l.href} aria-label={l.label} title={l.label}>{@html icons[l.icon]}</a>
    {/if}
  {/each}
</nav>

<style>
  /* 44px hit areas (touch target), 22px glyphs; pulled left so the first glyph lines up with the text. */
  .links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    margin-left: -11px;
  }

  .links :global(.icon) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
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

  .links :global(.icon:hover),
  .links :global(.icon:focus-visible) {
    color: var(--c-link);
    background: color-mix(in srgb, var(--c-text) 7%, transparent);
  }

  .links :global(.icon svg) {
    height: 22px;
    width: auto;
    max-width: 24px;
    fill: currentColor;
  }
</style>
