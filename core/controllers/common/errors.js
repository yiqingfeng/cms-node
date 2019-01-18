/**
 * @desc 通用错误处理
 */
const {
    logger,
} = require('../../di');

// 其他错误处理
exports.error = (err, req, res, next) => {
    if (err && err.status !== 404) {
        logger.system(err, 'error');
    }
}
