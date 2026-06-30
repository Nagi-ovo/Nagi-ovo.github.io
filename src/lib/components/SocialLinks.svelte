<script>
  import { site } from '$lib/config/site.js';
  import Email from './Email.svelte';
</script>

<nav class="links">
  <Email />
  {#each site.social as l}
    <span class="sep">/</span>
    <a href={l.href}>{l.label}</a>
  {/each}
</nav>

<style>
  .links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .sep {
    color: var(--c-faint);
  }
</style>
