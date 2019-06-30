// 5.产品展示
function Reveal() {
    return (
        E("div", { className: "Reveal" }, [
            <Reveal1 key="1" />,
            <Reveal2 key="2" />,
            <Reveal3 key="3" />,
            <Reveal4 key="4" />,
            <Reveal5 key="5" />
        ])
    )
}
function Reveal1() {
    return (
        E('h2', null, "产品展示")
    )
}
function Reveal2(props) {
    return (
        E("div", { className: "Reveal2" }, [
            <Reveal2_1 key="1" url="./6.28img/cpzs-pic_03.png" />,
            <Reveal2_2 key="2" text="高级版" />,
            <Reveal2_3 key="3" />
        ])
    )
}
function Reveal3(props) {
    return (
        E("div", { className: "Reveal2" }, [
            <Reveal2_1 key="1" url="./6.28img/cpzs-pic_05.png" />,
            <Reveal2_2 key="2" text="机构版" />,
            <Reveal2_3 key="3" />
        ])
    )
}
function Reveal4(props) {
    return (
        E("div", { className: "Reveal2" }, [
            <Reveal2_1 key="1" url="./6.28img/cpzs-pic_07.png" />,
            <Reveal2_2 key="2" text="融耀版" />,
            <Reveal2_3 key="3" />
        ])
    )
}
function Reveal5(props) {
    return (
        E("div", { className: "Reveal2" }, [
            <Reveal2_1 key="1" url="./6.28img/cpzs-pic_09.png" />,
            <Reveal2_2 key="2" text="至尊版" />,
            <Reveal2_3 key="3" />
        ])
    )
}
// 子组件里面的子组件
function Reveal2_1(props) {
    return (
        E("img", { src: props.url })
    )
}
function Reveal2_2(props) {
    return (
        E("p", { className: "p" }, props.text)
    )
}
function Reveal2_3(props) {
    return (
        E("div", { className: "btn" }, "立即下载")
    )
}