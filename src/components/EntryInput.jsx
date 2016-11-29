import React from 'react'
import ReactDom from 'react-dom'

class EntryInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleChange = (event) => {
        const {showTipChange, order} = this.props
        const e = event.target
        const nums = ReactDom.findDOMNode(this.refs.num),
            sales = ReactDom.findDOMNode(this.refs.sale);
        nums.value.trim().length == ""  || sales.value.trim().length == "" ?
            showTipChange(order, true) :
            showTipChange(order, false)
        //console.log(nums, sales)
    }
    render(){
        //const {placeholder} = this.props
        return (
            <section className="ui-bot-3">
                <div className="ui-in-content">
                    数量
                    <label htmlFor="">
                        <input ref="num" id="text-stockNum" defaultValue="" onChange={this.handleChange} className="ui-txt-in" type="number"/>件
                    </label>
                    <span className="ui-in-tip">每组颜色尺寸的数量</span>
                </div>
                <div className="ui-in-content">
                    价格
                    <label htmlFor="">
                        <input ref="sale" id="text-goodsPrice" defaultValue="" onChange={this.handleChange} className="ui-txt-in" type="number"/>元
                    </label>
                    <span className="ui-in-tip">每组颜色尺寸的价格</span>
                </div>
            </section>
        )
    }
}

/*EntryInput.PropTypes = {
    placeholder: React.PropTypes.string
}*/

export default EntryInput