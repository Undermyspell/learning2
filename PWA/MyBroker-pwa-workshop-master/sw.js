// const filesToCache = [
//     "/",
//     "index.html"
// ]

// const staticCacheName = "my-broker-v1";

// self.addEventListener("install", event => {
//     event.waitUntil(
//         caches.open(staticCacheName).then(cache => {
//             cache.addAll(filesToCache);
//         })
//     );
// });

// self.addEventListener("fetch", event => {
//     event.respondWith(
//         caches.match(event.request).then(response => {
//             return response || fetch(event.request);
//         })
//     );
// });

importScripts("/libs/workbox-v4.3.1/workbox-sw.js");

workbox.setConfig({
    modulePathPrefix: "/libs/workbox-v4.3.1/"
});

if(workbox) {
    console.log("yay.... 🤴");
} else {
    console.log("nay.... 🤬");
}

workbox.precaching.precacheAndRoute([
  {
    "url": "commands.txt",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style.css",
    "revision": "face1745dbf1ed82ec2dee9d52732a76"
  },
  {
    "url": "global.d.ts",
    "revision": "ca83a92c9d37aac35cb35e5f6af6bdb1"
  },
  {
    "url": "images/checkmark.png",
    "revision": "48cd64bc227221927e23df2ab21596d6"
  },
  {
    "url": "images/down.png",
    "revision": "0415d8b10bed8ee1e64bef2fd911d409"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "fa9516f87cf941a01c905e4252eb2086"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "75b4bb6e6206a554bf733dbfab3d3d6e"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "e1a1ec97331d94ceaa896ba25d88b3de"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "dfb5549b8ec90229678e85bc8bb26be2"
  },
  {
    "url": "images/icons/icon-256x256.png",
    "revision": "d8497689e36ce4653aabdc37f3dc4855"
  },
  {
    "url": "images/icons/Thumbs.db",
    "revision": "b5395c3c1d494dc0b164f0a65e76fb4f"
  },
  {
    "url": "images/notification-flat.png",
    "revision": "35097c98de391ebf931f21010fd18842"
  },
  {
    "url": "images/Thumbs.db",
    "revision": "ce2136387a26a2fb6510f84361020979"
  },
  {
    "url": "images/xmark.png",
    "revision": "1d4e39b7349eb6ec1575dcfe6521f1a0"
  },
  {
    "url": "index.html",
    "revision": "2118b66e4a1deed11c88c60d59e119f6"
  },
  {
    "url": "js/app.js",
    "revision": "fd93ba78130766b7a3f7e1f840a2f1a5"
  },
  {
    "url": "js/init.js",
    "revision": "9018cf4461aaec97838f658c5750a1b1"
  },
  {
    "url": "jsconfig.json",
    "revision": "6db3d43ce6e1d89a61e9adf9f90ea303"
  },
  {
    "url": "libs/jquery/AUTHORS.txt",
    "revision": "97c4a0be03b003fe77359ededabf27b9"
  },
  {
    "url": "libs/jquery/bower.json",
    "revision": "5dc00f10d3c2752e1a1d6f27abbc2062"
  },
  {
    "url": "libs/jquery/dist/jquery.js",
    "revision": "888d4551b8db7c41cda28d95e494f998"
  },
  {
    "url": "libs/jquery/dist/jquery.min.js",
    "revision": "2f6b11a7e914718e0290410e85366fe9"
  },
  {
    "url": "libs/jquery/external/sizzle/dist/sizzle.js",
    "revision": "a4f7c8194841b6ad4dece3dd6e2be377"
  },
  {
    "url": "libs/jquery/external/sizzle/dist/sizzle.min.js",
    "revision": "d06fe275a34e40ee60c8bad0320c4ecf"
  },
  {
    "url": "libs/jquery/external/sizzle/LICENSE.txt",
    "revision": "e0b826447077aed12f699bc38c726a44"
  },
  {
    "url": "libs/jquery/LICENSE.txt",
    "revision": "dbcc2c190962327ad79a758ce6bea6f8"
  },
  {
    "url": "libs/jquery/package.json",
    "revision": "de8e006a9a9a90d040611c5bd9f06080"
  },
  {
    "url": "libs/jquery/README.md",
    "revision": "2394bc300f78e44db4a474db3573d22c"
  },
  {
    "url": "libs/jquery/src/ajax.js",
    "revision": "747944372de9d97e9071969f250e9e44"
  },
  {
    "url": "libs/jquery/src/ajax/jsonp.js",
    "revision": "95d9482e556e5701ca9d889a68858fc9"
  },
  {
    "url": "libs/jquery/src/ajax/load.js",
    "revision": "ab63d84585677b864a52b6d02846463a"
  },
  {
    "url": "libs/jquery/src/ajax/parseJSON.js",
    "revision": "3aaed89437b36b783c89d7cb02f8e670"
  },
  {
    "url": "libs/jquery/src/ajax/parseXML.js",
    "revision": "43047344e9d107b99231f003f59e7834"
  },
  {
    "url": "libs/jquery/src/ajax/script.js",
    "revision": "50edabab65f3a6a0519c06d61bf0e97f"
  },
  {
    "url": "libs/jquery/src/ajax/var/location.js",
    "revision": "96dcd9c96a2370b4c0f75bab9a702b27"
  },
  {
    "url": "libs/jquery/src/ajax/var/nonce.js",
    "revision": "4f8487d5117f0da0b7f8207deb27a58f"
  },
  {
    "url": "libs/jquery/src/ajax/var/rquery.js",
    "revision": "e1b135dd80709d2cb227fbc4ecd43788"
  },
  {
    "url": "libs/jquery/src/ajax/xhr.js",
    "revision": "df1542b17f73bdd4f77a1f75a1dedb46"
  },
  {
    "url": "libs/jquery/src/attributes.js",
    "revision": "984bb80957d756f97442789d8fd4b89c"
  },
  {
    "url": "libs/jquery/src/attributes/attr.js",
    "revision": "4514d73d9b57a3d6e2260a0e746a7465"
  },
  {
    "url": "libs/jquery/src/attributes/classes.js",
    "revision": "23405ec852b1bf1257edab2181804e0b"
  },
  {
    "url": "libs/jquery/src/attributes/prop.js",
    "revision": "bc1f1fbb84eba0a863be492ce338204b"
  },
  {
    "url": "libs/jquery/src/attributes/support.js",
    "revision": "a023c6895792e89a729ba1c045099582"
  },
  {
    "url": "libs/jquery/src/attributes/val.js",
    "revision": "88cbf8a82f57d1eb470f5cd2ed623f55"
  },
  {
    "url": "libs/jquery/src/callbacks.js",
    "revision": "d68e258c63c56e40e5202bb59b6c8523"
  },
  {
    "url": "libs/jquery/src/core.js",
    "revision": "371376c2277d42b8496856530478c194"
  },
  {
    "url": "libs/jquery/src/core/access.js",
    "revision": "bb8968d0b5011127b9de28e721be14b6"
  },
  {
    "url": "libs/jquery/src/core/init.js",
    "revision": "6b58cc1d73445cae7b46da28faaabb15"
  },
  {
    "url": "libs/jquery/src/core/parseHTML.js",
    "revision": "31028e12025d5d315184156f309cc84f"
  },
  {
    "url": "libs/jquery/src/core/ready.js",
    "revision": "b3f9d0fc3f15fb45f43e8516c7cd3991"
  },
  {
    "url": "libs/jquery/src/core/var/rsingleTag.js",
    "revision": "1605e8367e5ecb18cfcf2ac525344e05"
  },
  {
    "url": "libs/jquery/src/css.js",
    "revision": "b52bc30ed34297c2ca1236a10a508243"
  },
  {
    "url": "libs/jquery/src/css/addGetHookIf.js",
    "revision": "d203595672d6d73ea359513bfc9e810b"
  },
  {
    "url": "libs/jquery/src/css/adjustCSS.js",
    "revision": "87b61681005e4cee7313d074163265d8"
  },
  {
    "url": "libs/jquery/src/css/curCSS.js",
    "revision": "eb3d5e38dbfeadae32df2adc8b916cf3"
  },
  {
    "url": "libs/jquery/src/css/defaultDisplay.js",
    "revision": "b41e41572ced6b1fb3fcf50e683350fa"
  },
  {
    "url": "libs/jquery/src/css/hiddenVisibleSelectors.js",
    "revision": "a028a8798ce5a034319d37a344ae5e1d"
  },
  {
    "url": "libs/jquery/src/css/showHide.js",
    "revision": "c390547b4abf2f2a64d8e1eec9222fd0"
  },
  {
    "url": "libs/jquery/src/css/support.js",
    "revision": "ed0d2a2b7091ff06faa099044b1ae171"
  },
  {
    "url": "libs/jquery/src/css/var/cssExpand.js",
    "revision": "2d0c2488e227d7ddf03070177010ba2b"
  },
  {
    "url": "libs/jquery/src/css/var/getStyles.js",
    "revision": "487f566ba81e296058a3cf0e4c1fd848"
  },
  {
    "url": "libs/jquery/src/css/var/isHidden.js",
    "revision": "e85d68d7828370356993dffa851f8c65"
  },
  {
    "url": "libs/jquery/src/css/var/rmargin.js",
    "revision": "ec4a0634e53a877648ba57184c874832"
  },
  {
    "url": "libs/jquery/src/css/var/rnumnonpx.js",
    "revision": "f21d4da42e5f09d9364c36744daef0d0"
  },
  {
    "url": "libs/jquery/src/css/var/swap.js",
    "revision": "21dd1612fb06c728bcdecf8c2e2f048f"
  },
  {
    "url": "libs/jquery/src/data.js",
    "revision": "e616d8c94605fbfa761b344f67b9667f"
  },
  {
    "url": "libs/jquery/src/data/Data.js",
    "revision": "b1e2abd2baf854606656c6e6522768c3"
  },
  {
    "url": "libs/jquery/src/data/var/acceptData.js",
    "revision": "e41e54bda5a9e66c2120cabcc71a6365"
  },
  {
    "url": "libs/jquery/src/data/var/dataPriv.js",
    "revision": "a1ba1d6a68b8f5d4e8f30f4b51dd1770"
  },
  {
    "url": "libs/jquery/src/data/var/dataUser.js",
    "revision": "a1ba1d6a68b8f5d4e8f30f4b51dd1770"
  },
  {
    "url": "libs/jquery/src/deferred.js",
    "revision": "a3d1188ee0e666992dfe08606e38a534"
  },
  {
    "url": "libs/jquery/src/deprecated.js",
    "revision": "1ecaf5067b98848ed7bcb48204902155"
  },
  {
    "url": "libs/jquery/src/dimensions.js",
    "revision": "c8820fe203f9b4db90f676d8a1cc55ab"
  },
  {
    "url": "libs/jquery/src/effects.js",
    "revision": "de0ded03aa30e1a30ef2cd768b8b210d"
  },
  {
    "url": "libs/jquery/src/effects/animatedSelector.js",
    "revision": "858f8a5adda0314927244623c7f5e6f1"
  },
  {
    "url": "libs/jquery/src/effects/Tween.js",
    "revision": "1fbdb16c3414509eca30d8a6c89e45c3"
  },
  {
    "url": "libs/jquery/src/event.js",
    "revision": "9fae661be623b78f6fc9db56e13e717a"
  },
  {
    "url": "libs/jquery/src/event/ajax.js",
    "revision": "0e0b9a17181504848ef02e803b8848e4"
  },
  {
    "url": "libs/jquery/src/event/alias.js",
    "revision": "44d44cb2b0c8c03f8182066aa0aabbbe"
  },
  {
    "url": "libs/jquery/src/event/focusin.js",
    "revision": "0aa13013ebd2c561930677bd1a406e5c"
  },
  {
    "url": "libs/jquery/src/event/support.js",
    "revision": "965b08621644d5650256a80e8100a5e2"
  },
  {
    "url": "libs/jquery/src/event/trigger.js",
    "revision": "65b1ecbe9a400e439d6a9edb5a5107fc"
  },
  {
    "url": "libs/jquery/src/exports/amd.js",
    "revision": "48468a27e9fa42b09f99420e8ca6239a"
  },
  {
    "url": "libs/jquery/src/exports/global.js",
    "revision": "fed6fce7a6ff8b2015c63767c6df9366"
  },
  {
    "url": "libs/jquery/src/intro.js",
    "revision": "f713d8d16e9fa4e0082aee4518df6964"
  },
  {
    "url": "libs/jquery/src/jquery.js",
    "revision": "7baab5cdf0e92e7408fe558a25d5cbfd"
  },
  {
    "url": "libs/jquery/src/manipulation.js",
    "revision": "6bb72fd7929a47efb467135139f5c42c"
  },
  {
    "url": "libs/jquery/src/manipulation/_evalUrl.js",
    "revision": "95568f602f1dc1cd70eacb7cb9199c61"
  },
  {
    "url": "libs/jquery/src/manipulation/buildFragment.js",
    "revision": "d070d45b17ec331dafe16e614172bbdf"
  },
  {
    "url": "libs/jquery/src/manipulation/getAll.js",
    "revision": "2f7ca7186e4f4f7d62de1e015ed64168"
  },
  {
    "url": "libs/jquery/src/manipulation/setGlobalEval.js",
    "revision": "74e05fd647fc140701a7244db93c301c"
  },
  {
    "url": "libs/jquery/src/manipulation/support.js",
    "revision": "801fcdfd340f3778128c3b4f9fbd6212"
  },
  {
    "url": "libs/jquery/src/manipulation/var/rcheckableType.js",
    "revision": "512b006a1bd67f02ee574b65c22bdecd"
  },
  {
    "url": "libs/jquery/src/manipulation/var/rscriptType.js",
    "revision": "eafa17edc38279dc3646035b02b2c65b"
  },
  {
    "url": "libs/jquery/src/manipulation/var/rtagName.js",
    "revision": "0f968d38697ab3dba25c2a30d0fc3d99"
  },
  {
    "url": "libs/jquery/src/manipulation/wrapMap.js",
    "revision": "54a53b7f3a8e40fbc7cb8505e058c9ff"
  },
  {
    "url": "libs/jquery/src/offset.js",
    "revision": "a0d009ddde9d6b48761ad4fa3376a163"
  },
  {
    "url": "libs/jquery/src/outro.js",
    "revision": "fba562809fd16e2d06f58c66b3d247d1"
  },
  {
    "url": "libs/jquery/src/queue.js",
    "revision": "89bd3aa3159e201f3a90f0190f6b22bb"
  },
  {
    "url": "libs/jquery/src/queue/delay.js",
    "revision": "5ece30975709d2ecdacd3bf944a27103"
  },
  {
    "url": "libs/jquery/src/selector-native.js",
    "revision": "1307dec34aa9993b097c50a03bf73a77"
  },
  {
    "url": "libs/jquery/src/selector-sizzle.js",
    "revision": "5db6bb2201791f0b314c368616e122d2"
  },
  {
    "url": "libs/jquery/src/selector.js",
    "revision": "f7e254bc7cb18adfaf3ce91c523ea70e"
  },
  {
    "url": "libs/jquery/src/serialize.js",
    "revision": "8b788a82c91bd0fc86873b1b8991779f"
  },
  {
    "url": "libs/jquery/src/traversing.js",
    "revision": "378065b6d556ce3687c53e91e899c499"
  },
  {
    "url": "libs/jquery/src/traversing/findFilter.js",
    "revision": "b666cda70904d1d1e11b7788b98148c9"
  },
  {
    "url": "libs/jquery/src/traversing/var/dir.js",
    "revision": "6f59eea54d7e01d305ad1458093fb746"
  },
  {
    "url": "libs/jquery/src/traversing/var/rneedsContext.js",
    "revision": "fad2c1df4a8f29c37759530c26b5fca0"
  },
  {
    "url": "libs/jquery/src/traversing/var/siblings.js",
    "revision": "2ae9267e8cbe68e1c6833e98938c94d5"
  },
  {
    "url": "libs/jquery/src/var/arr.js",
    "revision": "2dfdbc32978862f9a88a80074b4c3bcc"
  },
  {
    "url": "libs/jquery/src/var/class2type.js",
    "revision": "34048bc0fea4fd3dba0f2ef5d0266f42"
  },
  {
    "url": "libs/jquery/src/var/concat.js",
    "revision": "01b9624039f0f6b3a5a6f96b15e7aa4d"
  },
  {
    "url": "libs/jquery/src/var/document.js",
    "revision": "d8b6d75f42a1c2fbed49d15b53c1b93d"
  },
  {
    "url": "libs/jquery/src/var/documentElement.js",
    "revision": "9cd9f198f4a3b7c3a737052c45d144a3"
  },
  {
    "url": "libs/jquery/src/var/hasOwn.js",
    "revision": "f934b06451d89bcd43699585cce97d2d"
  },
  {
    "url": "libs/jquery/src/var/indexOf.js",
    "revision": "9befe963cf9f9336d88996ce9621d5be"
  },
  {
    "url": "libs/jquery/src/var/pnum.js",
    "revision": "c6c07ffc25beeb46e4a0edceb29f83d0"
  },
  {
    "url": "libs/jquery/src/var/push.js",
    "revision": "661b4b8ffb038293def72555447a5d25"
  },
  {
    "url": "libs/jquery/src/var/rcssNum.js",
    "revision": "7a2638f3a36c3203cb22e6a1dda40430"
  },
  {
    "url": "libs/jquery/src/var/rnotwhite.js",
    "revision": "57174d19819c2ea9ba076ef15446b5ee"
  },
  {
    "url": "libs/jquery/src/var/slice.js",
    "revision": "1fb53b6b6cf376d46868a715c5abc977"
  },
  {
    "url": "libs/jquery/src/var/support.js",
    "revision": "14f62856e2e7f66bc201f438372d8e49"
  },
  {
    "url": "libs/jquery/src/var/toString.js",
    "revision": "c409dd157b16e79642b83488134842f1"
  },
  {
    "url": "libs/jquery/src/wrap.js",
    "revision": "3eccbed28dd8b6620edcc3eeabd0ec24"
  },
  {
    "url": "libs/materialize-css/_SpecRunner.html",
    "revision": "2a88602a1e3dc0b1ff65e1dd76e23a29"
  },
  {
    "url": "libs/materialize-css/404.html",
    "revision": "422b0326c1a43d67962b361fe5014aed"
  },
  {
    "url": "libs/materialize-css/about.html",
    "revision": "05fa5c0eba42695db7df24d5c3ecbcba"
  },
  {
    "url": "libs/materialize-css/badges.html",
    "revision": "1019bd16b46a4d38cc9ebe9f1f0040f1"
  },
  {
    "url": "libs/materialize-css/bin/jquery-2.1.1.min.js",
    "revision": "d021c983bd6e7291b43a5cc1fb2ebe99"
  },
  {
    "url": "libs/materialize-css/bin/materialize-src-v0.98.0.zip",
    "revision": "4beea9c707b8d1a217d5590347a1050a"
  },
  {
    "url": "libs/materialize-css/bin/materialize-v0.98.0.zip",
    "revision": "e3de7cf8570e137db0eb58094cd46aa3"
  },
  {
    "url": "libs/materialize-css/bin/materialize.css",
    "revision": "0e76352f21235bbb58e9ddc6ed3e592a"
  },
  {
    "url": "libs/materialize-css/bin/materialize.js",
    "revision": "f89b2561e740c07294e5a715e96ee589"
  },
  {
    "url": "libs/materialize-css/bower.json",
    "revision": "3841c2d2248840f5c4c7a7f5c3355620"
  },
  {
    "url": "libs/materialize-css/breadcrumbs.html",
    "revision": "bb67482f04c60aef58ddfd031a3dcd26"
  },
  {
    "url": "libs/materialize-css/buttons.html",
    "revision": "4f0ff82769d5b1829e4473b82a52fa0a"
  },
  {
    "url": "libs/materialize-css/cards.html",
    "revision": "5f2850840834032146324a594a42ccd0"
  },
  {
    "url": "libs/materialize-css/carousel.html",
    "revision": "043a6b64385a7ef3fa082677af1b7e99"
  },
  {
    "url": "libs/materialize-css/CHANGELOG.md",
    "revision": "3ce6b7a12b25ac5c8e96c0f6b715e421"
  },
  {
    "url": "libs/materialize-css/chips.html",
    "revision": "83a69b4fca927414d75260034d512305"
  },
  {
    "url": "libs/materialize-css/collapsible.html",
    "revision": "549088cfceefa7d2abee35aec8f15100"
  },
  {
    "url": "libs/materialize-css/collections.html",
    "revision": "7be1fb9fcecb2daa6228839add766ddb"
  },
  {
    "url": "libs/materialize-css/color.html",
    "revision": "d16333277a6fe6cfbb29bb1c72263d35"
  },
  {
    "url": "libs/materialize-css/CONTRIBUTING.md",
    "revision": "576493de72feea063e5f1fe9501b3e01"
  },
  {
    "url": "libs/materialize-css/css-transitions.html",
    "revision": "8262240a8fa50e1262a96005aa6e7e5c"
  },
  {
    "url": "libs/materialize-css/css/ghpages-materialize.css",
    "revision": "d7aafd9ea8b4a2d5b8517bf7e1fadec9"
  },
  {
    "url": "libs/materialize-css/css/prism.css",
    "revision": "df5cedf63caf2ea2228ed2dd25f57b93"
  },
  {
    "url": "libs/materialize-css/dialogs.html",
    "revision": "71c52076605ba800a9c7c56151e5e704"
  },
  {
    "url": "libs/materialize-css/dist/css/materialize.css",
    "revision": "c99f27237058ef0153474811103b1f47"
  },
  {
    "url": "libs/materialize-css/dist/css/materialize.min.css",
    "revision": "afa86d80cdca6b442d574883b5e885f4"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Bold.eot",
    "revision": "ecdd509cadbf1ea78b8d2e31ec52328c"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Bold.ttf",
    "revision": "e31fcf1885e371e19f5786c2bdfeae1b"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Bold.woff",
    "revision": "dc81817def276b4f21395f7ea5e88dcd"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Bold.woff2",
    "revision": "39b2c3031be6b4ea96e2e3e95d307814"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Light.eot",
    "revision": "a990f611f2305dc12965f186c2ef2690"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Light.ttf",
    "revision": "46e48ce0628835f68a7369d0254e4283"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Light.woff",
    "revision": "3b813c2ae0d04909a33a18d792912ee7"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Light.woff2",
    "revision": "69f8a0617ac472f78e45841323a3df9e"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Medium.eot",
    "revision": "4d9f3f9e5195e7b074bb63ba4ce42208"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Medium.ttf",
    "revision": "894a2ede85a483bf9bedefd4db45cdb9"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Medium.woff",
    "revision": "fc78759e93a6cac50458610e3d9d63a0"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Medium.woff2",
    "revision": "574fd0b50367f886d359e8264938fc37"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Regular.eot",
    "revision": "30799efa5bf74129468ad4e257551dc3"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Regular.ttf",
    "revision": "df7b648ce5356ea1ebce435b3459fd60"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Regular.woff",
    "revision": "ba3dcd8903e3d0af5de7792777f8ae0d"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Regular.woff2",
    "revision": "2751ee43015f9884c3642f103b7f70c9"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Thin.eot",
    "revision": "dfe56a876d0282555d1e2458e278060f"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Thin.ttf",
    "revision": "94998475f6aea65f558494802416c1cf"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Thin.woff",
    "revision": "7500519de3d82e33d1587f8042e2afcb"
  },
  {
    "url": "libs/materialize-css/dist/fonts/roboto/Roboto-Thin.woff2",
    "revision": "954bbdeb86483e4ffea00c4591530ece"
  },
  {
    "url": "libs/materialize-css/dist/js/materialize.js",
    "revision": "7bb832d7070907b376a8c66e7fa0bc95"
  },
  {
    "url": "libs/materialize-css/dist/js/materialize.min.js",
    "revision": "8e727a037b7e48a2d87c52e3c69fe307"
  },
  {
    "url": "libs/materialize-css/dropdown.html",
    "revision": "5ef522b9ed624614ca7828720abab554"
  },
  {
    "url": "libs/materialize-css/extras/noUiSlider/nouislider.css",
    "revision": "23cb9d02edfd5a102bc95d1cb4cbb906"
  },
  {
    "url": "libs/materialize-css/extras/noUiSlider/nouislider.js",
    "revision": "2ce6feeb241fbccc19c30f0c569274be"
  },
  {
    "url": "libs/materialize-css/extras/noUiSlider/nouislider.min.js",
    "revision": "5e0021f501d2f1775f4d59b4b0aec287"
  },
  {
    "url": "libs/materialize-css/fab-toolbar-demo.html",
    "revision": "053edd091775385eb69d6c21a93da252"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Bold.eot",
    "revision": "ecdd509cadbf1ea78b8d2e31ec52328c"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Bold.ttf",
    "revision": "e31fcf1885e371e19f5786c2bdfeae1b"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Bold.woff",
    "revision": "dc81817def276b4f21395f7ea5e88dcd"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Bold.woff2",
    "revision": "39b2c3031be6b4ea96e2e3e95d307814"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Light.eot",
    "revision": "a990f611f2305dc12965f186c2ef2690"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Light.ttf",
    "revision": "46e48ce0628835f68a7369d0254e4283"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Light.woff",
    "revision": "3b813c2ae0d04909a33a18d792912ee7"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Light.woff2",
    "revision": "69f8a0617ac472f78e45841323a3df9e"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Medium.eot",
    "revision": "4d9f3f9e5195e7b074bb63ba4ce42208"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Medium.ttf",
    "revision": "894a2ede85a483bf9bedefd4db45cdb9"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Medium.woff",
    "revision": "fc78759e93a6cac50458610e3d9d63a0"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Medium.woff2",
    "revision": "574fd0b50367f886d359e8264938fc37"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Regular.eot",
    "revision": "30799efa5bf74129468ad4e257551dc3"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Regular.ttf",
    "revision": "df7b648ce5356ea1ebce435b3459fd60"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Regular.woff",
    "revision": "ba3dcd8903e3d0af5de7792777f8ae0d"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Regular.woff2",
    "revision": "2751ee43015f9884c3642f103b7f70c9"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Thin.eot",
    "revision": "dfe56a876d0282555d1e2458e278060f"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Thin.ttf",
    "revision": "94998475f6aea65f558494802416c1cf"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Thin.woff",
    "revision": "7500519de3d82e33d1587f8042e2afcb"
  },
  {
    "url": "libs/materialize-css/fonts/roboto/Roboto-Thin.woff2",
    "revision": "954bbdeb86483e4ffea00c4591530ece"
  },
  {
    "url": "libs/materialize-css/footer.html",
    "revision": "1b967eae3095af418041a940ca0d49b0"
  },
  {
    "url": "libs/materialize-css/forms.html",
    "revision": "dd8b2bb1eb28bf7ead8ce08b0db5bbbc"
  },
  {
    "url": "libs/materialize-css/fullscreen-slider-demo.html",
    "revision": "cf2cd5eb99c05b86c765496f2dc68004"
  },
  {
    "url": "libs/materialize-css/getting-started.html",
    "revision": "4a98d0bdc0dbe20619227cd6becb8229"
  },
  {
    "url": "libs/materialize-css/grid.html",
    "revision": "45e8ce7463e3fe16063be59c6906372c"
  },
  {
    "url": "libs/materialize-css/Gruntfile.js",
    "revision": "07aa0169659d25bd50b5ecfb92ea90a2"
  },
  {
    "url": "libs/materialize-css/helpers.html",
    "revision": "ed565c4fe76c6ba2a6c95fed2e96f813"
  },
  {
    "url": "libs/materialize-css/icons.html",
    "revision": "fea0656e78c435daac1211b0721f46d8"
  },
  {
    "url": "libs/materialize-css/index.html",
    "revision": "9c1030fba77b9dd9078baea546780f68"
  },
  {
    "url": "libs/materialize-css/ISSUE_TEMPLATE.md",
    "revision": "9f2700bec6a0d0d74db0aaa9734912e8"
  },
  {
    "url": "libs/materialize-css/jade/_footer.html",
    "revision": "9d4ac7c861150f8cd49ab0eafd10d159"
  },
  {
    "url": "libs/materialize-css/jade/_head.jade",
    "revision": "9db50c16e2cce03fa059247068d74bd1"
  },
  {
    "url": "libs/materialize-css/jade/_navbar.jade",
    "revision": "09c50ef573af8634a7fcee44aaa30f62"
  },
  {
    "url": "libs/materialize-css/jade/_scripts.html",
    "revision": "ab296c5e9c790a8a0db30b29b5cbcb71"
  },
  {
    "url": "libs/materialize-css/jade/404.jade",
    "revision": "4f2749b4b61e710d67164d596a26175f"
  },
  {
    "url": "libs/materialize-css/jade/about.jade",
    "revision": "14f1714fdd708cc2bac683aa94916f2c"
  },
  {
    "url": "libs/materialize-css/jade/about/about_content.html",
    "revision": "9165dba862b40c52203d48c2448f193c"
  },
  {
    "url": "libs/materialize-css/jade/badges.jade",
    "revision": "89c626f4fa40fc46a1e1bce08acdf6cc"
  },
  {
    "url": "libs/materialize-css/jade/breadcrumbs.jade",
    "revision": "461826f90983aace15bd5c49f6e1e622"
  },
  {
    "url": "libs/materialize-css/jade/buttons.jade",
    "revision": "feb218bbe679c4e1a26c303ad2bffe05"
  },
  {
    "url": "libs/materialize-css/jade/cards.jade",
    "revision": "28400bd8e32374e329213026512193a8"
  },
  {
    "url": "libs/materialize-css/jade/carousel.jade",
    "revision": "bbb1f3093a92befd7c928dd8815503b5"
  },
  {
    "url": "libs/materialize-css/jade/chips.jade",
    "revision": "4538ab95c43e226f2cd67c5747019ba2"
  },
  {
    "url": "libs/materialize-css/jade/collapsible.jade",
    "revision": "2f851d2f385c2cb9d3f1a0ec7ff9a0d0"
  },
  {
    "url": "libs/materialize-css/jade/collections.jade",
    "revision": "52cedd03882d92d8f0a442b2f23a7519"
  },
  {
    "url": "libs/materialize-css/jade/color.jade",
    "revision": "43a1b9bfec7fa1a4afca39e14c06688c"
  },
  {
    "url": "libs/materialize-css/jade/css-transitions.jade",
    "revision": "9fdfec9ee310445281614ebb6711e4b2"
  },
  {
    "url": "libs/materialize-css/jade/dialogs.jade",
    "revision": "b6383425cf4dba9b29c937567247653c"
  },
  {
    "url": "libs/materialize-css/jade/dropdown.jade",
    "revision": "010154bc7071945802bb4c1f3eaba067"
  },
  {
    "url": "libs/materialize-css/jade/footer.jade",
    "revision": "93c1b3d866f804d2109b18b9dfeb56f3"
  },
  {
    "url": "libs/materialize-css/jade/forms.jade",
    "revision": "d4619598cc79130aa52b112781ad6c13"
  },
  {
    "url": "libs/materialize-css/jade/fullscreen-slider-demo.jade",
    "revision": "345a0710e5434bbed0aaa1496d4219d3"
  },
  {
    "url": "libs/materialize-css/jade/getting_started/getting_started_content.html",
    "revision": "3d3bd75217d7d7163d776147821cb550"
  },
  {
    "url": "libs/materialize-css/jade/getting-started.jade",
    "revision": "3e261f232cb7db48992be64ff8bee527"
  },
  {
    "url": "libs/materialize-css/jade/grid.jade",
    "revision": "91a8862b46b896f9057075aeea0da7b1"
  },
  {
    "url": "libs/materialize-css/jade/helpers.jade",
    "revision": "8936e08d1fe15291a63421bf6c556601"
  },
  {
    "url": "libs/materialize-css/jade/icons.jade",
    "revision": "b03d4e04b95beef2d7a794c590b3529f"
  },
  {
    "url": "libs/materialize-css/jade/index.jade",
    "revision": "af7fb23688b3b2720b808c7edbde7a31"
  },
  {
    "url": "libs/materialize-css/jade/index/index_content.html",
    "revision": "183bc432044ef3c586fc88e14fed619d"
  },
  {
    "url": "libs/materialize-css/jade/lunr.min.js",
    "revision": "9424f087f85dc7be8f7c7bc35b720f26"
  },
  {
    "url": "libs/materialize-css/jade/media-css.jade",
    "revision": "c3a719a74317573dc46c9a4997556fa0"
  },
  {
    "url": "libs/materialize-css/jade/media.jade",
    "revision": "ee1de31aebf69a85acc13d94aee05e17"
  },
  {
    "url": "libs/materialize-css/jade/mobile.jade",
    "revision": "105bb759926b2e1a1f03345ef327a4ea"
  },
  {
    "url": "libs/materialize-css/jade/mobile/mobile_content.html",
    "revision": "e84cb5b299d8b64bdb91b1711a975491"
  },
  {
    "url": "libs/materialize-css/jade/modals.jade",
    "revision": "519156b3f2322d9b490980b5ad67e976"
  },
  {
    "url": "libs/materialize-css/jade/navbar.jade",
    "revision": "edc59aea180c127a4baa1ff932f02877"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/404_content.html",
    "revision": "45a6c2b8e566009a46be3c7da1f07873"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/badges_content.html",
    "revision": "c4191bca79267fe7b737af8298369053"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/breadcrumbs_content.html",
    "revision": "9d48f00adac3f55fca8b95fb050cadea"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/buttons_content.html",
    "revision": "b154cd09dd9aeb21e179ff3d7ab00130"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/cards_content.html",
    "revision": "12eb43c7eb34d70d70ed56eba715b200"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/carousel_content.html",
    "revision": "e56cba5c0e6c939c312bb540267a0c4d"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/chips_content.html",
    "revision": "67c5ad655698a01d783446f9c1fba6ce"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/collapsible_content.html",
    "revision": "f5d7eb2e3f2265a055d047e5e4f04041"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/collections_content.html",
    "revision": "e17ee37470fd93cbf41476fac006c196"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/color_content.html",
    "revision": "76dda5363d4bce85299c813ef25fbd82"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/css-transitions_content.html",
    "revision": "b9d3e5c615e80b806ad45841d7672db9"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/dialogs_content.html",
    "revision": "391091e3ac801d7e1b149a942e0f7380"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/dropdown_content.html",
    "revision": "690a4304848df7c82870a2f4170e27e6"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/footer_content.html",
    "revision": "d8c3ad7700c6c65b76683d727cbec21d"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/forms_content.html",
    "revision": "6b33049423ebf347293bf15d85b281e6"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/fullscreen_slider_demo_content.html",
    "revision": "d7a0a72221abfad78f7aa504659c9487"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/grid_content.html",
    "revision": "8f5e99d534ff1757eb7aad61fa7dcb20"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/helpers_content.html",
    "revision": "ea9cf3b0b697ed2669cebc3f168c6788"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/icons_content.html",
    "revision": "fc3418cf308e23ff274e2acd72f3ab29"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/media_content.html",
    "revision": "a53fc8798b39b31f2b8cd349186b3404"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/media-css_content.html",
    "revision": "f2982b4c2fce818fc615125ce52e0e5f"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/modals_content.html",
    "revision": "df9d9ce720a10c0aad479dfcdd8ae3ed"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/navbar_content.html",
    "revision": "0dc65d8e2b147b07e7cbac357387667a"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/pagination_content.html",
    "revision": "3ea5d57d86bd51f5361f788826b45781"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/parallax_content.html",
    "revision": "850dbcae61f438fb6484b27fb128408c"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/parallax_demo_content.html",
    "revision": "31dcc684c87f61372ab8bd961bd97590"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/preloader_content.html",
    "revision": "823f5208d19fd3d568c212d6adb1f051"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/pushpin_content.html",
    "revision": "c6b34d54a47d28565a22dc9562ea8ee2"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/pushpin_demo_content.html",
    "revision": "92bf4d19859095370b26f35d4e148cd1"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/sass_content.html",
    "revision": "6ce1e08d623a881474f74721290933f8"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/scrollfire_content.html",
    "revision": "c29fbbeb892ff721240cbba1c8328411"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/scrollspy_content.html",
    "revision": "84976fd479badc865cb4a1d994825502"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/shadow_content.html",
    "revision": "de49c4d04b2e6d61a85a0809e6a518be"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/sideNav_content.html",
    "revision": "c358c8d9b3c8047bf155fdb36049bc34"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/table_content.html",
    "revision": "6c2ab52114b2e80fba66cab390e4a503"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/tabs_content.html",
    "revision": "89bb2c2372ff25a9fdd9d6d08ad62eba"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/transitions_content.html",
    "revision": "e1af00c4aa23addb79608d6b5418ef17"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/typography_content.html",
    "revision": "d0754c7b393f77a0b6c3b551436d803a"
  },
  {
    "url": "libs/materialize-css/jade/page-contents/waves_content.html",
    "revision": "0a850ac8b395563b5cd81c16a317ddc7"
  },
  {
    "url": "libs/materialize-css/jade/pagination.jade",
    "revision": "8a2496a8352f46fb3e9e982b6de6c794"
  },
  {
    "url": "libs/materialize-css/jade/parallax-demo.jade",
    "revision": "47189f5f0f1d0a4d7cf804785ec61709"
  },
  {
    "url": "libs/materialize-css/jade/parallax.jade",
    "revision": "3be755936bfe625b6077fc157fb92322"
  },
  {
    "url": "libs/materialize-css/jade/parallax/parallax_content.html",
    "revision": "c3bf8a52974e26099c57e865bdbbbb46"
  },
  {
    "url": "libs/materialize-css/jade/preloader.jade",
    "revision": "8bd879ee41a538ab3f8870786c05a48b"
  },
  {
    "url": "libs/materialize-css/jade/pushpin-demo.jade",
    "revision": "65b9611b98fb99727a0be23ba173ef2d"
  },
  {
    "url": "libs/materialize-css/jade/pushpin.jade",
    "revision": "3871bf3e29196ad21de648ba0acb5e68"
  },
  {
    "url": "libs/materialize-css/jade/sass.jade",
    "revision": "bbafb4c3f1c45ce12c411d5e58e72e09"
  },
  {
    "url": "libs/materialize-css/jade/scrollFire.jade",
    "revision": "f9e3bfa9578dfa7a84d5439f4fe0aa21"
  },
  {
    "url": "libs/materialize-css/jade/scrollspy.jade",
    "revision": "4aedb2f80b095888534189fe0ca9054e"
  },
  {
    "url": "libs/materialize-css/jade/search.js",
    "revision": "0f1c62ec9bf1b4e680704815bf0a4643"
  },
  {
    "url": "libs/materialize-css/jade/shadow.jade",
    "revision": "0061c4bd180506f3b85e4751a499de25"
  },
  {
    "url": "libs/materialize-css/jade/showcase.jade",
    "revision": "3158859552fff87c7ca4ea946c34e9f8"
  },
  {
    "url": "libs/materialize-css/jade/showcase/showcase_content.html",
    "revision": "32eed1a4b68ee1569e7f7afdebabb541"
  },
  {
    "url": "libs/materialize-css/jade/sideNav.jade",
    "revision": "63efa9e9aea434b59f62174a5783308b"
  },
  {
    "url": "libs/materialize-css/jade/table.jade",
    "revision": "16fc17e2a6ec1b700a2390d29865e4dc"
  },
  {
    "url": "libs/materialize-css/jade/tabs.jade",
    "revision": "ec99b09fe6f2208a00c24c1583266098"
  },
  {
    "url": "libs/materialize-css/jade/transitions.jade",
    "revision": "c0db34b2149942b40c15ac02c7bff62c"
  },
  {
    "url": "libs/materialize-css/jade/typography.jade",
    "revision": "6e3715e38739496b7a7870476799b09c"
  },
  {
    "url": "libs/materialize-css/jade/waves.jade",
    "revision": "c523f497e6e83e565cd4633331a59436"
  },
  {
    "url": "libs/materialize-css/js/animation.js",
    "revision": "096b74604a575ffb4762ffa78d09ea80"
  },
  {
    "url": "libs/materialize-css/js/buttons.js",
    "revision": "ccc56f343b10a8026cb085f49f0fa229"
  },
  {
    "url": "libs/materialize-css/js/cards.js",
    "revision": "e9324fdc1c1ec5353531148d81baf7ed"
  },
  {
    "url": "libs/materialize-css/js/carousel.js",
    "revision": "3b0454a4b44a9c5a578333454747d069"
  },
  {
    "url": "libs/materialize-css/js/character_counter.js",
    "revision": "f7680640d6e8f6de4f2b0ff0fc06d4d9"
  },
  {
    "url": "libs/materialize-css/js/chips.js",
    "revision": "f6f984058aa87e8e76c2a888562f0ecf"
  },
  {
    "url": "libs/materialize-css/js/collapsible.js",
    "revision": "e076018eb70f4fe4e3a1b5ebee349f71"
  },
  {
    "url": "libs/materialize-css/js/date_picker/picker.date.js",
    "revision": "ca506129ffa80d6b3eb595eda8a8d76e"
  },
  {
    "url": "libs/materialize-css/js/date_picker/picker.js",
    "revision": "8d2f2e0c48c4afba14e26aada9c0cff0"
  },
  {
    "url": "libs/materialize-css/js/dropdown.js",
    "revision": "ef49061ad13cc9bdf66a39b3852b3199"
  },
  {
    "url": "libs/materialize-css/js/forms.js",
    "revision": "584cd6c512dde442e27099a080b9b914"
  },
  {
    "url": "libs/materialize-css/js/global.js",
    "revision": "322aee0d53fbee5756fd17915acd0d6b"
  },
  {
    "url": "libs/materialize-css/js/hammer.min.js",
    "revision": "afae4508749ffc4774aa88c7ba879ef4"
  },
  {
    "url": "libs/materialize-css/js/init.js",
    "revision": "6d37fe1015f63a88ec3450c3278cd89c"
  },
  {
    "url": "libs/materialize-css/js/initial.js",
    "revision": "c4b701d423927bbef3d69758c893a407"
  },
  {
    "url": "libs/materialize-css/js/jquery.easing.1.3.js",
    "revision": "fda90b1dc57361e85475db0285695ceb"
  },
  {
    "url": "libs/materialize-css/js/jquery.hammer.js",
    "revision": "baef8624eb9cbb825b095cb3524f604d"
  },
  {
    "url": "libs/materialize-css/js/jquery.timeago.min.js",
    "revision": "5c17fa00e2897651487beb14068f3f5f"
  },
  {
    "url": "libs/materialize-css/js/materialbox.js",
    "revision": "308ff3036fbe3c25e62f622c676749c6"
  },
  {
    "url": "libs/materialize-css/js/materialize.js",
    "revision": "eaa4c228b4f8c11518692c59cf91dc0f"
  },
  {
    "url": "libs/materialize-css/js/modal.js",
    "revision": "64d23ad3b6a42c786e185025354281f0"
  },
  {
    "url": "libs/materialize-css/js/parallax.js",
    "revision": "9c09262a3a3cd822e7ee566049007a5b"
  },
  {
    "url": "libs/materialize-css/js/prism.js",
    "revision": "ef060c48b95360ccf1906bd92a5fef65"
  },
  {
    "url": "libs/materialize-css/js/pushpin.js",
    "revision": "f66ed174f6fd653db4eeb9f6c28427fa"
  },
  {
    "url": "libs/materialize-css/js/scrollFire.js",
    "revision": "1caafa8cb1709fea358863a6a8bcf74c"
  },
  {
    "url": "libs/materialize-css/js/scrollspy.js",
    "revision": "db7ce076a7ad4ab984c65a18fa59a82b"
  },
  {
    "url": "libs/materialize-css/js/sideNav.js",
    "revision": "c406e717a0210af18096f45ffeefc6dd"
  },
  {
    "url": "libs/materialize-css/js/slider.js",
    "revision": "8fd1333e490bc72b3b52f7e4a52aa9fc"
  },
  {
    "url": "libs/materialize-css/js/tabs.js",
    "revision": "81c91dccc691d919f57fc0227f54281a"
  },
  {
    "url": "libs/materialize-css/js/toasts.js",
    "revision": "c0feb33a50fd70a8adbac909c344173c"
  },
  {
    "url": "libs/materialize-css/js/tooltip.js",
    "revision": "8891faf678531c83ad4813ec4ce2336b"
  },
  {
    "url": "libs/materialize-css/js/transitions.js",
    "revision": "4fdce7e78e2707f46b72b9d645505633"
  },
  {
    "url": "libs/materialize-css/js/velocity.min.js",
    "revision": "7d46aa3e33d5aa043406e75c59f03b81"
  },
  {
    "url": "libs/materialize-css/js/waves.js",
    "revision": "b147b480dcae146dc437aa508af516bd"
  },
  {
    "url": "libs/materialize-css/media-css.html",
    "revision": "8f50813a54d42a68ac4dfe54fe7b5ebb"
  },
  {
    "url": "libs/materialize-css/media.html",
    "revision": "6c5182f24e530cac4869fdbde4d47745"
  },
  {
    "url": "libs/materialize-css/mobile.html",
    "revision": "ac382904d12324f51adbc4d21920e0ff"
  },
  {
    "url": "libs/materialize-css/modals.html",
    "revision": "cb7de4214724982199ffa7b8e45e70f3"
  },
  {
    "url": "libs/materialize-css/navbar.html",
    "revision": "71cca4fb750c1e0122be880e8421672f"
  },
  {
    "url": "libs/materialize-css/package.js",
    "revision": "97e54ced5da7199f7d238fa0a485701b"
  },
  {
    "url": "libs/materialize-css/package.json",
    "revision": "18c7dd2bbd714e85e642e874cdebeb42"
  },
  {
    "url": "libs/materialize-css/pagination.html",
    "revision": "b44504da25196c5830a9e121b0119abd"
  },
  {
    "url": "libs/materialize-css/parallax-demo.html",
    "revision": "f4ea95dce1fe2924115ec07c19926af4"
  },
  {
    "url": "libs/materialize-css/parallax.html",
    "revision": "c3d1ceada6244529d19be2c48bf97476"
  },
  {
    "url": "libs/materialize-css/preloader.html",
    "revision": "4c488df7817b7398ea5c421885532f60"
  },
  {
    "url": "libs/materialize-css/pushpin-demo.html",
    "revision": "050176c1b2de6c4e3321b98217dade7a"
  },
  {
    "url": "libs/materialize-css/pushpin.html",
    "revision": "e853f7efba538fda012aff18a3222841"
  },
  {
    "url": "libs/materialize-css/README.md",
    "revision": "c612309bb990949eb392024f2e9e324c"
  },
  {
    "url": "libs/materialize-css/res/materialize.svg",
    "revision": "369d521a398f578c0c2850a2283e8fbe"
  },
  {
    "url": "libs/materialize-css/res/MaterializeLogo-3.ai",
    "revision": "4f922ad159d017c4f7509b692b9fb5b3"
  },
  {
    "url": "libs/materialize-css/res/MaterializeLogo-3.svg",
    "revision": "82ad6380eecfe246ad49e8e47d5c5b27"
  },
  {
    "url": "libs/materialize-css/robots.txt",
    "revision": "27aced7bc0106cf98f60c8431beed8fe"
  },
  {
    "url": "libs/materialize-css/sass.html",
    "revision": "01873b46fae277dff981e667ebbb5a5c"
  },
  {
    "url": "libs/materialize-css/sass/_style.scss",
    "revision": "ea72a73cb8c24cd5160b8872e9148b45"
  },
  {
    "url": "libs/materialize-css/sass/components/_badges.scss",
    "revision": "44e3f2e80c367e54fd6e9fb72f3f185f"
  },
  {
    "url": "libs/materialize-css/sass/components/_buttons.scss",
    "revision": "3ea8914bd36d2dd5a96567ccd54bd20c"
  },
  {
    "url": "libs/materialize-css/sass/components/_cards.scss",
    "revision": "8a784e4b2d985161cf636b4b0e43d20a"
  },
  {
    "url": "libs/materialize-css/sass/components/_carousel.scss",
    "revision": "86b0a935ae1c5a13cd3b3b9fce5f9d93"
  },
  {
    "url": "libs/materialize-css/sass/components/_chips.scss",
    "revision": "40dd6d28b653b303104fd9a09f0f7911"
  },
  {
    "url": "libs/materialize-css/sass/components/_collapsible.scss",
    "revision": "03d2df127b6922a82d6feb23a015fff0"
  },
  {
    "url": "libs/materialize-css/sass/components/_color.scss",
    "revision": "fd2b1e04a68419383c9bad268b72c563"
  },
  {
    "url": "libs/materialize-css/sass/components/_dropdown.scss",
    "revision": "d5fed0b46b8a9c696cac292e49299309"
  },
  {
    "url": "libs/materialize-css/sass/components/_global.scss",
    "revision": "e1ea412eac9e8fc4381a9e5dcbdb33a8"
  },
  {
    "url": "libs/materialize-css/sass/components/_grid.scss",
    "revision": "f5bde425dcd43c528e361a2104e5eb8f"
  },
  {
    "url": "libs/materialize-css/sass/components/_icons-material-design.scss",
    "revision": "618de8e5d19677f2b759d1aa804e13d0"
  },
  {
    "url": "libs/materialize-css/sass/components/_materialbox.scss",
    "revision": "64e0a7308f3b41583f4ee2f95766c102"
  },
  {
    "url": "libs/materialize-css/sass/components/_mixins.scss",
    "revision": "101018aee0ae84a805d81f15d8ce8f09"
  },
  {
    "url": "libs/materialize-css/sass/components/_modal.scss",
    "revision": "6c1b3a82813d621968d93e591e874759"
  },
  {
    "url": "libs/materialize-css/sass/components/_navbar.scss",
    "revision": "e78c0faf1996a99228a8d39d385f49c8"
  },
  {
    "url": "libs/materialize-css/sass/components/_normalize.scss",
    "revision": "1e9c0f3b13da66012ea079bc1509fef2"
  },
  {
    "url": "libs/materialize-css/sass/components/_prefixer.scss",
    "revision": "4ae472c5ca391e952f6142da4b4267f7"
  },
  {
    "url": "libs/materialize-css/sass/components/_preloader.scss",
    "revision": "72e5cc11a58f72eea8fd66118e8f0aa2"
  },
  {
    "url": "libs/materialize-css/sass/components/_roboto.scss",
    "revision": "5a4e8128e14157ab39ddf59356d68f22"
  },
  {
    "url": "libs/materialize-css/sass/components/_sideNav.scss",
    "revision": "d39b1e684036b7f2abf7c8cdaf95071c"
  },
  {
    "url": "libs/materialize-css/sass/components/_slider.scss",
    "revision": "d38388329fe1641e7ba6047e38c92239"
  },
  {
    "url": "libs/materialize-css/sass/components/_table_of_contents.scss",
    "revision": "2ab5b3c43e32dafcd8c8c8d4578a3d63"
  },
  {
    "url": "libs/materialize-css/sass/components/_tabs.scss",
    "revision": "6fd247f29620320ac3f2f36dec8de621"
  },
  {
    "url": "libs/materialize-css/sass/components/_toast.scss",
    "revision": "a6a7ab4e9f15fc520aaf7c26020a3a5d"
  },
  {
    "url": "libs/materialize-css/sass/components/_tooltip.scss",
    "revision": "e0e914ea691f5293750b5f48d8ab6350"
  },
  {
    "url": "libs/materialize-css/sass/components/_transitions.scss",
    "revision": "500499bebf5b8077982400dc6a056771"
  },
  {
    "url": "libs/materialize-css/sass/components/_typography.scss",
    "revision": "794f712148acbc80f1b196e25f7e942b"
  },
  {
    "url": "libs/materialize-css/sass/components/_variables.scss",
    "revision": "336fcceeefffba63ab5a90acd9fe7c44"
  },
  {
    "url": "libs/materialize-css/sass/components/_waves.scss",
    "revision": "8b0f7307db1cdb9feca7f5587f23b176"
  },
  {
    "url": "libs/materialize-css/sass/components/date_picker/_default.date.scss",
    "revision": "afde5f2cafd194488bee3b35170760b5"
  },
  {
    "url": "libs/materialize-css/sass/components/date_picker/_default.scss",
    "revision": "3a534d1bdb3bf11a4ab1f902fa4775e3"
  },
  {
    "url": "libs/materialize-css/sass/components/date_picker/_default.time.scss",
    "revision": "90edc449e9066d27eb8d6ca67d627e1b"
  },
  {
    "url": "libs/materialize-css/sass/components/forms/_checkboxes.scss",
    "revision": "a3cfe4ae0dd4ecc5ed07041386e1a21b"
  },
  {
    "url": "libs/materialize-css/sass/components/forms/_file-input.scss",
    "revision": "ef3bf140b95f1f3ea1f8842dd1d33bbb"
  },
  {
    "url": "libs/materialize-css/sass/components/forms/_forms.scss",
    "revision": "4ef5e29769885eee44d7854c1c44fb0b"
  },
  {
    "url": "libs/materialize-css/sass/components/forms/_input-fields.scss",
    "revision": "61f0409742b1ad6ea0e8f17b717582af"
  },
  {
    "url": "libs/materialize-css/sass/components/forms/_radio-buttons.scss",
    "revision": "c2fe48085d82367c8c25e50a715b029a"
  },
  {
    "url": "libs/materialize-css/sass/components/forms/_range.scss",
    "revision": "a421c45d84a50a62f45fcd6a3628aed4"
  },
  {
    "url": "libs/materialize-css/sass/components/forms/_select.scss",
    "revision": "9da46b47c710d12c97829caccf1793ff"
  },
  {
    "url": "libs/materialize-css/sass/components/forms/_switches.scss",
    "revision": "5535b11beacc4fb79dabe4f50c62cbb7"
  },
  {
    "url": "libs/materialize-css/sass/ghpages-materialize.scss",
    "revision": "2a39a5fa5cfe7c38cc0568e022f894d5"
  },
  {
    "url": "libs/materialize-css/sass/materialize.scss",
    "revision": "363114c69f41d6a441badedc1547179e"
  },
  {
    "url": "libs/materialize-css/scrollfire.html",
    "revision": "319c6fdffe14451ad3c600627f343a1f"
  },
  {
    "url": "libs/materialize-css/scrollspy.html",
    "revision": "e0b27c20ffb71696f78c312faec88a25"
  },
  {
    "url": "libs/materialize-css/shadow.html",
    "revision": "378f06bc4ea6c52d1beefc46602cb5b1"
  },
  {
    "url": "libs/materialize-css/showcase.html",
    "revision": "71456c48dfd15f063ac5a8ac3fd6f7f7"
  },
  {
    "url": "libs/materialize-css/side-nav.html",
    "revision": "c1be2c5afa2790dfbd7e43684cfc8eae"
  },
  {
    "url": "libs/materialize-css/sitemap.xml",
    "revision": "41afe745e2628a4d7c67f045d6559c5e"
  },
  {
    "url": "libs/materialize-css/table.html",
    "revision": "a0fc46f2b6617cc3c295ed2bf6ced72e"
  },
  {
    "url": "libs/materialize-css/tabs.html",
    "revision": "7e27d5a347731a336642a888ae04fbad"
  },
  {
    "url": "libs/materialize-css/templates/masonry-template/background1.jpg",
    "revision": "ffa8a0bb6d6219cb2c6026a845f249bb"
  },
  {
    "url": "libs/materialize-css/templates/masonry-template/background2.jpg",
    "revision": "2dae6d7e74decfdb796ad51f774e5a17"
  },
  {
    "url": "libs/materialize-css/templates/masonry-template/background3.jpg",
    "revision": "660f3abfcc0d2cf9d5956bb396e774c9"
  },
  {
    "url": "libs/materialize-css/templates/masonry-template/css/style.css",
    "revision": "1b2e2de1bae3e393051d59b9e1949b45"
  },
  {
    "url": "libs/materialize-css/templates/masonry-template/index.html",
    "revision": "0c1e144042a952d07556b7e63fe4afb6"
  },
  {
    "url": "libs/materialize-css/templates/masonry-template/js/init.js",
    "revision": "1c5136b6ad0ebe67d4be8b7ba7ac39fc"
  },
  {
    "url": "libs/materialize-css/templates/masonry-template/js/masonry.pkgd.min.js",
    "revision": "32a4ddf826218d21c029e0ff57e6aa73"
  },
  {
    "url": "libs/materialize-css/templates/masonry-template/preview.html",
    "revision": "edbb8162468e18c72297340f6fde6d3a"
  },
  {
    "url": "libs/materialize-css/templates/parallax-template.zip",
    "revision": "704663d2c30614144840039cf30ffea6"
  },
  {
    "url": "libs/materialize-css/templates/parallax-template/background1.jpg",
    "revision": "ffa8a0bb6d6219cb2c6026a845f249bb"
  },
  {
    "url": "libs/materialize-css/templates/parallax-template/background2.jpg",
    "revision": "660f3abfcc0d2cf9d5956bb396e774c9"
  },
  {
    "url": "libs/materialize-css/templates/parallax-template/background3.jpg",
    "revision": "2dae6d7e74decfdb796ad51f774e5a17"
  },
  {
    "url": "libs/materialize-css/templates/parallax-template/css/style.css",
    "revision": "a7a5ad78a80a784cf8ddb4f8e69556f9"
  },
  {
    "url": "libs/materialize-css/templates/parallax-template/index.html",
    "revision": "83fb43ff3a0d91aad7c080610a707dba"
  },
  {
    "url": "libs/materialize-css/templates/parallax-template/js/init.js",
    "revision": "2f9b6576a3c4a06f41fee87106f0c429"
  },
  {
    "url": "libs/materialize-css/templates/parallax-template/preview.html",
    "revision": "6ad5622ef021682f4f74e778372cd33e"
  },
  {
    "url": "libs/materialize-css/templates/starter-template.zip",
    "revision": "46de6c354b9df2944f3ecd9ce8a7f8a6"
  },
  {
    "url": "libs/materialize-css/templates/starter-template/css/style.css",
    "revision": "a2020e1be737dfb12171c85b17453a55"
  },
  {
    "url": "libs/materialize-css/templates/starter-template/index.html",
    "revision": "614b222f56f51e272adc5c011b26519b"
  },
  {
    "url": "libs/materialize-css/templates/starter-template/js/init.js",
    "revision": "9018cf4461aaec97838f658c5750a1b1"
  },
  {
    "url": "libs/materialize-css/templates/starter-template/preview.html",
    "revision": "1e6104e1515f92b2d281b9e1e971a902"
  },
  {
    "url": "libs/materialize-css/test.html",
    "revision": "687e449f78502c2957ce2cd47b5872a4"
  },
  {
    "url": "libs/materialize-css/test/html/badges.html",
    "revision": "819cb5279137a5497371818546e4c222"
  },
  {
    "url": "libs/materialize-css/test/html/buttons.html",
    "revision": "83aa0f4acf7682d6f48a87343bf81645"
  },
  {
    "url": "libs/materialize-css/test/html/cards.html",
    "revision": "41480f53c36e0b01023952278439c5a5"
  },
  {
    "url": "libs/materialize-css/test/html/carousel.html",
    "revision": "a6dd18c653e1a7bfafea7ee83700fe25"
  },
  {
    "url": "libs/materialize-css/test/html/chips.html",
    "revision": "ce7c11a346cc03d4d26fe888b0edb8d5"
  },
  {
    "url": "libs/materialize-css/test/html/collapsible.html",
    "revision": "0ee0d98429cf21716dfb73621a3686fc"
  },
  {
    "url": "libs/materialize-css/test/html/dropdown.html",
    "revision": "800fd0e7290550ee87c04a6daa181178"
  },
  {
    "url": "libs/materialize-css/test/html/fixed_navbar.html",
    "revision": "7ee9f72c16e301bf0a205921b44d9aba"
  },
  {
    "url": "libs/materialize-css/test/html/forms.html",
    "revision": "feed7068400ae936b05df52d1f8bdac8"
  },
  {
    "url": "libs/materialize-css/test/html/materialbox.html",
    "revision": "87591e6f00277b26623442d49435111e"
  },
  {
    "url": "libs/materialize-css/test/html/multiple_modals.html",
    "revision": "80afbeb3c9c3b83b1322b1681e1b28ae"
  },
  {
    "url": "libs/materialize-css/test/html/multiple_sidenav.html",
    "revision": "f2b853d66bacf4897b7c17e5b450b8c1"
  },
  {
    "url": "libs/materialize-css/test/html/overlayZindex.html",
    "revision": "80e32cf28f90ac02bd5bfa08cb537509"
  },
  {
    "url": "libs/materialize-css/test/html/pushpin.html",
    "revision": "e9e08f9c1ee5087d1073a12bb00aa4ee"
  },
  {
    "url": "libs/materialize-css/test/html/scrollfire.html",
    "revision": "156b88b5b39798a664494d4a0c42a3b4"
  },
  {
    "url": "libs/materialize-css/test/html/scrollspy.html",
    "revision": "e969f66accbad63441aff6fa5f8d800f"
  },
  {
    "url": "libs/materialize-css/test/html/tabs.html",
    "revision": "8bec30f8c486e106a155643dd9af17d4"
  },
  {
    "url": "libs/materialize-css/test/html/waves.html",
    "revision": "cca2482a1af6fccb9c9d46019a83a0ca"
  },
  {
    "url": "libs/materialize-css/test2.html",
    "revision": "a73f4e383040e291257b4d2cf99c3ff2"
  },
  {
    "url": "libs/materialize-css/tests/spec/autocomplete/autocompleteFixture.html",
    "revision": "23790a6c9e36182c9d0cdc6464a3abe7"
  },
  {
    "url": "libs/materialize-css/tests/spec/autocomplete/autocompleteSpec.js",
    "revision": "b2c698d93e5395624b607703e803d613"
  },
  {
    "url": "libs/materialize-css/tests/spec/cards/cardsFixture.html",
    "revision": "255161484ffc42132a122608b54fe8fa"
  },
  {
    "url": "libs/materialize-css/tests/spec/cards/cardsSpec.js",
    "revision": "0734976a55af95930d986defd458fb05"
  },
  {
    "url": "libs/materialize-css/tests/spec/chips/chipsFixture.html",
    "revision": "aae0e46b35b6d314720158cd450dbe69"
  },
  {
    "url": "libs/materialize-css/tests/spec/chips/chipsSpec.js",
    "revision": "318226d0d3cf85f17386d7e44f0e6a29"
  },
  {
    "url": "libs/materialize-css/tests/spec/collapsible/collapsible.html",
    "revision": "6bb5baf21e4a92463392d7c92c55794a"
  },
  {
    "url": "libs/materialize-css/tests/spec/collapsible/collapsibleSpec.js",
    "revision": "513bc6ca9093e48e172d53f74670ef40"
  },
  {
    "url": "libs/materialize-css/tests/spec/dropdown/dropdownFixture.html",
    "revision": "fd40e0bd905de57e0cadf60d593938c3"
  },
  {
    "url": "libs/materialize-css/tests/spec/dropdown/dropdownSpec.js",
    "revision": "744cd368fbc025b2611a466559b4bc1a"
  },
  {
    "url": "libs/materialize-css/tests/spec/helper.js",
    "revision": "1e8be9c3d939e5857a057a3c903007ed"
  },
  {
    "url": "libs/materialize-css/tests/spec/materialbox/materialboxFixture.html",
    "revision": "5a79b0af85d7cd01a40ed45cafbaa299"
  },
  {
    "url": "libs/materialize-css/tests/spec/materialbox/materialboxSpec.js",
    "revision": "9e9e858ea894e17be2722c6ec504a072"
  },
  {
    "url": "libs/materialize-css/tests/spec/scrollFire/scrollFireFixture.html",
    "revision": "67347bb4954c622f29c97c5f413d204f"
  },
  {
    "url": "libs/materialize-css/tests/spec/scrollFire/scrollFireSpec.js",
    "revision": "5db66535f2659bce79db086d9616ee29"
  },
  {
    "url": "libs/materialize-css/tests/spec/select/selectFixture.html",
    "revision": "03535dfbb0a69f9dd0c77ca4399589a2"
  },
  {
    "url": "libs/materialize-css/tests/spec/select/selectSpec.js",
    "revision": "3155d943748dc7d3799b18086e6039a9"
  },
  {
    "url": "libs/materialize-css/tests/spec/sideNav/sideNavFixture.html",
    "revision": "fb1301b3e82619686c996152f3d720cc"
  },
  {
    "url": "libs/materialize-css/tests/spec/sideNav/sideNavSpec.js",
    "revision": "68725fd8b8c58bb4dee347cae69e439a"
  },
  {
    "url": "libs/materialize-css/tests/spec/tabs/tabsFixture.html",
    "revision": "24dcd0d85fbe7fe729fdae82fa21062a"
  },
  {
    "url": "libs/materialize-css/tests/spec/tabs/tabsSpec.js",
    "revision": "672530088d01b506f7e2471b1f73348f"
  },
  {
    "url": "libs/materialize-css/tests/spec/toast/toastSpec.js",
    "revision": "b84846f95feeb37cd64c0e36e87bfc7f"
  },
  {
    "url": "libs/materialize-css/tests/spec/tooltip/tooltipFixture.html",
    "revision": "c8d222f819864f25336a4c78d962fb2c"
  },
  {
    "url": "libs/materialize-css/tests/spec/tooltip/tooltipSpec.js",
    "revision": "0fb8a4894a3c783a8f02090d9f93172a"
  },
  {
    "url": "libs/materialize-css/transitions.html",
    "revision": "3e07a75b3ba8a35aa03105ac0d072bcb"
  },
  {
    "url": "libs/materialize-css/typography.html",
    "revision": "8087ef18ecf1d276446ecd115def04a7"
  },
  {
    "url": "libs/materialize-css/waves.html",
    "revision": "8f4ec1ea668d5de2747319b06ca828e3"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-background-sync.dev.js",
    "revision": "5446355eef3aa184b5b6eebfcd81f8d9"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-background-sync.prod.js",
    "revision": "1ffcc362312a9e8ef4e28280ace2a1bd"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-broadcast-update.dev.js",
    "revision": "0508d13784c9b0549663f40e3fe55d37"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-broadcast-update.prod.js",
    "revision": "ee27c0fdc836f6a2dc656b25a680f9e4"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-cacheable-response.dev.js",
    "revision": "ecba3679d285394f1c9e219681662721"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-cacheable-response.prod.js",
    "revision": "a38e8afa80070ec9dff5dc2fb116f1c2"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-core.dev.js",
    "revision": "2912182ccc99b017a8c36802cf9d983f"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-core.prod.js",
    "revision": "5d14d8267f65030735589e4b664ee3bf"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-expiration.dev.js",
    "revision": "43c236fe62480f042c35e8b898ca3367"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-expiration.prod.js",
    "revision": "a767f3bbd2773a0bea34ff841b51ab64"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-navigation-preload.dev.js",
    "revision": "a8f30e409f7037906053acec7d709beb"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-navigation-preload.prod.js",
    "revision": "e2b19a3eda50f48ce7fc48640a523353"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-offline-ga.dev.js",
    "revision": "3fba0947d12d42834b81499fafc76e82"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-offline-ga.prod.js",
    "revision": "6af4fb51a5249c4e0ed7bc61ed59836d"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-precaching.dev.js",
    "revision": "8fbbefcd70c998a3cd35f02e6a8ac4e7"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-precaching.prod.js",
    "revision": "e8f5c57430ec7c448d30015ff4bd5896"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-range-requests.dev.js",
    "revision": "0f15c57cf5c75cc72b6f23ad28a941d1"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-range-requests.prod.js",
    "revision": "97c430406d13f4b91c805594ef351261"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-routing.dev.js",
    "revision": "471b8e0f45e6e5e679d04f60c6466e7f"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-routing.prod.js",
    "revision": "d3fa76a1c38649d596b1d2ffaf398128"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-strategies.dev.js",
    "revision": "d1c19737e82e2f6bd567aaf384683174"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-strategies.prod.js",
    "revision": "6033181992f0bc562ab1ef5f9ba34697"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-streams.dev.js",
    "revision": "eed9eb6f7b0672c45db5408d05efe9b9"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-streams.prod.js",
    "revision": "4407a13523f1fa1064f616e9047b6148"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-sw.js",
    "revision": "6e1e47d706556eac8524f396e785d4bb"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-window.dev.es5.mjs",
    "revision": "fc994f936328441cc31ce2c228c273e8"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-window.dev.mjs",
    "revision": "0660ff174ef790c3eb7b804303560220"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-window.dev.umd.js",
    "revision": "c17834573a1b48bb8cf33b12128bdae9"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-window.prod.es5.mjs",
    "revision": "869476238d69f1d95543f9019c9541c6"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-window.prod.mjs",
    "revision": "56cbbcdb311d6e4f35259abf7cc4fb10"
  },
  {
    "url": "libs/workbox-v4.3.1/workbox-window.prod.umd.js",
    "revision": "c65238721ed1187cf832e51a9e34724a"
  },
  {
    "url": "package-lock.json",
    "revision": "6f21b75cb4b4a3624ccd9c6d13176dc1"
  },
  {
    "url": "package.json",
    "revision": "a788e32bc5825385952d6fd9152e44de"
  },
  {
    "url": "README.md",
    "revision": "04d6526da807cfbebd36d08573ec720d"
  },
  {
    "url": "src-sw.js",
    "revision": "f1572f46a582b64881a17c1500010851"
  },
  {
    "url": "workbox-config.js",
    "revision": "7823015670bacd3b58d60ba05a5f3b3d"
  }
]);

// Cache the Google Fonts stylesheets with a stale while revalidate strategy.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    }),
  );
  
  // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    }),
  );
  
  workbox.routing.registerRoute(
    /\/node_modules\/pouchdb\/dist\/pouchdb.min.js$/,
    new workbox.strategies.NetworkFirst()
  );
  
  workbox.routing.registerRoute(
    /https:\/\/stockplaceholder\.herokuapp\.com/,
    new workbox.strategies.NetworkFirst()
  );