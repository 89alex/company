
import React from 'react'

// Link
import {Link , hashHistory } from 'react-router'

//component
import DiaLog from '../static/plugin/dialog/dialog'
import ImgSwiper from '../components/ImgSwiper'
import EntryArea from '../components/EntryArea'
import EntryInput from '../components/EntryInput'
import UploadTitle from '../components/UploadTitle'
import DropMenu from '../components/DropMenu'

// container
import Logistics from './UpLoad/Logistics'
import ShelveTime from './UpLoad/ShelveTime'
import ImgRemove from './UpLoad/ImgRemove'
import AttrSetting from './UpLoad/AttrSetting'
import SaleAttr from './UpLoad/SaleAttr'

// const logo = require('./static/styles/i/logo.jpg')

//数据模拟
const menus = [
            {
                'title': '衣服',
                'items': [
                    {'menu': {'text': '内衣', 'number': '0111'}, 'items': [{'menu': {text: '内衣', number: '0112'}}, {'menu': {text: '内衣2', number: '0123'}}]},
                    {'menu': {'text': '内库', 'number': '0114'}}
                ]
            },
            {
                'title': '床上用品',
                'items': [
                    {'menu': {'text': '内衣', 'number': '0115'}, 'items': [{'menu': {text: '内衣', number: '013'}}, {'menu': {text: '内衣2', number: '0146'}}]},
                    {'menu': {'text': '内库', 'number': '0117'}}
                ]
            },
            {
                'items': {'text': '衬衫', 'number': '011111'}
            }
        ]
const title = {
    title7: {
        text: '主图预览',
        tip: ''
    },
    title8: {
        text: '属性预览',
        tip: ''
    },
    title10: {
        text: '属性设置',
        tip: ''
    },
    title11: {
        text: '宝贝卖点',
        tip: '宝贝卖点不能为空',
        order: 11,
        max: 150,
        id: 'Area-babyBuy'
    },
    title1: {
        text: '宝贝标题',
        tip: '宝贝标题不能为空',
        order: 1,
        max: 60,
        id: 'Area-babyTitle'
    },
    title2: {
        text: '商家编码',
        tip: '商家编码不能为空',
        order: 2,
        max: 64,
        id: 'Area-businessNum'
    },
    title3: {
        text: '销售属性',
        tip: '',
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
class UpLoad extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: null,
            attr: null,
            user: null,
            showTip: {
                title1: false,
                title2: false,
                title3: false,
                title5: false
            }
        }
    }
    // ask for `router` from context
    handleHideTip = (event) => {
        let e = event.target
        e.parentNode.parentNode.setAttribute('class','ui-new-tip animated flipOutY')
        setTimeout(() => {e.parentNode.parentNode.remove()},700)
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
            type: 'tipTitle',
            title: '提示',
            btnfont:'我知道了',
            con: '例如：批发价为30元|1.计划按批发价盈利 50元，价格公式会这样计算：30*100%+50=80元|2.计划按批发价的 200% ，价格公式会这样计算：30*200%+0=60元',
            cancelFun: function () {
                return true
            }
        })
    }
    handleUpdateTip = () => {
        var upDia = new DiaLog({
            type: 'tipTitle',
            title: '提示',
            btnfont:'我知道了',
            con: '系统默认24小时更新缓存',
            cancelFun: function () {
                return true
            }
        })
    }
    handleComfirm = () => { //一键上传
        let babyTitle = document.querySelector('#Area-babyTitle').value, //宝贝标题
            babyBuy = document.querySelector('#Area-babyBuy').value, //宝贝标题
            businessNum = document.querySelector('#Area-businessNum').value, //商家编码
            // stockNum = document.querySelector('#text-stockNum').value, //库存数量
            // goodsPrice = document.querySelector('#text-goodsPrice').value, //商品价格
            dropMenu = document.querySelectorAll('.ui-drop-menu-con input[type=checkbox][checked=true]'), //checkbox
            dropMenuArray = [],
            logisticsTemp = document.querySelector('#Select-LogisticsTemp').value, //运费模板
            logisticsValue = document.querySelector('.ui-Logistics .ui-radio-checked input[type=number]').value, //模板设置值
            addressProv = document.querySelector('#to_cn').value,// 省份地址
            addressCity = document.querySelector('#city').value,// 城市地址
            shelveTime = document.querySelector('.ui-ShelveTime .ui-radio-checked label input').getAttribute('id'), //上架时间
            imgCatalog = document.querySelector('#Select-imgCatalog').value //图片目录
        
        babyTitle.trim() == '' ? this.showTipChange(1, true) : true
        babyBuy.trim() == '' ? this.showTipChange(11, true) : true
        businessNum.trim() == '' ? this.showTipChange(2, true) : true
        // stockNum.trim() == '' || goodsPrice.trim() == '' ? this.showTipChange(3, true) : true
        logisticsValue.trim() == '' || addressProv.trim() == '' ? this.showTipChange(5, true) : true
        let shelveTimevalue = shelveTime == 'house' ? '放入仓库' : shelveTime == 'goShop' ? '立即上架' : document.querySelector('.ui-ShelveTime .ui-radio-checked select').value
        //console.log(babyTitle,businessNum,stockNum,goodsPrice,dropMenu)
        for(let i = 0; i < dropMenu.length; i++) dropMenuArray[i] = dropMenu[i].getAttribute ? dropMenu[i].getAttribute('data-number') : null
        console.log(dropMenuArray)


        let loading = new DiaLog({
            type: 'loading',
            title: '上传中，请稍后...'
        })
        setTimeout(function(){
            loading.delete()
            hashHistory.push('/UpResult')
        }, 4000)
    }
    handleRefreshMenu = (event) => {
        var e = event.target
        var menu = e.parentNode.parentNode,
            checkbox = menu.querySelectorAll('.ui-drop-menu-con input[type=checkbox]')
        for(let i in checkbox) checkbox[i].removeAttribute && checkbox[i].removeAttribute('checked')

    }
    getData = async () => {
        const image = await this.fetchs({'url': '../static/datas/data.json'})
        const attrs = await this.fetchs({'url': '../static/datas/data.json'})
        const users = await this.fetchs({'url': '../static/datas/data.json'})
        this.setState({images : image.images, attr: attrs.attr, user: users.user}) 
        //console.log(images)
    }
    fetchs(init) {
        return new Promise(resolve => {
            fetch(init.url)
                .then((res) => { if(res.ok) return res.json() ;})
                .then((res) => { resolve(res)})
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
        const {images, attr, showTip, user, show} = this.state
        return (
            <div className="ui-warp">
                {/*<form action="">*/}
                <header className="ui-header">
                    <div className="ui-header-container">
                        <Link to="/" className="ui-header-back ui-color-red"><i className="ui-icon-brackets"></i></Link>
                        <a href="#" className="ui-color-red ui-btn-cancel">完成</a>
                        <span className="ui-header-title">仿淘宝</span>
                    </div>
                </header>
                    <div className="ui-upload">
                        <div className="ui-user-login">
                            <section className="ui-left ui-logo">
                                <img width="100%" src="../static/images/mobile/logo.png" alt=""/>
                            </section>
                            <section className="ui-right">
                                <span className="ui-username">{user && user.username}</span>
                                {
                                    user ? 
                                        <button onClick={this.handleClick.bind(this)} className="ui-bg-red ui-btn-out">退出</button> : ''
                                }
                            </section>
                        </div>
                        <div className="ui-new-tip">
                            <i className="ui-up-icon ui-icon-sound"></i>
                            <a href="javascript:;" onClick={this.handleHideTip} className="ui-icon-close-a"><i className="ui-up-icon ui-icon-close"></i></a>
                                重要通知：重要通知重要通知重要通知重要通知重要通知通知  。
                            <a className="ui-link-block" href="">查看详情 <i className="ui-up-icon ui-icon-link-new"></i></a>
                        </div>
                        <div className="ui-upload-tip">
                            <ul>
                                <li><span>上传记录：</span><span><i className="ui-up-icon ui-icon-succ"></i>未上传过！</span></li>
                                <li><span>盗链检测：</span><span><i className="ui-up-icon ui-icon-warn-red"></i>有盗链，需要图片搬家！</span></li>
                                <li><span>发布模板：</span><span><i className="ui-up-icon ui-icon-set"></i>上款更便捷，<a
                                    href="#" className="ui-color-red ui-link-block">进入<i className="ui-up-icon ui-icon-link"></i></a></span></li>
                                <section className="ui-refresh">
                                    <span onClick={this.handleUpdateTip}>什么情况需要刷新宝贝？</span>
                                    <a href="javascript:;" className="ui-refresh-btn">
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
                        {/*<UploadTitle showTip={showTip.title8} title={title.title8}>//属性预览
                            <section className="ui-attr-con">
                                {
                                    attr ? attr.map((attrs, index) => <p key={index}>{attrs}</p>) : <p>暂时无任何属性</p>
                                }
                            </section>
                        </UploadTitle>*/}
                        <UploadTitle title={title.title10}>
                            <AttrSetting />
                        </UploadTitle>
                        <UploadTitle showTip={showTip.title1} title={title.title1}>
                            <EntryArea showTipChange={this.showTipChange} title={title.title1}></EntryArea>
                        </UploadTitle>
                        <UploadTitle showTip={showTip.title11} title={title.title11}>
                            <EntryArea showTipChange={this.showTipChange}  title={title.title11}></EntryArea>
                        </UploadTitle>
                        <UploadTitle showTip={showTip.title2} title={title.title2}>
                            <EntryArea showTipChange={this.showTipChange}  title={title.title2}></EntryArea>
                        </UploadTitle>
                        <p className="ui-tip-bot">站点_档口位置_档口名_P批发价_#货号</p>
                        {/*<UploadTitle showTip={showTip.title3} title={title.title3}>
                            <EntryInput showTipChange={this.showTipChange} order={title.title3.order} />
                        </UploadTitle>*/}
                        <UploadTitle showTip={showTip.title3} title={title.title3}>
                            <SaleAttr />
                        </UploadTitle>
                        <p className="ui-tip-bot">利润：<span className="ui-tip-red">0.00 </span>元 批发价：<span className="ui-tip-red">29 </span>元</p>
                        <UploadTitle title={title.title4}>
                            <div className="ui-drop-menu-con">
                                <section className="ui-refresh-con">
                                    <a href="javascript:;" className="ui-refresh-btn" onClick={this.handleRefreshMenu}><i className="ui-up-icon ui-icon-refresh"></i>刷新宝贝分类</a>
                                    <p onClick={this.handleUpdateTip}><i className="ui-up-icon ui-icon-gray"></i>系统默认24小时更新缓存</p>
                                </section>
                                <DropMenu menus={menus}></DropMenu>
                            </div>
                        </UploadTitle>
                        <UploadTitle showTip={showTip.title5} title={title.title5}>
                            <Logistics showTipChange={this.showTipChange} handleUpdateTip={this.handleUpdateTip} order={title.title5.order} />
                            <section className="ui-bot-3"></section>
                        </UploadTitle>
                        <UploadTitle title={title.title6}>
                            <section className="ui-bot-3">
                                <ShelveTime />
                            </section>
                        </UploadTitle>
                        <p className="ui-tip-bot">您可以设定宝贝的正式开始销售的时间</p>
                        <UploadTitle title={title.title9}>
                            <ImgRemove handleUpdateTip={this.handleUpdateTip} />
                        </UploadTitle>
                        <div className="ui-content-pad">
                            <header className="ui-txt-title"><i className="ui-block-red"></i> 其他 </header>
                            <div className="ui-drop-menu-con">
                                <ul className="ui-other-check">
                                    <li>
                                        <label className="ui-input-label" htmlFor="111">
                                            <input id="111" data-num="111" className="ui-input-checkbox ui-checkbox-checked" defaultChecked="true" type="checkbox"/>
                                            去除货号
                                        </label>
                                        <p className="ui-right ui-col-gray">自动去除 属性、标题 中的货号</p>
                                    </li>
                                    <li>
                                        <label className="ui-input-label" htmlFor="112">
                                            <input id="112" data-num="112" className="ui-input-checkbox ui-checkbox-checked" type="checkbox"/>
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
                            <button onClick={this.handleComfirm}>一键上传</button>
                        </div>
                    </div>
                {/*</form>*/}
                {/*弹窗*/}
            </div>
        )
    }
}


export default UpLoad



