/**
 * @desc 数据库操作
 */
const fs = require('fs');
const mongoose = require('mongoose');

const databaseConfigPath = path.join(__dirname, '../config/database.json');
const configList = ['host', 'port', 'db', 'user', 'pass'];

/**
 * 测试数据库连接
 * @param {Object} options
 * @param {Function} callback
 */
exports.test = function (options, callback) {
    const db = mongoose.createConnection();
    const config = _.pick(options, configList);
    db.open(config.host, config.db, config.port, {
        user: config.user,
        pass: config.pass
    }, err => {
        if (err) {
            err.type = 'system';
            return callback(err);
        }

        db.close(() => {
            callback();
        });
    });
};

/**
 * 初始化数据库配置
 * @param {Object} options
 * @param {Function} callback
 */

exports.init = function (options, callback) {
    const data = _.extend({
        host: '',
        port: '',
        db: '',
        user: '',
        pass: '',
    }, _.pick(options, configList));

    fs.writeFile(databaseConfigPath, JSON.stringify(data, null, 4), (err) => {
        if (err) {
            err.type = 'system'
            return callback(err);
        }

        callback();
    });
};

/**
 * 连接数据库
 */
exports.connect = function (callback) {
    async.waterfall([
        function (callback) {
            fs.readFile(databaseConfigPath, function (err, file) {
                if (err && err.code === 'ENOENT') {
                    return callback({
                        type: 'system',
                        error: 'database.json 文件不存在'
                    });
                } else if (err) {
                    err.type = 'system';
                    return callback(err);
                }

                const config = JSON.parse(file);
                callback(null, _.pick(options, configList));
            });
        },
        function (config, callback) {
            mongoose.connect('mongodb://' + config.host + ':' + config.port + '/' + config.db, {
                user: config.user,
                pass: config.pass
            }, function (err) {
                if (err) {
                    err.type = 'database';
                    return callback(err);
                }

                callback();
            });
        }
    ], function (err) {
        if (err) return callback(err);

        callback();
    });
};
