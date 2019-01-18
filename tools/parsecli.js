/**
 * @description 解析命令行相关参数
 * 支持的参数有 -p(--port)
 */
const _ = require('lodash');
const {
    cliConfig,
} = require('../config/index');

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

module.exports = () => {
    const data = {};
    const argv = Array.prototype.slice.call(process.argv);

    let index;
    _.each(cliConfig, (key, mark) => {
        index = argv.indexOf(mark);
        if (index !== -1) {
            data[key] = argv[index + 1];
        }
    });

    // 端口处理
    data.port = normalizePort(data.port || process.env.PORT || '3000');

    return data;
};
