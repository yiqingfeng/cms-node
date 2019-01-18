/**
 * @desc 站点所有权限相关处理
 */
const _ = require('lodash');
const commonCode = require('./common/validate');

const validateCode = _.extend({}, commonCode, {
    // your self code
});

module.exports = validateCode;
