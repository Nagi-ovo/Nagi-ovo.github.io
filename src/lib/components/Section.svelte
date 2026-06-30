<script>
  let { title, children } = $props();
</script>

<section>
  <h2>{title}</h2>
  {@render children()}
</section>

<style>
  section {
    margin-bottom: var(--gap-section);
  }

  h2 {
    font-size: 22px;
    margin: 0 0 18px;
    padding-bottom: 7px;
    border-bottom: 1px solid var(--c-border);
  }
</style>
