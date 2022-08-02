(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{577:function(t,_,a){"use strict";a.r(_);var e=a(7),v=Object(e.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、体系结构及内存分层体系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、体系结构及内存分层体系"}},[t._v("#")]),t._v(" 一、体系结构及内存分层体系")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202211522992.png",alt:"image-20220221151108140"}}),t._v(" "),a("p",[t._v("操作系统在内存管理时需要完成的几个目标：")]),t._v(" "),a("ul",[a("li",[t._v("抽象：使应用程序在运行过程中不需要过多的考虑硬件底层的细节，例如不需要考虑物理地址、外设位置等等，只需要考虑连续的地址空间（逻辑空间）")]),t._v(" "),a("li",[t._v("保护：多个应用程序之间可能会有互相访问的问题，可能会导致破坏其他程序运行的问题，操作系统要做到程序进程之间的保护")]),t._v(" "),a("li",[t._v("共享：进程之间数据传递，访问相同内存的问题")]),t._v(" "),a("li",[t._v("虚拟化：当内存中有很多应用程序的情况下可能会导致内存不足的问题，此时就需要将需要使用程序放置在内存中，而暂时不需要的程序暂时放置在硬盘中，通过这种方式就可以虚拟扩大内存的方式")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202211524922.png",alt:"image-20220221152409737"}}),t._v(" "),a("h2",{attrs:{id:"二、地址空间及地址生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、地址空间及地址生成"}},[t._v("#")]),t._v(" 二、地址空间及地址生成")]),t._v(" "),a("h3",{attrs:{id:"_2-1概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1概念"}},[t._v("#")]),t._v(" 2.1概念")]),t._v(" "),a("ul",[a("li",[t._v("物理地址空间：物理地址空间是硬件直接对应的")]),t._v(" "),a("li",[t._v("逻辑地址空间：一个运行的程序所看到的内存空间，相对而言更加简单，是一个一维的线性地址空间")])]),t._v(" "),a("p",[t._v("所有的逻辑地址空间都是落实在物理地址空间中进行的")]),t._v(" "),a("h3",{attrs:{id:"_2-2地址生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2地址生成"}},[t._v("#")]),t._v(" 2.2地址生成")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202211537647.png",alt:"image-20220221153721135"}}),t._v(" "),a("p",[a("strong",[t._v("问题：应用程序的逻辑地址如何映射到物理地址？")])]),t._v(" "),a("ul",[a("li",[t._v("CPU方面：\n"),a("ul",[a("li",[t._v("当CPU需要执行某条指令时，CPU的ALU部分会需要这条指令的内容，并发出请求，请求中包含的就是逻辑地址")]),t._v(" "),a("li",[t._v("CPU的MMU会查找该逻辑地址的映射表中是否存在对应的物理地址，如果没有则会产生一个处理过程，到内存中去寻找")])])]),t._v(" "),a("li",[t._v("内存方面：\n"),a("ul",[a("li",[t._v("内存发送物理地址内存的内容通过总线传给CPU")]),t._v(" "),a("li",[t._v("CPU拿到内容后就可以开始执行了")])])])]),t._v(" "),a("p",[a("strong",[t._v("操作系统在其中的扮演的功能就是：建立逻辑地址和物理地址之间的映射关系")])]),t._v(" "),a("p",[t._v("此外，操作系统还需要确保程序之间不会互相干扰")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202211546250.png",alt:"image-20220221154610900"}}),t._v(" "),a("h2",{attrs:{id:"三、内存分配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、内存分配"}},[t._v("#")]),t._v(" 三、内存分配")]),t._v(" "),a("h3",{attrs:{id:"_3-1连续内存分配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1连续内存分配"}},[t._v("#")]),t._v(" 3.1连续内存分配")]),t._v(" "),a("p",[a("strong",[t._v("内存碎片问题：")])]),t._v(" "),a("ul",[a("li",[t._v("空闲内存无法被利用")]),t._v(" "),a("li",[t._v("外部碎片：分配单元间的未使用内存")]),t._v(" "),a("li",[t._v("外部碎片：分配单元中的未使用内存")])]),t._v(" "),a("p",[t._v("简单的内存管理方法：")]),t._v(" "),a("ul",[a("li",[t._v("当一个程序准许运行在内存中时，分配一个连续的区间（程序）")]),t._v(" "),a("li",[t._v("分配一个连续的内存区间给运行的程序以访问数据（数据）")])]),t._v(" "),a("p",[t._v("操作系统的简单内存分配算法：首次适配、最优适配、最差适配")]),t._v(" "),a("h4",{attrs:{id:"_3-1-1首次适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1首次适配"}},[t._v("#")]),t._v(" 3.1.1首次适配")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202242249248.png",alt:"image-20220222144550329"}}),t._v(" "),a("p",[a("strong",[t._v("需求：")])]),t._v(" "),a("ul",[a("li",[t._v("按照地址排序的空闲块列表")]),t._v(" "),a("li",[t._v("分配需要寻找一个合适的分区")]),t._v(" "),a("li",[t._v("重分配需要检查，看是否自由分区能够合并于相邻的空闲分区")])]),t._v(" "),a("h4",{attrs:{id:"_3-1-2最优适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2最优适配"}},[t._v("#")]),t._v(" 3.1.2最优适配")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202221451240.png",alt:"image-20220222145103781"}}),t._v(" "),a("ul",[a("li",[t._v("避免了对大空间块的拆分")]),t._v(" "),a("li",[t._v("最小化外部碎片产生的尺寸")])]),t._v(" "),a("h4",{attrs:{id:"_3-1-3最差适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3最差适配"}},[t._v("#")]),t._v(" 3.1.3最差适配")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202221454666.png",alt:"image-20220222145356416"}}),t._v(" "),a("ul",[a("li",[t._v("为了避免长生太多微小的外部碎片")]),t._v(" "),a("li",[t._v("需要按照尺寸排序空间块列表")])]),t._v(" "),a("h4",{attrs:{id:"_3-1-4碎片减少方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4碎片减少方法"}},[t._v("#")]),t._v(" 3.1.4碎片减少方法")]),t._v(" "),a("p",[a("strong",[t._v("压缩式碎片整理")])]),t._v(" "),a("ul",[a("li",[t._v("重置程序以合并孔洞")]),t._v(" "),a("li",[t._v("要求所有程序是动态可重置的")])]),t._v(" "),a("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202221502076.png",alt:"image-20220222150217500"}}),t._v(" "),a("p",[a("strong",[t._v("交换式碎片整理")])]),t._v(" "),a("p",[t._v("这种方法充分利用到了硬盘的作用，将硬盘作为整个内存的一种备份")]),t._v(" "),a("ul",[a("li",[t._v("将目前还需要等待的程序从内存中移动到硬盘中（虚拟内存），从而扩充内存可使用的容量")])]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202221505698.png",alt:"image-20220222150504859"}}),t._v(" "),a("h3",{attrs:{id:"_3-2非连续内存分配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2非连续内存分配"}},[t._v("#")]),t._v(" 3.2非连续内存分配")]),t._v(" "),a("p",[a("strong",[t._v("优点：")])]),t._v(" "),a("ul",[a("li",[t._v("一个程序的物理地址空间是非连续的")]),t._v(" "),a("li",[t._v("更好的内存利用和管理")]),t._v(" "),a("li",[t._v("允许共享代码和数据")]),t._v(" "),a("li",[t._v("支持动态加载和动态链接")])]),t._v(" "),a("p",[a("strong",[t._v("缺点：")])]),t._v(" "),a("ul",[a("li",[t._v("系统开销大")])]),t._v(" "),a("h4",{attrs:{id:"_3-2-1分段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1分段"}},[t._v("#")]),t._v(" 3.2.1分段")]),t._v(" "),a("p",[t._v("分段：更好的分离和共享")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202221542351.png",alt:"image-20220222154216727"}}),t._v(" "),a("p",[t._v("如图，左边是一种连续的逻辑地址，右边是不连续的物理地址空间，两者需要一种映射机制来对其分别进行管理")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202221544865.png",alt:"image-20220222154455049"}}),t._v(" "),a("p",[a("strong",[t._v("分段寻址方案：")])]),t._v(" "),a("p",[t._v("一个段对应了内存中的一个“块”")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202221600485.png",alt:"image-20220222160022310"}}),t._v(" "),a("p",[t._v("通过"),a("strong",[t._v("段号")]),t._v("去查找所在物理地址的"),a("strong",[t._v("起始地址")])]),t._v(" "),a("p",[t._v("起始地址+偏移量形成的物理地址就可以查找到相应的位置，取出数据交给CPU")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202221611700.png",alt:"image-20220222161111570"}}),t._v(" "),a("p",[a("strong",[t._v("段表的建立是在正式的寻址之前有操作系统建立好的")])]),t._v(" "),a("h4",{attrs:{id:"_3-2-2分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2分页"}},[t._v("#")]),t._v(" 3.2.2分页")]),t._v(" "),a("p",[a("strong",[t._v("在分段机制中段的尺寸是可变的，但是在分页机制中页的页帧是固定不变的")])]),t._v(" "),a("p",[t._v("要做的就是将逻辑页（page）与物理页（frame）的映射关系")]),t._v(" "),a("ul",[a("li",[t._v("建立方案，转换逻辑地址为物理地址")])]),t._v(" "),a("p",[a("strong",[t._v("1 物理层面 - 页帧（Frame）")])]),t._v(" "),a("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202222008221.png",alt:"image-20220222200847718"}}),t._v(" "),a("p",[t._v("也就是说对于物理内存而言，只要知道页帧的帧号和帧内的偏移，就可以得到一个物理地址")]),t._v(" "),a("p",[a("strong",[t._v("2 逻辑层面 - 页（Page）")])]),t._v(" "),a("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202222015593.png",alt:"image-20220222201447245"}}),t._v(" "),a("p",[a("strong",[t._v("3 映射")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202222019909.png",alt:"image-20220222201941879"}}),t._v(" "),a("p",[a("strong",[t._v("一般来说逻辑地址空间大于物理地址空间")])]),t._v(" "),a("p",[t._v("页寻址机制中：")]),t._v(" "),a("ul",[a("li",[t._v("页映射到帧")]),t._v(" "),a("li",[t._v("页是连续的虚拟内存")]),t._v(" "),a("li",[t._v("帧是非连续的物理内存")]),t._v(" "),a("li",[t._v("不是所有的页都有对应的帧")])]),t._v(" "),a("h3",{attrs:{id:"_3-3页表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3页表"}},[t._v("#")]),t._v(" 3.3页表")]),t._v(" "),a("p",[t._v("概念：简单来说页表其实就是一个大型的数组，每一个运行的程序都有一个页表")]),t._v(" "),a("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202222027734.png",alt:"image-20220222202730717"}}),t._v(" "),a("h4",{attrs:{id:"_3-3-1快表tlb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1快表tlb"}},[t._v("#")]),t._v(" 3.3.1快表TLB")]),t._v(" "),a("p",[t._v("Translation Look-aside Buffer")]),t._v(" "),a("p",[t._v("为节省时间成本，使用"),a("strong",[t._v("TLB")]),t._v("的方式进行查询，也就是通过"),a("strong",[t._v("缓存")]),t._v("来提升访问性能")]),t._v(" "),a("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202222043874.png",alt:"image-20220222204340087"}}),t._v(" "),a("p",[t._v("TLB是一个非常特殊的区域，位于CPU内部")]),t._v(" "),a("h4",{attrs:{id:"_3-3-2多级页表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2多级页表"}},[t._v("#")]),t._v(" 3.3.2多级页表")]),t._v(" "),a("p",[t._v("为节省空间成本，可以使用多级页表来缓解该问题")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202222055956.png",alt:"image-20220222205534704"}}),t._v(" "),a("h4",{attrs:{id:"_3-3-3反向页表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3反向页表"}},[t._v("#")]),t._v(" 3.3.3反向页表")]),t._v(" "),a("p",[t._v("页表来表示物理地址(页帧)号，而不是之前的逻辑地址(页号)，能够减少页表尺寸，但是给映射关系的建立带来点困难")]),t._v(" "),a("ul",[a("li",[t._v("对于大地址空间，前向映射页表变得繁琐(例如64位系统采用5级页表)。")]),t._v(" "),a("li",[t._v("逻辑地址空间增长速度快于物理地址空间，所以反向页表，也就是index是物理地址，value是逻辑地址，它的大小会小于传统页表。")])]),t._v(" "),a("h2",{attrs:{id:"四、虚拟内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、虚拟内存"}},[t._v("#")]),t._v(" 四、虚拟内存")]),t._v(" "),a("h3",{attrs:{id:"_4-1起因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1起因"}},[t._v("#")]),t._v(" 4.1起因")]),t._v(" "),a("p",[t._v("程序规模的增长远大于存储器容量的增长速度")]),t._v(" "),a("ul",[a("li",[t._v("理想中的存储器：更大更快更便宜的非易失性存储器")]),t._v(" "),a("li",[t._v("实际中的存储器：")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202231129167.png",alt:"image-20220223112901157"}}),t._v(" "),a("p",[t._v("在计算机系统中，尤其是在多道程序运行的环境中，可能会出现内存不够用的情况，怎么办？")]),t._v(" "),a("ul",[a("li",[t._v("如果程序太大，超过了内存的容量，可以采用手动的"),a("strong",[t._v("覆盖(overlay) 技术")]),t._v("，只把需要的指令和数据保存在内存中")]),t._v(" "),a("li",[t._v("如果是程序太多，超过了内存的容量，可以采用自动的"),a("strong",[t._v("交换(swapping) 技术")]),t._v("，把暂时不能执行的程序送到外存中")]),t._v(" "),a("li",[t._v("如果想在有限容量的内存中，以更小的页粒度为单位装入更多更大的程序，可以采用 自动的虚拟存储技术")])]),t._v(" "),a("h3",{attrs:{id:"_4-2覆盖技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2覆盖技术"}},[t._v("#")]),t._v(" 4.2覆盖技术")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("目标：在较小的可用内存中运行比较大的程序。常用于多道程序系统，与分区存储管理配合使用")])]),t._v(" "),a("li",[a("p",[t._v("原理：把程序按照其自身逻辑结构，划分为若干个功能上相对独立的程序模块，那些不会同时执行的模块共享同一块内存区域，按时间先后来运行")]),t._v(" "),a("ul",[a("li",[t._v("必要部分(常用功能)的代码和数据常驻内存")]),t._v(" "),a("li",[t._v("可选部分(不常用功能)在其它程序模块中实现，平时存放在外存中，在需要时才装入内存")]),t._v(" "),a("li",[t._v("不存在调用关系的模块不必同时装入内存，从而可以相互覆盖，即这些模块共用一个分区")])])])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202231522655.png",alt:"image-20220223152254897"}}),t._v(" "),a("ul",[a("li",[t._v("缺点：\n"),a("ul",[a("li",[t._v("由程序员来把一个大的程序划分为若干个小的功能模块，并确定各个模块之间的覆盖关系，费时费力，增加了编程的复杂度")]),t._v(" "),a("li",[t._v("覆盖模块从外存装入内存，是以时间换空间")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-3交换技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3交换技术"}},[t._v("#")]),t._v(" 4.3交换技术")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("目标：多道程序在内存中时，让正在运行的程序或需要运行的程序获得更多的内存资源")])]),t._v(" "),a("li",[a("p",[t._v("原理：")]),t._v(" "),a("ul",[a("li",[t._v("可将暂时不能运行的程序送到外存，从而获得空闲内存空间。")]),t._v(" "),a("li",[t._v("操作系统把一个进程的整个地址空间的内容保存到外存中（换出swap out），而将将外存中的某个进程的地址空间读入到内存中(换入swap in)，"),a("strong",[t._v("换入换出内容大小为整个程序的地址空间")])])])])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202231556592.png",alt:"image-20220223155654424"}}),t._v(" "),a("ul",[a("li",[t._v("存在的问题：\n"),a("ul",[a("li",[t._v("交换区的大小：必须足够大以存放所有用户进程的所有内存映像的拷贝，必须能对这些内存映像进行直接存取")]),t._v(" "),a("li",[t._v("程序换入时的重定位：因为换出换入后的内存位置不一定相同，所以最好采用动态地址映射的方法")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-4虚拟内存管理技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4虚拟内存管理技术"}},[t._v("#")]),t._v(" 4.4虚拟内存管理技术")]),t._v(" "),a("ul",[a("li",[t._v("目标：\n"),a("ul",[a("li",[t._v("像覆盖技术一样，不是把程序的所有内容都放在内存中，因而能够运行比当前的空闲内存空间还要大的程序。但做得更好，能由操作系统自动完成，无需程序员介入")]),t._v(" "),a("li",[t._v("像交换技术一样，能够实现进程在内存和外存之间的交换，因而获得更多的空闲内存空间。但能做得更好，只对进程的部分内容在内存和外存之间进行交换")])])])]),t._v(" "),a("img",{staticStyle:{zoom:"60%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202231606827.png",alt:"image-20220223160604158"}}),t._v(" "),a("p",[t._v("对于程序的要求："),a("strong",[t._v("局部性")])]),t._v(" "),a("ul",[a("li",[t._v("什么是局部性？")])]),t._v(" "),a("p",[t._v("指程序在执行过程中的一个较短时间，所执行的指令地址和指令的操作数地址分别局限于一定区域，表现为：时间局部性和空间局部性")]),t._v(" "),a("p",[t._v("时间局部性：一条指令的一次执行和下次执行，一个数据的一次访问和下次访问都集中在一个较短的时间里")]),t._v(" "),a("p",[t._v("空间局部性：当前指令和领近的几条指令，当前访问的数据和领近的几个数据都集中在一个较小区域内")]),t._v(" "),a("blockquote",[a("p",[t._v("虚存技术可以在页式或者段式内存管理的基础上实现")]),t._v(" "),a("ul",[a("li",[t._v("在装入程序时，不必将其全部装入到内存，而只需将当前需要执行的部分页面或段装入到内存，就可让程序开始执行")]),t._v(" "),a("li",[t._v("在程序执行过程中，如果需执行的指令或访问的数据尚未在内存（称为缺页或缺段），则由处理器通知操作系统将相应的页面或段调入到内存，然后继续执行程序")]),t._v(" "),a("li",[t._v("另一方面，操作系统将内存中暂时不使用的页面或段调出保存在外存上，从而腾出更多空闲空间存放将要装入的程序以及将要调入的页面或段")])])]),t._v(" "),a("ul",[a("li",[t._v("虚拟内存的基本特征：\n"),a("ul",[a("li",[t._v("大的用户空间")]),t._v(" "),a("li",[t._v("部分交换")]),t._v(" "),a("li",[t._v("不连续")])])])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202231655168.png",alt:"image-20220223165535443"}}),t._v(" "),a("h3",{attrs:{id:"_4-5虚拟页式内存管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5虚拟页式内存管理"}},[t._v("#")]),t._v(" 4.5虚拟页式内存管理")]),t._v(" "),a("p",[t._v("大部分虚拟存储系统都采用页式存储管理技术，即在页式存储管理的基础上，添加了请求调页和页面置换功能")]),t._v(" "),a("ul",[a("li",[t._v("基本思路\n"),a("ul",[a("li",[t._v("当一个用户程序要调入内存运行时，不是将该程序的所有页面都装入内存，而是只装入部分的页面,就可启动程序运行")]),t._v(" "),a("li",[t._v("在运行的过程中，如果发现要运行的程序或要访问数据不在内存则向系统发出缺页中断请求，系统在处理这个中断时，将外存中相应的页面调入内存，使得该程序能够继续运行。")])])])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202231704518.png",alt:"image-20220223170445852"}}),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202231711022.png",alt:"image-20220223171151067"}}),t._v(" "),a("p",[a("strong",[t._v("后备存储Backing Store")])]),t._v(" "),a("ul",[a("li",[t._v("一个虚拟地址空间的页面可以被映射到一个文件中的某个位置")]),t._v(" "),a("li",[t._v("代码段：映射到可执行二进制文件")]),t._v(" "),a("li",[t._v("动态加载的共享库程序段：映射到动态调用的库文件")]),t._v(" "),a("li",[t._v("其他段：可能被映射到交换文件")])]),t._v(" "),a("h2",{attrs:{id:"五、局部页面置换算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、局部页面置换算法"}},[t._v("#")]),t._v(" 五、局部页面置换算法")]),t._v(" "),a("p",[t._v("当缺页中断发生时，需要调入新的页面而内存已满时，选择内存中的哪个物理页面被置换")]),t._v(" "),a("ul",[a("li",[t._v("目标：尽可能减少页面的换入换出次数（即缺页中断的次数），把未来不再使用的或短期内较少使用的页面换出，通常只能在局部性原理的指导下依据过去的统计数据来进行预测")])]),t._v(" "),a("h3",{attrs:{id:"_5-1最优页面置换算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1最优页面置换算法"}},[t._v("#")]),t._v(" 5.1最优页面置换算法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("思路：当一个缺页中断发生时，对于保存在内存中的每一个逻辑页面，计算在它的下一次访问之前，还需要等待多长时间，从中选择等待时间最长的那个，作为被置换的页面")])]),t._v(" "),a("li",[a("p",[t._v("但是这只是一个非常理想的情况，在实际中是无法实现的，因为操作系统无法知道每个页面需要等待多长时间才可以被再次访问")])]),t._v(" "),a("li",[a("p",[t._v("可用作其它算法的性能评价的依据，在一个模拟器上运行某个程序，并记录每一次的页面访问情况，在第二遍运行时即可使用最优算法")])])]),t._v(" "),a("h3",{attrs:{id:"_5-2先进先出算法fifo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2先进先出算法fifo"}},[t._v("#")]),t._v(" 5.2先进先出算法FIFO")]),t._v(" "),a("ul",[a("li",[t._v("基本思路：选择在内存中驻留时间最长的页面并淘汰之。具体来说，系统维护着一个链表，记录了所有位于内存当中的逻辑页面。从链表的排列顺序来看，链首页面的驻留时间最长，链尾页面的驻留时间最短。当发生一个缺页中断时，把链首页面淘汰出局，并把新的页面添加到链表的末尾。")])]),t._v(" "),a("p",[a("strong",[t._v("性能较差")]),t._v("，调出的页面有可能是经常要访问的页面，并且有"),a("strong",[t._v("Belady现象")])]),t._v(" "),a("h3",{attrs:{id:"_5-3最近最久未使用算法lru"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3最近最久未使用算法lru"}},[t._v("#")]),t._v(" 5.3最近最久未使用算法LRU")]),t._v(" "),a("ul",[a("li",[t._v("基本思路：当一个缺页中断发生时，选择最久未使用的那个页面，并淘汰之")])]),t._v(" "),a("p",[t._v("它是对最优页面置换算法的一个近似，其依据是程序的局部性原理，即在最近一小段时间（最近几条指令）内，如果某些页面被频繁地访问，那么在将来的一小段时间内，它们还可能会再一次被频繁地访问。反过来说，如果在过去某些页面长时间未被访问，那么在将来它们还可能会长时间地得不到访")]),t._v(" "),a("p",[t._v("可以理解成："),a("strong",[t._v("用过去推测未来")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202232100399.png",alt:"image-20220223210035549"}}),t._v(" "),a("ul",[a("li",[t._v("方法一：系统维护一个页面链表，最近刚刚使用过的页面作为首结点，最久未使用的页面作为尾结点。每一次访问内存时，找到相应的页面，把它从链表中摘下来，再移动到链表之首。每次缺页中断发生时，淘汰链表末尾的页面")]),t._v(" "),a("li",[t._v("方法二：设置一个活动页面栈，当访问某页时，将此页号压入栈顶，然后，考察栈内是否有与此页面相同的页号，若有则抽出。当需要淘汰一个页面时，总是选择栈底的页面，它就是最久未使用的")])]),t._v(" "),a("p",[a("strong",[t._v("缺点：开销过大")])]),t._v(" "),a("h3",{attrs:{id:"_5-4时钟页面置换算法clock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4时钟页面置换算法clock"}},[t._v("#")]),t._v(" 5.4时钟页面置换算法Clock")]),t._v(" "),a("ul",[a("li",[t._v("基本思路：需要用到页表项当中的访问位，当一个页面被装入内存时，把该位初始化为0。然后如果这个页面被访问，则把该位置为1；把各个页面组织成环形链表，把指针指向最老的页面；当发生一个缺页中断时，考察指针所指向的最老页面，若它的访问位为0，立即淘汰；若访问位为1，则把该位置为0，然后指针往下移动一格。如此下去，直到找到被淘汰的页面，然后把指针移动到它的下一格。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202232153681.png",alt:"image-20220223215330994"}}),t._v(" "),a("h3",{attrs:{id:"_5-5二次机会法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5二次机会法"}},[t._v("#")]),t._v(" 5.5二次机会法")]),t._v(" "),a("p",[t._v("这是一种对于Clock算法的改进，使它运行脏页总是在一次时钟头扫描中保留下来")]),t._v(" "),a("p",[t._v("脏页表示的就是被写访问操作过的页")]),t._v(" "),a("p",[t._v("读写操作分别维护着一个01位，当存在一个1时有一次不被替换的机会，有两个1时有两次不被替换的机会，没有1时将直接被替换")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202232204509.png",alt:"image-20220223220448026"}}),t._v(" "),a("h3",{attrs:{id:"_5-6最不常用算法lfu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-6最不常用算法lfu"}},[t._v("#")]),t._v(" 5.6最不常用算法LFU")]),t._v(" "),a("ul",[a("li",[t._v("基本思路：当一个缺页发生时，选择访问次数最少的那个页面并淘汰")]),t._v(" "),a("li",[t._v("实现方法：对每个页面设置一个访问计数器，每当一个页面被访问时，该页面的访问计数器加1，当发生缺页中断时，淘汰数值最小的那个页面")]),t._v(" "),a("li",[t._v("LRU和LFU的区别：LRU考察的是多久未访问，时间越短越好；而LFU考察的是访问的次数或频度，访问次数越多越好")])]),t._v(" "),a("h3",{attrs:{id:"_5-7belady现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-7belady现象"}},[t._v("#")]),t._v(" 5.7Belady现象")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("概念：在采用FIFO算法时，有时会出现分配的物理页面数增加，缺页率反而提高的异常现象")])]),t._v(" "),a("li",[a("p",[t._v("原因：FIFO算法的置换特征于进程访问内存的动态特征是矛盾的，与置换算法的目标是不一致的（即替换较少使用的页面），因此被他置换出去的页面并不一定会是进程不会访问的")])])]),t._v(" "),a("h3",{attrs:{id:"_5-8比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-8比较"}},[t._v("#")]),t._v(" 5.8比较")]),t._v(" "),a("p",[t._v("LRU算法性能较好，但系统开销较大；FIFO算法系统开销较小，但可能会发生Belady现象。因此，折衷的办法就是Clock算法，在每一次页面访问时，它不必去动态地调整该页面在链表当中的顺序，而仅仅是做一个标记，然后等到发生缺页中断的时候，再把它移动到链表末尾。对于内存当中那些未被访问的页面，Clock算法的表现和LRU算法一样好；而对于那些曾经被访问过的页面，它不能象LRU算法那样，记住它们的准确位置")]),t._v(" "),a("h2",{attrs:{id:"六、全局页面置换算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、全局页面置换算法"}},[t._v("#")]),t._v(" 六、全局页面置换算法")]),t._v(" "),a("h3",{attrs:{id:"_6-1局部页面置换算法的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1局部页面置换算法的问题"}},[t._v("#")]),t._v(" 6.1局部页面置换算法的问题")]),t._v(" "),a("p",[t._v("在探究局部页面置换算法时都是假定分配的物理页帧是固定的，但是在实际环境中是可以跑多个程序的，每个程序分配到固定物理页帧数量这个状态是限制了灵活性的，需要根据程序不同的运行状态来动态分配调整物理页帧的大小")]),t._v(" "),a("h3",{attrs:{id:"_6-2工作集模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2工作集模型"}},[t._v("#")]),t._v(" 6.2工作集模型")]),t._v(" "),a("p",[t._v("所有的页面置换算法都基于一个非常关键的原理："),a("strong",[t._v("局部性原理")])]),t._v(" "),a("p",[t._v("没有局部性原理的程序在任何页面置换算法的效果下是相通的，每次页面访问都必然产生缺页中断")]),t._v(" "),a("ul",[a("li",[t._v("工作集概念：一个进程当前正在使用的逻辑页面集合，可以用一个二元函数来表示")])]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202241637338.png",alt:"image-20220224163706239"}}),t._v(" "),a("p",[t._v("举例说明，在t1和t2两个执行时刻下的工作集")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202241638610.png",alt:"image-20220224163845588"}}),t._v(" "),a("ul",[a("li",[t._v("工作集大小的变化：进程开始执行后，随着访问新页面逐步建立较稳定的工作集。当内存访问的局部性区域的位置大致稳定时，工作集大小也大致稳定；局部性区域的位置改变时，工作集快速扩张和收缩过渡到下一个稳定值。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202241652976.png",alt:"image-20220224165249967"}}),t._v(" "),a("h3",{attrs:{id:"_6-3常驻集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3常驻集"}},[t._v("#")]),t._v(" 6.3常驻集")]),t._v(" "),a("ul",[a("li",[t._v("概念：常驻集是指在当前时刻，进程实际驻留在内存当中的页面集合。")])]),t._v(" "),a("p",[t._v("工作集是进程在运行过程中固有的性质，而常驻集取决于系统分配给进程的物理页面数目，以及所采用的页面置换算法")]),t._v(" "),a("p",[t._v("如果一个进程的整个工作集都在内存当中，即常驻集包含工作集，那么进程将很顺利地运行，而不会造成太多的缺页中断（直到工作集发生剧烈变动，从而过渡到另一个状态）")]),t._v(" "),a("p",[t._v("当进程常驻集的大小达到某个数目之后，再给它分配更多的物理页面，缺页率也不会明显下降。")]),t._v(" "),a("h3",{attrs:{id:"_6-4工作集页置换算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4工作集页置换算法"}},[t._v("#")]),t._v(" 6.4工作集页置换算法")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202241742298.png",alt:"image-20220224174216362"}}),t._v(" "),a("h3",{attrs:{id:"_6-5缺页率页面置换算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-5缺页率页面置换算法"}},[t._v("#")]),t._v(" 6.5缺页率页面置换算法")]),t._v(" "),a("ul",[a("li",[t._v("思想：常驻集大小可变。例如：每个进程在刚开始运行的时候，先根据程序大小给它分配一定数目的物理页面，然后在进程运行过程中，再动态地调整常驻集的大小")]),t._v(" "),a("li",[t._v("缺页率 = 缺页次数 / 内存访问次数")]),t._v(" "),a("li",[t._v("影响缺页率的因素：\n"),a("ul",[a("li",[t._v("页面置换算法")]),t._v(" "),a("li",[t._v("分配给进程的物理页面数量")]),t._v(" "),a("li",[t._v("页面本身的大小")]),t._v(" "),a("li",[t._v("程序的编写方式")])])])]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202241747085.png",alt:"image-20220224174706905"}}),t._v(" "),a("p",[t._v("具体做法是"),a("strong",[t._v("根据缺页的频度来动态调整工作集的大小")])]),t._v(" "),a("ul",[a("li",[t._v("当缺页率高的时候增加工作集")]),t._v(" "),a("li",[t._v("当缺页率低的时候减少工作集")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/lee8150951/picture-bed/raw/master/images/202202241750709.png",alt:"image-20220224175028656"}}),t._v(" "),a("h2",{attrs:{id:"七、抖动问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、抖动问题"}},[t._v("#")]),t._v(" 七、抖动问题")]),t._v(" "),a("ul",[a("li",[t._v("概念：如果分配给一个进程的物理页面太少，不能包含整个的工作集即常驻集小于工作集，那么进程将会造成很多的缺页中断，需要频繁地在内存与外存之间替换页面，从而使进程的运行速度变得很慢，我们把这种状态称为“抖动”")]),t._v(" "),a("li",[t._v("产生抖动的原因：随着驻留内存的进程数目增加，分配给每个进程的物理页面数不断减小，缺页率不断上升。所以OS要选择个适当的进程数目和进程需要的顿数，以便在并发水平和缺页率之间达到一个平衡")])])])}),[],!1,null,null,null);_.default=v.exports}}]);