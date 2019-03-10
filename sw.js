importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/18b46fb4a21757505226.js",
    "revision": "e21bc095df8ef1542acb3b33983e1175"
  },
  {
    "url": "/_nuxt/88ec1ef62dcbbde0363d.js",
    "revision": "fa7212a754970a0cfc1b04e6926f56a6"
  },
  {
    "url": "/_nuxt/c9c2850c55e607488950.js",
    "revision": "9e160cc8f786355a3b21e1562b2dc64c"
  },
  {
    "url": "/_nuxt/e052f18e693337eb7c30.js",
    "revision": "481fee791280420ce7ec6b03c565fb18"
  },
  {
    "url": "/_nuxt/eb4986b4e00945256ba9.js",
    "revision": "b250e63f14521323e624e2c030683ad8"
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
