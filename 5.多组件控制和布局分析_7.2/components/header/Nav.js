function Nav() {
    return (
        <div className="flex justBetween" style={{ background: "pink" }}>
            <div className="flex">
                <Content className="border conter" style={{ padding: "20px", margin: "5px" }}>{1}</Content>
                <Content className="border conter" style={{ padding: "20px", margin: "5px" }}>{2}</Content>
                <Content className="border conter" style={{ padding: "20px", margin: "5px" }}>{3}</Content>
            </div>

            <div className="flex">
                <Content className="border conter" style={{ padding: "20px", margin: "5px" }}>{1}</Content>
                <Content className="border conter" style={{ padding: "20px", margin: "5px" }}>{2}</Content>
            </div>
        </div>
    )
}