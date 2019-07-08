import React from 'react'

function Nav (props) {
  return <nav className={props.class} style={{border: '1px solid red'}}>
    <ul>
      <li onClick={() => props.getLink('home')}>首页</li>
      <li onClick={() => props.getLink('api')}>api</li>
    </ul>

  </nav>
}

export default Nav