<script>
    import { page } from '$app/stores';
    import partnerMap from '$lib/assets/partners.json';
    console.log($page);
</script>

<svelte:head>
  <title>Welcome {$page.params.partner}!</title>
</svelte:head>
<h1>Hi {$page.params.partner}!</h1>
<pre>{JSON.stringify(partnerMap, null, '  ')}</pre>
