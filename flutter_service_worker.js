'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "43ad34c506b1f0056e7ba87ad0318ba8",
"/index.html": "2cd2f5f3ac6a989d046f058b40dd98d1",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "b2c5251c25a93a937b2a36b427eea1bd",
"/assets/AssetManifest.json": "a044c37cf281781513d6e5fb3ae615f1",
"/assets/assets/fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"/assets/assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"/assets/assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"/assets/assets/fonts/OotmIconPack.ttf": "2d0c3bfa77a7fdc5629808b95008fee4",
"/assets/assets/graphics/Harmo%25201.png": "a19a4981b190ace4b869c7b99d935060",
"/assets/assets/graphics/Info%25202.png": "a112d0143d4387f46b5c16b1f4fe7b58",
"/assets/assets/graphics/Info%25203.png": "65c9907c81ba2f2732e2a6c0995f0659",
"/assets/assets/graphics/3.0x/Harmo%25201.png": "c23b68e4eece949882ccef96f4131108",
"/assets/assets/graphics/3.0x/Info%25202.png": "bfacd43e51de740615ad95f6f8ce53bc",
"/assets/assets/graphics/3.0x/Info%25203.png": "da4e9a404fe4a7623411612f2ce6ae18",
"/assets/assets/graphics/3.0x/Harmo%25202.png": "eda992f5d2bcdb4276b75205bbe905ba",
"/assets/assets/graphics/3.0x/Info%25201.png": "61d7320dbab2a3c729045d6a6da05984",
"/assets/assets/graphics/3.0x/Harmo%25203.png": "241299fba26eeea939ab5062d3a1d00e",
"/assets/assets/graphics/Harmo%25202.png": "b5f56543186d5e98a3ad80c78c4d2d46",
"/assets/assets/graphics/Info%25201.png": "4edfb854219c0dfa67dcb8e26c8e8e7b",
"/assets/assets/graphics/2.0x/Harmo%25201.png": "364d56ed76944824710e8a22220da3b7",
"/assets/assets/graphics/2.0x/Info%25202.png": "ea0d23fe07cf36c28a53ee7ba0c67e10",
"/assets/assets/graphics/2.0x/Info%25203.png": "8156c1402bafe415f3d521dec14d3864",
"/assets/assets/graphics/2.0x/Harmo%25202.png": "85baaae0caf964e32c77f753c247b090",
"/assets/assets/graphics/2.0x/Info%25201.png": "d08844f1df656829ed1495eeb6d82d36",
"/assets/assets/graphics/2.0x/Harmo%25203.png": "bd83a9dd7be126be8db2256a59d0782d",
"/assets/assets/graphics/Harmo%25203.png": "89044bd783c509c6d0f92ced0d0a50af",
"/assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/FontManifest.json": "a5f7b562595332c9aee317cf4f623816"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
