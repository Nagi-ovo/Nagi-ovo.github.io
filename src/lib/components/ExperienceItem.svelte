<script>
  let { item } = $props();
</script>

<div class="exp">
  <img class="logo" src={item.logo} alt={item.org} loading="lazy" />
  <div class="body">
    <div class="org">{item.org}</div>
    <div class="date">{item.date}</div>
    {#if item.role}
      <div class="role">{item.role}</div>
    {/if}
    {#if item.note}
      <div class="note">{@html item.note}</div>
    {/if}
  </div>
</div>

<style>
  .exp {
    display: grid;
    grid-template-columns: 72px 1fr;
    gap: 18px;
    align-items: center;
    padding: 10px 0;
  }

  .logo {
    width: 72px;
    height: 72px;
    object-fit: contain;
  }

  .org {
    font-weight: 700;
  }

  .date {
    font-size: 14px;
    color: var(--c-muted);
  }

  .role {
    margin-top: 6px;
    font-weight: 700;
  }

  .note {
    font-size: 15px;
    color: var(--c-muted);
  }

  @media (prefers-color-scheme: dark) {
    .logo {
      background: #f4f4f4;
      border-radius: 6px;
      padding: 4px;
    }
  }
</style>
