// 2.1内容区子组件
function Child1() {
    return (
        E('img', { src: "6.28img/股票自动交易软件1.png" })
    )
}
function Child2() {
    return (
        E('img', { src: "6.28img/免费下载.png", style: { margin: "0 500px" } })
    )
}
function Child3(props) {
    return (
        E('p', { style: { marginTop: "10px" } }, props.content)
    )
}
// Child4里面的子组件
function Child4_1() {
    return (E('img', { src: "6.28img/人工智能高胜率交易模型！ 自动提醒！股民必备！.png", style: { position: "absolute", top: "10px", left: "165px" } }))
}
function Child4_2() {
    return (E('img', { src: "6.28img/立即下载.gif", style: { position: "absolute", top: "5px", right: "140px" } }))
}
function Child4() {
    return (E('div', { className: "child4" }, [
        <Child4_1 key="1" />,
        <Child4_2 key="2" />,
    ]))
}
