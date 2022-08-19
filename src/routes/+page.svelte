<template lang="pug">
  .index.mw7.mv4.ph3.center
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
      +each('partnerList as partner')
        a.aspect-ratio.aspect-ratio--1x1.pointer(href="{partner.link}")
          .aspect-ratio--object.no-repeat.cover(
            style="background-image: url('{partner.coverImg}')"
          )
            .index__partner.flex.flex-column.justify-end.pa3.white.h-100.tr
              h2.mv0.f4.fw7.flex.items-center.justify-end
                i.fa-solid.fa-hand-spock.f5.mr2
                | {partner.title}
              .mt3.f6
                +each('partner.description as line')
                  p.lh-copy.mb1.mt0 {line}

      
</template>
<script>
  import partnerRawList from '$lib/assets/partners.json';

  const title = 'ASSEMBLE!專案者聯盟！'

  const partnerList = partnerRawList.map((partner) => {
    return {
      ...partner,
      description: partner.description.split('\n'),
      link: `/partner/${partner.title}`
    }
  })
</script>
<svelte:head>
  <title>{title}</title>
</svelte:head>
<style lang="scss">
.index {
  &__partnerList {
    display: grid;
    row-gap: 1rem;

    @media screen and (min-width: 30em) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
  &__partner {
    background: linear-gradient(180deg, #fff0 20%, #222a 60%); 
    text-shadow: 0 0 5px black;
  }
}
</style>