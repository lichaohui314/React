// Main的子组件
function TodoList(props) {
    return (
        <ul>
            {
                props.list.map((item, index) => {
                    return <li key={index}>{`${index + 1}、${item.text}`}
                        <button style={{ display: props.type }} onClick={() => { props.delItem(index) }}>删除</button>
                    </li>
                })
            }
        </ul>
    )
}