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

        fns.forEach(fn => {
            const layer = new Layer(path, fn);
            this.stack.push(layer);
        });
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
        console.log('dispatching %s %o', req.method, req.url);
        const path = util.getPathname(req);
        if (!path) {
            return done(layerError);
        }

        const stack = this.stack;
        let idx = 0;
        const next = (err) => {
            if (err) {
                return done(err);
            }
            if (idx >= stack.length) {
                return done();
            }

            let match;
            while (!match && idx < stack.length) {
                const layer = stack[idx];
                match = layer.match(path);
                idx++;
                if (match) {
                    this.process_params(layer, req, res, (err) => {
                        if (err) {
                            return next(err);
                        }

                        // 路由处理
                        layer.handle_request(req, res, next);
                    });
                }
            }
            if (!match) {
                next();
            }
        }

        next();
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
