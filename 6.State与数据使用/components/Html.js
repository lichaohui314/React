class Html extends React.Component {
    // *class 组件叫做容器组件,所有的方法和操作都在这里
    constructor() {
        super()
        this.state = {
            text: "",
            list: [],
            delList: []
        }
    }
    // 改变state里text的值
    handleChange = ({ target }) => {
        // e就是event对象;target指的是元素自身
        this.setState({
            text: target.value
        })

    }
    // 添加留言信息到列表里
    handleClick = () => {
        let list = this.state.list.length;
        let len = list.length === 0 ? 1 : list.length + 1;
        this.setState({
            // [...this.state.list,[this.state.text]]
            list: [{ text: this.state.text, index: len }].concat(this.state.list),
            text: ""
        })
    }
    // 删除单行数据
    removeItem = (index) => {
        let reItem = this.state.list.splice(index, 1)[0];
        console.log(reItem)
        this.setState({
            list: this.state.list,
            delList: [...this.state.delList, reItem]
        })
    }
    render() {
        return <div>
            <Header text={this.state.text}
                handleChange={this.handleChange}
                handleClick={this.handleClick} />
            <Main list={this.state.list}
                delList={this.state.delList}
                delItem={this.removeItem} />
        </div>
    }
}