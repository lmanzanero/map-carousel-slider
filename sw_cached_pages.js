const cacheName = 'v1';

const cacheAssets = [
  '/',
  'index.html', 
  '/css/style.css',
  '/js/main.js',
  '/map-pin.png',
  '/arial.jpg',
  '/assets/caves_branch_final_2/Pool/Pool-1512122_CO_019(1).jpg', 
  '/assets/caves_branch_final_2/Pool/Pool-cbjl_dh-1021(1).jpg',
  '/assets/caves_branch_final_2/Cheese House/Caves Branch-1.jpg', 
  '/assets/caves_branch_final_2/Cheese House/CheeseCavesBranch2014_85(1).jpg',
  '/assets/caves_branch_final_2/Botanical/Botanical-Botanical 1_ch(1).jpg', 
  '/assets/caves_branch_final_2/Botanical/Botanical-Botanical 2(1).jpg', 
  '/assets/caves_branch_final_2/Botanical/Botanical-P1160083(1).jpg',
  '/assets/caves_branch_final_2/Welcome Centre/ReceptionP1070317(1).jpg',
  '/assets/caves_branch_final_2/Welcome Centre/ReceptionP1070337(1).jpg',
  '/assets/caves_branch_final_2/Welcome Centre/Receptionunnamed-2(1).jpg',
  '/assets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-3.jpg',
  '/assets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-2.jpg',
  '/assets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-4.jpg',
  '/assets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-1.jpg',
  '/assets/caves_branch_final_2/Jungle Bungalow/Bungalow-Bungalow outside 1(1).jpg',
  '/assets/caves_branch_final_2/Jungle Bungalow/Bungalow-caves_branch_jungle_lodge-belize-13.jpg',
  '/assets/caves_branch_final_2/Jungle Cabana/Cabana-Jungle Cabana SEscalante 2(1).jpg',
  '/assets/caves_branch_final_2/Jungle Cabana/Cabana-P1160138(1).jpg',
  '/assets/caves_branch_final_2/Jungle Cabana/Cabana-P1160143(1).jpg',
  '/assets/caves_branch_final_2/Jungle Cabana/Cabana-P1160147(1).jpg',
  '/assets/caves_branch_final_2/Canopy Tree house/Canopy-Tree-House-Canopy Hot Tub(1).jpg',
  '/assets/caves_branch_final_2/Canopy Tree house/Canopy-Tree-House-Canopy(1).jpg',
  '/assets/caves_branch_final_2/Canopy Tree house/Canopy-Tree-House-cbjl400-1006(1).jpg',  
  '/assets/caves_branch_final_2/Canopy Tree house/cbjl400_rework-1026.jpg',
  '/assets/caves_branch_final_2/Jungle Gazebo/GazeboP1130113(1).jpg',
  '/assets/caves_branch_final_2/1 Bedroom River view treehouse/caves_branch_jungle_lodge-belize-17.jpg',
  '/assets/caves_branch_final_2/2 Bedroom River view treehouse/River-Tree-House-2Bed-the test pic_(1).jpg',
  '/assets/caves_branch_final_2/Jungle Suite/caves_branch_jungle_lodge-belize-12.jpg',
  '/assets/caves_branch_final_2/Jungle Suite/Suite-cbjl_dh-1027(1).jpg',
  '/assets/caves_branch_final_2/Jungle Suite/Suite-Suite garden 2(1).jpg',
  '/assets/caves_branch_final_2/Jungle Suite/Suite-Suite(1).jpg',
  '/assets/caves_branch_final_2/Cave Tubing/Tubing-Copy of tubing(1).jpg',
  '/assets/caves_branch_final_2/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0004(1).jpg',
  '/assets/caves_branch_final_2/Cave Tubing/Tubing-Copy of tubing(1).jpg',
  '/assets/caves_branch_final_2/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0004(1).jpg', 
  '/assets/caves_branch_final_2/Black Hole drop/Black Hole_ch-2(1).jpg',
  '/assets/caves_branch_final_2/Black Hole drop/Black-hole-1009171_CO_0047.jpg',
  '/assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0138-2.jpg',
  '/assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0150-2.jpg',
  '/assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0156-2.jpg',
  '/assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0235.jpg',
  '/assets/caves_branch_final_2/River cave Exp/River-CaveCave tubing IMG_3259-2.jpg',
  '/assets/caves_branch_final_2/Waterfall Cave Exp/Waterfall-Cave-_MG_8085(1).jpg',
  '/assets/caves_branch_final_2/Waterfall Cave Exp/waterfall-cave1009171_CO_0358 (2).jpg'
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
