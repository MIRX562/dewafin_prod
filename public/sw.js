if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const b=e=>n(e,t),r={module:{uri:t},exports:c,require:b};s[t]=Promise.all(a.map((e=>r[e]||b(e)))).then((e=>(i(...e),c)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/AMMKyDNRWbgswXnJTUYby/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/AMMKyDNRWbgswXnJTUYby/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-7d9a6542b07888b3.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/1840-742fd2710abcb37b.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/2387-10ff7bd2ba25b503.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/3338-474434c5bcb12381.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/4159-2073c8110004f0bf.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/4694-737794e6fdafda4c.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/5250-ee7b05b751102bee.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/540-48e063346c1e8cb6.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/5468-9e4958c646a4e993.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/5902-cae3608815744c83.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/6288-7a852e8e2c7398de.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/6837-6c0474e71f6a0d5a.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/719-09257f05df3d0717.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/7681-00e8914d5f0b1f75.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/8500-f57e5feb9bc491d3.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/876-3d592a11936bae73.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/8903-b1094d764bd7f27b.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/8e1d74a4-78474b9286424020.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/9679-e5fbc7868a79ef59.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/9693-effa5661d8707caf.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/9970-65aa87990d7cabd3.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/9998-95d32ae2844bebea.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/asets/page-098aa9e020447163.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/dashboard/page-edc5c408575c906a.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/employees/page-0efbdf0042fadbad.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/files/page-f45f4dbc98ecc91d.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/layout-314a134758140dd5.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/logs/page-f1c9176addf5004d.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/products/page-030bbd9e6a8f149b.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/reports/%5Bslug%5D/page-c2ce63b067baafdd.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/reports/page-928a4054c2ad80ef.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/settings/page-28dacec617621cf2.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/supports/page-67c9f42e852e9bff.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/(main)/users/page-56a9500708d43c45.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/auth/error/page-35b04ced1bfa1765.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/auth/layout-8602c8a963bcd11b.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/auth/login/page-1cdee5cf6f0e2b0e.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/auth/new-password/page-793906913f790c09.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/auth/register/page-5e9d4f6b72604f9c.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/auth/reset/page-d7d0d27b88c37b1f.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/auth/verify-email/page-03691bf32e6cf9db.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/layout-60ce92a2ac38e30f.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/loading-edf9022cdbfab490.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/not-found-1c21fe0b062c351a.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/app/page-cc00ebdfb11d1fd8.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/fc2f6fa8-9c71eb4d9080a376.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/fd9d1056-5899e75d1de1f83e.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/main-78d4939e36d163ca.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/main-app-4e96d5bb5c4a7b4e.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8d1fb86a273c3266.js",revision:"AMMKyDNRWbgswXnJTUYby"},{url:"/_next/static/css/053aa6c2b84855c6.css",revision:"053aa6c2b84855c6"},{url:"/_next/static/css/b0b88a16e51333d4.css",revision:"b0b88a16e51333d4"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icon.png",revision:"5a43b37237f5d4d65c375412273b019b"},{url:"/logo.png",revision:"1241337b0951366625187ac6084c8dac"},{url:"/manifest.json",revision:"7639ff8cd374ccbcf1ec17a0953c2d67"},{url:"/pwa-icons/icon-192.png",revision:"b43480531cddd339613a633a0bfcc5aa"},{url:"/pwa-icons/icon-384.png",revision:"e90892bbb38a1ae1354eb250eda9a74d"},{url:"/pwa-icons/icon-512.png",revision:"ffe8f9fcdb747842b97b7ec4ee5f5385"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
