const cacheName = 'v1';

const cacheAssets = [
  '/',
  'index.html', 
  '/css/style.css',
  '/js/main.js',
  'assets/caves_branch_final_2/Pool/Pool-1512122_CO_019(1).jpg', 
  'assets/caves_branch_final_2/Pool/Pool-cbjl_dh-1021(1).jpg',
  'assets/caves_branch_final_2/Cheese House/Caves Branch-1.jpg', 
  'assets/caves_branch_final_2/Cheese House/CheeseCavesBranch2014_85(1).jpg',
  'assets/caves_branch_final_2/Botanical/Botanical-Botanical 1_ch(1).jpg', 
  'assets/caves_branch_final_2/Botanical/Botanical-Botanical 2(1).jpg', 
  'assets/caves_branch_final_2/Botanical/Botanical-P1160083(1).jpg'
];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
