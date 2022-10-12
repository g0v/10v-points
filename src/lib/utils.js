import { onMount } from 'svelte'
import { finishedMissions, hasAppliedLottery } from '$lib/stores'
import axios from 'axios'
import qs from 'qs'

// simple way to refresh local storage data
const dateNow = (new Date()).getDate()

export const g0vTokenKey = `10vpoints_${dateNow}`

export const finishedMissionKey = `10vpoints_mission_${dateNow}`
export const hasLotteryKey = `10vpoints_lottery_${dateNow}`

export function initStore () {
  onMount(() => {
    finishedMissions.set(initFinishedMissions())
    hasAppliedLottery.set(initHasLottery())
  })
}

export function initFinishedMissions () {
  try {
    return JSON.parse(localStorage.getItem(finishedMissionKey) || '[]')
  } catch {
    return []
  }
}

export function initHasLottery () {
  try {
    return !!localStorage.getItem(hasLotteryKey)
  } catch {
    return false
  }
}

export function makeId (length) {
  let result           = '';
  // const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // make it easier to remember
  const characters       = '0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
     if ((i - 2) % 3 === 0) {
      result += '-'
     }
   }
   if (result.endsWith('-')) {
    result = result.slice(0, -1)
   }
   return result;
}

export async function recordProgress (token, projectName) {
  const params = qs.stringify({
    'entry.1260665033': token,
    'entry.792614784': projectName 
  })
  try {
    await axios({
      method: 'POST',
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdWrIXSqex4TZIANiBdilCCjAvPjywdlPHNSYl3OfznIuKZWQ/formResponse',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params
    })
  } catch {
    // expected to fail <3
  }
  if (projectName === hasLotteryKey) {
    hasAppliedLottery.set(true)
    localStorage.setItem(hasLotteryKey, '1')
  }
}
