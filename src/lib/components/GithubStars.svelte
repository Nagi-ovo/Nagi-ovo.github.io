<script>
  import { onMount } from 'svelte';

  let { repo } = $props();
  let stars = $state(null);

  onMount(async () => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`);
      const data = await res.json();
      const s = data.stargazers_count;
      stars = s >= 1000 ? (s / 1000).toFixed(1) + 'k' : String(s);
    } catch {
      /* leave as null on failure */
    }
  });
</script>

<span class="stars">
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path
      d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
    />
  </svg>
  {stars ?? '…'} stars
</span>

<style>
  .stars {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--c-muted);
    font-size: 14px;
  }
</style>
