const path = require('path');
const fs = require('fs');
const express = require('express');
const Vue = require('vue');
const vueServerRenderer = require('vue-server-renderer');
const createApp  = require('../dist/server.bundle.js')['default'];

const server = new express();
const render = vueServerRenderer.createRenderer({
  template: fs.readFileSync('./index.template.html', 'utf-8')
});

// server.use(express.static(path.join(__dirname, '../assets')));
server.use(express.static(path.join(__dirname, "../dist")));

server.get('*', (req, res) => {

  const app = createApp({url: req.url});

  render.renderToString(app, {
    title: `淘宝网！！！淘，我喜欢`,
    description: `<meta name="description" content="description 我喜欢"></meta>`,
    keyword: 'a, b, c, d, e, f',
    mount: `<script src="/client.bundle.js"></script>`
  }, (err, html) => {

    if(err){
      throw err;
    }

    console.log('html', html)
    res.end(html)

  });
});

server.get('/article', (req, res) => {
  const list = ["百度", "淘宝", "京东"];
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>文章</h1>
      <ul>
        <li>`+ list[0] +`</li>
        <li>`+ list[1] +`</li>
        <li>`+ list[2] +`</li>
      </ul>
    </body>
    </html>
  `);
});


server.listen(12306, _ => {
  console.log('server is running at 12306');
});