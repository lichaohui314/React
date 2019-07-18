import React, { Component } from "react"
import Error from "../Error/Error"
import Child from "../Child/Child"
// 子组件 / ui组件
// function Child() {
//     if (true) {
//         return null;
//     }
//     return <div>111</div>
// }
// 父组件 / 容器组件
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false
        }
    }
    render() {
        return (
            <div>
                <Error>
                    <Child />
                </Error>
            </div>
        )


        // if
        // let rende = () => {
        //     if (this.state.isShow) {
        //         return <h2>我是二级标题</h2>
        //     } else {
        //         return <p>我是普通的段落标签</p>
        //     }
        // }
        // let dom = <button>点击</button>
        // return <React.Fragment>
        //     <Child />
        //     <hr />
        //     <div>
        //         {/*&& */ this.state.isShow && <h1>你好</h1>}
        //         <button onClick={() => { this.setState({ isShow: !this.state.isShow }) }}>切换</button>
        //         {
        //             rende()
        //         }
        //         {
        //             dom
        //         }
        //         {
        //             this.state.isShow ? <h3>我是三目运算符出来的</h3> : <p>三目运算符</p>
        //         }
        //         {
        //             (function () {
        //                 return <p>我是自执行函数</p>
        //             })()
        //         }
        //     </div>
        // </React.Fragment>
    }
}