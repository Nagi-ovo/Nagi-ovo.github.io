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
  .links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 18px;
  }

  .links :global(.icon) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    padding: 0;
    border: none;
    background: none;
    color: var(--c-muted);
    cursor: pointer;
    transition: color 0.15s ease;
  }

  .links :global(.icon:hover) {
    color: var(--c-link);
  }

  .links :global(.icon svg) {
    height: 20px;
    width: auto;
    fill: currentColor;
  }
</style>
