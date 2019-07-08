class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            text: "",
            list: []
        }
    }
    // 改变input里的值
    handleChange = ({ target }) => {
        this.setState({
            text: target.value
        })
    }
    // 提交按钮
    handleClick = () => {
        if (this.state.text == "") {
            alert("请输入内容")
            return;
        }
        this.setState({
            list: [this.state.text].concat(this.state.list),
            text: ""
        })
    }
    // 清空按钮
    handleClean = () => {
        this.setState({
            list: []
        })
    }
    render() {
        return <div className="bigbox">
            <Header text={this.state.text}
                handleChange={this.handleChange}
                handleClick={this.handleClick} />
            <Footer list={this.state.list} handleClean={this.handleClean} />
        </div>
    }
}