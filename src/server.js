const puppeteer = require('puppeteer')
const http = require('http')
const httpProxy = require('http-proxy')
const proxy = new httpProxy.createProxyServer()

module.exports = (port, headless=false, callback,) => {
    return http.createServer()
        .on('upgrade', async (req, socket, head) => {
            const browser = await puppeteer.launch({ headless })
            const target = browser.wsEndpoint()
            proxy.ws(req, socket, head, { target })
        })
        .on('error', function(err, req, res) {
            console.log(err)
        })
        .listen(port, function() {
            callback()
        })
}
