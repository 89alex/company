import React, {PropTypes} from 'react'
import AreaCity from '../components/Area/AreaCity.jsx'

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
    handleChange = (event) => {
        const e = event.target
        const id = e.id
        id == 'weight' ?
            ( this.setState({weight: {selected: false},volume: {selected: true}})):
            ( this.setState({weight: {selected: true},volume: {selected: false}}))

    }
    render(){
        //const {showTip} = this.props
        const {weight, volume} = this.state
        return (
            <div>
                <section className="ui-refresh-con">
                    <a href="#" className="ui-refresh-btn"><i className="ui-up-icon ui-icon-refresh"></i>刷新运费模板</a>
                    <p><i className="ui-up-icon ui-icon-gray"></i>系统默认24小时更新缓存</p>
                </section>
                <section className="ui-select-title">
                    <span>运费模板</span>
                    <label htmlFor="" className="ui-select-com ui-select-theOne">
                        <select>
                            <option>模板一</option>
                            <option>模板一</option>
                        </select>
                        <i className="ui-up-icon"></i>
                    </label>
                </section>
                <div className={`ui-in-content ${weight.selected ? 'ui-col-gray' : ''}`}>
                    <label htmlFor="weight">
                        <input className="ui-input-radio" onChange={this.handleChange} defaultChecked id="weight" name="send" type="radio"/>
                        按重量
                    </label>
                    <label htmlFor="">
                        <input className="ui-txt-in" type="number"/>（千克/kg）
                    </label>
                </div>
                <div className={`ui-in-content ${volume.selected ? 'ui-col-gray' : ''}`}>
                    <label htmlFor="volume">
                        <input className="ui-input-radio" onChange={this.handleChange} id="volume" name="send" type="radio"/>
                        按体积
                    </label>
                    <label htmlFor="">
                        <input className="ui-txt-in" type="number"/>（立方米/m3）
                    </label>
                </div>
                <section className="ui-select-title">
                    <span>宝贝地址</span>
                    <AreaCity/>
                </section>
            </div>
        )
    }
}
Logistics.PropTypes = {
    //title: React.PropTypes.string
}
export default Logistics