if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise(async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()})),s.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},s=(s,n)=>{Promise.all(s.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(s)};self.define=(s,a,r)=>{n[s]||(n[s]=Promise.resolve().then(()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}})).then(e=>{const s=r(...e);return n.default||(n.default=s),n})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.021110c6337ab67a3e8e.js",revision:"d5d51933ae1259dd422a0564d42a8b24"},{url:"/_next/static/chunks/framework.cdbdac0a36200f52203c.js",revision:"56af6501d39d0d407e4004733ea3ef34"},{url:"/_next/static/chunks/main-f8748ee3fc545939335c.js",revision:"204f83dd0014a2efcce74d9e33130ca8"},{url:"/_next/static/chunks/pages/_app-1290e84fce5fdc103ffb.js",revision:"50d354cd7fafe54b39905143717204cd"},{url:"/_next/static/chunks/pages/_error-08795e397ba2a7aa0b7b.js",revision:"61483c6e9b2433d1b87721995d4f0861"},{url:"/_next/static/chunks/pages/index-2837e2ce323c7568f177.js",revision:"4e47b39008881e40a500610fed18d77a"},{url:"/_next/static/chunks/polyfills-36bde18dcfde0c144be5.js",revision:"3c5b148baecf222e205dfe1cb1588bd6"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/eMla9qqed3YLGLbVHeaJs/_buildManifest.js",revision:"17b864d7bd665178dbaedc84e381d52f"},{url:"/_next/static/eMla9qqed3YLGLbVHeaJs/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/icons/android-chrome-192x192.png",revision:"7b0bd67f4124b377026ad0522fa7649d"},{url:"/icons/apple-touch-icon.png",revision:"9ef0cd8a7a7d640b207558e8a9b254c2"},{url:"/icons/favicon.ico",revision:"1913674859d70381b11ab1d398839359"},{url:"/icons/icon-512x512.png",revision:"1715680c81be4002ee18c3458a98ba78"},{url:"/manifest.json",revision:"d8f1b264fbc1ad4e016ba5141a20d9a0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
