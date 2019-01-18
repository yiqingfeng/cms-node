/**
 * @desc 后台
 */
// 后台首页
exports.home = (req, res) => {
    res.sendFile('index.html', {
        root: './src/admin/'
    });
};
