<script>
  import { copyText } from '$lib/utils/clipboard.js';

  let { pub } = $props();

  function play(e) {
    const v = e.currentTarget.querySelector('video');
    if (v) v.play().catch(() => {});
  }

  function stop(e) {
    const v = e.currentTarget.querySelector('video');
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  }
</script>

<article class="pub" onmouseenter={play} onmouseleave={stop}>
  {#if pub.image || pub.video}
    <div class="thumb">
      {#if pub.image}
        <img class="base" src={pub.poster ?? pub.image} alt={pub.title} loading="lazy" />
      {/if}
      {#if pub.video}
        <video
          class="over"
          src={pub.video}
          muted
          loop
          playsinline
          preload="metadata"
          aria-label={pub.title}
        ></video>
      {/if}
    </div>
  {/if}
  <div class="body">
    <a class="title" href={pub.href}>{pub.title}</a>
    <p class="authors">
      {#each pub.authors as a, i}{i > 0 ? ', ' : ''}<span class:me={a.me}>{a.name}</span>{#if a.note}<sup>{a.note}</sup>{/if}{/each}
    </p>
    <p class="venue">{pub.venue}</p>
    <p class="links">
      {#each pub.links as l, i}{i > 0 ? ' / ' : ''}<a href={l.href}>{l.label}</a>{/each}{#if pub.bibtex} / <button class="linklike" onclick={() => copyText(pub.bibtex, 'BibTeX copied')}>BibTeX</button>{/if}
    </p>
    {#if pub.abstract}
      <p class="abstract">{pub.abstract}</p>
    {/if}
  </div>
</article>

<style>
  .pub {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 22px;
    align-items: start;
  }

  .thumb {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 6px;
    overflow: hidden;
  }

  .thumb .base,
  .thumb .over {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .thumb .over {
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .pub:hover .thumb .over {
    opacity: 1;
  }

  .body {
    font-size: 14px;
    line-height: 1.45;
  }

  .title {
    font-weight: 700;
    font-size: 15px;
  }

  .authors {
    margin: 5px 0 1px;
  }

  .me {
    font-weight: 700;
  }

  sup {
    font-size: 0.7em;
  }

  .venue {
    margin: 0 0 3px;
    font-style: italic;
    color: var(--c-muted);
  }

  .links {
    margin: 0 0 6px;
  }

  .linklike {
    font: inherit;
    color: var(--c-link);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .linklike:hover {
    color: var(--c-link-hover);
  }

  .abstract {
    margin: 0;
    color: var(--c-muted);
  }

  @media (max-width: 600px) {
    .pub {
      grid-template-columns: 110px 1fr;
      gap: 14px;
    }

    .thumb {
      width: 110px;
      height: 110px;
    }

    .abstract {
      font-size: 14px;
    }
  }
</style>
