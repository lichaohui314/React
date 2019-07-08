import React, { Component } from "react"
import { debounce } from "lodash"
import { getBaidu } from "../../api/request"
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            text: "",
            list: []
        }
        this.scroll = debounce(function (e) {
            console.log(e)
        }, 1000)
        this.chage = debounce(function (e) {
            getBaidu({ wd: e.target.value }).then((data) => {
                console.log("向后台发送请求")
                this.setState({
                    list: data.s
                })
            })
        }, 1000)
    }
    handleScroll = debounce((e) => {
        e.persist()
        this.scroll(e)
    }, 1000)

    handleChange = (e) => {

        this.setState({
            text: e.target.value
        })
        e.persist()
        this.chage(e)
    }
    render() {

        return <div style={{
            height: "500px",
            overflowY: "scroll",
            border: "1px solid red"
        }
        }
            onScroll={(event) => { this.handleScroll(event) }}>
            <div style={{ height: "1500px" }}>
                <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div >
    }
}