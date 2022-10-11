<script>
  import { onMount, tick } from 'svelte'
  import { page } from '$app/stores'
  import ProgressInfo from '$lib/components/ProgressInfo.svelte'
  import { finishedMissions, isAllMissionsFinished } from '$lib/stores'
  import { makeId, g0vTokenKey, finishedMissionKey, recordProgress, initStore } from '$lib/utils'
  import partnerMap from '$lib/assets/partners.json';
  const partner = partnerMap.find(partner => partner.title === $page.params.partner)
  const pageTitle = partner?.title || '？'
  const bgImg = `/10v-points/bg/0${Math.round(Math.random() * 3) + 1}.png`

  let g0vToken = ''

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
  let isLiveStarted = false
  let isTaskDoneOnInit = true
  $: isTaskDone = $finishedMissions.includes(pageTitle)
  $: isTaskDoneNow = !isTaskDoneOnInit && isTaskDone
  $: isNextTipVisible = isTaskDoneNow && !$isAllMissionsFinished

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
    }, 10000)
  }

  function markAsDone () {
    if (!$finishedMissions.includes(pageTitle)) {
      finishedMissions.set([...$finishedMissions, pageTitle])
      recordProgress(g0vToken, pageTitle)
    }
    localStorage.setItem(finishedMissionKey, JSON.stringify($finishedMissions))
  }

  function handleCallbackClicked () {
    if (partner?.callbackType === '單程票') {
      setTimeout(() => {
        markAsDone()
      }, 5000)
    }
  }

  initStore()

  onMount(() => {
    const wrapper = document.querySelector('#partner')
    iframeSize = {
      width: (wrapper?.clientWidth || 480) - 32,
      height: window.innerHeight * 0.8
    }

    g0vToken = localStorage.getItem(g0vTokenKey) || ''
    if (!g0vToken) {
      g0vToken = makeId(9)
      localStorage.setItem(g0vTokenKey, g0vToken)
    }

    callback.searchParams.set(g0vTokenKey, g0vToken)
    // not sure if there's better way to trigger reactivity XD
    callback = callback

    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.get(g0vTokenKey) === g0vToken) {
      markAsDone()
    }

    isTaskDoneOnInit = $finishedMissions.includes(pageTitle)
  })
</script>

<svelte:head>
  <title>{pageTitle} x ASSEMBLE!專案者聯盟！</title>
</svelte:head>
<template lang="pug">
  .partner__bg.fixed.cover.bg-bottom(style="background-image: url('{bgImg}')")
  #partner.partner.mw7.mt4.mb5.ph3.center.relative.z-1
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
              span.black &nbsp;已完成！
            +if('!$isAllMissionsFinished')
              p.f3.tc.lh-copy 只差一點點，來尋找更多星球吧！
        .mv3
          .partner__cover.center
            .aspect-ratio.aspect-ratio--1x1.center
              .aspect-ratio--object.no-repeat.cover(
                style="background-image: url('{coverImg}')"
              )
                .flex.flex-column.justify-center.items-center.h-100
                  .partner__desp.ph3.pv4
                    +each('description as line')
                      p.lh-copy.mt0.tc.white.f4 {line}
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
  .partner__next.fixed.bottom-0.left-0.right-0.pa3.z-1(class="{isNextTipVisible ? 'o-100': 'o-0'}")
    p.f4.tc.lh-copy.mv0 只差一點點，來尋找更多星球吧！
  +if('isAllMissionsFinished')
    .partner__done.pa3.relative.z-1
      ProgressInfo
</template>
<style lang="scss">
.partner {
  &__cover {
    max-width: 26rem;
    .aspect-ratio--object > div {
      background-color: #0004;
    }
    p {
      // text-shadow: 0 0 5px black;
      margin-bottom: 0;
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }
  &__desp {
    // backdrop-filter: grayscale(0.2) blur(4px);
    backdrop-filter: brightness(0.8) grayscale(0.5) contrast(0.8) blur(3px);
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

  &__bg {
    filter: hue-rotate(120deg) contrast(0.5) opacity(0.2) blur(6px);
    bottom: -35vh;
    left: 0px;
    height: 120vh;
    width: 100vw;
    z-index: 0;
  }

  &__next {
    backdrop-filter: brightness(0.8) grayscale(0.5) contrast(0.8) blur(3px);
    transition: 300ms ease-in-out;
  }
}
</style>