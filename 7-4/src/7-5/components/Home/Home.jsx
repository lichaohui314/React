import React, { Component } from "react";
import Axios from "../Axios/Axios"
import Jsonp from "../Jsonp/Jsonp"

export default class Home extends Component {
    // 容器组件
    constructor() {
        super();
        this.state = {
            modelName: "Jsonp",
            navItem: ["Axios", "Jsonp"]
        }
        // console.log("构造函数")
    }
    // 17以后废弃的挂载前钩子
    componentWillMount() {
        // console.log("17以后废弃的挂载前钩子")
    }

    setStateProps() {
        console.log("挂载前")
    }
    // render 方法
    render() {
        var com = this.setStateProps();
        let ComModule = "";
        switch (this.state.modelName) {
            case "Axios":
                ComModule = <Axios />
                break;
            case "Jsonp":
                ComModule = <Jsonp />
                break;
        }
        // console.log("render生成dom")
        return <div>
            <div className="leftBox">
                <ul>
                    {
                        this.state.navItem.map((item, index) => {
                            return <li key={index}>
                                <a href="javascript:;" onClick={() => this.onMountCom(item)}>{item}</a>
                            </li>
                        })
                    }
                </ul>
                <main>
                    {ComModule}
                </main>
            </div>
        </div>
    }

    onMountCom = (link) => {
        this.setState({
            modelName: ""
        })
    }

    // componentWillUpdate() {
    //     console.log("准备更新")
    // }

    // componentDidUpdate() {
    //     console.log("更新完毕")
    // }

    // 挂载成功钩子函数
    componentDidMount() {
        console.log("挂载成功的钩子函数")
    }
}