'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5c33728951f45ecc94f7eafde2d368f7",
"splash/logo.png": "55a50a65c49cb5f2cfa00bddb18e9410",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "73202bf0617fd86b0ecb2fe5e3bcff05",
"index.html": "d02c15ccf643dcbe03d2d7d9c50bdf58",
"/": "8d82d18d2658156777070b8cf4bd866b",
"main.dart.js": "21ad9ebf06450b2fc703ba5a636710fe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d6f3789ea3857bbd68c1291b7388ecbe",
"assets/AssetManifest.json": "1c9eda133dbb8951f9d4474e57b36f29",
"assets/NOTICES": "461d47d8fd8b145e5fab666b663d0015",
"assets/FontManifest.json": "acfaefda8cb90ea1f4da718edd064dcc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/CustomIcons.ttf": "2b6620b65feff0ccbb4b52458309f6e2",
"assets/assets/index.html": "8d82d18d2658156777070b8cf4bd866b",
"assets/assets/images/person_circle.svg": "dd0df25329ea4906d3084e6abc5e1348",
"assets/assets/images/menu_bg.jpeg": "8a95885c6263b50074447d6ba7cf245c",
"assets/assets/images/twitterlogo.jpg": "f781719ebe1bc693c634509c51d2bf00",
"assets/assets/images/person.svg": "5f481b2653b3a4f98e9cffb6348dadf7",
"assets/assets/images/FB-2.png": "d9abd8fd4f1bfe6f9ab3a904a6248482",
"assets/assets/images/logout.svg": "f5d69802881b4ddc1976877f0d943feb",
"assets/assets/images/bookmark_plus.svg": "c95717e6c86ec8fbdccb4cb89f8628d4",
"assets/assets/images/tag.svg": "23b5fffc282fa8ce8d935ab6b23f5dd6",
"assets/assets/images/arrow_back.svg": "d7056b618f9606c055cbd23c27e808a6",
"assets/assets/images/ulogo.png": "aac5f2ca0f89e727378cbf5496096b22",
"assets/assets/images/user_status.svg": "66b97b9cde14a763120b75daf8477f43",
"assets/assets/images/ulogo.jpg": "ece12ca6d0c0898694dee06852f36f8a",
"assets/assets/images/GP.png": "e51d438dc2f187644f1164741dc5a5b8",
"assets/assets/images/user.png": "a19c7d4bb9c368fc49a6a8e66b9f8623",
"assets/assets/images/funnel.svg": "76c3a2d70e598f6af95cf47c5f1c5c88",
"assets/assets/images/logo1.jpeg": "1c01a8a533a4093f17ba27a331de9fa0",
"assets/assets/images/googlelogo.png": "a71287b6208aba540472f58d3e6db77e",
"assets/assets/images/gear.svg": "f142545c2a66146ecedbd18c7fce0aeb",
"assets/assets/images/speedometer.svg": "3399f6ae46b83e88eeea480a2e3360ba",
"assets/assets/images/people.svg": "172ce8ec296098b6af36640dfa9760ff",
"assets/assets/images/person_plus.svg": "4cfb60dae90e9b7c3266310ecfe88389",
"assets/assets/images/back_bg.png": "8c2e564ca6b6bcd1159f0bba8c8f3fce",
"assets/assets/images/logo.png": "30e7d7b56f23c64f3b6765bd6df411c6",
"assets/assets/images/apple_icon.png": "5fe4f11280a7765f623658293474649b",
"assets/assets/images/expand_logo.png": "7ecf1c22378e3961064cd24593555cae",
"assets/assets/images/edit.svg": "5ed85260191701fe68dfc5db123782e1",
"assets/assets/images/plus_circle.svg": "da5b7948e12ead925f16e5b36edbf926",
"assets/assets/images/delete.svg": "8db4e757ae6c3d66dfb70339911a8eef",
"assets/assets/images/powered_by.png": "bd0a95175564f56f19faa6fe7a16d193",
"assets/assets/images/fblogo.jpg": "def9605cd1ca41de96da0d04fae3a7b6",
"assets/assets/images/eye.svg": "0fcc1944eba8716d478967c690ec7072",
"assets/assets/images/ic_imslogo.png": "9a69aca1d776d43f68b1dd218b5a0175",
"assets/assets/images/gmailogo.jpg": "fd20f349aaf833fa72f58f606c116454",
"assets/assets/images/calendar_plus.svg": "f92d5bab5373c4fc1de17dbaa714c5fe",
"assets/assets/images/help.svg": "8c6f9b66b1f6e3ee3edda77c38149e10",
"assets/assets/images/login_bg.jpeg": "e9ea5f5445cac42ab4d6352504c9c236",
"assets/assets/userlist.json": "4476b2f5b723e5c5666d1cd9f2561a67"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
