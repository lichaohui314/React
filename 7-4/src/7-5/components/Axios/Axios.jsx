import React, { Component } from "react"
export default class Axios extends Component {
    render() {
        return <div>我是axios</div>
    }

    componentWillUnmount() {
        console.log("Axios我被销毁了")
    }
}