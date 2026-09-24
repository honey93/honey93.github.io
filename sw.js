importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d00bac.js",
    "revision": "a3f5584ad651b5ed88fa07c8ebe7e371"
  },
  {
    "url": "/_nuxt/7e493da.js",
    "revision": "483b5512c4e0c2dbda70d855d0d24c87"
  },
  {
    "url": "/_nuxt/894c086.js",
    "revision": "43f072e77321e383db9245d993a104ea"
  },
  {
    "url": "/_nuxt/a08f4f5.js",
    "revision": "7196e56a392b7b3e1288c4f642f58c71"
  },
  {
    "url": "/_nuxt/ac10957.js",
    "revision": "74b49756b149f234322927b8608e7e46"
  },
  {
    "url": "/_nuxt/ba3168c.js",
    "revision": "c54a917be367788776e99c20268fb142"
  },
  {
    "url": "/_nuxt/bcf3093.js",
    "revision": "19e15634de6f009514381c6cb8410b7d"
  },
  {
    "url": "/_nuxt/bfd3568.js",
    "revision": "06632490c91a4a7a1ad106c63abeb907"
  },
  {
    "url": "/_nuxt/ca30637.js",
    "revision": "207afb542b6cf0abf654d7e202ae31ad"
  },
  {
    "url": "/_nuxt/f8435f1.js",
    "revision": "aed082bd618966feb8b57b8e3b2f2a7d"
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
