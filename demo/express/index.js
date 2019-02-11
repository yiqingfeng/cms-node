/**
 * @desc 入口
 */
const Application = require('./application');

// 每个应用支持相互嵌套 next
modules.exports = function createAppllication() {
    const app = new Application();
    app.init();
    return app;
}

// exports.listenApp = (app) => {
//     // as a requestListener
//     return (req, res, next) => {
//         app.handle(req, res, next);
//     }
// }
