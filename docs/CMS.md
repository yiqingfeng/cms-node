## CMS（内容管理系统）

https://www.chedong.com/tech/cms.html

## node 信息类网站开源系统 (2019-01-10)

- KeystoneJS：强大的 CMS 和 web 应用框架。
    - https://github.com/keystonejs/keystone
- Reaction Commerce：拥有实时的架构和设计的响应式（reactive） CMS。
    - https://github.com/reactioncommerce/reaction
- Ghost：简单、强大的发布平台。
    - https://github.com/tryghost/Ghost
- Apostrophe：提供内容编辑和基本服务的 CMS。
    - https://github.com/punkave/apostrophe
- We.js：适用于实时应用、网站或博客的框架。
    - https://github.com/wejs/we/
- Hatch.js：拥有社交特性的 CMS 平台。
    - https://github.com/inventures/hatchjs
- TaracotJS：拥有快速、极简风格特点且基于Node.js 的 CMS。
    - https://github.com/xtremespb/taracotjs-generator/
- Nodizecms：为 CoffeeScript 爱好者准备的 CMS。
    - https://github.com/nodize/nodizecms
- Cody：拥有所见即所得的编辑器的 CMS。
    - https://github.com/jcoppieters/cody
- PencilBlue：CMS 和博客平台。
    - https://github.com/pencilblue/pencilblue/
- 国内生哥写的 doracms
    - http://www.doramart.com/
- A fast, simple & powerful blog framework, powered by Node.js.
    - https://github.com/hexojs/hexo
- The new JavaScript- and API-powered WordPress.com
    - https://github.com/Automattic/wp-calypso


## blog 类 CMS 需求规划

- 前台发布
- 后台业务管理
- 角色权限（支持用户自定义多种角色）
- 预置部分组件（log, database, cache, session）
- 支持二次开发，允许用户注册自己的中间件
- 支持自定义主题（前台展示页由主题进行控制）
- 

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /components/            # React components
│   ├── /content/               # Static pages like About Us, Privacy Policy etc.
│   ├── /core/                  # Core framework and utility functions
│   ├── /data/                  # Api service for asynchronous requests
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   └── /server.js              # Server-side startup script
├── /test/                      # Unit and end-to-end tests
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
└── package.json                # The list of 3rd party libraries and utilities
```