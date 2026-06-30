<script>
  let { pub } = $props();
</script>

<article class="pub">
  {#if pub.image}
    <img class="thumb" src={pub.image} alt={pub.title} />
  {/if}
  <div class="body">
    <a class="title" href={pub.href}>{pub.title}</a>
    <p class="authors">
      {#each pub.authors as a, i}{i > 0 ? ', ' : ''}<span class:me={a.me}>{a.name}</span>{#if a.note}<sup>{a.note}</sup>{/if}{/each}
    </p>
    <p class="venue">{pub.venue}</p>
    <p class="links">
      {#each pub.links as l, i}{i > 0 ? ' / ' : ''}<a href={l.href}>{l.label}</a>{/each}
    </p>
    {#if pub.abstract}
      <p class="abstract">{pub.abstract}</p>
    {/if}
  </div>
</article>

<style>
  .pub {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 20px;
    align-items: start;
  }

  .thumb {
    width: 100%;
    border-radius: 6px;
  }

  .title {
    font-weight: 700;
  }

  .authors {
    margin: 7px 0 2px;
  }

  .me {
    font-weight: 700;
  }

  sup {
    font-size: 0.7em;
  }

  .venue {
    margin: 0 0 4px;
    font-style: italic;
    color: var(--c-muted);
  }

  .links {
    margin: 0 0 8px;
  }

  .abstract {
    margin: 0;
    font-size: 15px;
    color: var(--c-muted);
  }

  @media (max-width: 600px) {
    .pub {
      grid-template-columns: 1fr;
    }

    .thumb {
      max-width: 260px;
    }
  }
</style>
