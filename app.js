const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {
    logger,
} = require('./tools/index');
const router = require('./core/routers/router');

const app = express();

/**
 * 设置模板引擎
 */
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * 中间件
 * http://www.expressjs.com.cn/4x/api.html#app.use
 */
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger.access());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

/**
 * 转给 Router
 */
console.log(router);
app.use(router);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
