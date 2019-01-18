## H5 各项目说明

- H5-ImageText
    - 描述：图文详情页
    - gitlab：http://git.firstshare.cn/appcenter-h5/H5-ImageText
    - 113发布地址：openWeb/src/open/imgtext
    - 113入口地址：https://www.ceshi113.com/open/imgtext/detail.html?appId=FSAID_bebce63&messageId=ac9508d7-43d8-410a-8800-cc80b3d3bc6f&imageTextParamId=e9ad93fe34284596ac2709d4d079a74a&fsEa=6168F7AC59EEE7643E6DE00368D62860
    - 备注：

- H5-MPAdmin
    - 描述：图文详情评论管理页
    - gitlab：http://git.firstshare.cn/appcenter-h5/H5-MPAdmin
    - 113发布地址：openWeb/src/open/mpadmin
    - 113入口地址：https://www.ceshi113.com/open/mpadmin/#!/articlelist?appId=FSAID_bebce63&fsEa=53409
    - 备注：

- H5-Notification
    - 描述：互联通知详情
    - gitlab：http://git.firstshare.cn/appcenter-h5/H5-Notification
    - 113发布地址：openWeb/src/open/notification
    - 113入口地址：https://www.ceshi113.com/open/notification/?appId=FSAID_11490cb2&messageId=07bf0b5c-fd60-4f23-bcce-81bea8ef4fca&imageTextParamId=dc5e470eff3249a99efdfa2618a70956&fsEa=6168F7AC59EEE7643E6DE00368D62860
    - 备注：雪峰组共用

- H5-WechatConnect
    - 描述：互联通知管理
    - gitlab：http://git.firstshare.cn/appcenter-h5/H5-WechatConnect
    - 113发布地址：openWeb/src/open/wechatconnect
    - 113入口地址：https://www.ceshi113.com/open/wechatconnect/#!/notice/history?code=FSCOD_DADB66F3CF413C8C4A2A0B3BA3EEF78A&codeSig=fd966b45b51409bd081de08369043d318890f1ff&timestamp=1546069819414&nonce=21782ffedd464c7795bee6a1f133d06b
    - 备注：

- formpro
    - 描述：报数通，审批单，数据单
    - gitlab：http://git.firstshare.cn/appcenter-h5/formpro
    - 113发布地址：openWeb/src/open/formpro
    - 113入口地址：
    - 备注：

- H5-AppStore
    - 描述：应用试用页
    - gitlab：http://git.firstshare.cn/appcenter-h5/H5-AppStore
    - 113发布地址：openWeb/src/open/appstore
    - 113入口地址：https://www.ceshi113.com/open/appstore/#!/detail?appId=FSAID_9897c2
    - 备注：

- H5-MPRequest
    - 描述：服务号创建审批
    - gitlab：http://git.firstshare.cn/appcenter-h5/H5-MPRequest
    - 113发布地址：openWeb/src/open/mprequest
    - 113入口地址：https://www.ceshi113.com/open/mprequest/?approvalId=19059f9ee1444b2785b6b5facef705b3
    - 备注：

- satisfaction
    - 描述：客户服务评价
    - gitlab：http://git.firstshare.cn/appcenter-h5/statisfaction
    - 113发布地址：openWeb/src/open/statisfaction
    - 113入口地址：https://www.ceshi113.com/open/statisfaction/index.html#/statisfaction/FSAID_bebce63/327635f3536a49b2a3429d631bdd0827
    - 备注：永刚组共用

- H5-order
    - 描述：工单管理
    - gitlab：http://git.firstshare.cn/appcenter-h5/H5-order
    - 113发布地址：openWeb/src/open/order
    - 113入口地址：https://www.ceshi113.com/open/order/build/index.html?fs_nav_fsmenu=false&embed=0#/metadatas/ceshiwen__c?api_name=ceshiwen__c&bizId=FSAID_bebce63&bizType=1&isfetchdata=1&server_name=WorkOrderPaas&code=FSCOD_E9A2ECCAE9968C15F12A35CB541B70EE&codeSig=02c7447c1ec33b91411f20afb853f1a76c542459&timestamp=1546067089986&nonce=735803cf1df44580aae66060bd76b7c7&_k=hl2mc9
    - 备注：react，从永刚接手

- H5-form
    - 描述：问卷
    - gitlab：http://git.firstshare.cn/fe-h5/form
    - 113发布地址：
    - 113入口地址：https://www.ceshi113.com/fsh5/form/5.4/index.html?fs_nav_fsmenu=false&fs_nav_title=#/details/253471365108760576-254295166075699200-FSAID_bebce63?_k=a230tl
    - 备注：react， 112 线上 jenkins发布，从北京接手

- H5-survey
    - 描述：问卷列表
    - gitlab：http://git.firstshare.cn/h5/survey
    - 113发布地址：
    - 113入口地址：https://www.ceshi113.com/open/survey/h5/forward?appId=FSAID_bebce63&fs_nav_title=&fs_nav_fsmenu=false&target=https://www.ceshi113.com/fsh5/survey/5.4/index.html%3Ffs_nav_fsmenu%3Dfalse%26fs_nav_title%3D%26appId%3DFSAID_bebce63
    - 备注：react，jenkins发布，从北京接手（正式环境 编译命令 npm run build -- --release 然后将build 目录中的文件, 打包为zip格式包, 发送给北京 马锡月 发布）

- H5-logistics
    - 描述：物流信息页面
    - gitlab：http://git.firstshare.cn/appcenter-h5/H5-logistics
    - 113发布地址：
    - 113入口地址
    - 备注：物流信息展示页面，当时终端不做只能h5临时撸一个


### 多语言影响

目前大多数 H5 项目属于 `vue` 技术栈，针对多语言采用的是编译时，剩余部分的 `react` 技术栈采用的是运行时。