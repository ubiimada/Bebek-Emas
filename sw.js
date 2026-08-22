self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    self.clients.claim();
});

// Wajib ada fetch listener agar Chrome mengizinkan fitur "Install/Add to Home Screen"
self.addEventListener('fetch', (e) => {
    // Kosong tidak masalah, yang penting terdeteksi oleh Chrome
});
