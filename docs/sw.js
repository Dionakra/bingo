if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const c=e=>s(e,o),t={module:{uri:o},exports:d,require:c};i[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(n(...e),d)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.be5c570b.js",revision:null},{url:"assets/index.e2aeda79.css",revision:null},{url:"assets/vendor.1057d283.js",revision:null},{url:"index.html",revision:"fae519de6965cc3e34435bc755dd6525"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"bingo.svg",revision:"1596f89a4bf96bc8d2ec308850358578"},{url:"favicon.ico",revision:"6f821d32ac9661f2c62a4ddcd204a157"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"apple-touch-icon.png",revision:"e759b128db7bcdb439b1596253c4525b"},{url:"android-chrome-192x192.png",revision:"79ecfd0cf3919de8358c59fa6a92e9af"},{url:"android-chrome-512x512.png",revision:"389ef3df57ce2eab910d0854a7dc88be"},{url:"manifest.webmanifest",revision:"f2f44ee4f9718a34f1171533a45dfe29"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
