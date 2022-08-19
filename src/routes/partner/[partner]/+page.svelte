<script>
  import { page } from '$app/stores';
  import partnerMap from '$lib/assets/partners.json';
  const partner = partnerMap.find(partner => partner.title === $page.params.partner)
  const pageTitle = partner?.title
</script>

<svelte:head>
  <title>{pageTitle} x ASSEMBLE!專案者聯盟！</title>
</svelte:head>
<template lang="pug">
  .index.mw7.mv4.ph3.center
    +if('!partner')
      h1.f1.tc.lh-title.mb4.mt5 找不到「{$page.params.partner}」呦 🙄 🙄 🙄
      p.f3.dark-gray.tc 是誰帶你來這裡的呢？
      +else()
        h1 嗨！ {pageTitle}
        .gray.lh-copy {JSON.stringify(partner)}
</template>