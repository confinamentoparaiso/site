// Service worker mínimo viável — só presença; dados sempre da rede.
// A existência de um SW registrado já habilita o navegador a oferecer
// "instalar app" / "adicionar à tela inicial". Nenhum cache é feito aqui:
// toda navegação e requisição segue direto pra rede (offline não é objetivo
// deste PWA por enquanto).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // presença do SW já habilita "instalar app"
