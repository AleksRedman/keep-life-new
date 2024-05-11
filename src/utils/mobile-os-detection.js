/**
 * # Checks whether running on a mobile device according to browser data.
 * Functions (each returns bool):
 * Android
 * BlackBerry
 * iPhone
 * iPod
 * iPad
 * iOS
 * Opera
 * Windows
 * Kindle Fire
 * any
 * @example
 * isMobOS.Android() => true/false
 * isMobOS.iOS() => true/false
 * isMobOS.any() => true/false
 * isMobOS.KindleFire() => true/false
 * isMobOS.BlackBerry() => true/false
 */

const isMobOS = {
  getUserAgent: () => {
    return navigator.userAgent
  },
  Android: () => {
    return /Android/i.test(isMobOS.getUserAgent()) && !isMobOS.Windows()
  },
  BlackBerry: () => {
    return /BlackBerry|BB10|PlayBook/i.test(isMobOS.getUserAgent())
  },
  iPhone: () => {
    return /iPhone/i.test(isMobOS.getUserAgent()) && !isMobOS.iPad() && !isMobOS.Windows()
  },
  iPod: () => {
    return /iPod/i.test(isMobOS.getUserAgent())
  },
  iPad: () => {
    return /iPad/i.test(isMobOS.getUserAgent())
  },
  iPadOS: () => {
    return navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)
  },
  iOS: () => {
    return (isMobOS.iPad() || isMobOS.iPod() || isMobOS.iPhone() || isMobOS.iPadOS())
  },
  Opera: () => {
    return /Opera Mini/i.test(isMobOS.getUserAgent())
  },
  Windows: () => {
    return /Windows Phone|IEMobile|WPDesktop/i.test(isMobOS.getUserAgent())
  },
  KindleFire: () => {
    return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(isMobOS.getUserAgent())
  },
  any: () => {
    return (isMobOS.Android() || isMobOS.BlackBerry() || isMobOS.iOS() || isMobOS.Opera() || isMobOS.Windows())
  }
}

export default isMobOS
