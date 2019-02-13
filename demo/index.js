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
app.use(function mid(req, res, next) {
    res.write('this is a middleware!\n');
    next();
});

app.get('/test', function test(req, res) {
    res.write('this is a simple example!\n');
    res.end();
});
app.get('/demo', function demo(req, res, next) {
    res.write('hello demo!\n');
    next();
});
app.get('/demo/a', function demoA(req, res) {
    res.write('hello a!\n');
    res.end();
});

app.use(function end(req, res) {
    res.write('hello world!');
    res.end();
});
// console.log(app._router.stack);

// 监听 http 服务
app.listen(3000);
