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
//import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入主体样式文件
import 'animate.css/animate.min.css'
//import 'react-slick/docs/docs.scss'
import './static/styles/common.scss'
import './static/styles/bases.css'


//component
import DiaLog from './static/plugin/dialog/dialog'
import ImgSwiper from './components/ImgSwiper'
import EntryArea from './components/EntryArea'
import EntryInput from './components/EntryInput'
import UploadTitle from './components/UploadTitle'
import DropMenu from './components/DropMenu'

// container
import Logistics from './containers/Logistics'
import ShelveTime from './containers/ShelveTime'
import ImgRemove from './containers/ImgRemove'

//数据模拟
const title = {
    title7: {
        text: '主图预览',
        tip: ''
    },
    title8: {
        text: '属性预览',
        tip: ''
    },
    title1: {
        text: '宝贝标题',
        tip: '标题不能为空',
        order: 1
    },
    title2: {
        text: '商家编码',
        tip: '编码不能为空',
        order: 2
    },
    title3: {
        text: '库存设置',
        tip: '数量和价格都不能为空',
        order: 3
    },
    title4: {
        text: '宝贝分类',
        tip: '',
        order: 4
    },
    title5: {
        text: '物流设置',
        tip: '请完善运费设置信息',
        order: 5
    },
    title6: {
        text: '上架时间',
        tip: '',
        order: 6
    },
    title9: {
        text: '图片搬家',
        tip: ''
    }
}

// 配置导航
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: null,
            attr: null,
            showTip: {
                title1: false,
                title2: false,
                title3: false,
                title5: false
            }
        }
    }
    showTipChange = (num, bool) => {
        const showTips = this.state.showTip
        showTips[`title${num}`] = bool
        this.setState({showTip: showTips})
    }
    handleClick = (e) => {
        this.setState({
            current: e.key
        })
        DiaLog({
            type: 'tip',
            con: '系统默认有缓存，如果当前页面的商品数据与实际不符，请点击按钮进行刷新！',
            cancelFun: function () {
                return true
            }
        })
    }
    getData = async () => {
        const image = await this.fetchs({'url': './static/datas/data.json'})
        const attrs = await this.fetchs({'url': './static/datas/data.json'})
        this.setState({images : image.images, attr: attrs.attr})
        //console.log(data)
    }
    fetchs(init) {
        return new Promise(resolve => {
            fetch(init.url)
                .then((res) => { console.log(res.status); return res.json() })
                .then((data) => { resolve(data)})
                .catch((e) => { console.log(e.message) })
        })
    }
    componentWillMount() {
        this.getData()
    }
    componentDidMount() {

    }
    render() {
        //console.log(data.images)
        const {images, attr, showTip} = this.state
        return (
            <div className="ui-warp">
                {/*<form action="">*/}
                    <div className="ui-upload">
                        <header className="ui-header">
                            <div className="ui-header-container">
                                <a href="#" className="ui-header-back ui-color-red"><i className="ui-icon-brackets"></i></a>
                                <a href="#" className="ui-color-red ui-btn-cancel">完成</a>
                                <span className="ui-header-title">仿淘宝</span>
                            </div>
                        </header>
                        <div className="ui-user-login">
                            <section className="ui-left ui-logo">
                                <img width="100%" src="static/styles/i/logo.jpg" alt=""/>
                            </section>
                            <section className="ui-right">
                                <span className="ui-username">SB940</span>
                                <button onClick={this.handleClick.bind(this)} className="ui-bg-red ui-btn-out">退出</button>
                            </section>
                        </div>
                        <div className="ui-upload-tip">
                            <ul>
                                <li><span>上传记录：</span><span><i className="ui-up-icon ui-icon-succ"></i>未上传过！</span></li>
                                <li><span>盗链检测：</span><span><i className="ui-up-icon ui-icon-warn"></i>有盗链，需要图片搬家！</span></li>
                                <li><span>发布模板：</span><span><i className="ui-up-icon ui-icon-set"></i>上款更便捷，<a
                                    href="#" className="ui-color-red">进入<i className="ui-up-icon ui-icon-link"></i></a></span></li>
                                <section className="ui-refresh">
                                    <span>什么情况需要刷新宝贝？</span>
                                    <a href="#" className="ui-refresh-btn">
                                        <i className="ui-up-icon ui-icon-refresh"></i>
                                        刷新宝贝
                                    </a>
                                </section>
                            </ul>
                        </div>
                        <UploadTitle showTip={showTip.title7} title={title.title7}>
                            <div className="ui-img-ul">
                                <ImgSwiper images={images}></ImgSwiper>
                            </div>
                        </UploadTitle>
                        <UploadTitle showTip={showTip.title8} title={title.title8}>
                            <section className="ui-attr-con">
                                {
                                    attr ? attr.map((attrs, index) => <p key={index}>{attrs}</p>) : <p>暂时无任何属性</p>
                                }
                            </section>
                        </UploadTitle>
                        <UploadTitle showTip={showTip.title1} title={title.title1}>
                            <EntryArea showTipChange={this.showTipChange} title={title.title1}></EntryArea>
                        </UploadTitle>
                        <UploadTitle showTip={showTip.title2} title={title.title2}>
                            <EntryArea showTipChange={this.showTipChange}  title={title.title2}></EntryArea>
                        </UploadTitle>
                        <p className="ui-tip-bot">站点_档口位置_档口名_P批发价_#货号</p>
                        <UploadTitle showTip={showTip.title3} title={title.title3}>
                            <EntryInput showTipChange={this.showTipChange} order={title.title3.order} />
                        </UploadTitle>
                        <p className="ui-tip-bot">利润：<span className="ui-tip-red">0.00 </span>元 批发价：<span className="ui-tip-red">29 </span>元</p>
                        <UploadTitle title={title.title4}>
                            <div className="ui-drop-menu-con">
                                <section className="ui-refresh-con">
                                    <a href="#" className="ui-refresh-btn"><i className="ui-up-icon ui-icon-refresh"></i>刷新宝贝分类</a>
                                    <p><i className="ui-up-icon ui-icon-gray"></i>系统默认24小时更新缓存</p>
                                </section>
                                <DropMenu></DropMenu>
                                <label className="ui-input-label" htmlFor="">
                                    <input className="ui-input-checkbox" type="checkbox"/>
                                    衬衫
                                </label>
                            </div>
                        </UploadTitle>
                        <UploadTitle title={title.title5}>
                            <Logistics />
                            <section className="ui-bot-3"></section>
                        </UploadTitle>
                        <UploadTitle title={title.title6}>
                            <section className="ui-bot-3">
                                <ShelveTime />
                            </section>
                        </UploadTitle>
                        <p className="ui-tip-bot">您可以设定宝贝的正式开始销售的时间</p>
                        <UploadTitle title={title.title9}>
                            <ImgRemove />
                        </UploadTitle>
                        <div className="ui-content-pad">
                            <header className="ui-txt-title"><i className="ui-block-red"></i> 其他 </header>
                            <div className="ui-drop-menu-con">
                                <ul className="ui-other-check">
                                    <li>
                                        <label className="ui-input-label" htmlFor="">
                                            <input className="ui-input-checkbox" defaultChecked type="checkbox"/>
                                            去除货号
                                        </label>
                                        <p className="ui-right ui-col-gray">自动去除 属性、标题 中的货号</p>
                                    </li>
                                    <li>
                                        <label className="ui-input-label" htmlFor="">
                                            <input className="ui-input-checkbox" type="checkbox"/>
                                            橱柜推荐
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <section className="ui-help-tip">
                            <header>温馨提示：</header>
                            <p>1. 建议您上传前先咨询该供货商档口,确保有货!</p>
                            <p> 2. 上传速度由图片数量、质量所决定,请耐心等候!</p>
                        </section>
                        <div className="ui-btn-component">
                            <button>一键上传</button>
                        </div>
                    </div>
                {/*</form>*/}
                {/*提示消息*/}
                <div className="ui-new-tip">
                    <i className="ui-up-icon ui-icon-sound"></i>
                    <a href="javascript:;" className="ui-icon-close-a"><i className="ui-up-icon ui-icon-close"></i></a>
                        重要通知：重要通知重要通知重要通知重要通知重要通知通知  。
                    <a href="">查看详情 <i className="ui-up-icon ui-icon-link-new"></i></a>
                </div>
                {/*弹窗*/}
                {/*上传成功提示*/}
                <div className="ui-up-result-bg">
                    <div className="ui-up-result">
                        {/*<header><i className="ui-re-icon ui-succ-icon"></i><h2>上传失败</h2></header>*/}
                        <header><i className="ui-re-icon ui-fail-icon"></i><h2>上传成功</h2></header>
                        {/*<section className="ui-re-fail">
                            <p>失败原因</p>
                            <p>获取不到该宝贝的数据，请检查此宝贝是否存在</p>
                        </section>*/}
                        <ul className="ui-re-succ">
                            <li><a href="">前往->17首页[一起做网店17zwd.com]</a></li>
                            <li><a href="">前往->17首页[一起做网店17zwd.com]</a></li>
                            <li><a href="">前往->17首页[一起做网店17zwd.com]</a></li>
                            <li><a href="">前往->17首师大附近艾斯蒂法is好地分页[一起做网店17zwd.com]</a></li>
                            <li><a href="">前往->17首页[一起做网店17zwd.com]</a></li>
                        </ul>
                        <section className="ui-btn-con">
                            <a href="" className="ui-btn-close">关闭</a>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
render(<App />, document.getElementById('root'));


