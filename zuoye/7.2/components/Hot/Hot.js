function Hot() {
    let arrtxt = ["华为 |", " 小米 |", " 魅族 |", " 荣耀 |", " vivo |", " oppo |", " 三星 |", " 智能手机"]
    return (
        <div className="box flex hot-box">
            <img src="./components/images/logo.png" />
            <div className="hot-b">
                <input className="hot-inp" defaultValue="手机" />
                <div className="hot-p">搜 索</div>
                <div>
                    {
                        arrtxt.map((item, index) => {
                            return <Content type="span" key={index}>{item}</Content>
                        })
                    }
                </div>
            </div>
        </div>
    )
}