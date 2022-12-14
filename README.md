# 课程记录第三期

## nodejs

### 第一次实验

2022年9月9日

> 本次实验为环境安装，略过演示

#### 实验目的

1. 通过本章的学习，了解Node.js的特点，掌握Node.js的安装方法：掌握VScode/WebStorm IDE环境的安装；学会编写简单的Node.js程序

#### 实验内容

1. 在本机安装Node.js，并测试是否安装成功，截图显示node版本信息。
2. 打开Node.js提供的REPL(交互式运行环境)，运行javascript语句进行简单的测试。
   
   具体步骤：进入命令行界面，执行node命令即可启动Node终端，出现“>”提示符表示进入REPL(交互式运行环境)交互界面，输入如下javascript代码运行：
   ```
   5*10+6；
   Math.random();
   console.log(“hello, node.js”);
   ```
3. 使用Node.js构建一个简单的web应用程序，在8000端口提供web服务，向浏览器输出“您好！“的问候信息。

<br/>

### 第二次实验

2022年9月16日

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/node/2)**

#### 实验目的

1. 掌握Node.js全局变量的使用
2. 掌握模块化编程
3. 掌握基本内置模块的使用

#### 实验内容

1. 利用Node.js的console对象中的time()和timeEnd()方法计算程序循环10000次的时间
2. 模块化编程：
   1. （1）定义一个module模块，实现avg()函数，函数接收一个数组，对给定的数值型数组求平均值，并返回结果；
   2. （2）现有班级A同学的英语成绩为score = [73, 55, 81, 63, 79, 97, 82, 91, 100, 77]，要求在main.js文件，调用module模块中的avg()方法，对班级A同学的英语成绩求平均值，并输出平均值；
3. 利用内置的url模块实现对链接地址的解析，并打印出链接对象中的query属性。
   ```
    // 例
    https://baike.baidu.com/item/node.js/7567977?fr=aladdin#3
   ```

<br/>

### 第三次实验

2022年9月19日

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/node/3)**

#### 实验目的

1. 掌握异步编程的理念，学会使用回调函数处理异步编程
2. 理解事件驱动机制，学会使用事件驱动编程方法
3. 掌握npm的应用

#### 实验内容

新建一个module.js文件，创建一个计算器类，该计算器支持启动时进行二位相加运算操作，延迟1000毫秒输出计算结果，module.js文件对外暴露该计算器的构造函数；新建一个main.js文件，在文件中使用emit()方法启动计算器，支持参数传递。

思路：

1. 使用EventEmitter对象需引入events模块，需要使用require()函数引入events模块
2. util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。计算器本身不具备事件监听函数，可以用这个方法来继承EventEmitter对象的监听事件方法，使用前需要先引入util模块。
3. 其中使用module.exports作为模块接口的方法可参考：
   ```
   // module.js文件
   function Hello() { var name; this.setName = function (name) {} };
   module.exports = Hello;   // 对外暴露一个构造函数
   // main.js文件
   var Hello = require(’./module.js’);
   var hello = new Hello();
   hello.setName(‘Bill’);
   
   ```

<br/>

### 第四次实验

2022年9月30日

> ejs模块需要在目录下使用 yarn 命令安装依赖
> 
> 依赖安装完毕后在控制台使用 yarn start 命令启动程序
> 
> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/node/4)**

#### 实验目的

1. 理解http模块的使用场景
2. 掌握server对象，response对象，request对象的使用
3. 了解GET方法和POST方法的区别和使用场景
4. 了解模块编程思路，掌握ejs模块和pug模块的使用

#### 实验内容

1. 利用http模块的server对象创建一个本地web服务器
   1. 当使用GET方法请求的时候，读取并展示login.html页面的内容，允许用户输入学号和姓名进行登录操作
   2. 使用ejs模块，将登录同学的期末考试成绩返回到客户端，要求将该学生的成绩数据动态渲染到ejs模板文件中展示
      |学号|姓名|语文|数学|英语|
      |:--:|:--:|:--:|:--:|:--:|
      |20211001|夏明|90|89|85|
      |20211002|王言|81|90|83|

<br/>

### 第五次实验

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/node/5)**

#### 实验目的

1. 了解和掌握文件的基本操作和其他常用操作。
2. 了解和掌握目录的常用操作。

#### 实验内容

1. 读取test7.txt文件，将该文件内容复制到test7-copy.txt文件中，文件操作过程中捕获错误异常。
2. 判断当前项目路径下是否存在test目录，如果不存在重新创建该目录，如果存在，打印出该目录的信息。
3. 读取目录‘./test’,查看该目录是否为空目录，如果是空目录，则删除该目录，如果不是空目录，则打印输出该目录下的所有文件名。

<br/>

### 第六次实验

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/node/6)**

#### 实验目的

1. 掌握express中间件的使用
2. 掌握restful web服务的创建

#### 实验内容

1. 请使用express框架开发一个web应用程序，当用户登录后查看该用户的个人信息，用户信息如下表所示。在程序中用户的图像使用static中间件进行静态文件托管，放置在public目录下，每个用户的图像使用学号命名
   1. 当使用get方式访问’/’，向客户端返回登录页面，允许用户输入学号（stuNum）和姓名(stuName)
   2. 当提交表单使用post方式访问’/’，查询表格中对应学号的学生信息并使用模版文件将数据动态返回给客户端（学生信息可以使用数组保存，解析post请求参数可以使用body-parse中间件）
   3. 当使用get方式访问’/userImage/:stuNum’，向客户端返回对应学号的学生的图像

<br/>

### 第七次实验

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/node/7)**

#### 实验目的

1. 掌握MYSQL数据库的基本命令
2. 掌握node.js的mysql模块的使用

#### 实验内容

1. 参考书本第155-160页的代码，完成对图书信息的增删改查功能。要求数据保存在数据库中的books表中

<br/>

### 第八次实验

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/node/8)**

#### 实验目的

1. 掌握socket.io模块的通信机制
2. 掌握socket.io模块的使用方法。
3. 掌握socket.io模块的三种通信类型。

#### 实验内容

1. 使用http+socket.io完成一个简单的聊天室，要求聊天室具有如下功能：
   1. 输入用户昵称和房间号可以进入到一个房间聊天室开始聊天
   2. 聊天窗口实时展示消息列表

<br/>

## 微信小程序

> 仓库内忽略了部分文件，只演示核心代码，直接clone本目录无法运行，如需完整已源码发布至[![Release](https://img.shields.io/github/v/release/ycfeng666/hsClass3)](https://github.com/ycfeng666/hsClass3/releases)
> 
> **全部实验已更新完毕**

### 第一次实验

2022年9月14日

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/vx_work/1)**

#### 实验目的

1. 熟练掌握创建小程序页面的步骤
2. 熟悉开发环境，学会编写页面。
3. 熟练掌握页面配置文件。

#### 实验内容

1. 使用注册账号在微信开发者工具中创建一个名为“爱电影”的小程序开发项目
2. 创建4个页面,分别为“正在热映”“即将上映”“电影编辑”“电影详情”
3. 修改各个页面的标题
4. 在page文件中设定tabBar为“正在热映”“即将上映”“电影编辑”“电影详情”

<br/>

### 第二次实验

2022年9月14日

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/vx_work/2)**

#### 实验目的

1. 熟练掌握数据绑定。
2. 熟练掌握列表渲。
3. 熟练掌握条件渲染。

#### 实验内容

1. 制作个人简介介绍(如：姓名、性别、爱好等…)
2. 实现二维数组的列表渲染,展示详细的数据信息
3. 使用条件渲染对成绩判断,不同区间分数成绩不同

<br/>

### 第三次实验

2022年9月23日

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/vx_work/3/miniprogram/pages/index)**

#### 实验目的

1. 熟练掌握视图容器组件的作用及属性。
2. 熟练掌握视图容器进行页面布局。

#### 实验内容

1. 使用view实现左右混合布局
2. 使用swiper实现轮播图特效
3. 使用movable-view拖拽及缩放视图效果

<br/>

### 第四次实验

2022年9月23日

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/vx_work/4/miniprogram/pages/index)**

#### 实验目的

1. 熟练掌握表单各组件的属性和作用。
2. 熟练掌握表单组件搭建页面。

#### 实验内容

1. 使用表单组件自定义实现问卷调查页面,包含按钮、单选框、复选框、文本输入框等

<br/>

### 第五次实验

2022年9月24日

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/vx_work/5/miniprogram/pages/index)**

#### 实验目的

1. 熟练掌握获取页面输入框数据。
2. 熟悉掌握函数的定义。
3. 熟练掌握数据渲染到页面。

#### 实验内容

1. 在小程序项目页面中实现两个数的比较，实现如下功能：
   
   在页面两个文本框中分别输入两个数，单击“比较”按钮，在下方显示所示信息(比较结果可以是：第1个数大、第2个数大、两个数相等)。

<br/>

### 第六次实验

2022年9月24日

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/vx_work/6/miniprogram/pages/index)**

#### 实验目的

1. 熟练掌握小程序常用API。
2. .熟悉API使用方式及常见属性。
3. 熟练掌握网络和媒体API的使用。

#### 实验内容

1. 实现从手机相册中选择图片和上传功能
2. 实现页面的http请求功能

<br/>

### 第七次实验

2022年9月29日

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/vx_work/7/miniprogram/pages)**

#### 实验目的

1. 熟练掌握小程序常用API。
2. 熟练掌握位置API的使用方式。

#### 实验内容

1. 获取当前位置API,显示相关的位置信息并调用微信地图查看位置
2. 模拟动态监听实时地理位置变化,描述对应API的使用规则

<br/>

### 第八次实验

2022年9月29日

> **[参考代码](https://github.com/ycfeng666/hsClass3/tree/main/vx_work/8/pages/index)**

#### 实验目的

1. 熟练掌握小程序页面的创建。
2. 熟悉小程序的框架、组件和API。
3. 熟练掌握小程序的流程控制和全栈开发流程。

#### 实验内容

1. 实现果茶店小程序首页中的左侧分类菜单及主体商品列表(不需要写wxss样式文件)

<br/>

## SSM

> 待更新，敬请期待
