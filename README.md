### SEO是搜索引擎爬虫
### 传统的DOM事件操作
  1. 优点: 直观,书写习惯,渲染快,利于SEO
  2. 缺点: 可复用性差,扩展困难,维护成本高,耦合度高  高内聚低耦合
  3. 适用性: 传统的静态网站,宣传页,参与开发,人员少
### 组件(模块)化开发
  1. 优点: 复用性强,高内聚低耦合,命名空间,便于扩展和优化,维护方便,易于阅读
  2. 缺点: 初期开发速度慢,对开发人员的逻辑能力要求高,需要借助自动化工具加工(nodejs、webpack、babel),不利于SEO
  3. 适用于: 团队开发,应用和程序项目,中大型项目
### react开发背景
  1. 2013年6月出的 react
  2. Facebook(中文名:脸书)

### react特点
  - 简单
  - 声明式
  1. react的核心是组件,组件的设计目的是提高代码复用率,降低测试难度和代码复杂度
  2. 提高代码复用率: 组件将数据和逻辑封装,类似面向对象中的类
  3. 降低测试难度: 组件高内聚低耦合,很容易对单个组件进行测试
  4. 降低代码复杂度: 直观的语法可以极大提高可读性

### React三种写法
  1. function 无状态组件,只接受一个props
  2. class  es6的写法,使用Component
  3. createClass了解就好,最后一个版本是15.5.0,新版里被废弃

### 组件
  1. 无状态组件: function   没有this,只接受一个props,不会被实例化;优点是:加载快,渲染快.便于理解,结构清晰
  2. class组件: 继承于react.component方法的组件,会被实例化,可以用react所有的API,需要深刻理解的是ES6中class相关语法.

### 组件API:
  1. 创建虚拟Dom:react.createElement('原生HTMl标签',(props),[内容,子元素])
  2. this.props.children:  隐式渲染传入到父组件中的子组件集合,是一个数组.

### 顶级API
  1. React.Children: 用来遍历处理this.props.children,显示的渲染,并对我们每一个传入的子元素做处理.语法: React.Children.map(this.props.children,(item.index) = {return item};
  2. React.cloneElement: 克隆一个react元素,并进行二次开发.
    - 语法: React.cloneElement(child,(props),[子元素/内容])   第一个参数是要克隆的元素,第二个是传入的参数,第三个是内容