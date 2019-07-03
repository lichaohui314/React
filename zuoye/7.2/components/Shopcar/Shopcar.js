function Shopcar(props) {
    var arrData = [
        { src: "./components/images/1.jpg", $: "￥20" },
        { src: "./components/images/2.jpg", $: "￥20" },
        { src: "./components/images/3.jpg", $: "￥20" },
        { src: "./components/images/4.jpg", $: "￥20" },
        { src: "./components/images/5.jpg", $: "￥20" },
    ]
    return (
        <div className="main">
            {
                arrData.map((item, index) => {
                    // console.log(item)
                    return <div className="car" key={index} >
                        <div className="cardiv"></div>
                        <img src={item.src} />
                        <p>{item.$}</p >
                    </div>
                })
            }
        </div>
    )
}