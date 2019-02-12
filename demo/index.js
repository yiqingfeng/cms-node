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
app.get('/test', (req, res, next) => {
    res.write('this is a simple example!');
    next();
});
app.get('/test/a', (req, res) => {
    res.write('hello');
    res.end();
});
// app.use((req, res) => {
//     res.write('hello world!');
//     res.end();
// });
// console.log(app._router.stack);

// 注册路由、中间件 设置处理
app.listen(3000);
// const server = http.createServer((req, res) => {
//     app.handle(req, res);
// });
// server.listen(3000);
