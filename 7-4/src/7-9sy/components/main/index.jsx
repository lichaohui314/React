import React from 'react';
import Home from '../home';
import About from '../about';
export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {        
    let dom = ''
    switch(this.props.loadComponent) {
      case 'Home':
        dom = <Home />
        break;
      case 'About':
        dom = <About />
        break;
      default:
        dom = <Home />
    }
    return (
      <div style={{border: '1px solid green'}}>
        {dom}
      </div>
    )
  }
}