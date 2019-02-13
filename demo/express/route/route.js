/**
 * @desc route 路由
 */
const methods = require('methods');
const flatten = require('array-flatten');
const Layer = require('./layer');

class Route {
    constructor(path) {
        this.path = path;
        this.stack = [];
    }
    // dispatch req, res into this route
    dispatch(req, res, done) {
        const stack = this.stack;
        if (!stack.length) {
            return done();
        }

        const method = req.method.toLowerCase();

        let idx = 0;
        next();

        function next(err) {
            if (err) {
                return done(err);
            }

            const layer = stack[idx];
            idx++;
            if (!layer) {
                return done(err);
            }
            if (!layer.method || layer.method !== method) {
                return next(err);
            }

            layer.handle_request(req, res, next);
        }
    }
}

methods.forEach((method) => {
    Route.prototype[method] = function () {
        var handles = flatten(Array.prototype.slice.call(arguments));

        for (var i = 0; i < handles.length; i++) {
            var handle = handles[i];

            if (typeof handle !== 'function') {
                var type = Object.prototype.toString.call(handle);
                var msg = 'Route.' + method + '() requires a callback function but got a ' + type
                throw new Error(msg);
            }

            var layer = new Layer('/', handle);
            layer.method = method;

            // this.methods[method] = true;
            this.stack.push(layer);
        }

        return this;
    };
});

module.exports = Route;
