/**
 * @desc 错误处理
 */
const {
    logger
} = require('../di');

/**
 * 404 错误
 */
exports.notFound = (req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
};
