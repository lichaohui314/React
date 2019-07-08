import React, { Component } from "react"
export default class Jsonp extends Component {
    render() {
        return <div>我是jsonp</div>
    }

    componentWillUnmount() {
        console.log("Jsonp我被销毁了")
    }
}