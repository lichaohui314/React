import React from "react"
import LeftBox from "../LeftBox/LeftBox"
import NavTwo from "../NavTwo/NavTwo"
import Content from "../Content/Content"
import "./Home.scss"
function Home() {
    return (
        <div className="flex Home">
            {/* <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} /> */}
            {/* 左侧栏*/}
            <LeftBox />
            {/*右侧主体区*/}
            <main className="comMain7-4">
                {/* 二级导航 */}
                <NavTwo />
                {/* 主体区 */}
                <Content />
            </main>
        </div>
    )
}
export default Home