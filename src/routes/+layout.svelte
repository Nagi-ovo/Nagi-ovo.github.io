<script>
  import '../app.css';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>Zexi Zhang</title>
  <meta
    name="description"
    content="Zexi (Jesse) Zhang — CS Ph.D. student at Imperial College London. Research on foundation models in robot learning."
  />

  <!-- Open Graph / social preview cards -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.nagi.fun/" />
  <meta property="og:title" content="Zexi &quot;Jesse&quot; Zhang" />
  <meta
    property="og:description"
    content="CS Ph.D. student at Imperial College London. Research on foundation models in robot learning."
  />
  <meta property="og:image" content="https://www.nagi.fun/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Zexi &quot;Jesse&quot; Zhang" />
  <meta
    name="twitter:description"
    content="CS Ph.D. student at Imperial College London; foundation models in robot learning."
  />
  <meta name="twitter:image" content="https://www.nagi.fun/og.png" />
</svelte:head>

<ThemeToggle />

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
