import React, {PropTypes} from 'react'
import ReactDom from  'react-dom'

const style = {
    slideHide: {
        height: 0,
        transition: 'all 1s ease'
    },
    slideShow: {
        transition: 'all 1s ease',
        height: ''
    }
}
class Logistics extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           necessary: [
               {attr: "发布类型", selectItems:["一口价", "一口价", "一口价", "一口价"], static: '一口价'},
               {attr: "新旧程度", selectItems:["全新", "二手", "二手", "二手"], static: '全新'},
               {attr: "所属品牌", selectItems:["全新", "二手", "二手", "二手"], static:'其他'},
               {attr: "年份季节", selectItems:["全新", "二手", "二手", "二手"], static: '2016年冬季'}
           ],
           Optional:[
               {attr: "货号", selectItems:[], static: '6021'},
                {attr: "服装版型", selectItems:["全新", "二手", "二手", "二手"], static: '宽松', menuItems:[
                    {attr: "年份季节", selectItems:["全新", "二手", "二手", "二手"], static: '2016年冬季',menuItems:[
                        {attr: "年份季节", selectItems:["全新", "二手", "二手", "二手"], static: '2016年冬季'}
                    ]}
                ]}
           ],
           dialog:{

           },
           optionShow: false
        }
    }
    handleTaggle = () => {
        this.setState({optionShow: !this.state.optionShow})
    }
    handleChange = (event) => {
        
    }
    componentDidMount(){
        const attrHide = ReactDom.findDOMNode(this.refs.attrHide)
        const con = attrHide.querySelectorAll('.ui-setAttr-con')
        style.slideShow.height = con.length*document.querySelector('.ui-setAttr-con').style.height
        console.log(document.querySelector('.ui-setAttr-con').style.height)
    }
    render(){
        //const {showTip} = this.props
        //const slide = `height: ${style.slideHide.height};transition: ${style.slideHide.transition}`
        const {necessary, Optional, optionShow} = this.state
        const slide = optionShow ? style.slideShow : style.slideHide
        return (
            <section className="ui-up-setAttr">
                {/*必须填写 */}
                {
                    necessary.map((nece, index) => {
                        return (
                            <div key={index} className="ui-setAttr-con">
                                <span className="ui-con-left ui-line-one"><i className="ui-tip-star">*</i>{nece.attr}</span>
                                <p className="ui-con-right ui-line-one">
                                    {nece.static}
                                    <i className="ui-up-icon ui-turn-right ui-icon-right"></i>
                                </p>
                            </div>
                        )
                    })
                }
                {/*可选属性 */}
                <div className="ui-setAttr-con">
                    <span className="ui-con-left ui-line-one"><i className="ui-tip-star"></i>可选属性</span>
                    <p className="ui-con-right ui-line-one" onClick={this.handleTaggle}>
                        <i className="ui-up-icon ui-icon-right ui-icon-show"></i>
                        {/*
                            <i className="ui-up-icon ui-icon-right ui-icon-hide"></i>
                        */}
                    </p>
                </div>
                <section ref="attrHide" style={{height: slide.height , transition: slide.transition}}>
                    <div className="ui-setAttr-con">
                        <span className="ui-con-left ui-line-one"><i className="ui-tip-star"></i>货号</span>
                        <p className="ui-con-right ui-line-one">
                            6021
                        </p>
                    </div>
                    <div className="ui-setAttr-con">
                        <span className="ui-con-left ui-line-one"><i className="ui-tip-star"></i>服装版型</span>
                        <p className="ui-con-right ui-line-one">
                            宽松
                            <i className="ui-up-icon ui-turn-right ui-icon-right"></i>
                        </p>
                        <ul className="ui-menu-second">
                            <li>
                                <div className="ui-setAttr-con">
                                    <img className="line" src="./static/styles/i/dropDown/down-line.png" alt="" />
                                    <span className="ui-con-left ui-line-one">衣长</span>
                                    <p className="ui-con-right ui-line-one">
                                        中长款
                                        <i className="ui-up-icon ui-turn-right ui-icon-right"></i>
                                    </p>
                                    <ul className="ui-menu-second">
                                        <li>
                                            <div className="ui-setAttr-con">
                                                <img className="line" src="./static/styles/i/dropDown/down-line.png" alt="" />
                                                <span className="ui-con-left ui-line-one">衣长</span>
                                                <p className="ui-con-right ui-line-one">
                                                    中长款
                                                    <i className="ui-up-icon ui-turn-right ui-icon-right"></i>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* 弹窗*/}
                <div className="ui-dialog-select">
                    <section className="ui-dialog-con">
                        {/*<header><i className="ui-tip-star">*</i>新旧程度</header>*/}
                        {/*<a href="javascript:;" className="ui-btn-orther">快速设置为其他</a>*/}
                        {/*<ul className="ui-dialog-list">
                            <li>全新<i className="ui-up-icon ui-icon-hook ui-icon-right"></i></li>
                            <li>全新<i className="ui-up-icon ui-icon-hook ui-icon-right"></i></li>
                            <li>全新<i className="ui-up-icon ui-icon-hook ui-icon-right"></i></li>
                            <li>全新<i className="ui-up-icon ui-icon-hook ui-icon-right"></i></li>
                            <li className="list-selected">二手<i className="ui-up-icon ui-icon-hook ui-icon-right"></i></li>
                        </ul>*/}
                        <header>流行元素</header>
                        <div className="ui-num-select">
                            <a href="javascript:;">蝴蝶结</a>
                            <a href="javascript:;">荷叶边</a>
                            <a href="javascript:;">流苏</a>
                            <a href="javascript:;">蝴蝶结</a>
                            <a href="javascript:;">荷叶边</a>
                            <a href="javascript:;">手工打磨</a>
                            <a className="selected" href="javascript:;">蝴蝶结</a>
                            <a href="javascript:;">荷叶边</a>
                            <a href="javascript:;">手工打磨</a>
                        </div>
                        <section className="ui-btn-con">
                            <button className="ui-btn-cancel">取消</button>
                            <button className="ui-btn-confirm">确定</button>
                        </section>
                    </section>
                </div>
            </section>
        )
    }
}
Logistics.PropTypes = {
    //title: React.PropTypes.string
}
export default Logistics