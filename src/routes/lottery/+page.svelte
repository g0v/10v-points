<template lang="pug">
  .lottery.mv4.pa4.center.f4
    h1.mv0.fw7 專案者聯盟 - 抽獎時間！
    +if('!isOnAnnouncing')
      p.mt3 得獎名單，將在 10/23 下午四點公佈
      +elseif('hasAwardError')
        p.mt3 🙄 程式碰到了點問題，請重新整理 🙄
      +else
        .lottery__container
          .mt3
            p.mv3 請到以下網址，查詢自己的抽獎編號
            p.mv3 https://g0v.github.io/10v-points/
            img.lottery__qrcode(src="/10v-points/lottery-qrcode.png" alt="https://g0v.github.io/10v-points/")
          div
            p.mv4 得獎名單如下：
            .lottery__awardGroup.mt3
              +each('groupedAward as awardGroup')
                .lottery__awardRow.bb.bw2.pb3.mb4.lh-copy
                  .lottery__id.fw7.tr {awardGroup.id}
                  .lottery__awardList.pl3
                    +each('awardGroup.awards as award')
                      .lottery__award {award}
            +if('hasMoreAwardToShow')
              button.lottery__more(on:click="{showMoreAward}") 載入更多
</template>
<script>
  import axios from 'axios'
  import { partnerList } from '$lib/stores'

  const awardEndpoint = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRnwi4M1rK17sNjFWlwkiSozz401CMvZnxmto53ipL9fIPoq9GPUSWRZ1c4oDCSUZkWbLyhFfyUw7AK/pub?gid=1375817865&single=true&output=csv'
  const now = new Date()
  const isOnAnnouncing = now > new Date('2022-10-23 15:30:00')
  const nAwardPerGroup = 5
  let nAwardToShow = 20

  let awardList = []
  let hasAwardError = false

  $: hasMoreAwardToShow = nAwardToShow < awardList.length
  $: groupedAward = awardList.slice(0, nAwardToShow).reduce((groups, award) => {
    if (groups.length) {
      const lastGroup = groups[groups.length - 1]
      if (lastGroup.awards.length < nAwardPerGroup) {
        lastGroup.awards.push(award)
        return groups
      }
    }

    const nGroups = groups.length
    const idStart = nGroups * nAwardPerGroup + 1
    let idEnd = (nGroups + 1) * nAwardPerGroup
    if (awardList.length < idEnd) {
      idEnd = awardList.length
    }
    let newId = `${idStart} ~ ${idEnd}`
    if (idEnd === idStart) {
      newId = `${idStart}`
    }
    groups.push({ id: newId, awards: [award]})
    return groups
  }, [])

  getAward()

  async function getAward () {
    try {
      const resp = await axios.get(awardEndpoint)
      // first line is header
      awardList = resp.data.split('\n').slice(1).map(id => id.trim())
    } catch {
      hasAwardError = true
    }
  }

  function showMoreAward () {
    nAwardToShow += nAwardPerGroup
  }
</script>
<svelte:head>
  <title>開獎！</title>
</svelte:head>
<style lang="scss">
.lottery {
  min-height: 100vh;
  background-image: url('/10v-points/bg/02.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  font-size: 2em;
  h1 {
    font-size: 2em;
  }
  &__qrcode {
    width: 100%;
    max-height: calc(100vh - 12em);
    object-fit: contain;
    object-position: top;
    margin-left: -1em;
    position: sticky;
    top: 2em;
  }
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
  &__awardRow {
    border-color: #6d6c3c;
    display: grid;
    grid-template-columns: 10rem 1fr;
  }
  &__id {
    color: #36381380;
    font-size: 1.5em;
  }
  &__award {
    font-size: 1.5em;
  }
  &__more {
    padding: 0.5rem 1rem;
    border: 2px solid #36381380;
    border-radius: 0.25rem;
    color: #363813;
    background: #fff;
  }
}
</style>
