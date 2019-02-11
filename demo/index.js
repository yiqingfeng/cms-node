const http = require('http');

/**
 * node server demo
 * http.createServer([options][, requestListener])
 */
// const server = http.createServer((req, res) => {
//     res.write('hello world!');
//     res.end();
// });
// server.listen(3000);

const express = require('./express/index');
const app = express();
// 注册路由、中间件 设置处理
const server = http.createServer((req, res) => {
    app.handle(req, res);
});
server.listen(3000);
