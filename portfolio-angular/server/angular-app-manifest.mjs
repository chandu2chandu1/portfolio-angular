
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2062, hash: '883b5f8deecf26a396ec3af6e0baa8eb4d1acff4d06afa6092d4c1410dae115c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: '4cabaf1c2218bdd3118e70b723ef3ce33ef8ebddd0d7c736e1efc5173d9fd098', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 5658, hash: 'fac3d73c56dad97cee47438efb7b52f58591d63230418e401d3a3ee80e598b3b', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6059, hash: '5f28d2f9302a2f8867594db4fa0623bf01993a8f0cd3fc6e6170a3d532d91d8e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7054, hash: '0f1b2f1f894a5c461c250a8d08fc9c2c40c4156c537b57d49caef05e1d890bee', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 19496, hash: '6a393b28ab5de508daf6295b6b46344b49a83983517d12545427ab283b648732', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-H25BRYG6.css': {size: 9427, hash: '704O53mv/YM', text: () => import('./assets-chunks/styles-H25BRYG6_css.mjs').then(m => m.default)}
  },
};
