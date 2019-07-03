function Nav() {
    var arrimg = [
        { src: "./components/images/01.png", txt: "Huawei/华为" },
        { src: "./components/images/02.png", txt: "Huawei/华为" },
        { src: "./components/images/03.png", txt: "Huawei/华为" },
        { src: "./components/images/04.png", txt: "Huawei/华为" },
        { src: "./components/images/05.png", txt: "Huawei/华为" },
        { src: "./components/images/06.png", txt: "Huawei/华为" },
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
                            return <Content type="div" key={index}>
                                <img src={item.src} />
                                <p>{item.txt}</p>
                            </Content>
                        })
                    }
                </div>
                <div className="nav-top-right">
                    123
                </div>
            </div>
            <div>
                456
            </div>
        </div >
    )
}