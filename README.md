### SEO是搜索引擎爬虫
### 传统的DOM事件操作
  - 优点: 直观,书写习惯,渲染快,利于SEO
  - 缺点: 可复用性差,扩展困难,维护成本高,耦合度高  高内聚低耦合
  - 适用性: 传统的静态网站,宣传页,参与开发,人员少
### 组件(模块)化开发
  - 优点: 复用性强,高内聚低耦合,命名空间,便于扩展和优化,维护方便,易于阅读
  - 缺点: 初期开发速度慢,对开发人员的逻辑能力要求高,需要借助自动化工具加工(nodejs、webpack、babel),不利于SEO
  - 适用于: 团队开发,应用和程序项目,中大型项目
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
  - function 无状态组件,只接受一个props
  - class  es6的写法,使用Component
  - createClass了解就好,最后一个版本是15.5.0,新版里被废弃
