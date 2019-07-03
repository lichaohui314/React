function Main() {
	// 假设后端给我们的数据
	var arrData = [
		{ src: "https://img.alicdn.com/bao/uploaded/i2/TB1jZYfdRjTBKNjSZFwATwG4XXa_041742.jpg", $: "5$" },
		{ src: "https://img.alicdn.com/bao/uploaded/i2/901409638/O1CN01bnuQce2L4FnXRjguO_!!901409638.jpg", $: "2$" },
		{ src: "https://img.alicdn.com/bao/uploaded/i7/TB1xHH3HHvpK1RjSZFqmR.XUVXa_123431.jpg", $: "3$" },
		{ src: "https://img.alicdn.com/bao/uploaded/i2/TB1TYU7swaTBuNjSszfDeXgfpXa_034348.jpg", $: "1$" },
	]
	return (
		<div>
			<div className="main-filter flex justBetween">
				<ul className="flex">
					<Content type="li" style={{ background: "red" }}>1</Content>
					<Content type="li" style={{ background: "blue" }}>1</Content>
					<Content type="li" style={{ background: "yellow" }}>1</Content>
				</ul>
				<ul className="flex">
					<Content type="li" style={{ background: "red" }}>2</Content>
					<Content type="li" style={{ background: "blue" }}>2</Content>
					<Content type="li" style={{ background: "yellow" }}>2</Content>
				</ul>
			</div>
			<div className="main-content">
				<ul className="flex justBetween center">
					{
						arrData.map((item, index) => {
							console.log(item)
							return <Content type="li" key={index}>
								<img src={item.src} width="100px" />
								<p>{item.$}</p>
							</Content>
						})
					}
				</ul>
			</div>
		</div>
	)
}