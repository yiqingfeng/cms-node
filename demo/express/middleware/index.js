/**
 * @desc 中间件
 */
const _ = require('lodash');
const setPrototypeOf = require('setprototypeof');
const parseUrl = require('parseurl');
const qs = require('qs');

/**
 * 初始化中间件，增强 request response 默认响应头部信息设置
 */
exports.init = function (app) {
    return (req, res, next) => {
        if (app.set('x-powered-by')) {
            res.setHeader('X-Powered-By', 'Express');
        }

        req.res = res;
        res.req = req;
        req.next = next;
        setPrototypeOf(req, app.request)
        setPrototypeOf(res, app.response)
        res.locals = res.locals || Object.create(null);

        next();
    };
};

/**
 * @desc 请求参数查询处理
 */
exports.query = function (options) {
    let opts;
    let queryparse;
    if (typeof options === 'function') {
        queryparse = options;
    } else {
        opts = _.extend({}, options);
        queryparse = qs.parse;
    }

    if (opts && opts.allowPrototypes === undefined) {
        // back-compat for qs module
        opts.allowPrototypes = true;
    }

    return (req, res, next) => {
        if (!req.query) {
            const val = parseUrl(req).query;
            req.query = queryparse(val, opts);
        }

        next();
    };
};
