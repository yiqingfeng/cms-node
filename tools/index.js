/**
 * @desc 本目录主要用于提供一些底层工具
 */
const parseCli = require('./parsecli');
const logger = require('./logger');
const installService = require('./install/service');

module.exports = {
    parseCli,
    logger,
    installService,
};
