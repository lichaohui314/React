import React from 'react';
import Style from './index.module.scss'
export default (props = {}) => {
  return (
    <div className={Style.sidebar}>
      <ul>
        {/* <li>
          <a href='javascript:void(0)'>首页</a>
        </li>
        <li>
          <a href='javascript:void(0)'>首页</a>
        </li> */}
        {
          props.navs.map((item, index) => {
            return <li key={index}>
              <a href="javascript:void(0);" onClick={() => props.onEmit(item.link)}>
              {item.val}</a>
            </li>
          })
        }
      </ul>
    </div>
  )
}