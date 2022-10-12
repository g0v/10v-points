<template lang="pug">
  .index.mw7.mv4.ph3.center
    +if('isAllFinished')
      ProgressInfo
      +else()
        h1.f1.fw7.tc {title}
        .mv4.mw6.lh-copy.center
          p
            | 來派對除了吃吃喝喝，當然是要玩遊戲的吧！g0v十週年也不例外，在今年這個十週年的盛會，
            | 我們也跟g0v社群中不同專案的坑主合作，讓來參加派對的參與者除了吃喝玩樂，也可以參與集
            | 點互動式闖關遊戲，除了更加認識不同的專案，也能貢獻自己的小小力量，一起召喚十週年多重
            | 宇宙的專案者聯盟！
          p
            | 我們在十週年生日趴的場地中設置了跟不同專案有關的闖關QR code，參與者可以在會場中尋
            | 找這些QR code 進入各個闖關活動，完成任務後就可以獲得獎勵！
    .index__partnerList
      +each('$partnerList as partner')
        a.aspect-ratio.aspect-ratio--1x1.pointer(href="{partner.link}")
          .aspect-ratio--object.no-repeat.cover(
            style="background-image: url('{partner.coverImg}')"
          )
            .index__partner.flex.flex-column.pt3.white.h-100.tc
              .flex-auto.flex.flex-column.justify-center
                h2.mv0.lh-title.f2.fw7.ph3
                  | {partner.title}
                .mt3.f6.ph3
                  +each('partner.description as line')
                    p.lh-copy.mb1.mt0.f4 {line}
              +if('partner.isFinished')
                .index__done.flex-none.mt3.flex.items-center.justify-end.f4.pa3
                  i.fa-solid.fa-check.mr2
                  .white 已完成
                +else()
                  .pb3
</template>
<script>
  import { partnerList } from '$lib/stores'
  import partnerRawList from '$lib/assets/partners.json';
  import { initStore } from '$lib/utils'
  import ProgressInfo from '$lib/components/ProgressInfo.svelte'

  const title = 'ASSEMBLE!專案者聯盟！'

  $: isAllFinished = $partnerList.every(partner => partner.isFinished)

  initStore()

</script>
<svelte:head>
  <title>{title}</title>
</svelte:head>
<style lang="scss">
.index {
  &__partnerList {
    display: grid;
    // display: none;
    row-gap: 1rem;

    @media screen and (min-width: 30em) {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
  &__partner {
    background: #222a;
    backdrop-filter: blur(6px);
    text-shadow: 0 0 5px black;
  }
  &__done {
    background: #fff4;
    justify-self: end;
  }
}
</style>