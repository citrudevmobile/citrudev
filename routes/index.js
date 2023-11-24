const path = require('path')
const SPA = `${__basedir}/dist/index.html`

module.exports = (app) => {
  app.get('/', (req, res) => { res.sendFile(path.join(SPA)) })
}
