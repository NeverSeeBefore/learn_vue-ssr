const path = require('path');
const fs = require('fs');
const express = require('express');
const Vue = require('vue');
const vueServerRenderer = require('vue-server-renderer');
const createApp = require('../dist/server.bundle.js')['default'];


const server = express();
const render = vueServerRenderer.createRenderer({
    template: fs.readFileSync(path.join(__dirname, '../index.template.html'), 'utf-8')
});

server.use(express.static(path.join(__dirname, '../assets/home')))
server.use(express.static(path.join(__dirname, '../dist')));

server.use('/ssr', (req, res) => {

    const app = createApp();

    render.renderToString(app, {
        description: 'description',
        keyword: 'a, b, c, d, e, f, g',
        data: '<meta name="test" content="test content">',
        script: '<script src="/client.bundle.js"></script>'
    }, (err, html) => {
        if(err){
            throw err;
        }
        res.end(html)
    });
})

server.listen(12306, _ => {
    console.log('server is listening on 12306!')
})