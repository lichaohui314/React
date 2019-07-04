// header 组件
function Header(props = {}) {
    return (
        <header>
            <input type="text" value={props.text} onChange={(e) => props.handleChange(e)} />
            <button onClick={props.handleClick}>提交</button>
        </header>
    )
}