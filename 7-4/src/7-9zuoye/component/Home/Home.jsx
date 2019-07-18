import React, { Component } from "react"
import "./Home.scss"
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            isShow1: false,
            isShow2: false,
            isShow3: false,
            isShow4: false,
            navs: [{
                link: 'Home',
                val: '组件1'
            }, {
                link: 'About',
                val: '组件2'
            }]
        }

    }
    setRouter = (link) => {
        console.log(this.state.isShow2)
        this.setState({
            link
        })
    }
    render() {
        let dom = ''
        switch (this.state.link) {
            case 'Home':
                dom = "这是二级子组件1";
                this.state.isShow2 = true;
                this.state.isShow3 = false;
                break;
            case 'About':
                dom = "这是二级子组件222";
                this.state.isShow2 = false;
                this.state.isShow3 = true;
                break;
        }
        return <div className="box">
            <ul>
                <li onClick={() => { this.setState({ isShow1: !this.state.isShow1, isShow4: false }) }}>1</li>
                <li onClick={() => { this.setState({ isShow4: !this.state.isShow4, isShow1: false }) }}>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
            <div className="content">
                {
                    this.state.isShow1 && <div className="content-one">
                        <p>我是第一个组件</p>
                        {
                            this.state.navs.map((item, index) => {
                                return <p key={index} className="p" onClick={() => this.setRouter(item.link)}>{item.val}</p>
                            })

                        }
                        <div>
                            {
                                this.state.isShow2 && <div className="content-two" style={{ float: "left" }}>
                                    {dom}
                                </div>
                            }
                            {
                                this.state.isShow3 && <div className="content-two" style={{ float: "right" }}>
                                    {dom}
                                </div>
                            }
                        </div>

                    </div>
                }
                {
                    this.state.isShow4 && <div className="content-one">
                        <p>我是第二个组件</p>
                        {
                            this.state.navs.map((item, index) => {
                                return <p key={index} className="p" onClick={() => this.setRouter(item.link)}>{item.val}</p>
                            })

                        }

                    </div>
                }

            </div>
        </div>
    }
}