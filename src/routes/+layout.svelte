<script>
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>Zexi Zhang</title>
  <meta
    name="description"
    content="Zexi (Jesse) Zhang — MRes student in AI & Machine Learning at Imperial College London. Research on humanoid loco-manipulation and reinforcement learning."
  />
</svelte:head>

<main class="container">
  {@render children()}
</main>

<footer class="container">
  <p>Template adapted from <a href="https://jonbarron.info/">Jon Barron</a>.</p>
</footer>

<style>
  .container {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: 0 var(--pad);
  }

  footer {
    margin: 36px auto 48px;
    text-align: right;
    font-size: 13px;
    color: var(--c-faint);
  }

  footer :global(a) {
    color: var(--c-faint);
  }

  footer :global(a:hover) {
    color: var(--c-link-hover);
  }
</style>
