function Content(props = { number: [] }) {
    var render = (props) => {
        // JSX允许我们使用 . 组件 --> 对象点属性这种方式,前提是,这个属性必须是原生html标签或者是我们自定义组件的名字
        // hoc模式: 将传入的props进行加工,然后返回一个新组件
        if (props.type) {
            return <props.type {...props}>{props.children || "我是默认值"}</props.type>
        } else {
            return <p {...props}>{props.children || "我是默认值"}</p>
        }
    }
    return (
        render(props)
    )
}
/*
    {
        props.number.map((val, index) => {
            var data = props.data[index];
            return <li>{data.text}</li>
        })
    }
*/