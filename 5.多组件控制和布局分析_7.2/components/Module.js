var { Component } = React;
// 这是我们用来组装所有模块的模板组件 - 根组件
function Module() {
    return (
        <main>
            <Nav></Nav>
            <Search></Search>
            <Hot></Hot>
            <Main></Main>
        </main>
    )
}