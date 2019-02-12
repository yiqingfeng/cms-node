/**
 * @desc 应用
 */
const EventEmitter = require('events');
const methods = require('methods');
const finalhandler = require('finalhandler');
const setPrototypeOf = require('setprototypeof');
const Router = require('./route/index');
const middleware = require('./middleware/index');

class Application extends EventEmitter {
    // constructor() {

    // }
    init() {
        this.cache = {};
        this.engines = {};
        this.settings = {};

        this.defaultConfiguration();
    }
    defaultConfiguration() {
        const env = process.env.NODE_ENV || 'development';
        // default setttings
        this.set('env', env);
    }
    // Assign `setting` to `val`, or return `setting`'s value
    set(settings, val) {
        if (arguments.length === 1) {
            return this.settings[settings];
        }

        this.settings[settings] = val;

        return this;
    }
    // 懒加载路由 router
    lazyrouter() {
        if (!this._router) {
            this._router = new Router();

            // this._router.use(middleware.query(this.get('query parser fn')));
            // this._router.use(middleware.init(this));
        }
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

        // setup router
        this.lazyrouter();
        const router = this._router;

        fns.forEach(fn => {
            // non-express app
            if (!fn || !fn.handle || !fn.set) {
                return router.use(path, fn);
            }

            fn.mountpath = path;
            fn.parent = this;

            // restore .app property on req and res
            router.use(path, function mounted_app(req, res, next) {
                var orig = req.app;
                fn.handle(req, res, function (err) {
                    setPrototypeOf(req, orig.request)
                    setPrototypeOf(res, orig.response)
                    next(err);
                });
            });

            // mounted an app
            fn.emit('mount', this);
        }, this);

        return this;
    }
    // Dispatch a req, res pair into the application.Starts pipeline processing.
    handle(req, res, next) {
        const router = this._router;

        // final handler
        const done = next || finalhandler(req, res, {
            env: this.get('env'),
            onerror(err) {
                console.error(err.stack || err.toString());
            },
        });

        // no routes
        if (!router) {
            done();
            return;
        }
        // console.log(req.params);
        router.handle(req, res, done);
    }
};

methods.forEach(method => {
    Application.prototype[method] = function (path) {
        if (method === 'get' && arguments.length === 1) {
            // app.get(setting)
            return this.set(path);
        }

        this.lazyrouter();

        var route = this._router.route(path);
        route[method].apply(route, Array.prototype.slice.call(arguments, 1));
        return this;
    };
});

module.exports = Application;
