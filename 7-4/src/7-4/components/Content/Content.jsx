import React from "react"
import ConLeft from "./ConLeft"
import ConRight from "./ConRight"
import "./Content.scss"
function Content(props) {
    return (
        <div className="flex flex-bw">
            <ConLeft name="conleft" />
            <ConRight name="conright" />
        </div>
    )
}
export default Content