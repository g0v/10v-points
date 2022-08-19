export const g0vTokenKey = '10vpoints'

export const finishedMissionKey = '10vpoints_mission'

export function initFinishedMissions () {
    try {
        return JSON.parse(localStorage.getItem(finishedMissionKey) || '[]')
    } catch {
        return []
    }
}

export function makeId (length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
