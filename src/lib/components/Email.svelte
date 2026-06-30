<script>
  import { onMount } from 'svelte';
  import { getEmail, copyEmail } from '$lib/utils/email.js';

  // address=true  -> CSS-reversed obfuscated address (Contact section)
  // address=false -> plain "Email" label (header link row)
  let { address = false } = $props();

  let href = $state('#');

  onMount(() => {
    href = 'mailto:' + getEmail();
  });
</script>

<a {href} onclick={copyEmail}>
  {#if address}
    <span class="eml">m<i>v</i>oc.l<i>3</i>iamg@<i>p</i>201g<i>n</i>nahz<i>k</i>ess3j</span>
  {:else}
    Email
  {/if}
</a>
