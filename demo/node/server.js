/**
 * node server demo
 */
const http = require('http');

exports.simplyServer = () => {
    /**
     * http.createServer([options][, requestListener])
     */
    const server = http.createServer((req, res, next) => {
        console.log(Array.prototype.slice(arguments));
        console.log(next);
        res.write('hello world!');
        res.end();
    });
    server.listen(3000);
};
