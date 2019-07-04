import React from "react"
import Child from "../child/Child"
import "./NavTwo.scss"
let text = ["导航1", "导航2", "导航3", "导航4", "导航5", "导航6", "导航7", "导航8"]
function NavTwo(props) {
    return (
        <div className="navTwo">
            <ul className="flex flex-bw navTwolist">
                {
                    text.map((item, index) => {
                        return <Child name="navtwobox" key={index} text={item} />
                    })
                }
            </ul>
        </div>
    )
}
export default NavTwo