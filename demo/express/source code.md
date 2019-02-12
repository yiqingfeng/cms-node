### Layer 类 （app.use）

```
@params path Layer 对应的 path
@params options path-to-regexp options
```

#### 属性

- `keys` path解析后的数组
- `regexp` path 正则匹配
- `route` 路由

```javascript
const keys = []
const regexp = pathToRegexp('/foo/:bar', keys)
// regexp = /^\/foo\/([^\/]+?)\/?$/i
// keys = [{ name: 'bar', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }]

```

- `params`

#### 方法

- `handle_error` layer 错误处理 （layer `handle.length === 4` 即为错误处理层）
- `handle_request` 请求处理 （layer `handle.length <= 3` 才会处理请求）
- `match` 判断路由与`path`是否匹配，如果匹配则对路径进行相应解析（生成 params ）


### Route 类 (app.route)

```
@params path Route 对应的 path
```

#### 属性

- `path` path解析后的数组
- `stack` 处理列表
- `methods` http 路由 各种处理方法

#### 方法

继承了 `methods` 所有方法

- `dispatch` 分发 request、 response 到 路由 （Stack 中的 layer 的 method 是否匹配）
- `all` 处理所有通过该路由的 http 请求


### Router 类 (app.lazyrouter)

#### 属性

- `params` path解析后的数组
- `stack`  处理列表

#### 方法

- `use` 注册中间件，中间件会匹配相应的路径，默认为 `/`
- `route` 注册路由
- `handle` 分发 req, res
- `process_params` layer 参数处理


### Request 和 Response 增强

- `Request` 原型 `http.IncomingMessage.prototype`
- `Response` 原型 `http.ServerResponse.prototype`