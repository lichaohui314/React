import React from "react"
import "./LeftBox.scss"
import Child from "../child/Child"
let text = ["内容1", "内容2", "内容3", "内容4"]
function LeftBox(props) {
    return (
        <div className="leftbox">
            {
                text.map((item, index) => {
                    return <Child key={index} name="leftbox-child" text={item} />
                })
            }
        </div>
    )
}
export default LeftBox