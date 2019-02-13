/**
 * @desc 入口
 */
const Application = require('./application');

module.exports = function createAppllication() {
    const app = new Application();
    return app;
}
