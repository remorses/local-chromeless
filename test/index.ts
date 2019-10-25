import puppeteer from 'puppeteer'

const browserWSEndpoint = 'ws://127.0.0.1:4000'

async function main() {

    const b = await puppeteer.connect({
        browserWSEndpoint,
    })
    console.log('starting')
    const p = await b.newPage()
    await p.goto('https://github.com/remorses', {waitUntil: 'networkidle0'})
    await p.evaluate(() => {
        alert('follow me you script kiddo')
    })
    console.log('finish')
    await b.close()
}

main()