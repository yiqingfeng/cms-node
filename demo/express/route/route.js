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

    }
}

methods.forEach((method) => {
    Route.prototype[method] = function () {
        var handles = flatten(slice.call(arguments));

        for (var i = 0; i < handles.length; i++) {
            var handle = handles[i];

            if (typeof handle !== 'function') {
                var type = toString.call(handle);
                var msg = 'Route.' + method + '() requires a callback function but got a ' + type
                throw new Error(msg);
            }

            console.log('%s %o', method, this.path)

            var layer = Layer('/', handle);
            // layer.method = method;

            // this.methods[method] = true;
            this.stack.push(layer);
        }

        return this;
    };
});

module.exports = Route;
