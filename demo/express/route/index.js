/**
 * @desc 路由系统
 */
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
    route() {

    }
    handle() {

    }
}
