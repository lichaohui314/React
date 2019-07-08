function Header(props = {}) {
    return <header className="header">
        <input className="inp" type="text" value={props.text} onChange={(e) => props.handleChange(e)} />
        <div className="btn" onClick={props.handleClick}>提交</div>
    </header>
}