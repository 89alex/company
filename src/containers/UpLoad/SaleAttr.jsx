import React, {PropTypes} from 'react'
import ReactDom from 'react-dom'

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
class ListAttr extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props
    }
    handleTaggle = () => {
        const {item} = this.state
        let _item = item
        _item.show = !item.show
        this.setState({item:_item})
    }
    componentDidMount(){
        const attrHide = ReactDom.findDOMNode(this.refs.attrHide)
        const con = attrHide.querySelector('.ui-attr-list')
        setTimeout(function(){
            style.slideShow.height = con.offsetHeight
        },100)
    }
    render () {
        const {item, lists} = this.state
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
                            <td className="ui-table-hide">编码</td>
                        </tr>
                        {
                            lists.map((list, index) => {
                                return (
                                    <tr key={index}>
                                        <td><p className="ui-line-two">{list.color}</p></td>
                                        <td>{list.size}</td>
                                        <td>{list.price}</td>
                                        <td>{list.store}</td>
                                        <td className="ui-table-hide">{list.number}</td>
                                    </tr>
                                )
                            })
                        }
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
                {attr: '統一价格', static: '200', relate: 'price', optional: true},
                {attr: '統一库存', static: '2000', relate: 'store', optional: true},
                {attr: '統一编码', static: '200', relate: 'number', optional: false},
            ],
            shows: [
                {attr: '宝贝规格', static: '6', optional: true, show: false }
            ],
            lists: [
                {color: '白色', size: 'S', price: 2000, store: 200, number: 200},
                {color: '白色, 白色, 白色, 白色, 白色, 白色', size: 'S', price: 2000, store: 200, number: 200},
                {color: '白色', size: 'S', price: 2000, store: 200, number: 200},
                {color: '白色', size: 'S', price: 2000, store: 200, number: 200},
                {color: '白色', size: 'S', price: 2000, store: 200, number: 200}
            ]
        }
    }
    handleChange = (arg, event) => {
        var e = event || window.event,
            value = e.target.value,
            {lists} = this.state,
            _lists = lists
        _lists.map((list, index) => {
            list[arg] = value
        })
        this.setState({lists: _lists})
    }
    render(){
        //const {showTip} = this.props
        const {items, shows, lists} = this.state
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
                                <input onChange={this.handleChange.bind(this, item.relate)} className="ui-text-input" defaultValue={item.static} type="number"/>
                                </p>
                            </div>
                        )
                    })
                }
                {
                    shows.map((show, index) => {
                        return (
                            <ListAttr key={index} lists={lists} item={show} />
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