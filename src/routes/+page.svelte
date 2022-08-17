<template lang="pug">
    .index.mw7.mv4.ph3.center
        h1.f1.fw6.tc ASSEMBLE!專案者聯盟！
        .mv4.mw6.lh-copy.center
            p 來派對除了吃吃喝喝，當然是要玩遊戲的吧！g0v十週年也不例外，在今年這個十週年的盛會，我們也跟g0v社群中不同專案的坑主合作，讓來參加派對的參與者除了吃喝玩樂，也可以參與集點互動式闖關遊戲，除了更加認識不同的專案，也能貢獻自己的小小力量，一起召喚十週年多重宇宙的專案者聯盟！
            p 我們在十週年生日趴的場地中設置了跟不同專案有關的闖關QR code，參與者可以在會場中尋找這些QR code 進入各個闖關活動，完成任務後就可以獲得獎勵！\
        .index__partnerList
            +each('partnerList as partner')
                .index__partner
                    h2.mt0.mb2.f4 {partner.title}
                    .aspect-ratio.aspect-ratio--1x1.mb3
                        img.aspect-ratio--object(src="{partner.coverImg}")
                    +each('partner.description as line')
                        p.lh-copy.mb2.mt0 {line}

            
</template>
<script>
    import 'tachyons/css/tachyons.css'
    import partnerRawList from '$lib/assets/partners.json';

    const partnerList = partnerRawList.map((partner) => {
        return {
            ...partner,
            description: partner.description.split('\n')
        }
    })
</script>
<svelte:head>
  <title>Welcome</title>
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
        img {
            object-fit: cover;
        }
    }
}
</style>