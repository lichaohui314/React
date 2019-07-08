import React from 'react';
import ReactDOM from 'react-dom';
import './asset/style/index.scss';

// 引入要打开的项目
// 7-4课上练习
// import Home from "./7-4/components/Home/Home"

// 7-5 课上练习
// import Home from "./7-5/components/Home/Home"

// 7-5 课后练习
// import Home from "./7-5zuoye/components/Home/Home"

// 7-8
// import Home from "./7-8/component/Home/Home"

// 7-8 课后练习
import Home from "./7-8zuoye/component/Home"

import * as serviceWorker from './serviceWorker';
// import Html from "./compon/ents/liuyanban/html"

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();