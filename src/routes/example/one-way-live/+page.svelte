<template lang="pug">
    .bg-black.pv5.vh-100
      .br2.mw6.center.bg-light-yellow.ph3.pv4
        h1.mt0.mb3 單程直播票範例專案
        p.lh-copy.mv4
          | 和單程票專案相同，在按下「跳坑專案任務」後，就視為完成闖關。只是在直播票中，不會開新視窗，而是用 iframe 內嵌網頁，避免畫面跳轉。
          br
          | 適合有現成活動手機版網頁的專案任務。
        .flex.items-center.justify-center
          button.pv2.ph3.bg-black.white.fw7.br2.ba.b--gray(on:click="{done}") 可以加個按鈕，提示瀏覽者任務完成
  </template>
<script>
function done () {
  alert('任務完成！');
}
</script>
  