const PROXY_CONFIG = [
  {
    context: ['/voter', '/accounts'],
    target: 'https://one-shoe-minneha-1580009602239.appspot.com/',
    secure: false,
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
