/**
 * @desc 控制器集合
 */
const validate = require('./validate');
const errors = require('./errors');
const admin = require('./admin');

module.exports = {
    validate,
    errors,
    admin,
};
