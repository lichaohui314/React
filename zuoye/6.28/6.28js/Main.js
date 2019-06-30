// 3.产品介绍子组件
function Main1(props) {
    return (
        E('h2', { className: "main1" }, "功能介绍")
    )
}
// 3.1产品介绍图
function Main2(props) {
    return (
        E('div', { className: "main2" }, [
            <Main2_1 key="1" url="./6.28img/banner_3.jpg" />,
            <Main2_1 key="2" url="./6.28img/banner_1.jpg" />,
            <Main2_1 key="3" url="./6.28img/banner_2.jpg" />
        ])
    )
}
// 三张图
function Main2_1(props) {
    return (
        E('img', { src: props.url, className: "img" })
    )
}
// 3.2产品介绍展示
class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return E("div", { className: "main" }, [
            <Main1 key="1" />,
            <Main2 key="2" />
        ])
    }
}