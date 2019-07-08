import React, { Component } from "react"
// import Event from"../Event/index"
export default class EventObject extends Component {
    handleClick = (e) => {
        e.stopPropagation()
        console.log(e.currentTarget)
        // console.log(e.target)
        // for (let key in e) {
        //     console.log(key, e[key])
        // }
        console.log(e.pageX)
    }
    render() {
        return <div onClick={this.handleClick} style={{ height: "50px", border: "1px solid red" }}>
            <p>EventObject</p></div>
    }
}