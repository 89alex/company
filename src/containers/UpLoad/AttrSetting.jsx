import React, {PropTypes} from 'react'
import ReactDom from  'react-dom'

const style = {
    slideHide: {
        height: 0,
        transition: 'all .5s ease'
    },
    slideShow: {
        transition: 'all .5s ease',
        height: ''
    }
}

class SelectDouble extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.items
    }
    handleHide = (event) => {
        let e = event.target
        e.parentNode.parentNode.parentNode.parentNode.remove()
    }
    handleSelectDouble = (event) => {
        let e = event.target
        let list = document.querySelectorAll('.ui-num-select a')
        e.getAttribute('class').trim() == 'selected' ?  e.setAttribute('class','') : e.setAttribute('class','selected')
    }
    handleClickDouble = (event) => {
        const {selectItems} = this.state
        let _selectItems = selectItems
        let selectIndex = []
        const list = document.querySelectorAll('.ui-num-select a')
        for(let i in list) list[i].getAttribute && list[i].getAttribute('class') == 'selected' ? selectIndex[i] = i : null
        _selectItems.map((selectItem, index) => {
            selectItem.selected = index == selectIndex[index] ? true : false
        })
        this.setState({selectItems: _selectItems})
        this.handleHide(event)
    }
    handleShowDouble = (item, event) => {
        let dialog = document.createElement('div')
        let items = ''
        item.selectItems.map((selectItem, index) => {
            let select = selectItem.selected ? 'selected' : ''
            items += '<a class='+select+' href="javascript:;">'+selectItem.item+'</a>'
        })
        let other = item.other ?  '<a href="javascript:;" class="ui-btn-orther">快速设置为其他</a>' : ''
        let html =  '<div class="ui-dialog-select">'+
                        '<section class="ui-dialog-con">'+
                            '<header>'+item.attr+'</header>'+
                            '<div class="ui-num-select">'+
                                items+
                            '</div>'+
                            '<section class="ui-btn-con">'+
                                '<button id="btn-cancel-double" class="ui-btn-cancel">取消</button>'+
                                '<button id="btn-confirm-double" class="ui-btn-confirm">确定</button>'+
                            '</section>'+
                        '</section>'+
                    '</div>'
        dialog.innerHTML = html
        document.querySelector('.ui-upload').appendChild(dialog)
        document.querySelector('#btn-cancel-double').addEventListener('click',this.handleHide)
        document.querySelector('#btn-confirm-double').addEventListener('click',this.handleClickDouble)
        let list = document.querySelectorAll('.ui-num-select a')
        for(let i in list) list[i].addEventListener && list[i].addEventListener('click', this.handleSelectDouble)
    }
    render () {
        const items = this.state
        let strings = ''
        items.selectItems.map((selectItem, index) => {
            selectItem.selected && (strings += selectItem.item+'，')
        })
        strings =strings.substring(0,strings.length-1)
        return (
            <div className="ui-setting-con">
                {this.props.imgIcon ? <i className="line" ></i> : ''}
                <span className="ui-con-left ui-line-one">{this.props.imgIcon ? '' : <i className="ui-tip-star"></i>}{items.attr}</span>
                <p className="ui-con-right ui-line-one" onClick={items.selectItems.length <= 1 ? false : this.handleShowDouble.bind(this, items)}>
                    {strings}
                    {
						items.selectItems.length <= 1 ? '' : <i className="ui-up-icon ui-turn-right ui-icon-right"></i>
					}
                </p>
                {
                    items.menuItems && 
                    <ul className="ui-menu-second">
                    {
                        items.menuItems.map((menu, index) => {
                            return (
                                <li key={index}>
                                <SelectDouble imgIcon={true} items={menu} />
                                </li>   
                            )
                        })
                    }
                    </ul>
                }
            </div>
        )
    }
}
class SelectOne extends React.Component {
    constructor(props){
    	super(props)
		this.state = this.props.items
    }
    handleSelectOther = (event) => {
        const {selectItems} = this.state
        let _selectItems = selectItems
        _selectItems.map((selectItem, index) => {
            selectItem.selected = selectItem.item.trim() == '其他' ? true : false
        })
        this.setState({necessary: _selectItems})
        event.target.parentNode.parentNode.remove()
    }
	handleHide = (event) => {
        let e = event.target
        e.parentNode.parentNode.parentNode.parentNode.remove()
    }
    handleSelectOne = () => {
        let list = document.querySelectorAll('.ui-dialog-list li')
        for(let i in list) list[i].setAttribute && list[i].setAttribute('class','')
        event.target.setAttribute('class','list-selected')
    }
    handleClickOne = (event) => {
        const {selectItems} = this.state
		let _selectItems = selectItems
        let selectIndex = null
        const list = document.querySelectorAll('.ui-dialog-list li')
        for(let i in list) list[i].getAttribute && list[i].getAttribute('class') == 'list-selected' ? selectIndex = i : null
        _selectItems.map((selectItem, index) => {
            selectItem.selected = selectIndex && index == selectIndex ? true : false
        })
        this.setState({selectItems: _selectItems})
        this.handleHide(event)
    }
    handleShowOne = (item, event) => {
        let dialog = document.createElement('div')
        let items = ''
        item.selectItems.map((selectItem, index) => {
            let select = selectItem.selected ? 'list-selected' : ''
            items += '<li class='+select+'>'+selectItem.item+'<i class="ui-up-icon ui-icon-hook ui-icon-right"></i></li>'
        })
        let other = item.other ?  '<a href="javascript:;" class="ui-btn-orther">快速设置为其他</a>' : ''
        let html =  '<div class="ui-dialog-select">'+
                        '<section class="ui-dialog-con">'+
                            '<header><i class="ui-tip-star">*</i>'+item.attr+'</header>'+
                            other+
                            '<ul class="ui-dialog-list">'+
                            items+
                            '</ul>'+
                            '<section class="ui-btn-con">'+
                                '<button id="btn-cancel-one" class="ui-btn-cancel">取消</button>'+
                                '<button id="btn-confirm-one" class="ui-btn-confirm">确定</button>'+
                            '</section>'+
                        '</section>'+
                    '</div>'
        dialog.innerHTML = html
        document.querySelector('.ui-upload').appendChild(dialog)
        document.querySelector('#btn-cancel-one').addEventListener('click',this.handleHide)
        document.querySelector('#btn-confirm-one').addEventListener('click',this.handleClickOne)
        document.querySelector('.ui-dialog-con .ui-btn-orther') &&　document.querySelector('.ui-dialog-con .ui-btn-orther').addEventListener('click',this.handleSelectOther)
        let list = document.querySelectorAll('.ui-dialog-list li')
        for(let i in list) list[i].addEventListener && list[i].addEventListener('click', this.handleSelectOne)
    }
    
    render(){
          const items = this.state
          return (
                <div className="ui-setting-con">
                    <span className="ui-con-left ui-line-one"><i className="ui-tip-star">*</i>{items.attr}</span>
                    <p className="ui-con-right ui-line-one" onClick={this.handleShowOne.bind(this, items)}>
                    {
                        items.selectItems.map((selectItem, index) => {
                        	return selectItem.selected ? selectItem.item : ''
                        })
                    }
                    	<i className="ui-up-icon ui-turn-right ui-icon-right"></i>
                    </p>
                </div>
            )
        }
}
class AttrSetting extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           necessary: [
               {attr: "发布类型", selectItems:[{item: '一口价1', selected: false},{item: '一口价2', selected: true},{item: '一口价3', selected: false}], static: '一口价'},
               {attr: "新旧程度", selectItems:[{item: '一口价1', selected: true},{item: '一口价2', selected: false},{item: '一口价3', selected: false}], static: '全新'},
               {attr: "所属品牌", selectItems:[{item: '一口价1', selected: false},{item: '一口价2', selected: true},{item: '一口价3', selected: false},{item: '其他', selected: false}], static:'其他', other: true},
               {attr: "年份季节", selectItems:[{item: '一口价1', selected: true},{item: '一口价2', selected: false},{item: '一口价3', selected: false}], static: '2016年冬季'}
           ],
           Optional:[
               {attr: "货号", selectItems:[{item: '6021', selected: true}], static: '6021'},
               {attr: "服装版型", selectItems:[{item: '蝴蝶结', selected: true},{item: '蝴蝶结', selected: false},{item: '荷叶边', selected: false},{item: '流光', selected: false}], static: '宽松', menuItems:[
                   {attr: "服装", selectItems:[{item: '蝴蝶结', selected: true},{item: '蝴蝶结', selected: false},{item: '荷叶边', selected: false},{item: '流光', selected: false}], static: '宽松', menuItems:[
                       {attr: "服装", selectItems:[{item: '蝴蝶结', selected: true},{item: '蝴蝶结', selected: false},{item: '荷叶边', selected: false},{item: '流光', selected: false}], static: '宽松' },
                       {attr: "服装", selectItems:[{item: '蝴蝶结', selected: true},{item: '蝴蝶结', selected: false},{item: '荷叶边', selected: false},{item: '流光', selected: false}], static: '宽松' }
                   ]}
               ]}
           ],
           optionShow: false
        }
    }
    handleTaggle = () => {
        this.setState({optionShow: !this.state.optionShow})
    }
    componentDidMount(){
        const attrHide = ReactDom.findDOMNode(this.refs.attrHide)
        const con = attrHide.querySelectorAll('.ui-setting-con')
        setTimeout(function(){
            style.slideShow.height = con.length*con[0].offsetHeight
        },100)
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
                        return <SelectOne key={index} items={nece} />
                    })
                }
                {/*可选属性 */}
                <div className="ui-setting-con">
                    <span className="ui-con-left ui-line-one"><i className="ui-tip-star"></i>可选属性</span>
                    <p className="ui-con-right ui-line-one" onClick={this.handleTaggle}>
                        {
                            optionShow ? <i className="ui-up-icon ui-icon-right ui-icon-hide"></i> : 
                                         <i className="ui-up-icon ui-icon-right ui-icon-show"></i>
                        }
                    </p>
                </div>
                <section className="ui-option-con" ref="attrHide" style={{height: slide.height , transition: slide.transition}}>
                    {
                        Optional.map((option ,index) => {
                             return <SelectDouble imgIcon={false} key={index} items={option} />
                        })
                    }
                </section>
            </section>
        )
    }
}
AttrSetting.PropTypes = {
    //title: React.PropTypes.string
}
export default AttrSetting

// {/* 弹窗*/}
//                 {/*<div className="ui-dialog-select">
//                     <section className="ui-dialog-con">
//                         {/*<header><i className="ui-tip-star">*</i>新旧程度</header>*/}
//                         {/*<a href="javascript:;" className="ui-btn-orther">快速设置为其他</a>*/}
//                         {/*<ul className="ui-dialog-list">
//                             <li>全新<i className="ui-up-icon ui-icon-hook ui-icon-right"></i></li>
//                             <li>全新<i className="ui-up-icon ui-icon-hook ui-icon-right"></i></li>
//                             <li>全新<i className="ui-up-icon ui-icon-hook ui-icon-right"></i></li>
//                             <li>全新<i className="ui-up-icon ui-icon-hook ui-icon-right"></i></li>
//                             <li className="list-selected">二手<i className="ui-up-icon ui-icon-hook ui-icon-right"></i></li>
//                         </ul>
//                         <header>流行元素</header>
//                         <div className="ui-num-select">
//                             <a href="javascript:;">蝴蝶结</a>
//                             <a href="javascript:;">荷叶边</a>
//                             <a href="javascript:;">流苏</a>
//                             <a href="javascript:;">蝴蝶结</a>
//                             <a href="javascript:;">荷叶边</a>
//                             <a href="javascript:;">手工打磨</a>
//                             <a className="selected" href="javascript:;">蝴蝶结</a>
//                             <a href="javascript:;">荷叶边</a>
//                             <a href="javascript:;">手工打磨</a>
//                         </div>
//                         <section className="ui-btn-con">
//                             <button className="ui-btn-cancel">取消</button>
//                             <button className="ui-btn-confirm">确定</button>
//                         </section>
//                     </section>
//                 </div>*/}