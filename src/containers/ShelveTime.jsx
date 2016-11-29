import React, {PropTypes} from 'react'

class ShelveTime extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            goShop: {
                selected: false
            },
            house: {
                selected: true
            },
            times: {
                selected: true
            }
        }
    }
    handleChange = (event) => {
        const e = event.target
        e.id == 'set' ?
            this.setState({times: {selected: false},goShop: {selected: true},house: {selected: true}}) :
            e.id == 'goShop' ?
                this.setState({times: {selected: true},goShop: {selected: false},house: {selected: true}}) :
                e.id == 'house' ?
                    this.setState({times: {selected: true},goShop: {selected: true},house: {selected: false}}) : false
    }
    render(){
        //const {showTip} = this.props
        const {times, goShop, house} = this.state
        return (
            <div className="ui-ShelveTime">
                <div className={`ui-in-content ${goShop.selected ? 'ui-col-gray' : 'ui-radio-checked'}`}>
                    <label htmlFor="goShop">
                        <input className="ui-input-radio" onChange={this.handleChange} defaultChecked id="goShop" name="shop" type="radio"/>
                        立即上架
                    </label>
                </div>
                <div className={`ui-in-content ${house.selected ? 'ui-col-gray' : 'ui-radio-checked'}`}>
                    <label htmlFor="house">
                        <input className="ui-input-radio" onChange={this.handleChange} id="house" name="shop" type="radio"/>
                        放入仓库
                    </label>
                </div>
                <div className={`ui-in-content ${times.selected ? 'ui-col-gray' : 'ui-radio-checked'}`}>
                    <label htmlFor="set">
                        <input className="ui-input-radio" onChange={this.handleChange} id="set" name="shop" type="radio"/>
                        设定
                    </label>
                    <section className="ui-se-times">
                        <label htmlFor="" className="ui-select-com ui-select-theOne">
                            <select>
                                <option>2016年7月7日 11:30</option>
                                <option>2016年7月7日 12:30</option>
                            </select>
                            <i className="ui-up-icon"></i>
                        </label>
                    </section>
                </div>
            </div>
        )
    }
}
ShelveTime.PropTypes = {
    //title: React.PropTypes.string
}
export default ShelveTime