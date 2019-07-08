import React from 'react';
// import Event from '../Event'
// import EventObject from '../EventObject'
// import EventDome from '../EventDome'
import './index.scss'
import Nav from './nav.jsx'
import Main from './main.jsx'
export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      Dom: '',
      isShow: true
    }
  }
  // 接受子组件传回来的值
  getLink = (link) => {
    this.setState({
      Dom: link
    })
  }
  // 控制盒子的动画按钮
  handleClick = () => {
    // console.log(2)
    console.log(1)

    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    let Dom = <div>我是首页</div>;
    switch(this.state.Dom) {
      case 'home':
        Dom = <div>我是首页</div>
        break;
      case 'api':
        Dom = <p>我们的子组件</p>
    }
    return <div>
      <button onClick={this.handleClick}>点我</button>
      <div  className='flex'>
      <Nav getLink={this.getLink} class={this.state.isShow ? 'nav' :'hide'}></Nav>
      <Main Dom={Dom} class={this.state.isShow ? 'main' : 'show'}/>
      </div>
      </div>
  }
}