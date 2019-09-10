const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  const asana = "https://app.asana.com"
  app.use(proxy('/api/**', {
    target: asana,
    changeOrigin: true,
    // secure: false
  }))
}
