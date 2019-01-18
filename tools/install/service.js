/**
 * @desc 服务安装
 */
const fs = require('fs');
const path = require('path');
const lockPath = path.join(__dirname, './install.lock');

/**
 * 查询 mongo 安装状态
 * @param {Function} callback
 */
let hasInstall = false;
exports.readStatus = callback => {
    if (hasInstall) {
        return callback(null, true);
    }

    fs.stat(lockPath, (err, stat) => {
        if (err && err.code == 'ENOENT') {
            return callback(null, false);
        } else if (err) {
            err.type = 'system';
            return callback(err);
        }

        if (stat.isFile()) {
            hasInstall = true;
            callback(null, true);
        } else {
            callback({
                type: 'system',
                error: 'install.lock 非文件，请检查'
            });
        }
    });
};
