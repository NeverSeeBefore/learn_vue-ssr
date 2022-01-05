const fs = require('fs');
const path = require('path');
const Vue = require("vue");
const serverRender = require("vue-server-renderer");
const express = require("express");

// 创建渲染器
const render = serverRender.createRenderer({
  template: fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
});

// 创建服务器
const server = express();

// 页面相关信息
const page = {
  title: 'ssr',
  desc: 'description',
  meta: '<meta name="app-version" content="661ceb6/stable@2021-10-23T10:43:45.277Z">'
}
server.get("*", async (req, res) => {
  try {
    // 创建vue实例
    const vueApp = new Vue({
      data() {
        return {
          msg: "hello, this is a vue app",
          title: '测试 ssr'
        };
      },
      template: `<div>{{msg}}</div>`
    });

    // 转换实例为字符串
    const html = await render.renderToString(vueApp, page);
    console.log("html", html);
    res.send(html);
  } catch (error) {
    console.error(error);
  }
});

server.listen(12306, () => {
  console.log("server is listening on 12306");
});
