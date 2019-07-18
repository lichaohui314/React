7-4:ps:99

#### 什么生命周期
  - 组件本质上是状态机,输入确定,输出--确定
  - 状态发生转换时会触发不同的钩子函数,从而让开发者有机会做出响应
  - 可以用事件的思路来理解状态
    - 我们不知道事件何时触发,但是我们可以在被触发的时候做逻辑处理
  - render: 当props和state经过上面几个钩子函数之后,我们的render要重新调用,生成新的dom
  - componentDidUpdate: 会在更新后会被立即调用,首次渲染不会执行此方法

### 初始化阶段
  - 挂载时: constructor初始化我们的state和props
  - 挂载前: componentWillMount该钩子在17版本后废弃,了解即可,他的作用现在被constructor取代
  - 生成react dom节点: render
  - 挂载: componentDidMount
    - 如果我们需要请求接口在这个钩子里

### 运行中阶段
  - componentWillReceiveProps: React 17后废弃,谨慎使用,因为通常会出bug
    - 作用是组件将接受props的时候做处理用的
    - 官方推荐使用componentDidUpate替代它
  - shouldComponentUpdate: 判断React组件的输出是否受当前state或props更改的影响
  - 默认行为是state每次发生变化组件都会重新渲染,默认值返回的是个true

### 销毁阶段
  - componentWillUnmount