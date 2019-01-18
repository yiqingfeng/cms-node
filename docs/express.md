## EXPRESS web开发框架

### 参考资料：

- [express官网](http://www.expressjs.com.cn)
- [express github](https://github.com/expressjs/express)
- [根据源码模拟实现express框架常用功能](https://juejin.im/post/5aa2b7e6f265da23a0492978)
- [Express源码级实现の路由全解析（上阕）](https://juejin.im/post/5aa0a309f265da23826d8afb)
- [Express源码级实现の路由全解析（下阕）](https://juejin.im/post/5aa88207f265da23870e84ba)

### 涉及点：

- 路由 (router)
- 中间件 （layer stack）
    - 处理各种特定任务，eg. 登录状态、权限...
    - 特点：支持处理请求和响应、能传递处理状态、能区分执行（依据路径）
    - 中间件出错如何处理。（直接找错误处理中间件）
- 静态文件
- 视图模板


### 常用 API

- `express()`
- `app.use([path,] callback [, callback...])`
- `app.set(name, value)`


### 创建路由

路径 + 方法 （`path & method`）