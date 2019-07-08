import React, { Component } from "react"
// import units from "../../units"
import {debounce} from "lodash"
export default class EventDome extends Component {
    constructor() {
        super()
        // 初始化一个方法debounce 防抖函数
        this.chage = debounce(function (e) {
            console.log(e)
        },2000)
    }

    // handleScroll = units.debounce((e) => {
    //     console.log(e)
    // }, 2000)

    handleScroll = debounce((e) => {
        e.persist()
        this.chage(e)
    })
    render() {
        return <div style={{
            height: "500px",
            overflow: "scroll",
            border: "1px solid red"
        }}
            onScroll={(event) => { this.handleScroll(event) }}>
            <div style={{ height: "1500px" }}>asd</div>
        </div>
    }
}
// npm i -S lodash
