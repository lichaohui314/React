function Content(props = { number: [] }) {
    var render = (props) => {
        if (props.type) {
            return <props.type {...props}>{props.children}</props.type>
        } else {
            return <p {...props}>{props.children}</p>
        }
    }
    return (
        render(props)
    )
}