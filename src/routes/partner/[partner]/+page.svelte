<script>
  import { onMount, tick } from 'svelte'
  import { page } from '$app/stores';
  import { makeId, g0vTokenKey, finishedMissionKey, initFinishedMissions } from '$lib/utils'
  import partnerMap from '$lib/assets/partners.json';
  const partner = partnerMap.find(partner => partner.title === $page.params.partner)
  const pageTitle = partner?.title || '？'

  let g0vToken = ''
  let finisedMissions = []

  const description = (partner?.description || '').split('\n')
  // const coverImg = `/10v-points${partner?.coverImg}`
  const coverImg = partner?.coverImg
  let callback = new URL('https://10th.g0v.tw/')

  try {
    callback = new URL(partner?.callbackUrl || '')
  } catch {
    // just use default
  }

  let iframeSize = {}
  let isTaskDone = false
  let isLiveStarted = false

  async function openIframe () {
    isLiveStarted = true

    await tick
    const iframeWrapper = document.querySelector('#partner__embedded')
    if (iframeWrapper) {
      iframeWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    // mark as done automatically
    setTimeout(() => {
      markAsDone()
    }, 5000)
  }

  function markAsDone () {
    if (!finisedMissions.includes(pageTitle)) {
      finisedMissions.push(pageTitle)
    }
    localStorage.setItem(finishedMissionKey, JSON.stringify(finisedMissions))
    isTaskDone = true
  }

  function handleCallbackClicked () {
    if (partner?.callbackType === '單程票') {
      setTimeout(() => {
        markAsDone()
      }, 5000)
    }
  }

  onMount(() => {
    const wrapper = document.querySelector('#partner')
    iframeSize = {
      width: (wrapper?.clientWidth || 480) - 32,
      height: window.innerHeight * 0.8
    }

    g0vToken = localStorage.getItem(g0vTokenKey) || ''
    if (!g0vToken) {
      g0vToken = makeId(10)
      localStorage.setItem(g0vTokenKey, g0vToken)
    }

    finisedMissions = initFinishedMissions()
    isTaskDone = finisedMissions.includes(pageTitle)

    callback.searchParams.set(g0vTokenKey, g0vToken)
    // not sure if there's better way to trigger reactivity XD
    callback = callback

    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.get(g0vTokenKey) === g0vToken) {
      markAsDone()
    }
  })
</script>

<svelte:head>
  <title>{pageTitle} x ASSEMBLE!專案者聯盟！</title>
</svelte:head>
<template lang="pug">
  #partner.partner.mw7.mv4.ph3.center
    +if('!partner?.title')
      h1.f1.tc.lh-title.mb4.mt5 找不到「{$page.params.partner}」呦 🙄 🙄 🙄
      p.f3.dark-gray.tc 是誰帶你來這裡的呢？
      +else()
        +if('!isTaskDone')
          h1.f1.fw7.tc.mt5 {pageTitle}
          +else()
            h1.f1.fw7.mt5.tc
              i.fa-solid.fa-check.mr2
              span.gray {pageTitle}
              span.black 已完成！
        .mv3
          .partner__cover.center
            .aspect-ratio.aspect-ratio--1x1.center
              .aspect-ratio--object.no-repeat.cover(
                style="background-image: url('{coverImg}')"
              )
                .flex.flex-column.justify-center.items-center.h-100
                  +each('description as line')
                    p.lh-copy.mb1.mt0.tc.white {line}
        .partner__cta.tc
          +if('partner.callbackType === "單程直播票"')
            button(on:click="{openIframe}")
              i.fa-solid.fa-earth-asia.f5.mr2
              | 開啟專案網頁
            +else()
              a(role="button" href="{callback}" target="_blank" ref="noopener" on:click="{handleCallbackClicked}")
                i.fa-solid.fa-hand-spock.f5.mr2
                | 開啟專案網頁
          .flex.justify-center
            .partner__urlLabel.br2.bg-light-gray.ph3.pv2.f6.dark-gray {partner.callbackUrl}
        +if('isLiveStarted')
          #partner__embedded.partner__embedded.mv4
            iframe(height="{iframeSize.height}" width="{iframeSize.width}" src="{callback}")
</template>
<style lang="scss">
.partner {
  &__cover {
    max-width: 26rem;
    .aspect-ratio--object > div {
      background-color: #0008;
    }
    p {
      text-shadow: 0 0 5px black;
    }
  }
  &__cta {
    button, a {
      height: 2.5rem;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      background:  #FBF1A9 ;
      border-radius: 0.125rem;
      border: none;
      font-weight: 700;
      width: 10rem;
      margin: 0 auto;
      color: black;
      text-decoration: none;
    }
  }

  &__urlLabel {
    margin-top: 0.75rem;
    position: relative;
    &:before {
      position: absolute;
      top: -0.5rem;
      left: 50%;
      margin-left: -0.375rem;
      content: " ";
      border-right: white 0.375rem solid;
      border-left: white 0.375rem solid;
      border-bottom: #eee 0.5rem solid;
    }
  }

  &__embedded {
    border: none;
  }
}
</style>