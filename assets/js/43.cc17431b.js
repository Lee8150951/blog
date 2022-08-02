(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{538:function(a,t,s){"use strict";s.r(t);var o=s(7),n=Object(o.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"一、服务器环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、服务器环境配置"}},[a._v("#")]),a._v(" 一、服务器环境配置")]),a._v(" "),s("p",[a._v("购买了一个腾讯云服务器，在其中配置Django开发环境")]),a._v(" "),s("h3",{attrs:{id:"_1-1anaconda配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1anaconda配置"}},[a._v("#")]),a._v(" 1.1Anaconda配置")]),a._v(" "),s("p",[a._v("首先在本地下载一个安装文件，网址： "),s("code",[a._v("https://www.anaconda.com/products/individual")])]),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207121441983.png",alt:"202203161926555"}}),a._v(" "),s("p",[a._v("然后使用SFTP将下载好的sh文件传至服务器中，使用命令"),s("code",[a._v("bash Anaconda3-2021.11-Linux-x86_64.sh")]),a._v("开始安装，一路Enter或者输入yes即可")]),a._v(" "),s("p",[a._v("安装完成后编辑"),s("code",[a._v("~/.bashrc")]),a._v("在文件的末尾输入"),s("code",[a._v("export PATH=/home/用户名/anaconda3/bin:$PATH")])]),a._v(" "),s("p",[a._v("编辑后使用命令"),s("code",[a._v("source ~/.bashrc")]),a._v("完成配置")]),a._v(" "),s("p",[a._v("conda配置完成后更换清华源："),s("code",[a._v("conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/")])]),a._v(" "),s("h3",{attrs:{id:"_1-2django配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2django配置"}},[a._v("#")]),a._v(" 1.2Django配置")]),a._v(" "),s("p",[a._v("使用命令"),s("code",[a._v("pip install django")]),a._v("完成下载，下载完成即表示Django环境配置完成")]),a._v(" "),s("h3",{attrs:{id:"_1-3本地pycharm远程ssh开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3本地pycharm远程ssh开发"}},[a._v("#")]),a._v(" 1.3本地Pycharm远程SSH开发")]),a._v(" "),s("p",[a._v("使用Pycharm可以对服务器上的项目进行远程开发，步骤如下")]),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207121441710.png",alt:"202203161938543"}}),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207121442776.png",alt:"202203161938622"}}),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207121442505.png",alt:"202203161939131"}}),a._v(" "),s("p",[a._v("选定项目位置后即可开始进行远程开发")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207121443642.png",alt:"202203161940427"}})]),a._v(" "),s("p",[a._v("进入开发环境即可开始开发")]),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207121444185.png",alt:"202203161942674"}}),a._v(" "),s("h2",{attrs:{id:"二、django项目创建及远程访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、django项目创建及远程访问"}},[a._v("#")]),a._v(" 二、Django项目创建及远程访问")]),a._v(" "),s("h3",{attrs:{id:"_2-1项目创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1项目创建"}},[a._v("#")]),a._v(" 2.1项目创建")]),a._v(" "),s("p",[a._v("安装Django完成后即可使用"),s("code",[a._v("django-admin")]),a._v("命令进行项目创建")]),a._v(" "),s("p",[a._v("如："),s("code",[a._v("django-admin startproject Django_Demo")])]),a._v(" "),s("p",[a._v("即在当前目录下创建一个名为Django_Demo的项目")]),a._v(" "),s("h3",{attrs:{id:"_2-2远程访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2远程访问"}},[a._v("#")]),a._v(" 2.2远程访问")]),a._v(" "),s("p",[a._v("如果在本地进行开发访问时使用命令"),s("code",[a._v("python3 manage.py runserver 127.0.0.1:8000")]),a._v("即可启动项目界面")]),a._v(" "),s("p",[a._v("但是如果在服务器上访问则需要进行如下步骤")]),a._v(" "),s("h4",{attrs:{id:"_2-2-1服务器防火墙配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1服务器防火墙配置"}},[a._v("#")]),a._v(" 2.2.1服务器防火墙配置")]),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207121444538.png",alt:"202203161949992"}}),a._v(" "),s("p",[a._v("开放未来对外访问的端口权限，本例中使用的是8000端口，如果不在防火墙中进行配置则不会开放该端口并无法访问")]),a._v(" "),s("h4",{attrs:{id:"_2-2-2配置外网访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2配置外网访问"}},[a._v("#")]),a._v(" 2.2.2配置外网访问")]),a._v(" "),s("p",[a._v("在settings.py文件中修改ALLOW_HOSTS："),s("code",[a._v("ALLOWED_HOSTS = ['121.5.143.64']")])]),a._v(" "),s("p",[a._v("启动时使用"),s("code",[a._v("python manage.py runserver 0.0.0.0:8000")]),a._v("监听所有IP，端口为"),s("code",[a._v("8000")])]),a._v(" "),s("p",[s("strong",[a._v("此处注意：IP地址一定是"),s("code",[a._v("0.0.0.0")])])]),a._v(" "),s("p",[a._v("访问成功：")]),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207121444485.png",alt:"202203161955501"}}),a._v(" "),s("h2",{attrs:{id:"三、helloworld"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、helloworld"}},[a._v("#")]),a._v(" 三、HelloWorld")]),a._v(" "),s("p",[a._v("项目目录说明：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Django_Demo:")]),a._v(" 项目的容器。")]),a._v(" "),s("li",[s("strong",[a._v("manage.py:")]),a._v(" 一个实用的命令行工具，可让你以各种方式与该 Django 项目进行交互。")]),a._v(" "),s("li",[s("strong",[a._v("Django_Demo/"),s("strong",[a._v("init")]),a._v(".py:")]),a._v(" 一个空文件，告诉 Python 该目录是一个 Python 包。")]),a._v(" "),s("li",[s("strong",[a._v("Django_Demo/asgi.py:")]),a._v(" 一个 ASGI 兼容的 Web 服务器的入口，以便运行你的项目。")]),a._v(" "),s("li",[s("strong",[a._v("Django_Demo/settings.py:")]),a._v(" 该 Django 项目的设置/配置。")]),a._v(" "),s("li",[s("strong",[a._v("Django_Demo/urls.py:")]),a._v(' 该 Django 项目的 URL 声明; 一份由 Django 驱动的网站"目录"。')]),a._v(" "),s("li",[s("strong",[a._v("Django_Demo/wsgi.py:")]),a._v(" 一个 WSGI 兼容的 Web 服务器的入口，以便运行你的项目。")])]),a._v(" "),s("p",[a._v("如果希望在页面上展示自定义信息则需要在项目容器中创建一个名为views.py的文件")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("http "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" HttpResponse\n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" HttpResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"我爱妮！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("接着，绑定 URL 与视图函数。打开 urls.py 文件，删除原来代码，将以下代码复制粘贴到 urls.py 文件中：")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("urls "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" path\n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" views\n \nurlpatterns "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" views"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("访问"),s("code",[a._v("http://121.5.143.64:8000/hello")])]),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207121445196.png",alt:"202203162037185"}})])}),[],!1,null,null,null);t.default=n.exports}}]);