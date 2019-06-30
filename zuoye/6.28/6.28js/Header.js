// 2.创建一个头部组件 最上边的logo
function Header1() {
    return (
        E("img", { src: "6.28img/logo.png" })
    )
}
// 2.1内容展示区
class Header2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return E("div", { className: "header2" }, [
            <Child1 key="1" />,
            <Child2 key="2" />,
            <Child3 key="3" content="多家券商权威认证   免注册   免费用" />,
            <Child4 key="4" />
        ])
    }
}