import React, { Component } from "react"
function Child(props) {
    /* 
     1. 直接在函数中声明方法
     */
    // 1.
    // let handleClick = (e) => {
    //     console.log(e)
    // }
    console.log(props)
    return (
        <button onClick={props.handleClick}>子组件</button>
    )
}

class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
        // handleThisClick = this.handleThisClick.bind(this)
    }
    handleClick = (e) => {
        console.log(e)
    }
    handleThisClick(e) {
        console.log(e)
        this.setState({
            name: e
        })
    }
    handleGoodClick = (e) => {
        this.setState({
            name: e.target.innerHTML
        })
    }
    render() {
        return (
            <React.Fragment>
                <Child handleClick={this.handleClick} />
                {this.state.name}
                <button onClick={this.handleThisClick}>使用构造函数绑定事件</button>
                {/* <button onClick={() => this.handleThisClick(456)}>使用箭头函数在dom上绑定</button> */}
                <button onClick={this.handleGoodClick}>最佳的方式-在声明时就用箭头函数</button>
            </React.Fragment>
        )
    }
}
export default Home