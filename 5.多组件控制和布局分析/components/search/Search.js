function Search() {
    return (
        <div className="flex justBetween search-box">
            <div className="search-left">
                <p><span className="search-input">输入框</span><button>搜索</button></p>
            </div>
            <div className="search-right">
                <ul className="flex">
                    <Content type="li" className="border center" style={{ padding: "5px", margin: "5px" }}>1</Content>
                    <Content type="li" className="border center" style={{ padding: "5px", margin: "5px" }}>2</Content>
                    <Content type="li" className="border center" style={{ padding: "5px", margin: "5px" }}>3</Content>
                    <Content type="li" className="border center" style={{ padding: "5px", margin: "5px" }}>4</Content>
                    <Content type="li" className="border center" style={{ padding: "5px", margin: "5px" }}>5</Content>
                </ul>
            </div>
        </div>
    )
}