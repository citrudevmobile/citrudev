const path = require('path')
const SPA = `${__basedir}/dist/index.html`

module.exports = (app, io) => {
  app.get('/', (req, res) => { res.sendFile(path.join(SPA)) })
}
