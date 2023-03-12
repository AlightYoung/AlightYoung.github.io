(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{451:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[t._v("#")]),t._v(" 环境")]),t._v(" "),s("ul",[s("li",[t._v("阿里云 ECS 2c 4g")]),t._v(" "),s("li",[t._v("CentOS Linux release 7.7.1908 (Core)")]),t._v(" "),s("li",[t._v("非生产环境，已开启全部端口")])]),t._v(" "),s("p",[t._v("以下是官方建议")]),t._v(" "),s("p",[s("strong",[t._v("GitLab Installation")])]),t._v(" "),s("p",[t._v("We strongly recommend downloading the Omnibus package installation since it is quicker to install, easier to upgrade, and it contains features to enhance reliability not found in other methods. We also strongly recommend at least 4GB of free RAM to run GitLab.")]),t._v(" "),s("h3",{attrs:{id:"gitlab私服搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab私服搭建"}},[t._v("#")]),t._v(" gitlab私服搭建")]),t._v(" "),s("h4",{attrs:{id:"安装和配置必要的依赖项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装和配置必要的依赖项"}},[t._v("#")]),t._v(" 安装和配置必要的依赖项")]),t._v(" "),s("p",[t._v("在CentOS 7（和RedHat / Oracle / Scientific Linux 7）上，以下命令还将在系统防火墙中打开HTTP，HTTPS和SSH访问。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" policycoreutils-python openssh-server\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" sshd\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start sshd\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" --add-service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" --add-service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl reload firewalld\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("接下来，安装Postfix发送通知电子邮件。如果要使用其他解决方案发送电子邮件，请跳过此步骤并在安装GitLab之后配置外部SMTP服务器。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" postfix\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" postfix\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start postfix\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("blockquote",[s("p",[t._v("注：此处在"),s("code",[t._v("systemctl start postfix")]),t._v("发生一个错误")]),t._v(" "),s("blockquote",[s("p",[t._v('Job for postfix.service failed because the control process exited with error code. See "systemctl status postfix.service" and "journalctl -xe" for details.')])])]),t._v(" "),s("blockquote",[s("p",[t._v("个人解决办法\n执行systemctl status postfix.service,发现Failed to start Postfix Mail Transport Agent.然后修改配置文件"),s("code",[t._v("vim /etc/postfix/main.cf")]),t._v(" 原本此处为"),s("code",[t._v("inet_protocols = all")]),t._v("，修改成以下，问题得以解决")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("inet_protocols = ipv4")]),t._v(" "),s("code",[t._v("inet_interfaces = all")])])])]),t._v(" "),s("p",[s("s",[t._v("在Postfix安装过程中，可能会出现一个配置屏幕。选择“ Internet网站”，然后按Enter。使用服务器的外部DNS作为“邮件名”，然后按Enter。如果出现其他屏幕，请继续按Enter接受默认设置。")])]),t._v(" "),s("h4",{attrs:{id:"添加gitlab软件包存储库并安装软件包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加gitlab软件包存储库并安装软件包"}},[t._v("#")]),t._v(" 添加GitLab软件包存储库并安装软件包")]),t._v(" "),s("p",[t._v("添加GitLab软件包存储库。这里面就有个选择了,社区版或者企业版")]),t._v(" "),s("p",[t._v("官方是这么建议的")]),t._v(" "),s("p",[t._v("如果您有兴趣使用GitLab，即使您不确定是否会订阅GitLab Enterprise Edition许可证 ，我们也建议您 下载并安装GitLab Enterprise Edition。您仍然可以使用GitLab社区版的所有功能，而无需许可证或注册。")]),t._v(" "),s("p",[t._v("所以至于你想安装什么版本 自行选择 以下都会有注释")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 企业版就是gitlab-ee，应该很好区分")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 社区版gitlab-ce")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-sS")]),t._v(" https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("接下来，安装GitLab软件包。将https://gitlab.example.com更改为您要访问GitLab实例的URL。安装将自动配置并在该URL上启动GitLab。")]),t._v(" "),s("p",[t._v("对于https://URL，GitLab将自动通过Let's Encrypt请求证书，这需要入站HTTP访问和有效的主机名。您也可以使用自己的证书或仅使用http://。")]),t._v(" "),s("p",[t._v("这里我为了方便直接用http加上外网ip了，可以自己根据需求调整")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 企业版")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXTERNAL_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://gitlab.example.com"')]),t._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" gitlab-ee\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 社区版")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXTERNAL_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://gitlab.example.com"')]),t._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" gitlab-ce\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("这里不出意外的话，要下载好久，我的安装大小为1.6g。静待片刻...")]),t._v(" "),s("p",[t._v("其实也可以不使用官方地址下载，比如配置清华源，速度应该能快上不少，"),s("a",{attrs:{href:"https://mirror.tuna.tsinghua.edu.cn/help/gitlab-ce/",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"浏览到主机名并登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览到主机名并登录"}},[t._v("#")]),t._v(" 浏览到主机名并登录")]),t._v(" "),s("p",[t._v("简单来说，在安装完成之后，理论上就可以直接输入http://ip进行访问，初次需要设置密码，默认用户名为root，然后即可以登录到gitlab的web管理界面了，之后的大家就都知道了，不多赘述。")]),t._v(" "),s("h4",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("至于配置，比如修改端口号(默认80)，可以去修改配置文件"),s("code",[t._v("/etc/gitlab/gitlab.rb")]),t._v("，具体百度，这里不贴了。")]),t._v(" "),s("p",[t._v("gitlab-ctl常用命令")]),t._v(" "),s("ol",[s("li",[t._v("重新加载配置并启动\n"),s("code",[t._v("sudo gitlab-ctl reconfigure")])]),t._v(" "),s("li",[t._v("重启gitlab\n"),s("code",[t._v("sudo gitlab-ctl restart")])]),t._v(" "),s("li",[t._v("查看gitlab运行状态\n"),s("code",[t._v("sudo gitlab-ctl status")])]),t._v(" "),s("li",[t._v("停止gitlab服务\n"),s("code",[t._v("sudo gitlab-ctl stop")])]),t._v(" "),s("li",[t._v("查看gitlab运行日志\n"),s("code",[t._v("sudo gitlab-ctl tail")])])]),t._v(" "),s("p",[t._v("更多gitlab-ctl用法直接输入gitlab-ctl，下面都会列举出来。")]),t._v(" "),s("h4",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("以上内容很多都是官方文档机翻过来的，其实官方文档非常详细，提供了很多很多的安装文档，还有docker的安装方式，但是我不喜欢docker，就没有用docker安装了，有兴趣的或者看完该文章仍没有解决问题的，可以直接参考官方文档。"),s("a",{attrs:{href:"https://about.gitlab.com/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);