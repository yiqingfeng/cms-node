/**
 * @desc 入口
 */
const EventEmitter = require('events').EventEmitter;
const merge = require('merge-descriptors');
const appProto = require('./application');

// 每个应用支持相互嵌套 next
function createAppllication() {
    // as a requestListener
    const app = function (req, res, next) {
        // dispatch
        app.handle(req, res, next);
    };
    merge(app, appProto, false);

    app.init();
    return app;
}

module.exports = createAppllication;

// expose
