
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://chandu2chandu1.github.io/portfolio-angular/',
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
    'index.csr.html': {size: 2112, hash: '77ca166675027bb90a305a451c07f32f4fcfad4d991152dce0f866368010145a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '535954a581ba5fc46b2e8eb76d7aab498dd4ae1e8808b316ae86ab4da729d475', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 5908, hash: '977f071ef2e9081ede11f789f078828860371ac19ed990d10d04835178e75687', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7304, hash: '2ad045fd55e166cb09b8a91eff9c9f321f2bb5986dc561eab1fd38388ec47f51', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 19746, hash: '4933d748908b6ad52a5d16179bf94707fc44ed7697e56578ffc89cec8e02ed92', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6409, hash: 'a9505e9cfe610d9203844dae01d47fb2665fe1856c6db64d1c9c2db54c6ac10a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H25BRYG6.css': {size: 9427, hash: '704O53mv/YM', text: () => import('./assets-chunks/styles-H25BRYG6_css.mjs').then(m => m.default)}
  },
};
