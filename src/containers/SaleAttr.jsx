import React, {PropTypes} from 'react'
import ReactDom from 'react-dom'

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
class ListAttr extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.item
    }
    handleTaggle = () => {
        this.setState({show: !this.state.show})
    }
    componentDidMount(){
        const attrHide = ReactDom.findDOMNode(this.refs.attrHide)
        const con = attrHide.querySelector('.ui-attr-list')
        setTimeout(function(){
            style.slideShow.height = con.offsetHeight
        },100)
    }
    render () {
        const item = this.state
         const slide = item.show ? style.slideShow : style.slideHide
        return (
            <section>
                <div className="ui-setting-con">
                    <span className="ui-con-left ui-line-one"><i className="ui-tip-star">{item.optional ? '*' : ''}</i>
                        {item.attr}
                    </span>
                    <p className="ui-con-right ui-line-one" onClick={this.handleTaggle}>
                    {item.static}
                    {
                        item.show ? <i className="ui-up-icon ui-icon-right ui-icon-hide"></i> : 
                                     <i className="ui-up-icon ui-icon-right ui-icon-show"></i>
                    }
                    </p>
                </div>
                <div className="ui-attr-table" ref="attrHide" style={{height: slide.height , transition: slide.transition}}>
                    <table className="ui-attr-list">
                    <tbody>
                        <tr>
                            <td width="30%">颜色</td>
                            <td width="30%">尺寸</td>
                            <td width="20%">价格</td>
                            <td width="20%">库存</td>
                        </tr>
                        <tr>
                            <td><p className="ui-line-two">白色</p></td>
                            <td>S</td>
                            <td>2000</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td><p className="ui-line-two">自定义自定义自定定定自定义颜额</p></td>
                            <td>S</td>
                            <td>2000</td>
                            <td>200</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </section>
        )
    }
}
class SaleAttr extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {attr: '統一价格', static: '200', optional: true},
                {attr: '統一库存', static: '2000', optional: true},
                {attr: '統一编码', static: '200', optional: false},
            ],
            lists: [
                {attr: '宝贝规格', static: '6', optional: true, show: false },
                {attr: '宝贝规格', static: '6', optional: true, show: false }
            ]
        }
    }
    render(){
        //const {showTip} = this.props
        const {items, lists} = this.state
        return (
            <div className="ui-SaleAttr ui-bot-3">
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className="ui-setting-con">
                                <span className="ui-con-left ui-line-one"><i className="ui-tip-star">{item.optional ? '*' : ''}</i>
                                {item.attr}
                                </span>
                                <p className="ui-con-right ui-line-one">
                                <input className="ui-text-input" defaultValue={item.static} type="text"/>
                                </p>
                            </div>
                        )
                    })
                }
                {
                    lists.map((list, index) => {
                        return (
                            <ListAttr key={index} item={list} />
                        )
                    })
                }
            </div>
        )
    }
}
SaleAttr.PropTypes = {
    //title: React.PropTypes.string
}
export default SaleAttr