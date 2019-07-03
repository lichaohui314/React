function Header() {
    let arrtext1 = ["天猫首页", "喵，欢迎来天猫", "请登录", "免费注册"];
    let arrtext2 = ["我的淘宝", "购物车", "收藏夹", "手机版", "淘宝网", "商家支持", "网站导航"];
    return (
        <div className=" header">
            <div className="box flex justBetween">
                <div className="flex">
                    {
                        arrtext1.map((item, index) => {
                            return <Content className="conter" key={index}>{item}</Content>
                        })
                    }
                </div>
                <div className="flex">
                    {
                        arrtext2.map((item, index) => {
                            return <Content className="conter" key={index}>{item}</Content>
                        })
                    }
                </div>
            </div>
        </div>
    )
}