(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{429:function(t,n,e){"use strict";e.r(n);var a=e(2),r=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"开始"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),n("p",[t._v("其实一直有体验Linux的想法，只是以前bios设了密码，后来给忘了，最近突然尝试猜了一下，居然对了！天意！双系统启动！\n好，说整就整！")]),t._v(" "),n("h3",{attrs:{id:"ubuntu的安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu的安装"}},[t._v("#")]),t._v(" Ubuntu的安装")]),t._v(" "),n("p",[t._v("Ubuntu作为当红Linux发行版，好就它了！\n本地是win10环境，上网找了很多win10+Ubuntu的双系统安装教程，好像还和是不是单硬盘、支不支持uefi有关，个人认为这个教程讲的十分详细---"),n("a",{attrs:{href:"https://www.cnblogs.com/masbay/p/10745170.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),n("OutboundLink")],1),t._v("\n我这边是uefi+单硬盘，所以大概说一下，其他情况可以参考上面那篇博客。")]),t._v(" "),n("p",[t._v("1、在win10中分出一个空白分区留给Linux\nwin10专业版的话就是 此电脑右键-管理-磁盘管理 应该就能看到磁盘的各个分区，如果只有C盘的话直接压缩卷即可，如果自己分了cde的话就把最后那个分区删除卷也行，记得备份！记得备份！记得备份，我这边分了100g左右。\n2、将Ubuntu镜像写入U盘\n准备一个U盘，下载并安装软碟通，Ubuntu镜像直接在官网下载的桌面版18.04LTS。然后就是用软碟通把镜像刷入U盘，等就完事了。\n3、安装Ubuntu\n接下来，就是正常的BIOS设置U盘先加载，哦对了，还要关了sucure boot，我也不知道为啥，关就完事了。然后会进入Ubuntu的安装界面，直接选择安装，记得断网安装，不然的下载一个世纪的文件（泪）。安装的话有大概这么一些选项\n3.1、语言选择（自己看着选）\n3.2、安装 （有个在安装中下载更新的，记得断网，最小安装就行了）\n3.3、安装类型（好像会提示和win10作为双系统安装，应该也没事，反正我点的自定义。）\n3.4、分区（大佬说的 /boot 分200mb  /home 35g  其他全给/ ,有些教程分区分了很多，反正我就这样分的，我8g内存，感觉应该够。就没分swap，后面发现自动分了2g，问题不大，赶紧进入系统才是王道）\n之后就是系统的一些简单默认配置了，都能看懂，不多说了")]),t._v(" "),n("h3",{attrs:{id:"初体验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初体验"}},[t._v("#")]),t._v(" 初体验")]),t._v(" "),n("p",[t._v("安装完成之后就是拔U盘，重启！默认是grub引导双系统界面，应该能看到Ubuntu和windows，选择Ubuntu，开始！\n对了 有些因为显卡原因，在Ubuntu重启会死机，在软件更新器点设置，有个附加驱动，会自动搜索可用驱动，装上驱动就好了，妈妈再也不用担心我死机了：）")]),t._v(" "),n("h3",{attrs:{id:"简单配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单配置"}},[t._v("#")]),t._v(" 简单配置")]),t._v(" "),n("p",[t._v("在瞎点了几下之后，差不多可以开始一些简单的配置了，比如换源，用阿里云就完事了，中文输入法，直接firefox搜搜狗Linux，有安装教程。下载的话好像挺多人用uget配合aria2下载，百度就完事了。对了如果下载jetbrains全家桶的话建议用toolbox，稳定，下载速度也可以。办公的话wps，听歌的话用网易云。qq用的deepin wine版本的，比原版wine好用那么一点---"),n("a",{attrs:{href:"https://github.com/wszqkzqk/deepin-wine-ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("deepin wine传送门"),n("OutboundLink")],1),t._v("，美化的话，慢慢百度吧，怎么舒服怎么来。")]),t._v(" "),n("h3",{attrs:{id:"最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),n("p",[t._v("差不多了，接下来就是慢慢折腾了，养老的话也是很舒适的。")]),t._v(" "),n("h3",{attrs:{id:"_2019-9-27更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2019-9-27更新"}},[t._v("#")]),t._v(" 2019/9/27更新")]),t._v(" "),n("p",[t._v("ubuntu已被玩坏（gnome依赖可能出问题了...），转身投入deepin（15.11）的怀抱。\n自带 chrome 搜狗输入法 wps 深度截图 网易云 qq等\n开箱即用的体验 界面的话 有好有坏\n好处：界面还算漂亮 dock支持win和默认方案 grub不算难看 省去了换refind的时间\n坏处：字体渲染可能比Ubuntu差点（maybe）默认终端太丑了 美化的话 慢慢折腾吧\n顺带说一下 开关机还有音效 太蠢了！")]),t._v(" "),n("h3",{attrs:{id:"end"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[t._v("#")]),t._v(" END")]),t._v(" "),n("p",[t._v("双系统引导关了,转身投入win怀抱,最后一次更新,Linux果然还是太折腾了,windows真香 😃")])])}),[],!1,null,null,null);n.default=r.exports}}]);