const CACHE_NAME = 'bruto-card-v13';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './plastique.ttf',
    './bruto_adoptado.jpg',
    './bruto_callejero.jpg',
    './bruto_pic_1.jpg',
    './bruto_pic_2.jpg',
    './bruto_pic_3.jpg',
    './bruto_pic_4.jpg',
    './bruto_pic_5.jpg',
    './textura_chapa.png',
    './manchas_taller.png',
    './manifest.json',
    './grafitti_mancha.png',
    './favicon.png',
    './bruto_icon_512.png'
];

// Instalar Service Worker y cachear recursos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Cacheando recursos estáticos...');
                return cache.addAll(ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activar y remover cachés antiguas
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Limpiando caché obsoleta...', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Estrategia Cache-First (con actualización en segundo plano)
self.addEventListener('fetch', event => {
    // Solo cachear peticiones de tipo GET
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    const isGoogleFont = url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com');
    const isSameOrigin = event.request.url.startsWith(self.location.origin);
    const shouldCache = isSameOrigin || isGoogleFont;

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Si está en caché, devolverlo y refrescar en segundo plano para la próxima vez
                    fetch(event.request).then(networkResponse => {
                        if (networkResponse.status === 200 && shouldCache) {
                            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
                        }
                    }).catch(() => { /* ignorar fallo de red silenciosamente */ });
                    return cachedResponse;
                }

                // Si no está en caché, pedirlo de la red y guardarlo
                return fetch(event.request).then(networkResponse => {
                    if (!networkResponse || networkResponse.status !== 200 || 
                        (networkResponse.type !== 'basic' && networkResponse.type !== 'cors')) {
                        return networkResponse;
                    }
                    
                    const responseToCache = networkResponse.clone();
                    if (shouldCache) {
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                });
            })
            .catch(() => {
                // Si la red falla y no hay caché, retornar index.html si es navegación HTML
                if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
                    return caches.match('./index.html');
                }
            })
    );
});
