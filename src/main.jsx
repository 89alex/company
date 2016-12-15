/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */
import React from 'react'
import ReactDom, { render } from 'react-dom'
import 'whatwg-fetch' //fetch 兼容
import './static/plugin/SetRem.js'


// 引入React-Router模块
import { Router, Route, Link, hashHistory , IndexRoute, Redirect, IndexLink} from 'react-router'


// 引入主体样式文件
import 'animate.css/animate.min.css'
//import 'react-slick/docs/docs.scss'
import './static/styles/common.scss'
import './static/styles/bases.css'


//引入模块
import App from './containers/App'
import ReTemplate from './containers/ReTemplate'
import UpLoad from './containers/UpLoad'
import UpResult from './containers/UpResult'



// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={App}  />
        <Route path="/Upload" component={UpLoad}></Route>
        <Route path="/UpResult" component={UpResult}></Route>
        <Route path="/ReTemplate" component={ReTemplate} />
    </Router>
    
    
), document.getElementById('root'));

// <Router history={browserHistory} >
//         <Route path="/" component={App}>
//             <IndexRoute component={App} />
//             <Route path="Upload" component={App}></Route>
//             <Route path="UpResult" component={UpResult}></Route>
//             <Route path="ReTemplate" component={ReTemplate} />
//         </Route>
//     </Router>


// <Router history={hashHistory} >
//         <Route path="/" component={App} />
//         <Route path="Upload" component={UpLoad}></Route>
//         <Route path="UpResult" component={UpResult}></Route>
//         <Route path="ReTemplate" component={ReTemplate} />
//     </Router>