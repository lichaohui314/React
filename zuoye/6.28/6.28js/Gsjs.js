// 5.公司介绍
function Gsjs(props) {
    return (
        E("div", { className: "Gsjs" }, [
            <Gsjs1 key="1" />,
            <Gsjs2 key="2" text="北京机知科技有限公司由从业十年以上资深大咖与资深IT工程师组成，主要研发产品-机智软件，通过5年的不断测试与更新，" />,
            <Gsjs2 key="3" text="成为一款功能非常强大的程序化软件，倍受广大投资者青睐，一对一售前及售后全天24小时服务。" />,
            <Gsjs2 key="4" text="公司的经营信条：客户第一、员工第二、股东第三。" />,
            <Gsjs2 key="5" text="诚信、荣誉、责任、分享、团队、感恩”是每一个“机智人”的立足之本。" />,
        ])
    )
}
// 5.1公司介绍图片
function Gsjs1() {
    return (
        E("img", { src: "./6.28img/gsjs_03.png", style: { marginBottom: "40px" } })
    )
}
// 5.2公司介绍文字
function Gsjs2(props) {
    return (
        E("p", { className: "p1" }, props.text)
    )
}

function Bottom() {
    return (
        E('img', { src: "./6.28img/bottom.png" })
    )
}