const express = require("express");
const path = require("path");
const Vue = require("vue");
const vueServerRender = require("vue-server-renderer");
const fs = require("fs");

const server = new express();
const render = vueServerRender.createRenderer({
  template: fs.readFileSync("./index.template.html", "utf-8")
});

const taobao = {
  title: "淘宝",
  description: "淘宝网 - 亚洲较大的网上交易平台，提供各类服饰、美容、家居、数码、话费/点卡充值… 数亿优质商品，同时提供担保交易(先收货后付款)等安全交易保障服务，并由商家提供退货承诺、破损补寄等消费者保障服务，让你安心享受网上购物乐趣！",
  keywords: "淘宝,掏宝,网上购物,C2C,在线交易,交易市场,网上交易,交易市场,网上买,网上卖,购物网站,团购,网上贸易,安全购物,电子商务,放心买,供应,买卖信息,网店,一口价,拍卖,网上开店,网络购物,打折,免费开店,网购,频道,店铺"
}

server.use(express.static(path.join(__dirname, "../assets")));

server.get("/article", (req, res) => {
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>百度</li>
      <li>淘宝</li>
      <li>天猫</li>
    </ul>
  </body>
  </html>`);
});

server.get("/ssr", (req, res) => {
  const app = new Vue({
    data: {
      content: "abcds大大SSR",
    },
    template: `
    <div>
      <div>{{ content }}</div>
      <div><input type="text" v-model="content" /></div>
    </div>`,
  });
  render.renderToString(app, {
   ...taobao
  }, (err, html) => {
    if (err) {
      res.end(err);
      throw err;
    }
    res.end(html);
  });
});

server.listen(12306, (_) => {
  console.log("server is running at 12306");
});
