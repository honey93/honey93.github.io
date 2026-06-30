importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/137cfb0.js",
    "revision": "f81677b3e72a6d37c6744ffbc91e1472"
  },
  {
    "url": "/_nuxt/5f13180.js",
    "revision": "354b630c9f700fb15f2dd8bb5985e35c"
  },
  {
    "url": "/_nuxt/68fe295.js",
    "revision": "6dcf805a47a5df417f723c0a07f719e1"
  },
  {
    "url": "/_nuxt/9e13221.js",
    "revision": "26ecfef44ed5213585eea04e57bbee9a"
  },
  {
    "url": "/_nuxt/a5a8ec4.js",
    "revision": "c4ab13b44a9aed9fb9cb8ac1be9b8f26"
  },
  {
    "url": "/_nuxt/ae5665f.js",
    "revision": "f5f0efc2775ce76303c9d361bb9e59a4"
  },
  {
    "url": "/_nuxt/af314ee.js",
    "revision": "ddb5bc38ad73d00de67a723251ef2820"
  },
  {
    "url": "/_nuxt/bdc1d8b.js",
    "revision": "9f34c4c48259dbf7163eaaa2c7a206bc"
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
