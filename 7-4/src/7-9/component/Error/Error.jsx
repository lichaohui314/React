import React, { Component } from "react"
export default class Error extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isError: false
        }
    }

    // 错误边界--捕获子组件错误的的方法
    static getDerivedStateFromError(error) {
        console.log(error)
        // Update state so the next render will show the fallback UI.
        return { isError: true };
    }
    // 声明周期,捕获子组件错误
    componentDidCatch(err, info) {
        console.log(err)
        console.log(info)
    }
    render() {
        if (this.state.isError) {
            return <h1>我的子组件发生了错误</h1>
        } else {
            return this.props.children
        }
    }
}
