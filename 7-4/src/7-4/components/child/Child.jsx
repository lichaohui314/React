import React from "react"
function Child(props) {
    return (
        <li className={props.name}>{props.text}</li>
    )
}
export default Child