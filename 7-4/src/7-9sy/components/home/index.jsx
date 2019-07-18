import React from 'react';
import TopNav from './topNav.jsx'
export default class Hoem extends React.Component {
  constructor() {
    super()
    this.topNav = [{
      label: 'React官网',
      href: 'https://reactjs.org/'
    }, {
      label: '我的ppt',
      href: 'http://note.youdao.com/noteshare?id=c9af79f9dc6e3f3203ad3da7180b9a9a'
    }]
  }
    
  render() {
    return (
      <div>
        <TopNav topNav={this.topNav}/>
        <main>
          1,2,3
        </main>
      </div>
    )
  }
}