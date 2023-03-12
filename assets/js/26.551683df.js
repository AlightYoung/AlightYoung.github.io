(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{444:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("单点登录（Single Sign On），简称为 SSO，是目前比较流行的企业业务整合的解决方案之一。SSO的定义是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。")]),t._v(" "),e("h4",{attrs:{id:"优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),e("ul",[e("li",[t._v("提高用户效率")]),t._v(" "),e("li",[t._v("提高开发人员的效率")]),t._v(" "),e("li",[t._v("简化管理")])]),t._v(" "),e("h4",{attrs:{id:"缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),e("ul",[e("li",[t._v("不利于重构")]),t._v(" "),e("li",[t._v("无人看守桌面")])]),t._v(" "),e("h3",{attrs:{id:"常见的单点登录框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的单点登录框架"}},[t._v("#")]),t._v(" 常见的单点登录框架")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://www.xuxueli.com/xxl-sso/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XXL-SSO"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.apereo.org/projects/cas",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAS"),e("OutboundLink")],1),t._v("（Central Authentication Service）")])]),t._v(" "),e("blockquote",[e("p",[t._v("非乐观锁里的CAS(compare and swap)")])]),t._v(" "),e("h4",{attrs:{id:"xxlsso"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxlsso"}},[t._v("#")]),t._v(" xxlsso")]),t._v(" "),e("p",[t._v("大概了解了一下之后，发现cas需要配置http证书，为了方便，所以选择了xxlsso作为单点登录的入门。想参考"),e("a",{attrs:{href:"https://www.xuxueli.com/xxl-sso/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("的也可以直接看。")]),t._v(" "),e("p",[t._v("因为单点登录的场景基本是在分布式环境下，所以了解单点登录之前需要对分布式开发有所了解。")]),t._v(" "),e("h5",{attrs:{id:"源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://gitee.com/xuxueli0323/xxl-sso/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee仓库"),e("OutboundLink")],1),t._v("，跑入门demo可以先clone下来。了解一下流程")]),t._v(" "),e("h5",{attrs:{id:"要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#要求"}},[t._v("#")]),t._v(" 要求")]),t._v(" "),e("ol",[e("li",[t._v("jdk:1.7+")]),t._v(" "),e("li",[t._v("redis:4.0+")])]),t._v(" "),e("h5",{attrs:{id:"demo结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo结构"}},[t._v("#")]),t._v(" demo结构")]),t._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" xxl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sso"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server：中央认证服务，支持集群\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" xxl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sso"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("core：Client端依赖\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" xxl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sso"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("samples：单点登陆Client端接入示例项目\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" xxl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sso"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sample"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("springboot：基于Cookie接入方式，供用户浏览器访问，springboot版本\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" xxl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sso"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sample"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("springboot：基于Token接入方式，常用于无法使用Cookie的场景使用，如APP、Cookie被禁用等，springboot版本\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h5",{attrs:{id:"部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),e("blockquote",[e("p",[t._v("1.配置认证中心\n没什么好说的，把xxlsso-server跑起来先，记得把application.properties的redis地址改成自己的")])]),t._v(" "),e("blockquote",[e("p",[t._v("2.配置client\n上面demo结构很清楚了，基于cookie就把web集成到自己的项目中，基于token就换成token的那个demo(细节参考"),e("a",{attrs:{href:"https://www.xuxueli.com/xxl-sso/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),e("h5",{attrs:{id:"架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://alightyoung.gitee.io/static/img/4.png",alt:"架构图"}})]),t._v(" "),e("p",[e("strong",[t._v("登录流程分析")])]),t._v(" "),e("blockquote",[e("p",[t._v("用户于Client端应用访问受限资源时，将会自动 redirect 到 SSO Server 进入统一登录界面\n用户登录成功之后将会为用户分配 SSO SessionId 并 redirect 返回来源Client端应用，同时附带分配的 SSO SessionId\n在Client端的SSO Filter里验证 SSO SessionId 无误，将 SSO SessionId 写入到用户浏览器Client端域名下 cookie 中\nSSO Filter验证 SSO SessionId 通过，受限资源请求放行")])]),t._v(" "),e("p",[e("strong",[t._v("注销流程分析")])]),t._v(" "),e("blockquote",[e("p",[t._v("用户与Client端应用请求注销Path时，将会 redirect 到 SSO Server 自动销毁全局 SSO SessionId，实现全局销毁\n然后，访问接入SSO保护的任意Client端应用时，SSO Filter 均会拦截请求并 redirect 到 SSO Server 的统一登录界面")])]),t._v(" "),e("p",[e("strong",[t._v("基于Cookie，相关概念")])]),t._v(" "),e("blockquote",[e("p",[t._v("登陆凭证存储：登陆成功后，用户登陆凭证被自动存储在浏览器Cookie中\nClient端校验登陆状态：通过校验请求Cookie中的是否包含用户登录凭证判断")])]),t._v(" "),e("p",[t._v("系统角色模型：")]),t._v(" "),e("ul",[e("li",[t._v("SSO Server：认证中心，提供用户登陆、注销以及登陆状态校验等功能")]),t._v(" "),e("li",[t._v("Client应用：受SSO保护的Client端Web应用，为用户浏览器访问提供服务")]),t._v(" "),e("li",[t._v("用户：发起请求的用户，使用浏览器访问")])]),t._v(" "),e("p",[e("strong",[t._v("基于Token，相关概念")])]),t._v(" "),e("blockquote",[e("p",[t._v("登陆凭证存储：登陆成功后，获取到登录凭证（xxl_sso_sessionid=xxx），需要主动存储，如存储在 localStorage、Sqlite 中\nClient端校验登陆状态：通过校验请求 Header参数 中的是否包含用户登录凭证（xxl_sso_sessionid=xxx）判断；因此，发送请求时需要在 Header参数 中设置登陆凭证")])]),t._v(" "),e("p",[t._v("系统角色模型：")]),t._v(" "),e("ul",[e("li",[t._v("SSO Server：认证中心，提供用户登陆、注销以及登陆状态校验等功能")]),t._v(" "),e("li",[t._v("Client应用：受SSO保护的Client端Web应用，为用户请求提供接口服务")]),t._v(" "),e("li",[t._v("用户：发起请求的用户，如使用Android、IOS、桌面客户端等请求访问")])]),t._v(" "),e("p",[e("strong",[t._v("未登录状态请求处理")])]),t._v(" "),e("p",[t._v("基于Cookie，未登录状态请求：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("页面请求：redirect 到SSO Server登录界面")])]),t._v(" "),e("li",[e("p",[t._v("JSON请求：返回未登录的JSON格式响应数据")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("数据格式：")]),t._v(" "),e("ul",[e("li",[t._v("code：501 错误码")]),t._v(" "),e("li",[t._v("msg：sso not login")])])])])])]),t._v(" "),e("p",[t._v("基于Token，未登录状态请求：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("返回未登录的JSON格式响应数据")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("数据格式：")]),t._v(" "),e("ul",[e("li",[t._v("code：501 错误码")]),t._v(" "),e("li",[t._v("msg：sso not login")])])])])])]),t._v(" "),e("p",[t._v("todo...")])])}),[],!1,null,null,null);e.default=n.exports}}]);