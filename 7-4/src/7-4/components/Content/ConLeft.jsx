import React from "react"
import "../child/Child"
import Child from "../child/Child";
// 传入的数据
let text = ["这就是内容11111111111", "这就是内容11111111111", "这就是内容11111111111", "这就是内容11111111111", "这就是内容11111111111", "这就是内容11111111111", "这就是内容11111111111",]
function ConLeft(props) {
    return (
        <div className={props.name}>
            {/* 这是个图片 */}
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} className="conleft-img" />
            {/* 循环复用组件 闯入内容 */}
            {
                text.map((item, index) => {
                    return <Child name="conleft-list" key={index} text={item} />
                })
            }
        </div>
    )
}
export default ConLeft