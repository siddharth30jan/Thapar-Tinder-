/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');

self.addEventListener('push', function(e) {
  var body;

  if (e.data) {
    body = e.data.text();
  } else {
    body = 'Push message no payload';
  }

  var options = {
    body: body,
    icon:'images/profile/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  e.waitUntil(
    self.registration.showNotification('TiNotifications', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('/')
  );
});


// curl "https://android.googleapis.com/gcm/send/fNBa0QhdJKw:APA91bFf_Ywj20An01jN6QGIq71KYEhKUvbdb6xelW5qnVqtIG-o63xceX328Ui9mDNHCCPPjXYzKJsu5RZA9L1OPz9qyP_0z0bg3Nzq9xRSlx0a1_R5U_32hwpXY0_0d_HLouyGhcKY" --request POST --header "TTL: 60" --header "Content-Length: 0" \
// --header "Authorization: key=AAAAkM3LSgk:APA91bFpggCzguLjh6TCHtM5RoiilWFqeItXSHOf7MFUgtu95U4c2z8yWWD7ljECwtCHpCmgHBmM6EHvVKuufDvRcp4YaLhAMQ4K-Ob382vk2JC7kNTWIoUt1Pob35oTf8XX90wAqxYU"


if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.precaching.precacheAndRoute([
  {
    "url": "css/loader2.css",
    "revision": "daef4bf301f8a621e27bf52c819dd7cf"
  },
  {
    "url": "css/login.css",
    "revision": "e4161a48034ba6112a2fdc6650d32dc9"
  },
  {
    "url": "css/main.css",
    "revision": "0c05cfb765f9d6b21ec89f6631cdd0fc"
  },
  {
    "url": "css/signup.css",
    "revision": "6c03adc9cfa44529578540328cae8c0f"
  },
  {
    "url": "index.html",
    "revision": "8c31d0b3f574f1f6834fca6f9c599f3c"
  },
  {
    "url": "js/main.js",
    "revision": "916a7cf539cd969dcfe2e1aa0984c104"
  },
  {
    "url": "images/profile/icon-128x128.png",
    "revision": "cb108b6d834090e73120bd77c15a94de"
  },
  {
    "url": "images/profile/icon-192x192.png",
    "revision": "08795b494274d4d2da8283ae7a0cc440"
  },
  {
    "url": "images/profile/icon-256x256.png",
    "revision": "eb1129fa440aff520472864c288a555e"
  },
  {
    "url": "images/profile/icon-384x384.png",
    "revision": "eb1129fa440aff520472864c288a555e"
  },
  {
    "url": "images/profile/icon-512x512.png",
    "revision": "fe05bb251ad95c81365722670073bda0"
  },
  {
    "url": "images/profile/logo.png",
    "revision": "0cc7f7d721d8f5531dd89e56c8f8d0ee"
  },
  {
    "url": "images/touch/images/main_logo.png",
    "revision": "a46eb884bc677e89a10fb2188feb2f43"
  },
  {
    "url": "images/touch/images/r1.gif",
    "revision": "d14387806970f457621a91a76dc21cf4"
  },
  {
    "url": "images/touch/images/try.webp",
    "revision": "609a8bf3f77c5c3ab0839ffa7200b2a3"
  },
  {
    "url": "images/touch/images/tulogo.png",
    "revision": "30d162d8975e458f1b93c85529d8cc5d"
  },
  {
    "url": "images/touch/images/uparrow.png",
    "revision": "4589c8a234bf9cb1aaf13672a3a827be"
  },
  {
    "url": "img/close-eye.png",
    "revision": "ba87e696450954bee603fc3b136d46f0"
  },
  {
    "url": "img/gear-settings.png",
    "revision": "72cad923a3d978360817c633f705d7ce"
  },
  {
    "url": "img/internship.png",
    "revision": "b0cb6567c0156f5875b3874297d8d430"
  },
  {
    "url": "img/open-eye.png",
    "revision": "df6005c4a3c66e1f87fea8944033cc7f"
  },
  {
    "url": "img/attachments/HOME FINAL.jpg",
    "revision": "0802602e2b549fe836a753a7bd70555c"
  },
  {
    "url": "img/attachments/link.jpg",
    "revision": "352975c952fd309adcfef806e2e5f4e9"
  },
  {
    "url": "img/attachments/Profile final.jpg",
    "revision": "8a42981a4dc9610be3243db76a104f0d"
  },
  {
    "url": "img/attachments/search final.jpg",
    "revision": "c3c3d0cf7de80d16d020793129eb2437"
  },
  {
    "url": "manifest.json",
    "revision": "11ee861d1528880533b4167952f7efed"
  }
]);

  // const showNotification = () => {
  //   self.registration.showNotification('Background sync success!', {
  //     body: '🎉`🎉`🎉`'
  //   });
  // };

  // const bgSyncPlugin = new workbox.backgroundSync.Plugin(
  //   'dashboardr-queue',
  //   {
  //     callbacks: {
  //       queueDidReplay: showNotification
  //       // other types of callbacks could go here
  //     }
  //   }
  // );

  // const networkWithBackgroundSync = new workbox.strategies.NetworkOnly({
  //   plugins: [bgSyncPlugin],
  // });

  // workbox.routing.registerRoute(
  //   /\/api\/add/,
  //   networkWithBackgroundSync,
  //   'POST'
  // );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}