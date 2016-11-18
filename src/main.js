/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
//import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入主体样式文件
import 'animate.css/animate.min.css'
//import 'react-slick/docs/docs.scss'
import './static/styles/common.scss'
import './static/styles/bases.css'


//component
import DiaLog from './static/plugin/dialog/dialog.js'
import ImgSwiper from './components/ImgSwiper.js'
import EntryArea from './components/EntryArea.js'
import UploadTitle from './components/UploadTitle.js'

//数据模拟
const title = {
    title1: {
        text: '宝贝标题',
        tip: '标题不能为空'
    },
    title2: {
        text: '商家编码',
        tip: '编码不能为空'
    }
}

// 配置导航
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({

        })
    }

    render() {
        return (
            <div className="ui-warp">
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
                    <div className="ui-img-show ui-content-pad">
                        <header className="ui-txt-title"><i className="ui-block-red"></i> 主图预览 </header>
                        <div className="ui-img-ul">
                            <ImgSwiper></ImgSwiper>
                        </div>
                    </div>
                    <div className="ui-attr-show ui-content-pad">
                        <header className="ui-txt-title"><i className="ui-block-red"></i> 属性预览 </header>
                        <section className="ui-attr-con">
                            <p>长度：2000</p><p>价格1000</p><p>长度：2000</p><p>价格1000</p><p>长度：2000</p><p>价格10</p><p>长度：2000000</p><p>价格1000</p><p>长度：2000</p><p>价格1000</p><p>长度：2000</p><p>价格1000</p>
                        </section>
                    </div>
                    <UploadTitle title={title.title1}>
                        <EntryArea placeholder={title.title1}></EntryArea>
                    </UploadTitle>
                    <UploadTitle title={title.title2}>
                        <EntryArea placeholder={title.title2}></EntryArea>
                    </UploadTitle>
                    <p className="ui-tip-bot">站点_档口位置_档口名_P批发价_#货号</p>
                    <div className="ui-entry-input ui-content-pad">
                        <header className="ui-txt-title"><i className="ui-block-red"></i> 库存设置 <p className="ui-tip-red ui-tip-warn"><i className="ui-up-icon ui-icon-warn"></i>  标题不能为空</p></header>
                        <section className="ui-bot-3">
                            <div className="ui-in-content">
                                数量
                                <label htmlFor="">
                                    <input className="ui-txt-in" type="number"/>件
                                </label>
                                <span className="ui-in-tip">每组颜色尺寸的数量</span>
                            </div>
                            <div className="ui-in-content">
                                价格
                                <label htmlFor="">
                                    <input className="ui-txt-in" type="number"/>元
                                </label>
                                <span className="ui-in-tip">每组颜色尺寸的价格</span>
                            </div>
                        </section>
                    </div>
                    <p className="ui-tip-bot">利润：<span className="ui-tip-red">0.00 </span>元 批发价：<span className="ui-tip-red">29 </span>元</p>
                    <div className="ui-content-pad">
                        <header className="ui-txt-title"><i className="ui-block-red"></i> 宝贝分类 <p className="ui-tip-red ui-tip-warn"><i className="ui-up-icon ui-icon-warn"></i>  标题不能为空</p></header>
                        <div className="ui-drop-menu-con">
                            <section className="ui-refresh-con">
                                <a href="#" className="ui-refresh-btn"><i className="ui-up-icon ui-icon-refresh"></i>刷新宝贝分类</a>
                                <p><i className="ui-up-icon ui-icon-gray"></i>系统默认24小时更新缓存</p>
                            </section>
                            <section className="ui-drop-menu">
                                <header className="ui-menu-title">衣服</header>
                                <ul className="ui-menu-main">
                                    <li>
                                        <img className="line"  src="./static/styles/i/dropDown/down-line.png" alt=""/>
                                        <label  className="ui-input-label" htmlFor="">
                                            <input className="ui-input-checkbox" type="checkbox"/>
                                            内衣
                                        </label>
                                    </li>
                                    <li>
                                        <img className="line"  src="./static/styles/i/dropDown/down-line.png" alt=""/>
                                        <label className="ui-input-label" htmlFor="">
                                            <input className="ui-input-checkbox" type="checkbox"/>
                                            内裤
                                        </label>
                                    </li>
                                </ul>
                            </section>
                            <section className="ui-drop-menu">
                                <header className="ui-menu-title">床上用品</header>
                                <ul className="ui-menu-main">
                                    <li>
                                        <img className="line"  src="./static/styles/i/dropDown/down-line.png" alt=""/>
                                        <label  className="ui-input-label" htmlFor="">
                                            <input className="ui-input-checkbox" type="checkbox"/>
                                            内衣
                                        </label>
                                    </li>
                                    <li>
                                        <img className="line"  src="./static/styles/i/dropDown/down-line.png" alt=""/>
                                        <label className="ui-input-label" htmlFor="">
                                            <input className="ui-input-checkbox" type="checkbox"/>
                                            内裤
                                        </label>
                                    </li>
                                </ul>
                            </section>
                            <label className="ui-input-label" htmlFor="">
                                <input className="ui-input-checkbox" type="checkbox"/>
                                衬衫
                            </label>
                        </div>
                    </div>
                    <div className="ui-content-pad">
                        <header className="ui-txt-title"><i className="ui-block-red"></i> 物流设置 <p className="ui-tip-red ui-tip-warn"><i className="ui-up-icon ui-icon-warn"></i>  请完善运费设置信息</p></header>
                        <section className="ui-refresh-con">
                            <a href="#" className="ui-refresh-btn"><i className="ui-up-icon ui-icon-refresh"></i>刷新宝贝分类</a>
                            <p><i className="ui-up-icon ui-icon-gray"></i>系统默认24小时更新缓存</p>
                        </section>
                        <section className="ui-select-title">
                            <span>运费模板</span>
                            <label htmlFor="" className="ui-select-com">
                                <select>
                                    <option>模板一</option>
                                    <option>模板一</option>
                                </select>
                                <i className="ui-up-icon"></i>
                            </label>
                        </section>
                        <div className="ui-in-content">
                            <label htmlFor="weight">
                                <input className="ui-input-radio" defaultChecked id="weight" name="send" type="radio"/>
                                按重量
                            </label>
                            <label htmlFor="">
                                <input className="ui-txt-in" type="number"/>（千克/kg）
                            </label>
                        </div>
                        <div className="ui-in-content ui-col-gray">
                            <label htmlFor="volume">
                                <input className="ui-input-radio" id="volume" name="send" type="radio"/>
                                按体积
                            </label>
                            <label htmlFor="">
                                <input className="ui-txt-in" disabled type="number"/>（立方米/m3）
                            </label>
                        </div>
                        <section className="ui-select-title">
                            <span>宝贝地址</span>
                            <label htmlFor="" className="ui-select-com">
                                <select>
                                    <option>广东省</option>
                                    <option>模板一</option>
                                </select>
                                <i className="ui-up-icon"></i>
                            </label>
                            <label htmlFor="" className="ui-select-com">
                                <select>
                                    <option>汕头市</option>
                                    <option>模板一</option>
                                </select>
                                <i className="ui-up-icon"></i>
                            </label>
                        </section>
                        <section className="ui-bot-3"></section>
                    </div>
                    <div className="ui-content-pad">
                        <header className="ui-txt-title"><i className="ui-block-red"></i> 上架时间 <p className="ui-tip-red ui-tip-warn"><i className="ui-up-icon ui-icon-warn"></i>  请完善运费设置信息</p></header>
                        <section className="ui-bot-3">
                            <div className="ui-in-content">
                                <label htmlFor="goShop">
                                    <input className="ui-input-radio" defaultChecked id="goShop" name="shop" type="radio"/>
                                    立即上架
                                </label>
                            </div>
                            <div className="ui-in-content">
                                <label htmlFor="house">
                                    <input className="ui-input-radio" id="house" name="shop" type="radio"/>
                                    放入仓库
                                </label>
                            </div>
                            <div className="ui-in-content">
                                <label htmlFor="set">
                                    <input className="ui-input-radio" id="set" name="shop" type="radio"/>
                                    设定
                                </label>
                                <section className="ui-se-times">
                                    <span>2016年7月7日</span>
                                    <label htmlFor="" className="ui-select-com">
                                        <select>
                                            <option>11:30</option>
                                            <option>12:30</option>
                                        </select>
                                        <i className="ui-up-icon"></i>
                                    </label>
                                </section>
                            </div>
                        </section>
                    </div>
                    <p className="ui-tip-bot">您可以设定宝贝的正式开始销售的时间</p>
                    <div className="ui-content-pad ui-img-remove">
                        <header className="ui-txt-title"><i className="ui-block-red"></i> 图片搬家 <p className="ui-tip-red ui-tip-warn"><i className="ui-up-icon ui-icon-warn"></i>  请完善运费设置信息</p></header>
                        <section className="ui-bot-3">
                            <section className="ui-refresh-con">
                                <a href="#" className="ui-refresh-btn"><i className="ui-up-icon ui-icon-refresh"></i>刷新图片目录</a>
                                <p><i className="ui-up-icon ui-icon-gray"></i>系统默认24小时更新缓存</p>
                            </section>
                            <section className="ui-select-title">
                                <span>图片目录</span>
                                <label htmlFor="" className="ui-select-com">
                                    <select>
                                        <option>一起做网店（勿删）_商品详情</option>
                                        <option>模板一</option>
                                    </select>
                                    <i className="ui-up-icon"></i>
                                </label>
                            </section>
                            <section className="ui-remove-con">
                                <header className="ui-txt-title">
                                    <button className="ui-color-red">一键移除</button>
                                    <button className="ui-color-red">一键重试</button>
                                    <p className="ui-tip-red ui-tip-warn"><i className="ui-up-icon ui-icon-warn"></i>部分图片失败</p>
                                </header>
                                <ul className="ui-link-list">
                                    <li><p className="ui-txt-p">www.baidu.com/1234567891011155565456</p><a className="ui-color-red" href="javascript:;">移除</a></li>
                                    <li><p className="ui-txt-p">www.baidu.com/1234567891011155565456</p><a className="ui-color-red" href="javascript:;">移除</a></li>
                                    <li><p className="ui-txt-p">www.baidu.com/1234567891011155565456</p><a className="ui-color-red" href="javascript:;">移除</a></li>
                                </ul>
                            </section>
                        </section>
                    </div>
                    <div className="ui-content-pad">
                        <header className="ui-txt-title"><i className="ui-block-red"></i> 其他 <p className="ui-tip-red ui-tip-warn"><i className="ui-up-icon ui-icon-warn"></i>  标题不能为空</p></header>
                        <div className="ui-drop-menu-con">
                            <ul className="ui-other-check">
                                <li>
                                    <label className="ui-input-label" htmlFor="">
                                        <input className="ui-input-checkbox" type="checkbox"/>
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


