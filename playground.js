var asyncHooks = require('async_hooks')
var hooks = {
  init: init,
  before: before, 
  after: after,
  destroy: destroy
}
var asyncHook = asyncHooks.createHook(hooks);

var http = require('http')
// asyncHook being defined in code snippet above
asyncHook.enable()
http.createServer(function (req, res) {
  res.end('hello qts')
}).listen(8079)
function init (asyncId, type, triggerId) {
  fs.writeSync(1, `${type} \n`)
}