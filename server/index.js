const path = require('path');
const express = require('express');
const Vue = require('vue');
const vueServerRenderer = require('vue-server-renderer');


const server = express();
const render = vueServerRenderer.createRenderer();

server.use(express.static(path.join(__dirname, '../assets/home')))

server.use('/ssr', (req, res) => {
    const app = new Vue({
        template: '<div>{{ content }} {{ name }}</div>',
        data: {
            content: 'content in data',
            name: '陈晓旭'
        }
    });

    render.renderToString(app, (err, html) => {
        if(err){
            throw err;
        }
        res.end(html)
    });
})

server.listen(12306, _ => {
    console.log('server is listening on 12306!')
})