import React, {PropTypes} from 'react'
import AreaCity from '../../components/Area/AreaCity.jsx'



class Logistics extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            weight:{
                selected: false
            },
            volume:{
                selected: true
            }
        }
    }
    handleChangeTip = (event) => {
        const {showTipChange, order, handleUpdateTip} = this.props
        const values = document.querySelector('.ui-Logistics .ui-radio-checked input[type=number]').value,
            addressProv = document.querySelector('#to_cn').value;
        values.trim() == ""  || addressProv.trim() == "0" ?
            showTipChange(order, true) :
            showTipChange(order, false)
        //console.log(nums, sales)
    }
    handleChange = (event) => {
        const e = event.target
        const id = e.id
        id == 'weight' ?
            ( this.setState({weight: {selected: false},volume: {selected: true}})):
            ( this.setState({weight: {selected: true},volume: {selected: false}}))
        setTimeout(this.handleChangeTip,100)
    }
    handleReload = () => {
        const {showTipChange, order} = this.props
        this.setState({weight: {selected: false},volume: {selected: true}})
        showTipChange(order, false)
        document.querySelector('.ui-Logistics #weight').checked = true
        var txts = document.querySelectorAll('.ui-Logistics .ui-txt-in'),
            selects = document.querySelectorAll('.ui-Logistics .login_text_input')
        for(let i in txts) txts[i].value ? txts[i].value = '' : false
        for(let i in selects) selects[i].value ? selects[i].value = 0 : false
    }
    render(){
        //const {showTip} = this.props
        const {weight, volume} = this.state
        const {handleUpdateTip} = this.props
        return (
            <div className="ui-Logistics">
                <section className="ui-refresh-con">
                    <a href="javascript:;" className="ui-refresh-btn" onClick={this.handleReload}><i className="ui-up-icon ui-icon-refresh"></i>刷新运费模板</a>
                    <p onClick={handleUpdateTip}><i className="ui-up-icon ui-icon-gray"></i>系统默认24小时更新缓存</p>
                </section>
                <section className="ui-select-title">
                    <span>运费模板</span>
                    <label htmlFor="" className="ui-select-com ui-select-theOne">
                        <select id="Select-LogisticsTemp">
                            <option>模板一</option>
                            <option>模板一</option>
                        </select>
                        <i className="ui-up-icon"></i>
                    </label>
                </section>
                <div className={`ui-in-content ${weight.selected ? 'ui-col-gray' : 'ui-radio-checked'}`}>
                    <label htmlFor="weight">
                        <input className="ui-input-radio" onChange={this.handleChange} defaultChecked id="weight" name="send" type="radio"/>
                        按重量
                    </label>
                    <label htmlFor="">
                        <input onChange={this.handleChangeTip} id="text-goodsWeight" className="ui-txt-in" type="number"/>（千克/kg）
                    </label>
                </div>
                <div className={`ui-in-content ${volume.selected ? 'ui-col-gray' : 'ui-radio-checked'}`}>
                    <label htmlFor="volume">
                        <input className="ui-input-radio" onChange={this.handleChange} id="volume" name="send" type="radio"/>
                        按体积
                    </label>
                    <label htmlFor="">
                        <input onChange={this.handleChangeTip} id="text-goodsVolume" className="ui-txt-in" type="number"/>（立方米/m3）
                    </label>
                </div>
                <section id="babyAddress" className="ui-select-title">
                    <span>宝贝地址</span>
                    <AreaCity handleChange={this.handleChangeTip} />
                </section>
            </div>
        )
    }
}
Logistics.PropTypes = {
    //handleUpdateTip: React.PropTypes.object
}
export default Logistics