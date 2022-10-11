<template lang="pug">
  .progInfo
    +if('isAllFinished && $hasAppliedLottery && g0vToken')
      h1.mv0 召喚完畢！
      p.mt3.mb4.lh-copy 你的抽獎編號為 <mark>{g0vToken}</mark> ，別忘了下午四點時來參加開獎 .•♫•♬•
      +elseif('isAllFinished && g0vToken')
        h1.mv0 召喚準備完畢！
        p.mt3.mb4.lh-copy 在造訪了所有專案星球後，只要在按下「召喚專案者聯盟」，就能參加生日趴抽獎!
        button.progInfo__cta.pv2.f4.br2(on:click|once="{applyLottery}") 召喚專案者聯盟
</template>
<script>
  import { partnerList, hasAppliedLottery } from '$lib/stores'
  import { g0vTokenKey, hasLotteryKey, recordProgress } from '$lib/utils';
  import { onMount, tick } from 'svelte'

  let g0vToken = ''

  $: nUncompleted = $partnerList.filter(partner => !partner.isFinished).length
  $: isAllFinished = nUncompleted === 0

  onMount(() => {
    g0vToken = localStorage.getItem(g0vTokenKey) || ''
  })

  async function applyLottery () {
    await recordProgress(g0vToken, hasLotteryKey)
  }

</script>
<style lang="scss">
  .progInfo {
    mark {
      background: transparent;
      text-decoration: underline;
      font-weight: 600;
    }
    &__cta {
      color: #fff;
      min-width: 15rem;
      background-image: linear-gradient(90deg,#3b7,#16d,#3b7);
      background-position-x: -15rem;
      animation: vivid 1s linear infinite;
      text-shadow: 0 0 3px rgba(255,255,0,0.8);
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      border: 1px solid transparent;
    }
  }

  @keyframes vivid {
    from {
      background-position-x: -15rem;
    }
    to {
      background-position-x: 0rem;
    }
  }
</style>