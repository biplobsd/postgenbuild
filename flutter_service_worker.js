'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1e76b18183b83e175a84bde3488309c8",
".git/config": "8cf87c27e717f8ed96ad8140a045b925",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6c5529a9ee228cecd85ed346b9bac0bd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "40f6cc2bd3fa40985bc34ca1b5aeef02",
".git/logs/refs/heads/main": "285c5ee03a4585f918fd0bbe41674760",
".git/logs/refs/remotes/origin/main": "c863ad8e0774ae3e3754a9bd0782ddd6",
".git/objects/01/7cc0cf59f6da5c410eb390fbd86f2499e9e525": "740b931bd6d3d3a456f1e439419d5a38",
".git/objects/08/738f32d981b407a47d4f540aff69efc699f3df": "de00c4f34a21840e1ea61d23b8b8e9f0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/17/6267c2fc0ce32278f453ed71d62824486abb71": "5c6d3df564d1b5f4ec3749c4204db144",
".git/objects/21/e77b7ae2c81bba34dea7ba6aa89d0759e826ed": "75103caef507aeeb8d636d007357db38",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/eefd316aa63afe8fc4b6efe59eae2101c0bbb0": "d2d6b88577280a0581ea7273ef43eb32",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/cf3bcedeacc109bc4abaa16c401a37dad36ed4": "aafe168b139a70d3aabd7a037c7973c0",
".git/objects/32/f48ea309b9d2cd9df556269da43739bde1fae4": "26e5fb1c321b224e708b7cd0a26e039c",
".git/objects/33/5d8ccba0799e11ead5de6a0459f2c52b6a6a97": "a52dcf8e136d3c14feacf21870cabcee",
".git/objects/33/e9f3aa50dbf54bb31da502a90d7d42407052da": "32b4aea947b95436dfedd4b73afcc668",
".git/objects/37/99141195e25e2d174173114695148020f84379": "7ba90593d8af101f8601172fcb08ffbf",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/b0117561814a64fb376601027c94927044c591": "71baa7d418b00f7da432a2951112f0a3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/58/c1949cad8f5c510ca40c931327df1d210b5cb5": "6d023c68b1d69cb967cae115c0d6b5b3",
".git/objects/59/5cabc2d3da972527ac772c0c7ea8c08088b067": "1b2c65f0daea273f8bc809a917109f6b",
".git/objects/5d/9b1e4561278076209a96b684c164a9ddfbc1f9": "5b87dfc0509b8d364f5d67d03053b0df",
".git/objects/6a/4340de3bd009f04c3a274ad4295359b0b53fb0": "340f6ea15380b66e03dc4117b90b1b61",
".git/objects/6f/6b8b5d1d311c196fa3070c1283c7296140774b": "ede5af0077e56009eb1043bd1cf57016",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/7f/b3576db8fe1d75f565f606add322a8d808de1e": "eb36e7f9f33ce58888ab12e7920108e9",
".git/objects/82/aa0f4e3118f3f70c0c0257b3971f9fe7a9b71d": "e4a43bde99cb4037772009c8fe6f0021",
".git/objects/86/97259fcc752dbf5f2418cee1f1b67546b4063e": "7cf6b5c7ff573c4e3ca2ea24e366e482",
".git/objects/87/7df331ff92601c05bd910e3737652e45b8bdb8": "2bdcdea9fcf4be0d533d029e971e51bb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/894a4d18244773b390492da52abab783445e6d": "d2e1fbf3c783e916798b454c82601485",
".git/objects/92/00ddbf010d5825ccaf097ebd60938715637729": "c27f268b97dbfd34d6aac92fbafe4046",
".git/objects/92/410deb845a0770460858634094a5fb4a454820": "040796fad49af823e8bebbaa26967815",
".git/objects/95/cc312e1089f652ecd9902d469dd0ae8270292e": "9b8f05c37ed199935f26819565d2d062",
".git/objects/9b/596cd8a267dbf2d1f9a27011ac18c345505112": "b6383c9cec518f6baa48cb64de835ca8",
".git/objects/a6/76dcf644046ba6ede158d048c949bbd386dc6d": "56463e50ceccf2169e95e12874c7b088",
".git/objects/b2/b2bc7446b1ac0cabedafeed3861cc028e373d3": "a99e0d54101fdb7c40219d7e3752cd3b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/295e0f8d1ba8c2fa6c37d26980c645058589ad": "3d67726e5624ac05e2c6e4804d250b9a",
".git/objects/b8/7e955857b33fc54c06e4b7739e23be5ace82f4": "77d497e307555a605c0fac816903b86e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/72cd4e40126a7dfab52964b3ba478030ff836a": "01cd6aa6c684d6ea100dda4008f9646c",
".git/objects/bb/6ed10577a9610d9fe30d0875b0bdf59644497a": "1a940691fc80ce14280ff0d422604c1a",
".git/objects/c2/9ae1dfb950d280ff5100de016ad01f6e85b270": "0ce083bd9df6f6ba6cb6f58332a6c073",
".git/objects/c3/18c8f416dffd0982a084105cbd60e11e97d965": "7d9c2b3e88e276c53d7cf94aa6c51612",
".git/objects/cb/59239e3b4cc1e59535d64c7ab1daf29e0f046d": "7ade5e5269f1435376d6c758d7762dd5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/af025cefe6fb5d97c91692e6ce24b99593fa60": "44340d7db91e444d81d7b54d506a8fbb",
".git/objects/d2/6dd7b289ad0a5ca2a738055bb566dc3683657c": "befb72dc86120e6aa1764936c6b16c1d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/c33c6f7132ee767b4c15f1812637be41a0419c": "873f360434d8afd9d1cf995735c43bb6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e6/0ea1fdebe5fa8430497474d38200cdb2fa61a6": "9f37e45afbd9670201eef397142dcd48",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/fb215fa41c035e5d2ecc591a3cb1b64361ca17": "3d142bf12994b8a83d37cccab5758991",
".git/refs/heads/main": "c37d593cd853fac9942a986c1c07753e",
".git/refs/remotes/origin/main": "c37d593cd853fac9942a986c1c07753e",
"assets/AssetManifest.json": "ee88a7a4e5ef01d1b9a6570952df89a8",
"assets/assets/logo.json": "92489f240aa6000820e6c228a02a1fc4",
"assets/assets/logo.png": "9c5aad22c16d0efcd55abd91d0379bb8",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "82478bc9acc5b51e8b3b20d655f4a062",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "fc32e2aeae57a9718b3579b8a4864a9c",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "551617976e4c3ed884fe181b78b7f21d",
"icons/Icon-512.png": "56edc301c61c0c2f51e9c7625fe2eb35",
"icons/Icon-maskable-192.png": "551617976e4c3ed884fe181b78b7f21d",
"icons/Icon-maskable-512.png": "56edc301c61c0c2f51e9c7625fe2eb35",
"index.html": "f08796198cc89c53f55d2d77e34d024d",
"/": "f08796198cc89c53f55d2d77e34d024d",
"main.dart.js": "e7b0c46ab60685739906c5ddd4e09d08",
"manifest.json": "6e46970bd53f45e3e0e5ef09a47f3da4",
"splash/style.css": "efebcbe454705c34272a7366fbae05bd",
"version.json": "bc804bbf53b2abf0aa55019752629319"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
