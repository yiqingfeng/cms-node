/**
 * @desc 日志
 * log4js 支持 级别和类别 两种维度
 */
const log4js = require('log4js');
const {
    log4jsConfig,
} = require('../config/index');

/**
 * 载入配置
 */
log4js.configure(log4jsConfig);

/**
 * 导出日志接口
 */
module.exports = {
    access() {
        return log4js.connectLogger(log4js.getLogger('access'), {
            level: 'auto',
            format: ':method :url'
        });
    },
    system(msg, type) {
        if (!msg) return;

        log4js.getLogger('system')[type || 'info'](msg);
    },
    database(msg, type) {
        if (!msg) return;

        log4js.getLogger('database')[type || 'info'](msg);
    }
};
