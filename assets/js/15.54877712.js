(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{511:function(_,t,v){"use strict";v.r(t);var a=v(7),s=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"一、变量与常量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、变量与常量"}},[_._v("#")]),_._v(" 一、变量与常量")]),_._v(" "),v("p",[v("strong",[_._v("变量")]),_._v("的作用是给一段指定的内存空间命名，方便操作该段内存")]),_._v(" "),v("p",[v("strong",[_._v("常量")]),_._v("用于记录程序中不可以更改的数据，C++有两种定义常量的方式")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("#define")]),_._v(" 宏常量 "),v("code",[_._v("#define 常量名 常量值")])])]),_._v(" "),v("p",[_._v("该方法通常在文件上方进行定义，表示一个常量")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("const")]),_._v(" 修饰的变量 "),v("code",[_._v("const 数据类型 常量名 = 常量值")])])]),_._v(" "),v("p",[_._v("通常在变量定义前加关键字const，修饰该变量为常量，不可修改")]),_._v(" "),v("p",[v("strong",[_._v("标识符命名规则：")])]),_._v(" "),v("ul",[v("li",[_._v("标识符不能是关键字")]),_._v(" "),v("li",[_._v("标识符只能有字母、数字、下划线组成")]),_._v(" "),v("li",[_._v("第一个字符必须是字母或下划线")]),_._v(" "),v("li",[_._v("标识符中的字母区分大小写")])]),_._v(" "),v("h2",{attrs:{id:"二、数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、数据类型"}},[_._v("#")]),_._v(" 二、数据类型")]),_._v(" "),v("h3",{attrs:{id:"_2-1整型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1整型"}},[_._v("#")]),_._v(" 2.1整型")]),_._v(" "),v("p",[_._v("作用：给整形变量表示的是整数类型的数据")]),_._v(" "),v("p",[v("strong",[_._v("数据类型存在的意义就是给变量分配一个合适的内存空间， 可以避免空间的浪费")])]),_._v(" "),v("p",[_._v("C++中可以标识整形的类型有以下几种")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("数据类型")]),_._v(" "),v("th",[_._v("占用空间")]),_._v(" "),v("th",[_._v("取值范围")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("short")]),_._v(" "),v("td",[_._v("2字节")]),_._v(" "),v("td",[_._v("(-2^15 ~ 2^15)")])]),_._v(" "),v("tr",[v("td",[_._v("int")]),_._v(" "),v("td",[_._v("4字节")]),_._v(" "),v("td",[_._v("(-2^31 ~ 2^31)")])]),_._v(" "),v("tr",[v("td",[_._v("long")]),_._v(" "),v("td",[_._v("windows为4字节，Linux为4字节（32位）8字节（64位）")]),_._v(" "),v("td",[_._v("(-2^31 ~ 2^31)")])]),_._v(" "),v("tr",[v("td",[_._v("long long")]),_._v(" "),v("td",[_._v("8字节")]),_._v(" "),v("td",[_._v("(-2^63 ~ 2^63)")])])])]),_._v(" "),v("p",[v("strong",[_._v("sizeof关键字")]),_._v("可以用于查看数据类型占用内存的大小")]),_._v(" "),v("p",[_._v("使用方法："),v("code",[_._v("sizeof(num1)")]),_._v(" "),v("code",[_._v("sizeof(int)")]),_._v("（可以写入数据类型，也可以写入变量名称）")]),_._v(" "),v("h3",{attrs:{id:"_2-2浮点型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2浮点型"}},[_._v("#")]),_._v(" 2.2浮点型")]),_._v(" "),v("p",[_._v("用于表示小数，分为单精度float和双精度double两种，两者区别在于有效数字范围不同")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("数据类型")]),_._v(" "),v("th",[_._v("占用空间")]),_._v(" "),v("th",[_._v("有效数字范围")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("float")]),_._v(" "),v("td",[_._v("4字节")]),_._v(" "),v("td",[_._v("7位有效数字")])]),_._v(" "),v("tr",[v("td",[_._v("double")]),_._v(" "),v("td",[_._v("8字节")]),_._v(" "),v("td",[_._v("15 ~ 16位有效数字")])])])]),_._v(" "),v("p",[_._v("C++中默认情况下输出一个小数会输出6位有效数字")]),_._v(" "),v("p",[_._v("科学计数法：例如"),v("code",[_._v("3e2")]),_._v("表示"),v("code",[_._v("3 * 10 ^ 2")])]),_._v(" "),v("h3",{attrs:{id:"_2-3字符型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3字符型"}},[_._v("#")]),_._v(" 2.3字符型")]),_._v(" "),v("p",[_._v("字符型变量用于显示单个字符")]),_._v(" "),v("ul",[v("li",[_._v("在现实字符型变量时，用"),v("strong",[_._v("单引号")]),_._v("扩起来，不要用双引号")]),_._v(" "),v("li",[_._v("单引号内只能是单字符，不可以是字符串")])]),_._v(" "),v("p",[_._v("C++中字符型变量值占用一个字节")]),_._v(" "),v("p",[_._v("字符型变量并不是将字符本身放到内存中存储，而是将对应的ASCII码放到存储单元中")]),_._v(" "),v("h3",{attrs:{id:"_2-4字符串型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4字符串型"}},[_._v("#")]),_._v(" 2.4字符串型")]),_._v(" "),v("p",[_._v("C++中有两种字符串风格：")]),_._v(" "),v("ul",[v("li",[_._v("C语言风格字符串："),v("code",[_._v('char 变量名[] = "字符串变量"')])]),_._v(" "),v("li",[_._v("C++风格字符串："),v("code",[_._v('string 变量名 = "字符串变量"')])])]),_._v(" "),v("h3",{attrs:{id:"_2-5布尔类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5布尔类型"}},[_._v("#")]),_._v(" 2.5布尔类型")]),_._v(" "),v("p",[_._v("只有两种值：true和false")]),_._v(" "),v("p",[_._v("布尔类型占用一个字节大小")]),_._v(" "),v("h3",{attrs:{id:"_2-6数据的输入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6数据的输入"}},[_._v("#")]),_._v(" 2.6数据的输入")]),_._v(" "),v("p",[_._v("作用：用于从键盘获取数据")]),_._v(" "),v("p",[_._v("关键字：cin")]),_._v(" "),v("p",[_._v("语法："),v("code",[_._v("cin >> 变量")])]),_._v(" "),v("h2",{attrs:{id:"三、运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、运算符"}},[_._v("#")]),_._v(" 三、运算符")]),_._v(" "),v("p",[_._v("前置递增和后置递增的区别在于："),v("strong",[_._v("前置递增先让变量加一然后进行表达式计算；后置递增先进行表达式运算，后让变量加一")])]),_._v(" "),v("p",[_._v("逻辑运算符作用是根据表达式的值返回true或者false，有三种："),v("code",[_._v("!")]),_._v("，"),v("code",[_._v("&&")]),_._v("，"),v("code",[_._v("||")]),_._v("分别表示非，与，或")]),_._v(" "),v("h2",{attrs:{id:"四、程序流程结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、程序流程结构"}},[_._v("#")]),_._v(" 四、程序流程结构")]),_._v(" "),v("p",[_._v("C++支持三种程序运行结构：")]),_._v(" "),v("ul",[v("li",[_._v("顺序结构：程序按顺序执行，不发生跳转")]),_._v(" "),v("li",[_._v("选择结构：根据条件是否满足，有选择地执行相应功能")]),_._v(" "),v("li",[_._v("循环结构：根据条件是否满足，循环多次执行某段代码")])]),_._v(" "),v("h3",{attrs:{id:"_4-1选择结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1选择结构"}},[_._v("#")]),_._v(" 4.1选择结构")]),_._v(" "),v("h4",{attrs:{id:"_4-1-1if语句"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1if语句"}},[_._v("#")]),_._v(" 4.1.1if语句")]),_._v(" "),v("p",[_._v("单行格式语句："),v("code",[_._v("if(条件) {条件满足执行的语句}")])]),_._v(" "),v("p",[_._v("多行格式语句："),v("code",[_._v("if(条件) {条件满足执行的语句} else {条件不满足执行的语句}")])]),_._v(" "),v("p",[_._v("多条件格式语句："),v("code",[_._v("if(条件) {条件满足执行的语句} else if(条件) {条件满足执行的语句} else {条件不满足执行的语句}")])]),_._v(" "),v("h4",{attrs:{id:"_4-1-2三目运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2三目运算符"}},[_._v("#")]),_._v(" 4.1.2三目运算符")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("作用：通过三目运算符实现简单的判断")])]),_._v(" "),v("li",[v("p",[_._v("语法："),v("code",[_._v("表达式1 ? 表达式2 : 表达式3")])])]),_._v(" "),v("li",[v("p",[_._v("解释：如果表达式1为真，则执行表达式2的语句，并返回表达式2的结果；如果表达式1为假，则执行表达式3的语句，并返回表达式3的结果")])])]),_._v(" "),v("h4",{attrs:{id:"_4-1-3switch语句"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3switch语句"}},[_._v("#")]),_._v(" 4.1.3switch语句")]),_._v(" "),v("p",[_._v("作用：执行多条件分支语句")]),_._v(" "),v("div",{staticClass:"language-cpp extra-class"},[v("pre",{pre:!0,attrs:{class:"language-cpp"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("switch")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("express"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("case")]),_._v(" result1"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" 执行语句"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("break")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("case")]),_._v(" result2"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" 执行语句"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("break")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("default")]),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v("执行语句"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("break")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" \n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n")])])]),v("p",[_._v("switch语句和if else语句相比最大的缺点就是："),v("strong",[_._v("判断的时候只能是整形或者字符型，不可以是一个区间")])]),_._v(" "),v("p",[_._v("其优点在于结构清晰，执行效率更高")]),_._v(" "),v("h3",{attrs:{id:"_4-2循环结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2循环结构"}},[_._v("#")]),_._v(" 4.2循环结构")]),_._v(" "),v("h4",{attrs:{id:"_4-2-1while循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1while循环"}},[_._v("#")]),_._v(" 4.2.1while循环")]),_._v(" "),v("p",[_._v("只要循环条件结果为真，就执行循环语句")]),_._v(" "),v("p",[_._v("语法："),v("code",[_._v("while(循环条件) {循环体}")])]),_._v(" "),v("h4",{attrs:{id:"_4-2-2do-while循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2do-while循环"}},[_._v("#")]),_._v(" 4.2.2do...while循环")]),_._v(" "),v("p",[_._v("语法："),v("code",[_._v("do {循环体} while(循环条件)")])]),_._v(" "),v("p",[_._v("注意："),v("strong",[_._v("与while循环的区别在于do...while会先执行一次循环语句，再判断循环条件")])]),_._v(" "),v("h4",{attrs:{id:"_4-2-3for循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3for循环"}},[_._v("#")]),_._v(" 4.2.3for循环")]),_._v(" "),v("p",[_._v("满足循环条件，执行循环语句")]),_._v(" "),v("p",[_._v("语法："),v("code",[_._v("for(起始表达式;条件表达式;末尾循环体) {循环体}")])]),_._v(" "),v("h3",{attrs:{id:"_4-3条转语句"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3条转语句"}},[_._v("#")]),_._v(" 4.3条转语句")]),_._v(" "),v("h4",{attrs:{id:"_4-3-1break语句"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1break语句"}},[_._v("#")]),_._v(" 4.3.1break语句")]),_._v(" "),v("p",[_._v("作用：勇于跳出选择结构或者循环结构")]),_._v(" "),v("p",[_._v("break使用时机：")]),_._v(" "),v("ul",[v("li",[_._v("出现在switch语句中，作用是中止case并跳出switch")]),_._v(" "),v("li",[_._v("出现在循环语句中，作用是跳出当前的循环语句")]),_._v(" "),v("li",[_._v("出现在嵌套循环中，跳出最近的"),v("strong",[_._v("内层")]),_._v("循环语句")])]),_._v(" "),v("h4",{attrs:{id:"_4-3-2continue语句"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2continue语句"}},[_._v("#")]),_._v(" 4.3.2continue语句")]),_._v(" "),v("p",[_._v("作用：在循环语句中跳出本次循环余下尚未执行的语句，继续执行下一次循环")]),_._v(" "),v("h4",{attrs:{id:"_4-3-3goto语句"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3goto语句"}},[_._v("#")]),_._v(" 4.3.3goto语句")]),_._v(" "),v("p",[_._v("作用：无条件跳转语句")]),_._v(" "),v("p",[_._v("语法："),v("code",[_._v("goto 标记")])]),_._v(" "),v("p",[_._v("解释：如果标记的名称存在，执行到goto语句时，会跳转到标记的位置")]),_._v(" "),v("p",[_._v("一般情况下，不建议使用goto语句，会导致程序阅读非常困难，代码结构逻辑混乱")])])}),[],!1,null,null,null);t.default=s.exports}}]);