<script>
  import GithubStars from './GithubStars.svelte';

  let { item } = $props();
</script>

<div class="sw">
  <a href={item.href} aria-label={item.name}>
    <img class="logo" src={item.logo} alt={item.name} loading="lazy" />
  </a>
  <div class="body">
    <a class="name" href={item.href}>{item.name}</a>
    <p class="desc">{item.desc}</p>
    <a class="stars-link" href={item.href}>
      <GithubStars repo={item.repo} />
    </a>
  </div>
</div>

<style>
  .sw {
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: 18px;
    align-items: center;
  }

  .logo {
    width: 90px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .name {
    font-weight: 700;
  }

  .desc {
    margin: 7px 0;
  }

  .stars-link:hover {
    color: var(--c-link-hover);
  }

  @media (prefers-color-scheme: dark) {
    .logo {
      box-shadow: 0 0 0 1px var(--c-border);
    }
  }
</style>
