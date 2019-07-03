function Main() {
    let arrtxt = ["电器城首页", "手机馆", "苏宁易购"]
    return (
        <div className="box">
            <div className="main-top flex justBetween">
                <div className="main-top-left">
                    {
                        arrtxt.map((item, index) => {
                            return <Content className="main-top-cent" key={index}>{item}</Content>
                        })
                    }
                </div>
                <div className="top-right">
                    电器城服务台
                </div>
            </div>
            <div className="main-bott flex justBetween">
                <div>
                    <span style={{ marginLeft: "20px" }}>全部 > </span>
                    <input defaultValue="   手机" />
                </div>
                <div>
                    <span>共5件商品</span>
                </div>
            </div>
        </div>
    )
}