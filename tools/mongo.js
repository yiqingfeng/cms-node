/**
 * @description 启动 mongo 服务
 */
const shell = require('shelljs');
const mongoConfig = {
    "dbpath": "D:/mongodb/data",
    "logpath": "D:/mongodb/log/mongo.log",
};

// 判断 mongod 命令是否可用
if (!shell.which('mongod')) {
    shell.echo('Sorry, this script requires mongod!');
    // 退出当前进程
    shell.exit(1);
}

let mongoCommond = 'mongod';
Object.keys(mongoConfig).forEach(key => {
    mongoCommond += ` --${key} ${mongoConfig[key]}`;
});

shell.echo(mongoCommond);
// 同步执行 mongod 命令
const child = shell.exec(mongoCommond, {
    async: true
}, (code) => {
    if (code !== 0) {
        shell.echo('Sorry, mongo start error');
        // 退出当前进程
        shell.exit(1);
    }
})
