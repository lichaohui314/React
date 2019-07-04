// Main组件
function Main(props) {
    // 无状态组件 就叫UI组件,功能只有一个就是开发纯dom结构
    return (
        <main>
            <TodoList list={props.list} delItem={props.delItem} type="block"></TodoList>
            <p>被删掉的数据</p>
            <TodoList list={props.delList} type="none"></TodoList>
        </main>
    )
}