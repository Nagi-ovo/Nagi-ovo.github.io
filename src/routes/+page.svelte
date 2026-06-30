<script>
  import Profile from '$lib/components/Profile.svelte';
  import Section from '$lib/components/Section.svelte';
  import PublicationCard from '$lib/components/PublicationCard.svelte';
  import ExperienceItem from '$lib/components/ExperienceItem.svelte';
  import SoftwareCard from '$lib/components/SoftwareCard.svelte';
  import Email from '$lib/components/Email.svelte';

  import { site } from '$lib/config/site.js';
  import { news } from '$lib/data/news.js';
  import { publications } from '$lib/data/publications.js';
  import { education, work } from '$lib/data/experience.js';
  import { software } from '$lib/data/software.js';
</script>

<Profile />

<Section title="News">
  <ul class="news">
    {#each news as n}
      <li><strong>[{n.date}]</strong> {@html n.html}</li>
    {/each}
  </ul>
</Section>

<Section title="Research">
  <p>{@html site.research}</p>
</Section>

<Section title="Publications">
  <div class="stack">
    {#each publications as pub}
      <PublicationCard {pub} />
    {/each}
  </div>
</Section>

<Section title="Software">
  <p>{@html site.softwareIntro}</p>
  <div class="stack">
    {#each software as item}
      <SoftwareCard {item} />
    {/each}
  </div>
</Section>

<Section title="Education">
  <div class="stack-tight">
    {#each education as item}
      <ExperienceItem {item} />
    {/each}
  </div>
</Section>

<Section title="Work Experience">
  <div class="stack-tight">
    {#each work as item}
      <ExperienceItem {item} />
    {/each}
  </div>
</Section>

<Section title="Awards & Honors">
  <ul class="bullets">
    {#each site.awards as a}
      <li>{@html a}</li>
    {/each}
  </ul>
</Section>

<Section title="Misc">
  <p class="label">Teaching (Undergraduate TA):</p>
  <ul class="bullets">
    {#each site.teaching as t}
      <li>{@html t}</li>
    {/each}
  </ul>
  <p><strong>Hobbies:</strong> {site.hobbies}</p>
</Section>

<Section title="Contact">
  <p><strong>Email:</strong> <Email address /></p>
  <p><strong>Community:</strong> {site.community}</p>
</Section>

<style>
  .stack {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .stack-tight {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .news,
  .bullets {
    margin: 0;
    padding-left: 1.3em;
    line-height: 1.6;
  }

  .news li,
  .bullets li {
    margin-bottom: 8px;
  }

  .label {
    margin-bottom: 6px;
    font-weight: 700;
  }
</style>
