<script>
  import { onMount } from 'svelte';
  import { getEmail, copyEmail } from '$lib/utils/email.js';

  // address=true  -> CSS-reversed obfuscated address (Contact section)
  // children      -> custom content, e.g. an icon (header link row); `label` names it
  // otherwise     -> plain "Email" label
  let { address = false, label, children } = $props();

  let href = $state('#');

  onMount(() => {
    href = 'mailto:' + getEmail();
  });
</script>

<a {href} onclick={copyEmail} class:icon={children} aria-label={label} title={label}>
  {#if address}
    <span class="eml">m<i>v</i>oc.l<i>3</i>iamg@<i>p</i>201g<i>n</i>nahz<i>k</i>ess3j</span>
  {:else if children}
    {@render children()}
  {:else}
    Email
  {/if}
</a>
