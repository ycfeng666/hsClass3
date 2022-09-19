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

## 微信小程序

> 忽略了部分文件，只演示核心代码，直接clone本目录无法运行，后期可能将完整源码发布至[releases](https://github.com/ycfeng666/hsClass3/releases)

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

## SSM

> 待更新，敬请期待
