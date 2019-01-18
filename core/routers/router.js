/**
 * @desc 注册相关路由
 * http://www.expressjs.com.cn/4x/api.html#router
 */
const path = require('path');
const _ = require('lodash');
const router = require('express').Router();
const routerMaps = require('./maps');
// 读取所有控制器
const controllers = require('../controllers/index');
const {
    logger,
} = require('../di');

/**
 * @desc 绑定控制器
 */
const bindController = (controller, path) => {
    if (!controller || !path) return;

    if (!controller.name || !controller.methods) {
        logger.system(`${path}路由无效，未设置 controller.name 或 controller.methods`, 'error');
        return;
    }

    controller = controllers[controller.name] || {};
    const route = router.route(path);
    _.each(constructor.methods, (fn, way) => {
        let list;
        if (_.isArray(fn)) {
            list = fn;
        } else {
            list = [fn];
        }
        list.forEach(item => {
            let action;
            if (_.isNumber(item)) {
                action = controllers.validate[item];
            } else {
                action = controller[item];
            }
            route[way](action);
        });
    });
}

/**
 * 递归设置路由
 * @param  {Object} map
 * @param  {Object} perRoute JSON
 */
const setRouters = (map, perRoute) => {
    map.forEach(item => {
        let {
            path,
            controller,
            children,
        } = item;
        path = `${perRoute || ''}${path}`;

        if (children) {
            setRouters(children, `${path}`);
        }

        bindController(controller, path);
    });
};

setRouters(routerMaps);

module.exports = router;
