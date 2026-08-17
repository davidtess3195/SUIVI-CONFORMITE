// Service worker minimal — requis pour l'installation en application (PWA/TWA).
// Volontairement SANS mise en cache : l'application charge toujours la dernière version en ligne.
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => { /* passage direct au réseau */ });
