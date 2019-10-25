#!/usr/bin/env node

const serve = require('./server')

const argv = require('yargs').argv
const port = argv.port || 4000

try {
    serve(port, argv.headless || false, () => {
        console.log('chrome listening on ws://127.0.0.1:' + port)
    })
} catch(e) {
    console.log('error while starting server: ' + e)
}
