importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/18b46fb4a21757505226.js",
    "revision": "e21bc095df8ef1542acb3b33983e1175"
  },
  {
    "url": "/_nuxt/4eac702d7661baf9a28c.js",
    "revision": "ff2c7b0b32ea994e0405587eb4a0b971"
  },
  {
    "url": "/_nuxt/88ec1ef62dcbbde0363d.js",
    "revision": "fa7212a754970a0cfc1b04e6926f56a6"
  },
  {
    "url": "/_nuxt/cee34cbc0e567914de8d.js",
    "revision": "4a392ac53eee4262dda991e1acc31651"
  },
  {
    "url": "/_nuxt/e052f18e693337eb7c30.js",
    "revision": "481fee791280420ce7ec6b03c565fb18"
  }
], {
  "cacheId": "honeythakuria",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
