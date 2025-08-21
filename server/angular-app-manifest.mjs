
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-angular"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-angular/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-angular/services"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-angular/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2080, hash: 'ef6a97f2094224a9071521d82b6fa7cee88a0156e54619815d40a6c8cc67634f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 977, hash: '5c57e0401255979029898cab498fff6f73c498d40c6d38b84ff1968d84528c61', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6185, hash: 'e30bf2ccbff82f9ec35cfbaa0b9b535e882a57f00877082f8772c2af4029d971', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 19586, hash: '3ca1d125d25e9ba3145b4b12016e3dd9bb403b92862224461d8a0b608a57be83', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7144, hash: '255e0a50d51fdce0cfe7ca70cc00036e240ef33c50370c38f8c70b78ee31e9a0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 5748, hash: '430ae5ffb1b77e290cb82bcc23941612bc522aa52ba59ebe092db8633d5232a5', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'styles-H25BRYG6.css': {size: 9427, hash: '704O53mv/YM', text: () => import('./assets-chunks/styles-H25BRYG6_css.mjs').then(m => m.default)}
  },
};
