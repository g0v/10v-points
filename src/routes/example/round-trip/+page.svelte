<template lang="pug">
    .bg-black.pv5.vh-100
      .br2.mw6.center.bg-light-green.ph3.pv4
        h1.mt0.mb3 來回票範例專案
        .lh-copy.mv4
          p
            | 來回票的過關條件較嚴格，在完成闖關後，須將十週年網站帶過來的 token 帶回給十週年網站，才算完成闖關。
            | 適合想要設定完成條件、可以訂製活動網站的專案。
          p
            | 十週年網站跳轉時，會以 
            mark.ph1 {g0vTokenKey}
            | &nbsp;為 url search params ，像這裡的 token 就是：
            mark.ph1 {g0vToken}
          p
            | 跳轉回
            strong.mh1 {siteUrl}/專案名稱
            | 時，記得加上
            mark.ph1 ?{g0vTokenKey}={g0vToken}
            | &nbsp;呦～
        .flex.items-center.justify-center
          a.pv2.ph3.bg-black.white.fw7.br2.ba.b--gray(href="{callback}") 像這樣！
  </template>
<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  let g0vToken = '網頁啟動中 🙃 '
  const g0vTokenKey = '10vpoints'
  const siteUrl = 'https://g0v.github.io/10v-points'

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    g0vToken = urlParams.get(g0vTokenKey)
  })
  
  $: callback = `${siteUrl}/專案三號/?${g0vTokenKey}=${encodeURIComponent(g0vToken)}` 
</script>
  