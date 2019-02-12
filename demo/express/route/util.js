/**
 * @desc 常用方法
 */
const parseUrl = require('parseurl');

const util = {
    // Get get protocol + host for a URL
    getProtohost(url) {
        if (typeof url !== 'string' || url.length === 0 || url[0] === '/') {
            return undefined
        }

        var searchIndex = url.indexOf('?')
        var pathLength = searchIndex !== -1 ?
            searchIndex :
            url.length;
        var fqdnIndex = url.substr(0, pathLength).indexOf('://')

        return fqdnIndex !== -1 ?
            url.substr(0, url.indexOf('/', 3 + fqdnIndex)) :
            undefined;
    },
    // get pathname of request
    getPathname(req) {
        try {
            return parseUrl(req).pathname;
        } catch (err) {
            return undefined;
        }
    },
};

module.exports = util;
