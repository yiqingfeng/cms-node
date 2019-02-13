/**
 * @desc 应用
 */
const http = require('http');
const EventEmitter = require('events');
const methods = require('methods');
const finalhandler = require('finalhandler');
const flatten = require('array-flatten');
const Router = require('./route/index');
const middleware = require('./middleware/index');

class Application extends EventEmitter {
    constructor() {
        super();
        this._router = new Router();
    }
    // Mounts the specified middleware function or functions at the specified path
    use(fn) {
        const argvs = Array.prototype.slice.call(arguments);
        let path = '/';
        let fns = argvs;
        if (typeof argvs[0] !== 'function') {
            path = argvs[0] || path;
            fns = argvs.slice(1);
        }
        fns = flatten(fns);

        const router = this._router;

        fns.forEach(fn => {
            router.use(path, fn);
        }, this);

        return this;
    }
    // Dispatch a req, res pair into the application.Starts pipeline processing.
    handle(req, res, next) {
        const router = this._router;

        // final handler
        const done = next || finalhandler(req, res, {
            env: 'development',
            onerror(err) {
                console.error(err.stack || err.toString());
            },
        });

        // no routes
        if (!router) {
            return done();
        }
        router.handle(req, res, done);
    }
    listen() {
        const server = http.createServer((req, res) => {
            this.handle(req, res);
        });
        server.listen.apply(server, arguments);
        return server;
    }
};

// 继承 node 支持的 http 解析器 的相关解析方法， eg. get post head delete
methods.forEach(method => {
    Application.prototype[method] = function (path) {
        var route = this._router.route(path);
        route[method].apply(route, Array.prototype.slice.call(arguments, 1));
        return this;
    };
});

module.exports = Application;
