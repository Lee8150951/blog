(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{530:function(t,a,s){"use strict";s.r(a);var e=s(7),p=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、目的"}},[t._v("#")]),t._v(" 一、目的")]),t._v(" "),s("p",[t._v("通常我们在pc上看到的页面都是比较大的，在pc上访问页面是正常显示的，默认是不会被缩放的，除非是手动进行了缩放，页面才会被放大比例或者是缩小比例显示")]),t._v(" "),s("p",[t._v("但是在移动端是不一样的，如果将一个pc端的页面放到手机端进行访问，那么可能出现页面挤到一起、布局错乱或者出现横向滚动条的情况，我们给用户带来不好的体验")]),t._v(" "),s("p",[t._v("另外在屏幕尺寸大小不同的手机上进行访问页面时，页面显示的效果不能合理的展示，我们期望的是在手机屏幕较大时显示的内容比较大一些，手机屏幕小的时候页面的内容也会缩小进行自适应")]),t._v(" "),s("p",[t._v("因此，移动端适配的目的是在不同尺寸的设备上，页面达到合理的展示（自适应）或者说是能够保持统一效果")]),t._v(" "),s("h2",{attrs:{id:"二、viewport基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、viewport基本概念"}},[t._v("#")]),t._v(" 二、viewport基本概念")]),t._v(" "),s("p",[s("strong",[t._v("viewport是指视窗、视口，浏览器上用来显示网页的那部分区域")])]),t._v(" "),s("p",[t._v("在移动端和pc端视口是不同的，pc端的视口是浏览器窗口区域，而在移动端有三个不同的视口概念：布局视口、视觉视口、理想视口")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("Layout Viewport")]),t._v("布局视口：在浏览器窗口css的布局区域，布局视口的宽度限制css布局的宽。为了能在移动设备上正常显示那些为pc端浏览器设计的网站，移动设备上的浏览器都会把自己默认的viewport设为980px或其他值，一般都比移动端浏览器可视区域大很多，所以就会出现浏览器出现横向滚动条的情况")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Visual Viewport")]),t._v("视觉视口：用户通过屏幕看到的页面区域，通过缩放查看显示内容的区域，在移动端缩放不会改变布局视口的宽度，当缩小的时候，屏幕覆盖的css像素变多，视觉视口变大，当放大的时候，屏幕覆盖的css像素变少，视觉视口变小")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Ideal Viewport")]),t._v("理想视口：一般来讲，这个视口其实不是真是存在的，它对设备来说是一个最理想布局视口尺寸，在用户不进行手动缩放的情况下，可以将页面理想地展示。那么所谓的理想宽度就是浏览器（屏幕）的宽度了")])])]),t._v(" "),s("p",[t._v("布局视口：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207271505159.awebp",alt:"布局视口"}})]),t._v(" "),s("p",[t._v("视觉视口：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207271505257.awebp",alt:"视觉视口"}})]),t._v(" "),s("h2",{attrs:{id:"三、理想视口配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、理想视口配置"}},[t._v("#")]),t._v(" 三、理想视口配置")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这行代码大家应该都不陌生，或者说是知道加了这行代码，然后页面的宽度就会跟我的设备宽度一致")]),t._v(" "),s("p",[t._v("实际上，它就是设置了理想视口，将布局视口的宽度设置成了理想视口（浏览器/设备屏幕的宽度）")]),t._v(" "),s("blockquote",[s("p",[t._v("像素：")]),t._v(" "),s("ul",[s("li",[t._v("css像素：代码中使用的逻辑像素，衡量页面上的内容大小")]),t._v(" "),s("li",[t._v("设备像素：即物理像素，控制设备显示的单位，与设备、硬件有关")]),t._v(" "),s("li",[t._v("设备独立像素：与设备无关的逻辑像素，不同于设备像素（物理像素），不是真实存在的。")]),t._v(" "),s("li",[t._v("设备像素比：定义设备像素与设备独立像素比的关系window.devicePixelRatio）设备像素比=物理像素/设备独立像素")]),t._v(" "),s("li",[t._v("分辨率：指的是屏幕上垂直和水平的总物理像素")])])]),t._v(" "),s("p",[t._v("在meta标签中，除了viewport这个很重要的属性，用来设置视口的一些行为,还有几个与其搭配一起使用的属性")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://oreo-image-bed-1310232028.cos.ap-shanghai.myqcloud.com/image/202207271510997.png",alt:"image-20220727151020967"}})])])}),[],!1,null,null,null);a.default=p.exports}}]);