/**
 * @desc 路由映射配置，支持多层嵌套
 * @rule
    {
        path: '/admin',
        controller: {
            name: 'admin',
            // methods: 'home', // 相当于 { all: 'home' }
            methods: {
                get: 'home', // 支持权限校验 [100400, 'home']
            },
        },
        children: [{

        }]
    }
 */
module.exports = [
    /**
     * 后台
     */
    {
        path: '/admin',
        controller: {
            name: 'admin',
            methods: {
                get: 'home',
            },
        },
    }
]
