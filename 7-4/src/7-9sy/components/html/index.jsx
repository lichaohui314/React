import React from 'react';
import SideBar from '../sidebar'
import Main from '../main'
export default class Html extends React.Component {
  constructor() {
    super();
    this.state = {
      link: 'Home'
    }
  }
  navs = [{
    link: 'Home',
    val: '首页'
  }, {
    link: 'About',
    val: '关于我们'
  }] 

  
  // 观察冒泡和默认事件
  handleClick = (e) =>{
    return false;
    e.stopPropagation()
    e.preventDefault()
    console.log(e.target)
    console.log(e.currentTarget)
  }

  // 接受nav返回的值加载组件
  setRouter = (link) => {
    this.setState({
      link
    })
  }

  render() {
    return (
      <div onClick={this.handleClick} className='flex'>
        <SideBar onEmit={this.setRouter} navs={this.navs} />
        <Main loadComponent={this.state.link}/>
      </div>   
    )
  }
}