<script>
  let { talk } = $props();

  // `versions` lists the decks in different languages, the first shown by default; one with a
  // `dir` lives at /slides/<slug>/<dir>/, one without at /slides/<slug>/. No list = one deck.
  const versions = $derived(talk.versions ?? [{}]);
  let v = $state(0);
  const ver = $derived(versions[v]);
  const base = $derived(`/slides/${talk.slug}/${ver.dir ? `${ver.dir}/` : ''}`);
  const pages = $derived(ver.pages ?? talk.pages);
  let cur = $state(0);
  let dragX = $state(0);
  let dragging = $state(false);
  let frame;
  let startX = null;
  let moved = false;

  const go = (i) => (cur = Math.max(0, Math.min(pages - 1, i)));

  // Stay on the same slide when switching language.
  function pick(i) {
    v = i;
    go(cur);
  }
  // Deep link into the deck at the page currently shown. The deck is a static file, not a
  // route, so its links carry rel="external" (full page load, skipped by the prerender crawler).
  const deckHref = $derived(`${base}#${cur + 1}`);

  function down(e) {
    if (e.target.closest('button')) return;
    startX = e.clientX;
    moved = false;
    dragging = true;
    frame.setPointerCapture(e.pointerId);
  }

  function move(e) {
    if (startX === null) return;
    dragX = e.clientX - startX;
    if (Math.abs(dragX) > 5) moved = true;
  }

  function up() {
    if (startX === null) return;
    const dx = dragX;
    startX = null;
    dragging = false;
    dragX = 0;
    if (Math.abs(dx) > frame.clientWidth * 0.15) go(cur + (dx < 0 ? 1 : -1));
  }

  function click(e) {
    if (moved || e.target.closest('button')) return;
    location.href = deckHref;
  }

  function key(e) {
    if (e.key === 'ArrowLeft') go(cur - 1);
    else if (e.key === 'ArrowRight') go(cur + 1);
    else if (e.key === 'Enter') location.href = deckHref;
    else return;
    e.preventDefault();
  }
</script>

<div class="talk">
  <div class="viewer">
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <div
      class="frame"
      bind:this={frame}
      tabindex="0"
      role="region"
      aria-roledescription="carousel"
      aria-label="{talk.title} slides, page {cur + 1} of {pages}. Arrow keys to flip, Enter to open."
      onpointerdown={down}
      onpointermove={move}
      onpointerup={up}
      onpointercancel={up}
      onclick={click}
      onkeydown={key}
    >
      <div
        class="track"
        class:dragging
        style:transform="translateX(calc({-cur * 100}% + {dragX}px))"
      >
        {#each { length: pages } as _, i}
          <img
            src="{base}thumbs/{i + 1}.webp"
            alt="{talk.title}, slide {i + 1}"
            width="960"
            height="540"
            loading={Math.abs(i - cur) <= 1 ? 'eager' : 'lazy'}
            decoding="async"
            draggable="false"
          />
        {/each}
      </div>
      <button class="nav prev" aria-label="Previous slide" disabled={cur === 0} onclick={() => go(cur - 1)}>‹</button>
      <button class="nav next" aria-label="Next slide" disabled={cur === pages - 1} onclick={() => go(cur + 1)}>›</button>
    </div>
    <div class="bar">
      <span class="count">{cur + 1} / {pages}</span>
      <div class="dots">
        {#each { length: pages } as _, i}
          <button aria-label="Go to slide {i + 1}" aria-current={i === cur} onclick={() => go(i)}></button>
        {/each}
      </div>
    </div>
  </div>

  <div class="body">
    <a class="name" href={deckHref} rel="external">{talk.title}</a>
    {#if talk.original}<span class="original" lang="zh">{talk.original}</span>{/if}
    {#if talk.desc}<p class="desc">{talk.desc}</p>{/if}
    <p class="meta">
      {#if talk.venue}
        {#if talk.venueHref}<a href={talk.venueHref}>{talk.venue}</a>{:else}{talk.venue}{/if}&nbsp;·
      {/if}
      {talk.date}{#if talk.lang}&nbsp;· given in {talk.lang}{/if}
    </p>
    <p class="links">
      {#if versions.length > 1}
        <span class="langs" role="group" aria-label="Slide language">
          {#each versions as version, i}
            <button aria-pressed={i === v} onclick={() => pick(i)}>{version.label}</button>
          {/each}
        </span>
      {/if}
      <a href={deckHref} rel="external">Slides</a>
      <span aria-hidden="true">·</span>
      <a href="{base}{talk.slug}.pdf" rel="external" download>Download PDF</a>
    </p>
  </div>
</div>

<style>
  .talk {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 20px;
    align-items: center;
  }

  .viewer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
  }

  .frame {
    position: relative;
    aspect-ratio: 16 / 9;
    max-width: 100%;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: var(--logo-ring), 0 0 10px rgba(0, 0, 0, 0.1);
    background: var(--c-card);
    touch-action: pan-y;
    cursor: pointer;
    user-select: none;
  }

  .frame:focus-visible {
    outline: 2px solid var(--c-link);
    outline-offset: 2px;
  }

  .track {
    display: flex;
    height: 100%;
    transition: transform 0.38s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  .track.dragging {
    transition: none;
  }

  .track img {
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .nav {
    position: absolute;
    top: 50%;
    width: 32px;
    height: 32px;
    margin-top: -16px;
    border: 0;
    border-radius: 50%;
    background: rgba(20, 20, 24, 0.7);
    color: #fff;
    font-size: 18px;
    line-height: 1;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .prev {
    left: 8px;
  }

  .next {
    right: 8px;
  }

  .frame:hover .nav,
  .frame:focus-within .nav {
    opacity: 1;
  }

  @media (hover: none) {
    .nav {
      opacity: 0.85;
    }
  }

  .nav:disabled {
    visibility: hidden;
  }

  .bar {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: var(--c-faint);
    font-variant-numeric: tabular-nums;
  }

  .count {
    min-width: 3.6em;
  }

  .dots {
    display: flex;
    flex: 1;
    gap: 4px;
  }

  /* Taller hit area than the visible 3px bar. */
  .dots button {
    flex: 1;
    height: 12px;
    padding: 0;
    border: 0;
    background: linear-gradient(var(--c-border), var(--c-border)) center / 100% 3px no-repeat;
    cursor: pointer;
  }

  .dots button[aria-current='true'] {
    background-image: linear-gradient(var(--c-link), var(--c-link));
  }

  .body {
    min-width: 0;
  }

  .name {
    font-weight: 700;
  }

  .original {
    display: block;
    margin-top: 2px;
    color: var(--c-muted);
  }

  .desc {
    margin: 7px 0;
  }

  .langs {
    display: inline-flex;
    margin-right: 10px;
    border: 1px solid var(--c-border);
    border-radius: 6px;
    overflow: hidden;
    vertical-align: 1px;
  }

  .langs button {
    padding: 1px 9px;
    border: 0;
    background: none;
    color: var(--c-faint);
    font: inherit;
    font-size: 13px;
    cursor: pointer;
  }

  .langs button + button {
    border-left: 1px solid var(--c-border);
  }

  .langs button[aria-pressed='true'] {
    background: var(--c-card);
    color: var(--c-text);
    font-weight: 700;
  }

  .meta,
  .links {
    margin: 4px 0 0;
    font-size: 14px;
    color: var(--c-faint);
  }

  @media (max-width: 600px) {
    .talk {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .track,
    .nav {
      transition: none;
    }
  }
</style>
