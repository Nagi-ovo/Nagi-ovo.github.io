<script>
  import { copyText } from '$lib/utils/clipboard.js';
  import GithubStars from './GithubStars.svelte';

  let { pub } = $props();

  // "ICRA 2026" -> name in text colour, trailing year muted.
  let [, venueName, venueYear] = $derived(pub.venue.match(/^(.*?)(\s+\d{4})?$/));

  // Star count comes from the first GitHub link, usually "code".
  let repoHref = $derived(pub.links.find((l) => /^https:\/\/github\.com\/[^/]+\/[^/]+/.test(l.href))?.href);
  let repo = $derived(repoHref?.match(/github\.com\/([^/]+\/[^/#?]+)/)[1]);

  function play(e) {
    const v = e.currentTarget.querySelector('video');
    if (v) v.play().catch(() => {});
  }

  // Touch screens have no hover, so play while the card is on screen instead.
  let video = $state();
  $effect(() => {
    if (!video) return;
    if (!matchMedia('(hover: none)').matches) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? video.play().catch(() => {}) : video.pause()),
      { threshold: 0.5 }
    );
    io.observe(video);
    return () => io.disconnect();
  });

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
          bind:this={video}
          class="over"
          src={pub.video}
          poster={pub.poster ?? pub.image}
          muted
          loop
          playsinline
          preload="metadata"
          aria-label={pub.title}
        ></video>
      {/if}
    </div>
  {/if}
  <div class="body" style:--accent={pub.accent}>
    {#if pub.logo}<span class="logo">{@html pub.logo}</span>{/if}<a class="title" class:branded={pub.titleHtml} href={pub.href}>{#if pub.titleHtml}{@html pub.titleHtml}{:else}{pub.title}{/if}</a>
    <p class="authors">
      {#each pub.authors as a, i}{i > 0 ? ', ' : ''}<span class:me={a.me}>{a.name}</span>{#if a.note}<sup>{a.note}</sup>{/if}{/each}
    </p>
    <p class="venue">{venueName}<span class="year">{venueYear}</span></p>
    <p class="links">
      {#each pub.links as l}<a href={l.href}>{l.label}</a>{/each}{#if pub.bibtex}<button class="linklike" onclick={() => copyText(pub.bibtex, 'BibTeX copied')}>bibtex</button>{/if}{#if repo}<a class="stars-link" href={repoHref}><GithubStars {repo} compact /></a>{/if}
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

  /* Branded titles mirror the project page: body in text colour, acronym in accent. */
  .title.branded {
    color: var(--c-text);
  }

  .title.branded:hover {
    color: var(--c-link-hover);
  }

  .title :global(b) {
    font-weight: inherit;
    color: var(--accent, inherit);
    /* Raise lightness only, keeping hue and chroma, so the red stays red on dark. */
    color: oklch(from var(--accent, currentColor) max(l, var(--accent-min-l)) c h);
  }

  .logo {
    display: inline-block;
    width: 1.05em;
    height: 1.05em;
    margin-right: 0.3em;
    vertical-align: -0.17em;
    color: var(--c-text);
    font-size: 15px;
  }

  .logo :global(svg) {
    display: block;
    width: 100%;
    height: 100%;
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
    font-weight: 600;
    color: var(--c-text);
  }

  .venue .year {
    font-weight: 400;
    color: var(--c-muted);
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 2px 12px;
    margin: 0 0 6px;
  }

  .links a,
  .links .linklike {
    color: var(--c-muted);
  }

  .links a:hover,
  .links .linklike:hover {
    color: var(--c-link-hover);
  }

  /* Plain inline so the count shares the row's baseline. */
  .stars-link :global(.stars) {
    display: inline;
  }

  .stars-link :global(.stars svg) {
    vertical-align: -0.1em;
  }

  .stars-link:hover :global(.stars) {
    color: var(--c-link-hover);
  }

  .linklike {
    font: inherit;
    line-height: inherit;
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

  @media (hover: none) {
    .thumb .over {
      opacity: 1;
    }
  }

  /* Stack on phones: a side thumbnail leaves the text a ~200px column. */
  @media (max-width: 600px) {
    .pub {
      grid-template-columns: minmax(0, 1fr);
      gap: 12px;
    }

    .thumb {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 10;
    }

    .abstract {
      display: none;
    }
  }
</style>
