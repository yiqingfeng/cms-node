/**
 * @desc 创建启动服务
 */
const http = require('http');
const {
    logger,
} = require('../tools/index');

module.exports = ({
    app,
    port,
}) => {
    // 创建 http 服务器
    const server = http.createServer(app);

    // 监听端口
    server.listen(port);

    // 监听 http 错误事件
    server.on('error', error => {
        if (error.syscall !== 'listen') {
            throw error;
        }

        let bind = typeof port === 'string' ?
            `Pipe ${port}` :
            `Port ${port}`;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                logger.system(`${bind} 需要有更高的权限`, 'error');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                logger.system(`${bind} 已被使用`, 'error');
                process.exit(1);
                break;
            default:
                throw error;
        }
    });

    // 监听 http 监听事件
    server.on('listening', err => {
        let addr = server.address();
        let bind = typeof addr === 'string' ?
            `pipe ${addr}` :
            `port ${addr.port}`;
        logger.system(`Listening on ${bind}`);
        console.log(`Listening on ${bind}`);
    });
}
