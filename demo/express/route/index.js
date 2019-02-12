/**
 * @desc 路由系统
 */
const methods = require('methods');
const util = require('./util');
const Route = require('./route');
const Layer = require('./layer');

class Router {
    constructor(options) {
        const opts = options || {};
        this.params = {};
        this.stack = [];
        this.caseSensitive = opts.caseSensitive;
        this.mergeParams = opts.mergeParams;
        this.strict = opts.strict;
    }
    // Use the given middleware function, with optional path, defaulting to "/".
    use(fn) {
        const argvs = Array.prototype.slice.call(arguments);
        let path = '/';
        let fns = argvs;
        if (typeof argvs[0] !== 'function') {
            path = argvs[0] || path;
            fns = argvs.slice(1);
        }

    }
    route(path) {
        const route = new Route(path);
        const layer = new Layer(path, route.dispatch.bind(route));

        layer.route = route;
        this.stack.push(layer);
        return route;
    }
    // Dispatch a req, res into the router.
    handle(req, res, done) {
        console.log('dispatching %s %s', req.method, req.url);
        // next();

        let idx = 0;

        const path = util.getPathname(req);
        if (!path) {
            return done(layerError);
        }

        const stack = this.stack;
        let flag = false;
        for (let i = 0, len = stack.length; i < len; i++) {
            const layer = stack[i];
            if (layer.match(path)) {
                flag = true;
                this.process_params(layer, req, res, (err) => {
                    if (err) {
                        done(err);
                    }

                    // 路由处理

                    layer.handle_request(req, res, next);
                });
            }
        }
        // 没有任何layer能处理该路径
        if (!flag) {
            done();
        }

        function next(err) {
            let layerError = err === 'route' ? null : err;

            // 移除斜线


            // 获取下一个匹配处理
            let layer;
            let match;
            let route;

            while (!match && idx < st)

                if (!match) {
                    return done(layerError);
                }


        }
    }
    // Process any parameters for the layer.
    process_params(layer, req, res, done) {
        const keys = layer.keys;

        if (!keys || !keys.length) {
            done();
        }
    }
}

methods.forEach((method) => {
    Router.prototype[method] = function (path) {
        const route = this.route(path)
        route[method].apply(route, Array.prototype.slice.call(arguments, 1));
        return this;
    };
});

module.exports = Router;
