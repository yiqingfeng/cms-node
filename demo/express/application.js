/**
 * @desc 应用
 */
const EventEmitter = require('events');
const finalhandler = require('finalhandler');

const app = new EventEmitter();

app.init = function init() {
    this.cache = {};
    this.engines = {};
    this.settings = {};

    this.defaultConfiguration();
};

app.defaultConfiguration = function defaultConfiguration() {
    const env = process.env.NODE_ENV || 'development';

    // default setttings
    this.set('env', env);
};

/**
 * @desc monut
 */
app.set = function set(settings, val) {
    if (arguments.length === 1) {
        return this.settings[settings];
    }

    this.settings[settings] = val;

    return this;
};

/**
 * @desc Mounts the specified middleware function or functions at the specified path
 */
app.use = function use(fn) {
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
};

/**
 * @desc lazily adds the base router if it has not yet been added.
 */
app.lazyrouter = function lazyrouter() {
    if (!this._router) {
        this._router = new Router({
            caseSensitive: this.enabled('case sensitive routing'),
            strict: this.enabled('strict routing')
        });

        this._router.use(query(this.get('query parser fn')));
        this._router.use(middleware.init(this));
    }
};

/**
 * @desc Dispatch a req, res pair into the application. Starts pipeline processing.
 */
app.handle = function handle(req, res, next) {
    const router = this._router;

    // final handler
    const done = next || finalhandler(req, res, {
        env: this.get('env'),
        onerror: logerror.bind(this)
    });
};

module.exports = app;
