/* globals self */
import React from 'react'
import { notification, Button, message } from 'antd'

const updateStatus = () => {
  if (navigator.onLine) {
    message.warning('Your connection is back')
  } else {
    message.warning('You are offline now')
  }
}

window.addEventListener('offline', updateStatus)
window.addEventListener('online', updateStatus)

window.addEventListener('sw.updatefound', e => {
  console.log('sw.updatefound') // TODO: *** WIP testing ***
})

window.addEventListener('sw.updated', e => {
  console.log('sw.updated') // TODO: *** WIP testing ***
  const reloadSW = async () => {
    const worker = e.detail && e.detail.waiting
    if (!worker) {
      return Promise.resolve()
    }

    await new Promise((resolve, reject) => {
      const channel = new self.MessageChannel() // eslint-disable-line
      channel.port1.onmessage = (event) => {
        if (event.data.error) {
          reject(event.data.error)
        } else {
          resolve(event.data)
        }
      }
      worker.postMessage({ type: 'skip-waiting' }, [channel.port2])
    })

    window.location.reload(true)
    return true
  }
  // const key = `open${Date.now()}`
  // const btn = (
  //   <Button
  //     type='primary'
  //     onClick={() => {
  //       notification.close(key)
  //       if (typeof window.localStorage !== 'undefined') {
  //         window.localStorage.clear()
  //       }
  //       reloadSW()
  //     }}
  //   >
  //     Refresh
  //   </Button>
  // )

  // notification.open({
  //   duration: 0,
  //   message: 'An update to Keep Life is available.',
  //   description: 'Please press refresh to reload the application.',
  //   btn,
  //   key,
  //   onClose: async () => {}
  // })

  if (typeof window.localStorage !== 'undefined') {
    window.localStorage.clear()
  }
  reloadSW()
})

// TODO: test mode *** WIP ***
document.addEventListener("DOMContentLoaded", (e) => { 
  //do work
  const urlParams = new URLSearchParams(window.location.search)
  setTimeout(async () => {
    if (urlParams.get('clear_cache') && 'serviceWorker' in navigator) {
      console.log('=== clear_cache-start ===')
      urlParams.delete('clear_cache')
      window.history.replaceState({}, '', `${window.location.pathname}`)

      await (await navigator.serviceWorker.getRegistrations())[0].unregister()

      console.log('trying redirect do')
      window.location.replace(window.location.href)
    }
  }, 2000)
})
