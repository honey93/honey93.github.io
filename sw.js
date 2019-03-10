importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/858a8a693ccb09c72ebf.js",
    "revision": "724b997cb0c84a18fab66ef6bbb2b3a9"
  },
  {
    "url": "/_nuxt/b3bf4d7200712560425e.js",
    "revision": "e368818845f84cf51fb62da5890a3b4f"
  },
  {
    "url": "/_nuxt/d10ad47919d291715c2c.js",
    "revision": "1456ce3e12b9fd96d426903d2e6a2003"
  },
  {
    "url": "/_nuxt/e5d95e4f4a3ee005a50a.js",
    "revision": "74e21bb3fe43b228cd3f0a6158dbd45c"
  },
  {
    "url": "/_nuxt/f66f455eedea91f02596.js",
    "revision": "6536b3b83fb0b252c60fce4a485484bb"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
