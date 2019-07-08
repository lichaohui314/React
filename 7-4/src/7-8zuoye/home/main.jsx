import React from 'react'

function Main (props) {
  return <main className={props.class} style={{border: '1px solid red'}}>
    {
      props.Dom
    }
  </main>
}

export default Main