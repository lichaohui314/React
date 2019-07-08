import React, { Component } from 'react'
import { debounce } from "lodash"
import { getBaidu } from '../../api/request';
import "./style.scss"
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            msg: "",
            list: [],
            backgroundColor: '#87CEEB'
        }
        this.chage = debounce((e) => {
            getBaidu({ wd: e }).then((data) => {
                console.log(data)
                this.setState({
                    list: data.s
                })
            })
            console.log("节流")
        }, 500)
        this.scroll = debounce((e) => {
            console.log("防抖")
        }, 500)
    }
    handleWheel = (event) => {
        var newColor = (parseInt(this.state.backgroundColor.substr(1), 16) + event.deltaY * 996).toString(16);
        this.setState({
            backgroundColor: '#' + newColor
        })
        this.scroll()
    }
    handleChange = (e) => {
        this.setState({
            msg: e.target.value,
        })
    }
    handleClick = () => {
        let ev = this.state.msg;
        this.chage(ev)
    }
    handleDel = (index) => {
        this.state.list.splice(index, 1)
        this.setState({
            list: this.state.list
        })
    }
    render() {
        return <div className="box" onWheel={this.handleWheel}>
            <div>
                <input type="text" value={this.state.msg} onChange={this.handleChange} />
                <div className="btn" onClick={this.handleClick}>提交</div>
                <div style={{ overflow: "hidden" }}></div>
                <ul style={{ background: this.state.backgroundColor }}>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}><p>{`${index + 1}、${item}`}</p><p className="del" onClick={() => this.handleDel(index)}>删除</p></li>
                        })
                    }
                </ul>
            </div>
        </div >
    }
}
