import React, { Component } from "react"
import { getBaidu } from "../../api/request"
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            list: []
        }
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        })
        getBaidu({ wd: e.target.value }).then((data) => {
            console.log("这是更新list")
            setTimeout(() => {
                this.setState({
                    list: data.s
                })
            }, 500);
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={(e) => this.handleChange(e)} />
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    // 挂载前的钩子
    componentWillMount() {
        console.log("这是挂载前的钩子")
    }
    // 挂载后的钩子
    componentDidMount() {
        console.log("这是挂载后的钩子")
    }
    // 组件更新前的钩子
    componentWillUpdate() {
        console.log("这是更新前的钩子")
    }
    // 组件更新后的钩子
    componentDidUpdate() {
        console.log("这是组件更新后的钩子")
    }
    // 组件销毁时的钩子
    componentWillUnmount() {
        console.log("这是组件销毁时的钩子")
    }
} 