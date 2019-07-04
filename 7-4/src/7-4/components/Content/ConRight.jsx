import React from "react"
import Child from "../child/Child"
import "./Content.scss"
function ConRight(props) {
    return (
        <div className={props.name}>
            <div className="flex flex-bw">
                <Child name="conright-top" />
                <Child name="conright-top" />
            </div>
            <Child name="conright-bottom" />
        </div>
    )
}
export default ConRight