if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192Logo.png",revision:"778d3c43c538fa6717a08d76f0bba080"},{url:"/512Logo.png",revision:"00c280da820832a7bd2c63e9a593b664"},{url:"/Logo.png",revision:"d73c9c390d16e3c41d7e8c29ad3ea024"},{url:"/_next/static/AlgCjWH1yMiAxqShid5vQ/_buildManifest.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/AlgCjWH1yMiAxqShid5vQ/_ssgManifest.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/571-20b0eeab311e5a482c46.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/614-b4f35c4246109cc9d9f4.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/669-02907e4346f50baf3fc9.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/860-2f53013420dafcad5524.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/main-e41c865d5f74e97a4b68.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/pages/404-95018fc0b9b56754486c.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/pages/_app-91b57f296ce7f6cb58b2.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/pages/about-a100d799e0a95ed03a9b.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/pages/contact-b77286f474bf078ab92f.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/pages/index-de49ba2ce7e1ba676dcb.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/pages/portfolio-1af4e84321d4eeb3ee46.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/chunks/webpack-0cb069610457c13661fc.js",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/_next/static/css/68adce3959735c467f8a.css",revision:"AlgCjWH1yMiAxqShid5vQ"},{url:"/cv/AndresCazares_CV_EN.pdf",revision:"843767a94caf11b993281814da8feadb"},{url:"/cv/AndresCazares_CV_ES.pdf",revision:"d29ed3755acaa65c9082d304e3d1bdc6"},{url:"/favicon.ico",revision:"47dd0eee2529ae1a896929bcbdf83086"},{url:"/images/404.svg",revision:"403e44439d340bdf32d8b553323a0b5b"},{url:"/images/Background.png",revision:"1371227a85a61763eda8e754aa57cc1b"},{url:"/images/Profile menu.png",revision:"1c44c53b430bee3727a1b3c8147c7e50"},{url:"/images/bgerror.jpg",revision:"e315898aaa35d5e366bab0ec95ae45ab"},{url:"/images/cards/apis.svg",revision:"7df5728a89a20cb34a2669ea3c85ead0"},{url:"/images/cards/asmpc.svg",revision:"11d5736574906af35d3416fe76421bdb"},{url:"/images/cards/cdc.svg",revision:"85b32a40afa110d2cb276e926a3f819e"},{url:"/images/cards/chat.svg",revision:"678e6640363a01f60da393fc29524281"},{url:"/images/cards/desktop.svg",revision:"5d047e14b6579972e4c8cd742f49f232"},{url:"/images/cards/ffxiv.svg",revision:"a2efa6fb31b0739ef4e5bbed083ad2e7"},{url:"/images/cards/mobile.svg",revision:"3971c158b6aa9358d07107fa9a0b6916"},{url:"/images/cards/personalblog.svg",revision:"4b20d2c7027d65668abb997637d94a6f"},{url:"/images/cards/phpblog.svg",revision:"31d554b47fa92370a8a93bebe7c97809"},{url:"/images/cards/portfolio.svg",revision:"114cedd5d6eec7e8e316ed06cd078ce6"},{url:"/images/cards/strapi.svg",revision:"23a6538cf9568e3070e49c805c08b9de"},{url:"/images/cards/videogame.svg",revision:"286e1e0c62ab6ee9822ee788712fd578"},{url:"/images/cards/weather.svg",revision:"9c2fe132928566e8e48f0dbeef8f0fc7"},{url:"/images/cards/web.svg",revision:"f809a7142930d61c6925a1debd756273"},{url:"/logo.svg",revision:"2b8ae2c4aab43ebaf586027fefe0101c"},{url:"/manifest.json",revision:"a32f99691febf515d3e7c07b59c2e277"},{url:"/tecnologies/angular.svg",revision:"48ae79d99d69739a8022593da1ece32f"},{url:"/tecnologies/bash.svg",revision:"77d4b13c6da0b531c302fd92fd878d75"},{url:"/tecnologies/bootstrap.svg",revision:"ffded2381d25dd906406d6e07f91dea5"},{url:"/tecnologies/css.svg",revision:"16821089b5a3e74819b51bf82b4c7d8f"},{url:"/tecnologies/database.svg",revision:"d8123bf30297afd55ab0918835dd1ea1"},{url:"/tecnologies/django.svg",revision:"d276d807e6850de12af6331ba4c2cc75"},{url:"/tecnologies/docker.svg",revision:"38aa10b4af21a51116a9e1e200388be2"},{url:"/tecnologies/drf.svg",revision:"caed588a60411ea26d498960cb7b0a33"},{url:"/tecnologies/express.svg",revision:"427c685dd4cccecce0fc30db67c0bbda"},{url:"/tecnologies/firebase.svg",revision:"6caacd1ac451f5d5c012ebabcb25d071"},{url:"/tecnologies/git.svg",revision:"68fe4fb0ebd4335de8e49ccee72db34d"},{url:"/tecnologies/graphql.svg",revision:"102adadc1dd7fce20217da99e0f85542"},{url:"/tecnologies/html.svg",revision:"14846d953f2e03afe7e1c3aefb14e0b9"},{url:"/tecnologies/jest.svg",revision:"e64265e9b5d0d6bd49dc9036a79a9cc8"},{url:"/tecnologies/js.svg",revision:"f6967c81822f43ac6ae2fbd1b915c17e"},{url:"/tecnologies/laravel.svg",revision:"2fa5a6b6d7ce810d2b67ebf6df87fcc8"},{url:"/tecnologies/mongo.svg",revision:"c2a864c96dbfc449ec45dd7ac4438628"},{url:"/tecnologies/nestjs.svg",revision:"c11762aa94dd14bda83c359fc41aab6a"},{url:"/tecnologies/node.svg",revision:"0811c32d2b6d01d24ab54ba6443dcb71"},{url:"/tecnologies/php.svg",revision:"44403f1eece67c892a0c6a6791da5ad4"},{url:"/tecnologies/python.svg",revision:"0b948ab5dd3f9e988cd9130da860408f"},{url:"/tecnologies/react.svg",revision:"1d99931b40be38e5ea72ff0767275c26"},{url:"/tecnologies/redux.svg",revision:"85772647236e76b8e772c14c092a28ac"},{url:"/tecnologies/rest.svg",revision:"e82ea9c4960d7e9dc5c7f8fbaba4b053"},{url:"/tecnologies/tailwind.svg",revision:"bb72238ae606c6a04c140445b6f54b25"},{url:"/tecnologies/ts.svg",revision:"9e8bfce4de1e3508a98fb887c593c11b"},{url:"/tecnologies/vue.svg",revision:"60dfaadbbd65a730821eb0e7b5974020"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
