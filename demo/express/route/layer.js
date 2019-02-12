/**
 * @desc layer 层
 */
const pathRegexp = require('path-to-regexp');

// Decode param value.
function decode_param(val) {
    if (typeof val !== 'string' || val.length === 0) {
        return val;
    }

    try {
        return decodeURIComponent(val);
    } catch (err) {
        if (err instanceof URIError) {
            err.message = 'Failed to decode param \'' + val + '\'';
            err.status = err.statusCode = 400;
        }

        throw err;
    }
}

class Layer {
    constructor(path, fn) {
        this.handle = fn;
        this.keys = [];
        // this.fast_star = path === '*';
        this.fast_slash = path === '/';
        this.regexp = pathRegexp(path, this.keys, {
            sensitive: false,
            strict: false,
            end: false
        });
        // const regexp = pathToRegexp('/foo/:bar', keys)
        // regexp = /^\/foo\/([^\/]+?)\/?$/i
        // keys = [{ name: 'bar', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }]
    }
    match(path) {
        // fast path non-ending match for / (any path matches)
        if (this.fast_slash) {
            return false;
        }

        const match = this.regexp.exec(path);
        if (!match) {
            return false;
        }

        const keys = this.keys;
        const params = {};
        let val;
        for (let i = 1, len = match.length; i < len; i++) {
            val = decode_param(match[i]);
            if (val) {
                params[keys[i - 1].name] = val;
            }
        }
        this.params = params;
        return true;
    }
    handle_request(req, res, next) {
        var fn = this.handle;
        console.log(fn.toString());
        fn(req, res, next);
    }
}

module.exports = Layer;
