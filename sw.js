importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/18b46fb4a21757505226.js",
    "revision": "e21bc095df8ef1542acb3b33983e1175"
  },
  {
    "url": "/_nuxt/62d89abb7ba4f3cea6bd.js",
    "revision": "042cea2d2564cd6c0d8309be3b02d660"
  },
  {
    "url": "/_nuxt/88ec1ef62dcbbde0363d.js",
    "revision": "fa7212a754970a0cfc1b04e6926f56a6"
  },
  {
    "url": "/_nuxt/e052f18e693337eb7c30.js",
    "revision": "481fee791280420ce7ec6b03c565fb18"
  },
  {
    "url": "/_nuxt/e93445f00664b55d6e5e.js",
    "revision": "3868fb220c6663e14e394fd4e01f9e91"
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
