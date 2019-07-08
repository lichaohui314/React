import React, { Component } from "react"
import Style from "./index.scss"
class Newhome extends Component {
    updata = "";
    onForceUpdata = () => {
        this.updata = "被强制更新";
        this.forceUpdate()
    }
    render() {
        return (
            <div>
                <p className={Style.p}>12131</p>
                <div className={Style.div}>aaaaqa </div>
                <hr />
                {this.updata}
                <button onClick={this.onForceUpdata}>强制更新froceupdata</button>
            </div>
        )
    }
}
export default Newhome
