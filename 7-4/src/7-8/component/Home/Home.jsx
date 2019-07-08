import React, { Component } from "react"
import Event from "../Event/index"
import EventObject from "../EventObject"
import EventDome from "../EventDome"
export default class Home extends Component {
    render() {
        return <div>
            {/* <Event />
            <EventObject /> */}
            <EventDome />
        </div>
    }
}