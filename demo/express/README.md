## 模拟 EXPRESS

- 二次封装 `http`、`request`、`response` 等
- 支持 路由、中间件、静态文件和视图模板

- [Express源码解析](https://juejin.im/post/5bb8405cf265da0ab719c259)

### 整体思路

- 分阶段执行
    - 启动服务阶段
        - 创建服务，并进行相应监听
        - 注册中间件（匹配路径）、路由（匹配路径+方法） （layer对象 router对象）
        - 能力增强（request 对象和 response 对象）

    - 请求响应执行阶段
        - 处理请求主要是依据 `router.stack` 中的 `layer` 进行层层循环处理。

```javascript
const application = {
    _router: {
        params: {},
        stack: [{
            // layer 维护这一个路径和回调
            path: '/',

            route: undefined || route,

            /*
             * 通过 path 匹配
             */
            match: Function,

        }],

        /**
         * 解析 url，设置 request 参数
         * 依次执行 stack 容器中的 中间件 和 路由
         */
        handle: Function,
        /**
         * 注册 layer
         */
        use: Function,
        /**
         *
         */
        route: Function,
    },

    handle: Function,

}
```

### express 执行进程

服务器监听 `request` -> express 进行分发 Starts pipeline processing（一系列的`handle`）

(tag=>type: content:>url)
```flow
st=>start: 开始路由分发
ed=>end: 路由分发结束，相应请求
c1=>condition: 是否最后一个 handler

op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes or No?
io=>inputoutput: catch something...

st->c1
c1(yes)->
c1(no)->
```

### Router对象

- 分类：中间件 router 和 路由 router


### Layer

- 分类：路由层、中间件层和 具有子路由的中间件层

Layer类别 | route | method
---|---|---
中间件Layer | undefined | undefined
路由Layer | 非undefined | undefined
route | Layer | undefined | 非undefined