// 4.产品展示
function Reveal1() {
    return (
        E('h2', null, "产品展示")
    )
}
// 4.1产品介绍图  复用4次组件
function Reveal2(props) {
    return (
        E('div', { className: "Reveal2" }, [
            <Reveal2_1 key="1" url="./6.28img/book_1.png" />,
            <Reveal2_1 key="2" url="./6.28img/book_2.png" />,
            <Reveal2_1 key="3" url="./6.28img/book_3.png" />,
            <Reveal2_1 key="4" url="./6.28img/book_4.png" />
        ])
    )
}
// 4.3四张图
function Reveal2_1(props) {
    return (
        E('img', { src: props.url, className: "img1" })
    )
}
// 4.2产品介绍展示
class Reveal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return E("div", { className: "Reveal" }, [
            <Reveal1 key="1" />,
            <Reveal2 key="2" />
        ])
    }
}