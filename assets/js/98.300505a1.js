(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{600:function(s,t,e){"use strict";e.r(t);var a=e(7),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一、发布者publisher编程实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、发布者publisher编程实现"}},[s._v("#")]),s._v(" 一、发布者Publisher编程实现")]),s._v(" "),e("h3",{attrs:{id:"_1-1创建功能包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1创建功能包"}},[s._v("#")]),s._v(" 1.1创建功能包")]),s._v(" "),e("p",[s._v("首先在src目录下使用命令创建功能包")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("catkin_create_pkg learning_topic roscpp rospy std_msgs geometry_msgs turtlesim\n")])])]),e("p",[s._v("项目结构：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/07/27/uG49xXbHMeSL2Wd.png",alt:"2021-07-27 18-25-35 的屏幕截图.png"}})]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("/TestWorkspace")]),s._v("是工作空间文件夹")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("/TestWorkspace/src")]),s._v("是工作空间下功能包的存放位置")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("/TestWorkspace/src/learning_top")]),s._v("表示一个功能包")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("/TestWorkspace/src/learning_top/src")]),s._v("表示该功能包所有功能实现的源代码")])])]),s._v(" "),e("h3",{attrs:{id:"_1-2编写功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2编写功能"}},[s._v("#")]),s._v(" 1.2编写功能")]),s._v(" "),e("p",[s._v("完成功能包后开始编写功能代码")]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('/**\n * 该例程将发布turtle1/cmd_vel话题，消息类型geometry_msgs::Twist\n */\n#include <ros/ros.h>\n#include <geometry_msgs/Twist.h>\n    \nint main(int argc, char **argv)\n{\n\t// ROS节点初始化\n\tros::init(argc, argv, "velocity_publisher");\n\t// 创建节点句柄\n\tros::NodeHandle n;\n\t// 创建一个Publisher，发布名为/turtle1/cmd_vel的topic，消息类型为geometry_msgs::Twist，队列长度10\n\tros::Publisher turtle_vel_pub = n.advertise<geometry_msgs::Twist>("/turtle1/cmd_vel", 10);\n\t// 设置循环的频率\n\tros::Rate loop_rate(10);\n\tint count = 0;\n\twhile (ros::ok())\n\t{\n\t    // 初始化geometry_msgs::Twist类型的消息\n\t\tgeometry_msgs::Twist vel_msg;\n\t\tvel_msg.linear.x = 0.5;\n\t\tvel_msg.angular.z = 0.2;\n\t    // 发布消息\n\t\tturtle_vel_pub.publish(vel_msg);\n\t\tROS_INFO("Publsh turtle velocity command[%0.2f m/s, %0.2f rad/s]", \n\t\t\t\tvel_msg.linear.x, vel_msg.angular.z);\n\t    // 按照循环频率延时\n\t    loop_rate.sleep();\n\t}\n\treturn 0;\n}\n\n')])])]),e("h4",{attrs:{id:"_1-2-1代码解读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1代码解读"}},[s._v("#")]),s._v(" 1.2.1代码解读")]),s._v(" "),e("ul",[e("li",[s._v("所有ROS节点都要做的一件事情就是ROS节点的初始化")])]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// ROS节点初始化\nros::init(argc, argv, "velocity_publisher");\n')])])]),e("p",[s._v("在节点初始化环节需要对节点进行命名，"),e("strong",[s._v("在ROS中节点名是不可以重复的")])]),s._v(" "),e("p",[s._v("该代码中"),e("code",[s._v("argc")]),s._v("和"),e("code",[s._v("argv")]),s._v("是调用该函数时传进来的两个参数并参与节点的初始化，通常情况下在初始化环节写节点名即可")]),s._v(" "),e("ul",[e("li",[s._v("创建句柄")])]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 创建节点句柄\nros::NodeHandle n;\n")])])]),e("p",[s._v("句柄主要使用与管理ROS相关API资源，即"),e("strong",[s._v("用于管理节点资源")])]),s._v(" "),e("ul",[e("li",[s._v("创建一个Publisher")])]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 创建一个Publisher，发布名为/turtle1/cmd_vel的topic，消息类型为geometry_msgs::Twist，队列长度10\nros::Publisher turtle_vel_pub = n.advertise<geometry_msgs::Twist>("/turtle1/cmd_vel", 10);\n')])])]),e("p",[e("code",[s._v("<geometry_msgs::Twist>")]),s._v("是该消息的数据结构，尖括号内部里面填写的是要发布消息的数据类型")]),s._v(" "),e("p",[e("code",[s._v('("/turtle1/cmd_vel", 10)')]),s._v("是两个部分，第一个部分是发布的话题名是什么（必须和订阅的话题名相同，否则会出现管道不同的问题），第二个部分是队列长度")]),s._v(" "),e("ul",[e("li",[s._v("设置频率")])]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 设置循环的频率\nros::Rate loop_rate(10);\n")])])]),e("p",[s._v("这一块主要负责设置pub的频率，后面的代码会进入一个循环，也就是设定了循环的频率")]),s._v(" "),e("ul",[e("li",[s._v("设置Twist消息的内容")])]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" // 初始化geometry_msgs::Twist类型的消息\ngeometry_msgs::Twist vel_msg;\nvel_msg.linear.x = 0.5;\nvel_msg.angular.z = 0.2;\n")])])]),e("p",[s._v("首先创建类对象"),e("code",[s._v("geometry_msgs::Twist vel_msg;")]),s._v("该对象中包含了线速度和角速度：")]),s._v(" "),e("p",[s._v("线速度："),e("code",[s._v("vel_msg.linear.x = 0.5;")]),s._v("（m/s）")]),s._v(" "),e("p",[s._v("角速度："),e("code",[s._v("vel_msg.angular.z = 0.2;")]),s._v("（度/s）")]),s._v(" "),e("ul",[e("li",[s._v("发布数据")])]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 发布消息\nturtle_vel_pub.publish(vel_msg);\nROS_INFO("Publsh turtle velocity command[%0.2f m/s, %0.2f rad/s]", \n\t\tvel_msg.linear.x, vel_msg.angular.z);\n')])])]),e("p",[s._v("在前面创建的publisher："),e("code",[s._v("turtle_vel_pub.publish")]),s._v("中有一个方法"),e("code",[s._v("publish")]),s._v("，该方法的参数就是输出的内容")]),s._v(" "),e("p",[s._v("之后ROS会根据底层的通讯机制将数据压入消息队列中，队列会不断的发送出去")]),s._v(" "),e("p",[e("code",[s._v("ROS_INFO")]),s._v("类似与C语言中的"),e("code",[s._v("printf")]),s._v("方法不断地在控制台进行日志输出，可以在客户端看到相关发送的信息")]),s._v(" "),e("h4",{attrs:{id:"_1-2-2流程总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2流程总结"}},[s._v("#")]),s._v(" 1.2.2流程总结")]),s._v(" "),e("p",[e("strong",[s._v("如何实现一个Publisher？")])]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("初始化ROS节点")]),s._v(" "),e("li",[s._v("向ROS Master注册节点信息，包括发布的话题名和话题中的消息类型")]),s._v(" "),e("li",[s._v("创建消息数据")]),s._v(" "),e("li",[s._v("按照一定频率循环发布消息")])])]),s._v(" "),e("h3",{attrs:{id:"_1-3配置编译规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3配置编译规则"}},[s._v("#")]),s._v(" 1.3配置编译规则")]),s._v(" "),e("p",[s._v("配置CMakeLists.txt的编译规则")]),s._v(" "),e("ul",[e("li",[s._v("设置需要编译的代码和生成的可执行文件")]),s._v(" "),e("li",[s._v("设置链接库")])]),s._v(" "),e("p",[s._v("在该文件build配置区域内添加以下代码")]),s._v(" "),e("div",{staticClass:"language-cmake extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cmake"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_executable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("velocity_publisher src/velocity_publisher.cpp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("target_link_libraries")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("velocity_publisher "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("catkin_LIBRARIES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("p",[e("code",[s._v("add_executable(velocity_publisher src/velocity_publisher.cpp)")]),s._v("是配置代码的编译")]),s._v(" "),e("p",[e("code",[s._v("target_link_libraries(velocity_publisher ${catkin_LIBRARIES})")]),s._v("是配置可执行文件的链接")]),s._v(" "),e("h3",{attrs:{id:"_1-4编译并运行publisher"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4编译并运行publisher"}},[s._v("#")]),s._v(" 1.4编译并运行Publisher")]),s._v(" "),e("img",{staticStyle:{zoom:"58%"},attrs:{src:"https://i.loli.net/2021/07/27/KwbMq1LWEiNISrF.png",alt:"2021-07-27 17-06-55 的屏幕截图.png"}}),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("catkin_make")]),s._v("就是执行编译的指令")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("source devel/setup.bash")]),s._v("设置环境变量")])])]),s._v(" "),e("p",[s._v("执行后运行海龟模拟器，结果如下所示")]),s._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://i.loli.net/2021/07/27/6vYQBRcykN4Aate.png",alt:"2021-07-27 17-18-52 的屏幕截图.png"}}),s._v(" "),e("h2",{attrs:{id:"二、订阅者subscriber编程实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、订阅者subscriber编程实现"}},[s._v("#")]),s._v(" 二、订阅者Subscriber编程实现")]),s._v(" "),e("h3",{attrs:{id:"_2-1编写功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1编写功能"}},[s._v("#")]),s._v(" 2.1编写功能")]),s._v(" "),e("p",[s._v("在相应功能包中编写功能代码，如下：")]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('/**\n * 该例程将订阅/turtle1/pose话题，消息类型turtlesim::Pose\n */\n#include <ros/ros.h>\n#include "turtlesim/Pose.h"\n\n// 接收到订阅的消息后，会进入消息回调函数\nvoid poseCallback(const turtlesim::Pose::ConstPtr& msg)\n{\n    // 将接收到的消息打印出来\n    ROS_INFO("Turtle pose: x:%0.6f, y:%0.6f", msg->x, msg->y);\n}\nint main(int argc, char **argv)\n{\n    // 初始化ROS节点\n    ros::init(argc, argv, "pose_subscriber");\n    // 创建节点句柄\n    ros::NodeHandle n;\n    // 创建一个Subscriber，订阅名为/turtle1/pose的topic，注册回调函数poseCallback\n    ros::Subscriber pose_sub = n.subscribe("/turtle1/pose", 10, poseCallback);\n    // 循环等待回调函数\n    ros::spin();\n    return 0;\n}\n')])])]),e("h4",{attrs:{id:"_2-1-1代码解读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1代码解读"}},[s._v("#")]),s._v(" 2.1.1代码解读")]),s._v(" "),e("ul",[e("li",[s._v("初始化ROS节点")])]),s._v(" "),e("p",[s._v("同样的，所有的ROS节点都需要初始化")]),s._v(" "),e("ul",[e("li",[s._v("创建句柄管理资源")]),s._v(" "),e("li",[s._v("创建一个Subscriber")])]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 创建一个Subscriber，订阅名为/turtle1/pose的topic，注册回调函数poseCallback\nros::Subscriber pose_sub = n.subscribe("/turtle1/pose", 10, poseCallback);\n')])])]),e("p",[s._v("对象的初始化信息包括：需要订阅的话题名"),e("code",[s._v('"/turtle1/pose"')]),s._v("（注意话题名一定要匹配），队列长度，回调函数")]),s._v(" "),e("p",[e("strong",[s._v("回调函数的作用在于订阅者并不知道发布者的数据什么时候进入，一旦有数据进入，Subscriber就必须立马处理，也就是说这个消息并没有同步性")])]),s._v(" "),e("ul",[e("li",[s._v("循环等待")])]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 循环等待回调函数\nros::spin();\n")])])]),e("p",[e("code",[s._v("spin()")]),s._v("函数是ROS系统中的一个死循环函数，进入该循环后会不断监听是否有数据进来，一旦有数据进入则会执行回调函数")]),s._v(" "),e("p",[s._v("也就是说，程序在正常情况下不会运行到"),e("code",[s._v("return 0;")])]),s._v(" "),e("ul",[e("li",[s._v("回调函数")])]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 接收到订阅的消息后，会进入消息回调函数\nvoid poseCallback(const turtlesim::Pose::ConstPtr& msg)\n{\n    // 将接收到的消息打印出来\n    ROS_INFO("Turtle pose: x:%0.6f, y:%0.6f", msg->x, msg->y);\n}\n')])])]),e("p",[s._v("回调函数的接受参数是针对消息的一个指针")]),s._v(" "),e("p",[e("code",[s._v("turtlesim::Pose")]),s._v("是消息的结构，与话题发布的内容完全一致")]),s._v(" "),e("p",[e("code",[s._v("ConstPtr")]),s._v("是一个长指针")]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 将接收到的消息打印出来\nROS_INFO("Turtle pose: x:%0.6f, y:%0.6f", msg->x, msg->y);\n')])])]),e("p",[e("code",[s._v("ROS_INFO()")]),s._v("用于打印实时位置")]),s._v(" "),e("h4",{attrs:{id:"_2-1-2流程总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2流程总结"}},[s._v("#")]),s._v(" 2.1.2流程总结")]),s._v(" "),e("p",[e("strong",[s._v("如何实现一个Subscriber？")])]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("初始化ROS节点")]),s._v(" "),e("li",[s._v("订阅需要的话题")]),s._v(" "),e("li",[s._v("循环等待话题消息，接收到消息后进入回调函数")]),s._v(" "),e("li",[s._v("在回调函数中完成信息处理")])])]),s._v(" "),e("p",[s._v("注意：回调函数中对于数据的处理一定要高效，时间不能太长")]),s._v(" "),e("h3",{attrs:{id:"_2-2配置编译规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2配置编译规则"}},[s._v("#")]),s._v(" 2.2配置编译规则")]),s._v(" "),e("div",{staticClass:"language-cmake extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cmake"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_executable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pose_subscriber src/pose_subscriber.cpp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("target_link_libraries")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pose_subscriber "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("catkin_LIBRARIES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("h3",{attrs:{id:"_2-3编译并运行subscriber"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3编译并运行subscriber"}},[s._v("#")]),s._v(" 2.3编译并运行Subscriber")]),s._v(" "),e("img",{staticStyle:{zoom:"58%"},attrs:{src:"https://i.loli.net/2021/07/27/wUQyihL4AGaSlMJ.png",alt:"2021-07-27 17-58-54 的屏幕截图.png"}}),s._v(" "),e("p",[s._v("结果如下所示：")]),s._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://i.loli.net/2021/07/27/6rEGiyNPUmlHgXR.png",alt:"2021-07-27 18-14-47 的屏幕截图.png"}}),s._v(" "),e("h2",{attrs:{id:"三、话题消息定义与使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、话题消息定义与使用"}},[s._v("#")]),s._v(" 三、话题消息定义与使用")]),s._v(" "),e("p",[s._v("在自定义开发中可能会面临ROS已经定义好的消息可能无法满足开发需求，需要自己来定义话题消息")]),s._v(" "),e("p",[s._v("当然整个通讯还是在ROS Master管理器下进行的")]),s._v(" "),e("h3",{attrs:{id:"_3-1自定义话题消息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1自定义话题消息"}},[s._v("#")]),s._v(" 3.1自定义话题消息")]),s._v(" "),e("blockquote",[e("p",[s._v("步骤总览：")]),s._v(" "),e("ul",[e("li",[s._v("定义msg文件")]),s._v(" "),e("li",[s._v("在"),e("code",[s._v("package.xml")]),s._v("中添加功能包依赖")]),s._v(" "),e("li",[s._v("在"),e("code",[s._v("CMakeLists.txt")]),s._v("中添加编译选项")]),s._v(" "),e("li",[s._v("编译生成语言相关文件")])])]),s._v(" "),e("h4",{attrs:{id:"_1-定义msg文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义msg文件"}},[s._v("#")]),s._v(" 1）定义msg文件")]),s._v(" "),e("p",[s._v("自定义话题文件一般都放在了相应功能包下的msg文件夹中")]),s._v(" "),e("p",[s._v("在msg文件夹下创建Person.msg文件并写入以下代码")]),s._v(" "),e("div",{staticClass:"language-msg extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("string name\nuint8 sex\nuint8 age\n\nuint8 unknown = 0\nuint8 male = 1\nuint8 female = 2\n")])])]),e("h4",{attrs:{id:"_2-添加功能包依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加功能包依赖"}},[s._v("#")]),s._v(" 2）添加功能包依赖")]),s._v(" "),e("p",[s._v("在当前功能包下的pakage.xml中添加依赖（固定配置）")]),s._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("build_depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("message_generation"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("build_depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("exec_depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("message_runtime"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("exec_depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),e("p",[e("code",[s._v("<build_depend>")]),s._v("标签内部为编译依赖")]),s._v(" "),e("p",[e("code",[s._v("<exec_depend>")]),s._v("标签内部为运行依赖")]),s._v(" "),e("h4",{attrs:{id:"_3-添加编译选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加编译选项"}},[s._v("#")]),s._v(" 3）添加编译选项")]),s._v(" "),e("ul",[e("li",[s._v("由于添加了新功能包，所以需要在CMakeLists.txt文件中添加相应功能包查询选项（位于"),e("code",[s._v("find_pakage")]),s._v("栏目中）")])]),s._v(" "),e("div",{staticClass:"language-cmake extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cmake"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("find_package")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("catkin REQUIRED COMPONENTS\n  geometry_msgs\n  roscpp\n  rospy\n  std_msgs\n  turtlesim\n  message_generation\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("ul",[e("li",[s._v("在CMakeLists.txt中配置msg编译设置（位于"),e("code",[s._v("Declare ROS messages, services and actions")]),s._v("栏目中）")])]),s._v(" "),e("div",{staticClass:"language-cmake extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cmake"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add_message_files")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FILES Person.msg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("generate_messages")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DEPENDENCIES std_msgs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("ul",[e("li",[s._v("添加运行时的依赖（位于"),e("code",[s._v("catkin_package")]),s._v("栏目中）")])]),s._v(" "),e("div",{staticClass:"language-cmake extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cmake"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("catkin_package")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  INCLUDE_DIRS include")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  LIBRARIES learning_topic")]),s._v("\n  CATKIN_DEPENDS geometry_msgs roscpp rospy std_msgs turtlesim message_runtime\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  DEPENDS system_lib")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("ul",[e("li",[e("code",[s._v("catkin_make")]),s._v("指令进行编译")])]),s._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://i.loli.net/2021/07/27/oBhlkg9Aivuerf6.png",alt:"2021-07-27 19-40-34 的屏幕截图.png"}}),s._v(" "),e("p",[s._v("编译成功后即可以在/devel/include下找到该"),e("code",[s._v(".msg")]),s._v("文件编译出来的"),e("code",[s._v(".h")]),s._v("文件")]),s._v(" "),e("h3",{attrs:{id:"_3-2创建publisher和subscriber"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2创建publisher和subscriber"}},[s._v("#")]),s._v(" 3.2创建Publisher和Subscriber")]),s._v(" "),e("h4",{attrs:{id:"_1-publisher"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-publisher"}},[s._v("#")]),s._v(" 1）Publisher")]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('/**\n * 该例程将发布/person_info话题，自定义消息类型learning_topic::Person\n */\n#include <ros/ros.h>\n#include "learning_topic/Person.h"\n\nint main(int argc, char **argv)\n{\n    // ROS节点初始化\n    ros::init(argc, argv, "person_publisher");\n    // 创建节点句柄\n    ros::NodeHandle n;\n    // 创建一个Publisher，发布名为/person_info的topic，消息类型为learning_topic::Person，队列长度10\n    ros::Publisher person_info_pub = n.advertise<learning_topic::Person>("/person_info", 10);\n    // 设置循环的频率\n    ros::Rate loop_rate(1);\n    int count = 0;\n    while (ros::ok())\n    {\n        // 初始化learning_topic::Person类型的消息\n    \tlearning_topic::Person person_msg;\n\t\tperson_msg.name = "Tom";\n\t\tperson_msg.age  = 18;\n\t\tperson_msg.sex  = learning_topic::Person::male;\n        // 发布消息\n\t\tperson_info_pub.publish(person_msg);\n       \tROS_INFO("Publish Person Info: name:%s  age:%d  sex:%d", \n\t\t\t\t  person_msg.name.c_str(), person_msg.age, person_msg.sex);\n        // 按照循环频率延时\n        loop_rate.sleep();\n    }\n    return 0;\n}\n')])])]),e("p",[s._v("值得注意的就是在发布消息时不再像发布ROS自带信息一般")]),s._v(" "),e("p",[s._v("而是需要初始化Person类型的消息")]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 初始化learning_topic::Person类型的消息\nlearning_topic::Person person_msg;\nperson_msg.name = "Tom";\nperson_msg.age  = 18;\nperson_msg.sex  = learning_topic::Person::male;\n')])])]),e("p",[s._v("其他方式与标准方式类似")]),s._v(" "),e("p",[e("strong",[s._v("注意：引入的头文件为编译出的.h文件")])]),s._v(" "),e("h4",{attrs:{id:"_2-subscriber"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-subscriber"}},[s._v("#")]),s._v(" 2）Subscriber")]),s._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('/**\n * 该例程将订阅/person_info话题，自定义消息类型learning_topic::Person\n */\n#include <ros/ros.h>\n#include "learning_topic/Person.h"\n\n// 接收到订阅的消息后，会进入消息回调函数\nvoid personInfoCallback(const learning_topic::Person::ConstPtr& msg)\n{\n    // 将接收到的消息打印出来\n    ROS_INFO("Subcribe Person Info: name:%s  age:%d  sex:%d", \n\t\t\t msg->name.c_str(), msg->age, msg->sex);\n}\nint main(int argc, char **argv)\n{\n    // 初始化ROS节点\n    ros::init(argc, argv, "person_subscriber");\n    // 创建节点句柄\n    ros::NodeHandle n;\n    // 创建一个Subscriber，订阅名为/person_info的topic，注册回调函数personInfoCallback\n    ros::Subscriber person_info_sub = n.subscribe("/person_info", 10, personInfoCallback);\n    // 循环等待回调函数\n    ros::spin();\n    return 0;\n}\n')])])]),e("h3",{attrs:{id:"_3-3配置编译规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3配置编译规则"}},[s._v("#")]),s._v(" 3.3配置编译规则")]),s._v(" "),e("div",{staticClass:"language-cmake extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cmake"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_executable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person_publisher src/person_publisher.cpp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("target_link_libraries")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person_publisher "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("catkin_LIBRARIES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_dependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person_publisher "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("PROJECT_NAME")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("_generation_messages_cpp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_executable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person_subscriber src/person_subscriber.cpp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("target_link_libraries")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person_subscriber "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("catkin_LIBRARIES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_dependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person_subscriber "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("PROJECT_NAME")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("_generation_messages_cpp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("p",[e("code",[s._v("add_dependencies(person_publisher ${PROJECT_NAME}_generation_messages_cpp)")]),s._v("作用是动态与头文件产生链接")]),s._v(" "),e("h3",{attrs:{id:"_3-4运行项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4运行项目"}},[s._v("#")]),s._v(" 3.4运行项目")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/07/27/jyglUIcr8wdnBMT.png",alt:"2021-07-27 19-56-59 的屏幕截图.png"}})]),s._v(" "),e("h2",{attrs:{id:"四、模型总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、模型总结"}},[s._v("#")]),s._v(" 四、模型总结")]),s._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://i.loli.net/2021/07/27/LUeg5hK6XMOmjZu.png",alt:"2021-07-27 18-17-31 的屏幕截图.png"}})])}),[],!1,null,null,null);t.default=n.exports}}]);