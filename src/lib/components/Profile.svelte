<script>
  import { site } from '$lib/config/site.js';
  import SocialLinks from './SocialLinks.svelte';
</script>

<header class="profile">
  <div class="bio">
    <h1>
      {site.name}
      <!-- Hover/focus/tap: 张 rolls over to 新 and each half gets its English word,
           New over 新 and Jersey over 泽西, so the name reads 新泽西 (New Jersey). -->
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -- focusable so keyboard and tap reach the reveal -->
      <span class="zh" tabindex="0" aria-describedby="zh-origin">
        <span class="part"
          ><span class="slot"><span>{site.nameZh[0]}</span><span aria-hidden="true">新</span></span
          ><span class="gloss" aria-hidden="true">New</span></span
        ><span class="part">{site.nameZh.slice(1)}<span class="gloss" aria-hidden="true">Jersey</span></span>
        <span class="note" aria-hidden="true"
          ><svg viewBox="0 0 44 28" width="44" height="28"
            ><path d="M42 24C32 12 18 6 4 7" /><path d="M11 2L4 7l7 5" /></svg
          ><span>that’s where<br />my name’s from!</span></span
        >
        <span class="sr" id="zh-origin">泽西 is named after 新泽西, New Jersey</span>
      </span>
    </h1>
    <p class="intro">{@html site.intro}</p>
    <SocialLinks />
  </div>
  <img class="avatar" src={site.photo} alt={site.name} width="200" height="200" fetchpriority="high" />
</header>

<style>
  /* Caveat, cut down to the note's letters (8 KB). */
  @font-face {
    font-family: 'Caveat';
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/caveat-note.woff2') format('woff2');
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 32px;
    margin: 40px 0 var(--gap-section);
  }

  .bio {
    flex: 1;
    min-width: 0;
  }

  h1 {
    font-size: 30px;
    margin: 0 0 14px;
  }

  .zh {
    position: relative;
    display: inline-block;
    font-weight: 400;
    color: var(--c-muted);
    margin-left: 6px;
    outline: none;
    cursor: default;
    transition: color 0.3s;
  }

  /* 新 | 泽西: each half carries its own English word and underline. */
  .part {
    position: relative;
    display: inline-block;
  }

  .part + .part {
    margin-left: 0.08em;
  }

  /* 张 above 新 in a one-character window; the column slides up on reveal. */
  .slot {
    display: inline-flex;
    flex-direction: column;
    height: 1.25em;
    overflow: hidden;
    vertical-align: top;
  }

  .slot > span {
    display: block;
    height: 1.25em;
    transition: transform 0.45s cubic-bezier(0.5, 1.6, 0.4, 1);
  }

  .part::after {
    content: '';
    position: absolute;
    left: 0.06em;
    right: 0.06em;
    bottom: 0;
    height: 2px;
    background: var(--c-link);
    transform: scaleX(0);
    transition: transform 0.35s ease;
  }

  .gloss {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 2px);
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    white-space: nowrap;
    color: var(--c-link);
    opacity: 0;
    transform: translate(-50%, 6px);
    transition:
      opacity 0.3s,
      transform 0.3s;
    pointer-events: none;
  }

  /* New lands first, then Jersey. */
  .part:first-child::after,
  .part:first-child .gloss {
    transition-delay: 0.1s;
  }

  .part + .part::after,
  .part + .part .gloss {
    transition-delay: 0.25s;
  }

  /* A handwritten aside to the right, drawn in last; its arrow points up at JERSEY. */
  .note {
    position: absolute;
    left: calc(100% + 2px);
    top: 0.1em;
    display: flex;
    align-items: flex-start;
    gap: 2px;
    font: 600 21px/1 'Caveat', 'Bradley Hand', 'Segoe Print', cursive;
    white-space: nowrap;
    color: var(--c-link-hover);
    opacity: 0;
    transform: translateY(4px) rotate(-4deg);
    transform-origin: left top;
    transition:
      opacity 0.3s 0.45s,
      transform 0.3s 0.45s;
    pointer-events: none;
  }

  .note svg {
    flex-shrink: 0;
    margin-top: -16px; /* lifts the arrowhead level with the JERSEY label */
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 60;
    stroke-dashoffset: 60;
    transition: stroke-dashoffset 0.4s 0.5s ease-out;
  }

  .sr {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }

  .zh:hover,
  .zh:focus {
    color: var(--c-text);
  }

  .zh:hover .part:first-child,
  .zh:focus .part:first-child {
    color: var(--c-link);
  }

  .zh:hover .slot > span,
  .zh:focus .slot > span {
    transform: translateY(-100%);
  }

  .zh:hover .part::after,
  .zh:focus .part::after {
    transform: scaleX(1);
  }

  .zh:hover .gloss,
  .zh:focus .gloss {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  .zh:hover .note,
  .zh:focus .note {
    opacity: 1;
    transform: rotate(-4deg);
  }

  .zh:hover .note svg,
  .zh:focus .note svg {
    stroke-dashoffset: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .slot > span,
    .part::after,
    .gloss,
    .note,
    .note svg {
      transition-duration: 0.01s;
      transition-delay: 0s !important;
    }
  }

  .intro {
    margin: 0 0 18px;
  }

  .avatar {
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 620px) {
    .profile {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 20px;
    }

    .zh {
      display: table; /* own line, only as wide as the name */
      margin-left: 0;
      margin-top: 14px; /* room for the English words above */
    }

    .note {
      font-size: 18px;
    }

    .avatar {
      width: 128px;
      height: 128px;
    }
  }
</style>
