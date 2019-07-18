### SEO是搜索引擎爬虫
### 传统的DOM事件操作
  1. 优点: 直观,书写习惯,渲染快,利于SEO
  2. 缺点: 可复用性差,扩展困难,维护成本高,耦合度高  高内聚低耦合
  3. 适用性: 传统的静态网站,宣传页,参与开发人员少
### 组件(模块)化开发
  1. 优点: 复用性强,高内聚低耦合,命名空间,便于扩展和优化,维护方便,易于阅读
  2. 缺点: 初期开发速度慢,对开发人员的逻辑能力要求高,需要借助自动化工具加工(nodejs、webpack、babel),不利于SEO
  3. 适用于: 团队开发,应用和程序项目,中大型项目
### react开发背景
  1. 2013年6月出的 react
  2. Facebook(中文名:脸书)
  3. Facebook认为MVC无法满足他们的扩展需求，由于他们非常巨大的代码库和庞大的组织，使得MVC很快变得复杂，每当需要添加一项新功能或者特性时，系统的复杂就成级数的增长，致使代码变得脆弱而不可预测，结果导致他们的MVC正在土崩瓦解。认为MVC不适合大规模的应用。当系统中有很多模型和相应的视图时，其复杂度就会迅速扩大，非常难以理解和调试，特别是模型和视图可能存在双向数据流动。

### react特点
  - 简单
  - 声明式
  1. react的核心是组件,组件的设计目的是提高代码复用率,降低测试难度和代码复杂度
  2. 提高代码复用率: 组件将数据和逻辑封装,类似面向对象中的类
  3. 降低测试难度: 组件高内聚低耦合,很容易对单个组件进行测试
  4. 降低代码复杂度: 直观的语法可以极大提高可读性

### React现状
  1. GitHub代码star : 131283
  2. 代码贡献者 : 1296
  - 国外使用React的公司: Facebook,BBC,GitHub,Yahoo,Flipboard,Airbnb,Instagram,Reddit,Uber,WhatsApp
  - 国内使用React的公司: 支付宝,淘宝,豆瓣,豌豆荚,大搜车,Teambition

### React三种写法
  1. function 无状态组件,只接受一个props
  2. class  es6的写法,继承React.Component
  3. createClass了解就好,最后一个版本是15.5.0,新版里被废弃

### 组件
  1. 无状态组件: function   没有this,只接受一个props,不会被实例化;优点是:加载快,渲染快.便于理解,结构清晰
  2. class组件: 继承于react.component方法的组件,会被实例化,可以用react所有的API,需要深刻理解的是ES6中class相关语法.

### super在组件里使用需要注意的地方
  1. super()在哪里用,何使用
    - 在constructor构造函数里使用,继承的时候用
    - super虽然代表了父类class的构造函数,但是返回的是子类class的实例,即super内部的this指的是子类,因此super()在这里相当于:父类.prototype.constructor.call(子类的this)
  2. super在哪里使用
    - 在构造函数里使用和普通方法里使用
    - super作为对象时,在普通方法中,指向父类的原型对象;也就是指向父类的class.prototype,所以super.p()就相当于父类class.prototype.p()
    - 由于super指向父类的原型对象,所以定义在父类实例上的方法或属性,是无法通过super调用的
  3. super在static里需要注意什么
    - 在静态方法中,指向父类
  4. 详情:https://blog.csdn.net/linusc/article/details/78770755

### 组件API:
  1. 定义: 组件中的api
    - props: 属性props是父级传入进来的  (是不可以修改的)
    - state是组件自己的状态数据  (可以修改)
  2. props.children: 是一个集合,他存的是在标签中传入的子元素,概念就像是vue中的插槽.在无状态组件中可以直接props.children使用,在class组件中要加this.props.children
  3. 创建虚拟Dom:react.createElement('原生HTMl标签',(props),[内容,子元素])
  4. this.props.children:  隐式渲染传入到父组件中的子组件集合,是一个数组.

### 顶级API
  - 定义: 凡是挂载在全局对象React下面的方法或属性都叫顶级API
  1. React.createElement: 创建虚拟Dom,接受三个参数:("html原生标签","属性","内容或子组件");
  2. React.Children: 用来遍历处理this.props.children,显示的渲染,并对我们每一个传入的子元素做处理.语法: 
```
React.Children.map(this.props.children,(item.index) = {return item};
```
  2. React.Children: 提供了用于处理this.props.children 不透明数据结构的实用方法
    - 默认一般我们使用map方法,接受两个参数(props.children,callback(child,index))
    - 另外还有toArray(children): 将children这个复杂的数据结构以数组的方式扁平展开并返回,并为每个子节点分配一个key
    - only(children): 验证 children 是否只有一个子节点(一个 React 元素),如果有则返回他,否则此方法会抛出错误
    - count(children): 返回 children 中的组件总数量,也就是子元素的个数
    - forEach(children, function[(thisArg)]);与React.children.map()类似,但他不会返回一个数组
  3. React.cloneElement: 以 element元素为样板克隆并返回新的 React元素。返回元素的props 是将新的props 与原始元素的props 浅层合并后的结果。新的子元素将取代现有的子元素,而来自原始元素的key和ref将被保留。
    - 针对与浅层合并,我们在处理新增属性的时候,要在子元素属性上用{...props}深合并
  3. React.cloneElement: 克隆一个react元素,并进行二次开发.
    - 语法: React.cloneElement(child,(props),[子元素/内容])   第一个参数是要克隆的元素,第二个是传入的参数,第三个是内容

### props:
  - 属性
  - porps = properties
  - 属性是与生俱来、无法自己改变的
  - 是父组件传给子组件的
  - 三种用法:
    1. 键值对形式
    2. 展开对象写法
      ```
        var props = {
          one:"123",
          two:"456"
        }
        <HelloWorld{...props}>
      ```
    3. defaultProps

### State介绍:
  1. state:
    - 状态:事物所处的状况
    - 状态是有事物自行处理,不断变化的
  2. state用法
    - 在构造函数里使用this.state = {}
    - setState:更新组件状态
      - diff算法
### state和props对比
  1. 相似点
    - 都是纯js对象
    - 都会触发render更新
    - 都只有确定性







### create react 脚手架
  - 安装: 
    1. 如果设置了npm指向淘宝镜像,则不需要安装了
      - npm config set registry https://registry.npm.taobao.org
    2. 查看设置是否正确
      - npm config get registry
    3. 全局安装脚手架
      - npm i -g creact-react-app
    4. 查看版本
      - creact-react-app -V
    5. 创建项目[不要在C盘里创建,因为C盘是系统盘,他有权限保护,容易出问题,如果只有C盘,吧项目建立在'文档'文件夹里]
      - (1) create-react-app myreact(你的项目名字)
      - (2) 如果创建项目时报错,说明网不好,或者是使用了yarn,卸载yarn,或者查看一下node.js软件是不是被误删了文件,卸载node.js重新安装
    6. 运行项目
      - npm run start
        - (1) 如果报错是webpack版本号不对等
        - (2) 解决办法:运行npm run eject
        - (3) 最后再运行启动即可
      - 在运行 npm run eject 时报错
        - (1) 一般是说你的git没有提交
        - (2) 是因为项目安装的时候放在了git本地仓库li
        - (3) 解决办法有两个: 一个就是删除掉本地的git文件夹
        - (4) 另一个就是提交一下git

  - 报错解决
    如果你在安装的时候报错失败,使用如下方式:
    - win键 + x   点开window prosell(管理员) === cmd
    - 如果还不成功,去看一下你的node.js软件是否安装在了磁盘根目录
    - 如果是,卸载node.js重新安装,默认就安装在c盘
    - 我们的项目不要在你的C盘,C盘是系统盘,授权限保护,项目放在其他盘里
  
### 事件的绑定
  1. 在无状态组件中使用事件有两种
    - 1.1直接在函数中声明事件
    - 1.2调用父组件传入事件

  2. 





### 运行命令
  - npm start

### 脚手架
  - build前配置二级目录在packge.json添加: "homepage"
  - 新版脚手架无法在js中使用public.js把new ModukeScopePlugin注释掉即可
  - 使用

### 安装sass
  - npm i node-sass sass-loader -D



### 使用rimraf 删除node-modul包
  - npm i -g rimraf