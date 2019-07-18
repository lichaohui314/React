import React from 'react';

export default (props = {}) => {
  return(<ul>
    {
      props.topNav.map((item, index) => {
        return <li key={index}>
          <a href={item.href || 'javascript:;'} target='_blank'>{item.label}</a>
        </li>
      })
    }
  </ul>)
} 