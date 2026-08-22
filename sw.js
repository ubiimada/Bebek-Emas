self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    self.clients.claim();
});

// Fetch listener diperlukan oleh Chrome untuk memicu PWA Install Prompt
self.addEventListener('fetch', (e) => {
    // Pass-through fetch (tidak ada caching offline yang rumit agar data selalu real-time)
    e.respondWith(fetch(e.request).catch(() => {
        return new Response("Aplikasi sedang offline. Harap periksa koneksi internet Anda.");
    }));
});
