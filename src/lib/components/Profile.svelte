<script>
  import { site } from '$lib/config/site.js';
  import SocialLinks from './SocialLinks.svelte';
</script>

<header class="profile">
  <div class="bio">
    <h1>
      {site.name}
      <span class="zh">{site.nameZh}</span>
    </h1>
    <p class="intro">{@html site.intro}</p>
    <SocialLinks />
  </div>
  <img class="avatar" src={site.photo} alt={site.name} />
</header>

<style>
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
    font-weight: 400;
    color: var(--c-muted);
    margin-left: 6px;
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
      display: block;
      margin-left: 0;
      margin-top: 2px;
    }

    .avatar {
      width: 128px;
      height: 128px;
    }
  }
</style>
