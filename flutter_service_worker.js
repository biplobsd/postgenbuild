'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "17b619cd3e9c151330286f1546a23636",
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
".git/index": "3e96ab557745a1fa3b7f7cea73e769c0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "12614bca65a3d1ae80d6124d1ff0ba44",
".git/logs/refs/heads/main": "6cc45e97b12b2f94a545bbaf0d06911d",
".git/logs/refs/remotes/origin/main": "420f4099505505dc5e8c17a3a96e7fde",
".git/objects/01/7cc0cf59f6da5c410eb390fbd86f2499e9e525": "740b931bd6d3d3a456f1e439419d5a38",
".git/objects/03/d49b940b8c0dc945639fdbf5e8ce8c2f659414": "a020c3520dea94bb4e5e305f89292917",
".git/objects/08/738f32d981b407a47d4f540aff69efc699f3df": "de00c4f34a21840e1ea61d23b8b8e9f0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/2e2b81529bbc4b37ed404cec5d516b5fe22d38": "74501cdad324a6ef2cb3a6fa083cd3e1",
".git/objects/17/6267c2fc0ce32278f453ed71d62824486abb71": "5c6d3df564d1b5f4ec3749c4204db144",
".git/objects/1e/1a31bca96b714c6c2705c9d9399fafd7806f77": "27d75bc7f7a3956b1bff304a91fb535d",
".git/objects/21/97006e0bbb0a83325d922e543be2b09c50cf04": "14210318712162eba0aa50199b224d6d",
".git/objects/21/e77b7ae2c81bba34dea7ba6aa89d0759e826ed": "75103caef507aeeb8d636d007357db38",
".git/objects/24/188ae2c1eedb403be98158d77e738eac4c877e": "c27f2f029384f5a263841c32bcdbfe9b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/e4ffe229341e974d4e61afa7698ea41327beee": "9f9d6d80ac3e294e80c26df8775b1615",
".git/objects/25/eefd316aa63afe8fc4b6efe59eae2101c0bbb0": "d2d6b88577280a0581ea7273ef43eb32",
".git/objects/26/f7f464c5a63f5d1c7458195bc8c158653d7506": "fbcace57b867fa48109ca471c0ed0bdf",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/cf3bcedeacc109bc4abaa16c401a37dad36ed4": "aafe168b139a70d3aabd7a037c7973c0",
".git/objects/32/f48ea309b9d2cd9df556269da43739bde1fae4": "26e5fb1c321b224e708b7cd0a26e039c",
".git/objects/33/5d8ccba0799e11ead5de6a0459f2c52b6a6a97": "a52dcf8e136d3c14feacf21870cabcee",
".git/objects/33/e9f3aa50dbf54bb31da502a90d7d42407052da": "32b4aea947b95436dfedd4b73afcc668",
".git/objects/35/07f89af6f57e3a41702aa9b75240e50a8143c0": "900d73d02a1b94817511d6fb9c650693",
".git/objects/37/99141195e25e2d174173114695148020f84379": "7ba90593d8af101f8601172fcb08ffbf",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/b0117561814a64fb376601027c94927044c591": "71baa7d418b00f7da432a2951112f0a3",
".git/objects/40/6e67aaee56e515b9fc523e026abf1e6d2f16f1": "99a4eb3a0e63474caadefc26a99e671a",
".git/objects/46/f09c9d906fbb203ee348e55c294247b6554b81": "27b8b851dea00edc62122c5f06545f08",
".git/objects/47/9ddcde3b51bcd5b6eec93a08a1431aeaab5260": "605b60f63c99ec123cb167ab2f41144a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/56/551799fb0b5da1e3651dbd5ed67fe762a6b6b4": "4b4a9df8fa54786beacc5a28ac1deff6",
".git/objects/56/79b35c8528dc5ee8d83e9ed32133043bda24b5": "b9ebf521aebbfd3eade749e173a101d6",
".git/objects/58/c1949cad8f5c510ca40c931327df1d210b5cb5": "6d023c68b1d69cb967cae115c0d6b5b3",
".git/objects/59/5cabc2d3da972527ac772c0c7ea8c08088b067": "1b2c65f0daea273f8bc809a917109f6b",
".git/objects/5d/9b1e4561278076209a96b684c164a9ddfbc1f9": "5b87dfc0509b8d364f5d67d03053b0df",
".git/objects/5e/2ea411e3371b38fc05168c6436415e371f2317": "6e94d4e5bcef31b701734b609e06d1ed",
".git/objects/68/cb34f24db1017669c2decbc9e72c9454971c45": "a2f8d703f5cd0d038aa44987d57fb549",
".git/objects/6a/4340de3bd009f04c3a274ad4295359b0b53fb0": "340f6ea15380b66e03dc4117b90b1b61",
".git/objects/6d/8bc9b5a9d51c45177b24db99cd6a254bc4eedb": "cdb7c4f1a06aca0ccffef7676a6c47ec",
".git/objects/6f/6b8b5d1d311c196fa3070c1283c7296140774b": "ede5af0077e56009eb1043bd1cf57016",
".git/objects/73/3bb541a4e771706c5d4c68a64ec1ac40d8f036": "a03030b3858ab7ed04133b72157eee1c",
".git/objects/74/1a12904e2853d67d3a259e5fd621b0c117e58f": "56f98de2283ec1a74d476998a7955518",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/7f/b3576db8fe1d75f565f606add322a8d808de1e": "eb36e7f9f33ce58888ab12e7920108e9",
".git/objects/82/5d6ffa2358b6c9d7d202d54a353486268663f1": "d513f0f53f886646522f03929f8fb62a",
".git/objects/82/aa0f4e3118f3f70c0c0257b3971f9fe7a9b71d": "e4a43bde99cb4037772009c8fe6f0021",
".git/objects/83/276a5d67e71028bc50000abb70945a17959d26": "d187f51a81fcf833a548dd083beb880d",
".git/objects/85/e525fff710894c22adb34ecabfd3b07e42570b": "7eb49e963e7aed91fdd12ecde70cdeca",
".git/objects/86/97259fcc752dbf5f2418cee1f1b67546b4063e": "7cf6b5c7ff573c4e3ca2ea24e366e482",
".git/objects/87/7df331ff92601c05bd910e3737652e45b8bdb8": "2bdcdea9fcf4be0d533d029e971e51bb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c4ee636ce2b0da1fa89c51d9f24f3a83785bc0": "8d423f1cb5a7707ec87e0caaa3d53632",
".git/objects/8c/e9de5480caadd0ca3a72e5fe7c07bc59f2d4b3": "61c5be0f58be9f742515104bf5e3241f",
".git/objects/8e/894a4d18244773b390492da52abab783445e6d": "d2e1fbf3c783e916798b454c82601485",
".git/objects/91/c316db9ac76712bec2a9265d26a44b376761ac": "755289af0801210157f32dfc18f3be3a",
".git/objects/92/00ddbf010d5825ccaf097ebd60938715637729": "c27f268b97dbfd34d6aac92fbafe4046",
".git/objects/92/410deb845a0770460858634094a5fb4a454820": "040796fad49af823e8bebbaa26967815",
".git/objects/93/961089a2c955f4e1334c80dfd81c5fe71f9039": "00141e64c055dc22a63879475c099419",
".git/objects/94/53bc7fc6e7b33aaeb83b3f397d06dfa1c5db56": "bfb16a40372f11cb5698cfe6a0ac56fb",
".git/objects/94/cfc80f3c89104a124e7433564884b240a346e2": "b52ee6eb7d87f185e17bfbb62c07be17",
".git/objects/95/cc312e1089f652ecd9902d469dd0ae8270292e": "9b8f05c37ed199935f26819565d2d062",
".git/objects/9b/596cd8a267dbf2d1f9a27011ac18c345505112": "b6383c9cec518f6baa48cb64de835ca8",
".git/objects/9d/243f417e17e869420259823229c7d95e60ca8b": "f9e2ae71699ffe46d804093e05fb0420",
".git/objects/a6/76dcf644046ba6ede158d048c949bbd386dc6d": "56463e50ceccf2169e95e12874c7b088",
".git/objects/aa/93257944391ad82bdfaa0d974c667fe5f23794": "784dd35a19adbd73a63389afa30faa25",
".git/objects/b0/a2ac20c0b07b471f740170ae23dbf017e05d50": "bfedce9066334812831728e9dabb66fd",
".git/objects/b2/9eb87b51f8c21ea95a97d051f9aca1aede2c5e": "f354b2a5a3d48bf9180a0a97c3eeeccb",
".git/objects/b2/b2bc7446b1ac0cabedafeed3861cc028e373d3": "a99e0d54101fdb7c40219d7e3752cd3b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/295e0f8d1ba8c2fa6c37d26980c645058589ad": "3d67726e5624ac05e2c6e4804d250b9a",
".git/objects/b8/7e955857b33fc54c06e4b7739e23be5ace82f4": "77d497e307555a605c0fac816903b86e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/72cd4e40126a7dfab52964b3ba478030ff836a": "01cd6aa6c684d6ea100dda4008f9646c",
".git/objects/bb/6ed10577a9610d9fe30d0875b0bdf59644497a": "1a940691fc80ce14280ff0d422604c1a",
".git/objects/be/e69b8411682879ac390cae4b730fc2814f4cf6": "3c57db31e9e1e6250c78a075fdb46a90",
".git/objects/bf/0614f5e1ff56b5e87daf3290405654c931cfbf": "2a6736ca1dee5d44ce0559cbe6f1ad89",
".git/objects/c2/9ae1dfb950d280ff5100de016ad01f6e85b270": "0ce083bd9df6f6ba6cb6f58332a6c073",
".git/objects/c3/18c8f416dffd0982a084105cbd60e11e97d965": "7d9c2b3e88e276c53d7cf94aa6c51612",
".git/objects/cb/59239e3b4cc1e59535d64c7ab1daf29e0f046d": "7ade5e5269f1435376d6c758d7762dd5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/a7a47fa7e1dc1fcd95cc75088cf7499a304a75": "c4094328b7629f8a2dee04f21c25a497",
".git/objects/ce/af025cefe6fb5d97c91692e6ce24b99593fa60": "44340d7db91e444d81d7b54d506a8fbb",
".git/objects/d2/6dd7b289ad0a5ca2a738055bb566dc3683657c": "befb72dc86120e6aa1764936c6b16c1d",
".git/objects/d3/433c16b3382b8e5fb603006d7c1c2104ae9212": "ea858cfba8bef6af561d0250fc57f041",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5c41a31adf4dab3de0d3faba678d66e2420f77": "669e0602b5829a425031799c8300b77d",
".git/objects/db/c33c6f7132ee767b4c15f1812637be41a0419c": "873f360434d8afd9d1cf995735c43bb6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/c3e598dfcac95750865ffc8abc5144e66fbebe": "85d59670eb7144a1479359c02bb2c8e7",
".git/objects/e3/7c0f44edc1309a17e4b4554856d219c61820b4": "81eb216d80f6e16830fc4132a6ad5150",
".git/objects/e6/0ea1fdebe5fa8430497474d38200cdb2fa61a6": "9f37e45afbd9670201eef397142dcd48",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/8b2421351c7c80e5cce4c0eed7c2e23a3b0306": "78ba1eea36ecc38c6e94713b8231ce69",
".git/objects/f3/92bb78f1f66aa105e4ffb4ee8368bbe1f441cd": "e9d9eb6af68e3038138f0b0a8c82e44d",
".git/objects/f7/fb215fa41c035e5d2ecc591a3cb1b64361ca17": "3d142bf12994b8a83d37cccab5758991",
".git/objects/f8/fcc014752242bc06600ede45e1c62a31e20dce": "373a707373e61131a77ef3bb75035949",
".git/objects/fd/4d850beea5216e8afa4e39d1a7e2fc95750863": "d01c8059c1ade8188bf298ff23cd03ad",
".git/refs/heads/main": "3030617e60ed15640b68d176eff02275",
".git/refs/remotes/origin/main": "3030617e60ed15640b68d176eff02275",
"assets/AssetManifest.json": "9238b3fd8c4b00169cc7228a902f2730",
"assets/assets/logo.json": "92489f240aa6000820e6c228a02a1fc4",
"assets/assets/logo.png": "9c5aad22c16d0efcd55abd91d0379bb8",
"assets/assets/splash.png": "fd21cee2fe175e45caac0e0c7740da98",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "14c441af5cfae2b812af4af050946cfb",
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
"index.html": "7f9056421a16064b0b69d22d73b45c0e",
"/": "7f9056421a16064b0b69d22d73b45c0e",
"main.dart.js": "b4f1007d5fae0b803a8a0c11a393e530",
"manifest.json": "6e46970bd53f45e3e0e5ef09a47f3da4",
"splash/img/dark-4x.png": "f062522aa1e54bb839386993a158bf31",
"splash/img/light-4x.png": "f062522aa1e54bb839386993a158bf31",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "4e802ea1201357b3c3fc880552010630",
"version.json": "de65204b8d3e81313b977977a792a9fa"
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
