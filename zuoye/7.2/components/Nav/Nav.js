function Nav() {
    var arrimg = [
        { src: "./components/images/01.png", txt: "vivo" },
        { src: "./components/images/02.png", txt: "Xiaomi/小米" },
        { src: "./components/images/03.png", txt: "Huawei/华为" },
        { src: "./components/images/04.png", txt: "Samsung/三星" },
        { src: "./components/images/05.png", txt: "Honor/荣耀" },
        { src: "./components/images/06.png", txt: "oppo" },
    ]
    return (
        <div className="box nav">
            <div className="nav-top">
                <div className="nav-top-left">
                    <p className="nav-top-left-p">品牌</p>
                </div>
                <div className="nav-top-middle">
                    {
                        arrimg.map((item, index) => {
                            return <Content className="nav-top-middle-img" type="div" key={index}>
                                <p>{item.txt}</p>
                                <img src={item.src} />
                            </Content>
                        })
                    }
                </div>
                <div className="nav-top-right">
                    <Content type="p">更多></Content>
                </div>
            </div>
            <div>
                456
            </div>
        </div >
    )
}