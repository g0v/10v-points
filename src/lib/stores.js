import { writable, derived } from 'svelte/store'
import partnerRawList from '$lib/assets/partners.json';

export const finishedMissions = writable([])

export const hasAppliedLottery = writable(false)

export const partnerList = derived(finishedMissions, $finishedMissions => {
  return partnerRawList.map((partner) => {
    return {
      ...partner,
      description: partner.description.split('\n'),
      link: `/10v-points/partner/${partner.title}`,
      isFinished: $finishedMissions.includes(partner.title)
    }
  })
})

export const isAllMissionsFinished = derived(partnerList, $partnerList => {
  return $partnerList.every(partner => partner.isFinished)
})
