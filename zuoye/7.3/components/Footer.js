function Footer(props) {
    // 无状态组件 就叫UI组件,功能只有一个就是开发纯dom结构
    return (
        <footer className="footer">
            <div className="footer-box">
                <div className="footer-txt" style={{ height: "25px" }}>
                    <span>当前留言共:<span className="footer-num">{`${props.list.length}`}</span>条</span>
                    <span className="footer-clean" onClick={props.handleClean}>清空留言板</span>
                </div>
                <div className="footer-list">
                    <div className="footer-list1">
                        {
                            props.list.map((item, index) => {
                                return <p className="footer-txt" key={index}>{`${index + 1}、${item}`}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}