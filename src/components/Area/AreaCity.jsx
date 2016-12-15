import React, {PropTypes} from 'react'
import ReactDom from 'react-dom'
import cities from './cityData.js'

class AreaCity extends React.Component {
    constructor(props){
        super(props)
    }
    set_city = (event) => {
        const {handleChange} = this.props
        var pv, cv, province, city;
        var i, ii;
        city = ReactDom.findDOMNode(this.refs.city)
        province = event.target
        pv=province.value;
        //console.log(pv)
        cv=city.value;
        city.length=1;
        if(pv=='0') return;
        if(typeof(cities[pv])=='undefined') return;
        for(i=0; i<cities[pv].length; i++) {
            ii = i+1;
            city.options[ii] = new Option();
            city.options[ii].text = cities[pv][i];
            city.options[ii].value = cities[pv][i];
        }
        handleChange && handleChange()
    }
    render(){
        return (
            <div style={{"display": "inline-block"}}>
                <label htmlFor="" className="ui-select-com">
                    <select name="sheng" id="to_cn" onChange={this.set_city} className="login_text_input">
                        <option value="0">请选择</option>

                        <option value="台湾">台湾</option>

                        <option value="马来西亚">马来西亚</option>

                        <option value="北京">北京</option>

                        <option value="上海">上海</option>

                        <option value="天津">天津</option>

                        <option value="重庆">重庆</option>

                        <option value="河北省">河北省</option>

                        <option value="山西省">山西省</option>

                        <option value="辽宁省">辽宁省</option>

                        <option value="吉林省">吉林省</option>

                        <option value="黑龙江省">黑龙江省</option>

                        <option value="江苏省">江苏省</option>

                        <option value="浙江省">浙江省</option>

                        <option value="安徽省">安徽省</option>

                        <option value="福建省">福建省</option>

                        <option value="江西省">江西省</option>

                        <option value="山东省">山东省</option>

                        <option value="河南省">河南省</option>

                        <option value="湖北省">湖北省</option>

                        <option value="湖南省">湖南省</option>

                        <option value="广东省">广东省</option>

                        <option value="海南省">海南省</option>

                        <option value="四川省">四川省</option>

                        <option value="贵州省">贵州省</option>

                        <option value="云南省">云南省</option>

                        <option value="陕西省">陕西省</option>

                        <option value="甘肃省">甘肃省</option>

                        <option value="青海省">青海省</option>

                        <option value="内蒙古">内蒙古</option>

                        <option value="广西">广西</option>

                        <option value="西藏">西藏</option>

                        <option value="宁夏">宁夏</option>

                        <option value="新疆">新疆</option>

                        <option value="香港">香港</option>

                        <option value="澳门">澳门</option>
                    </select>
                    <i className="ui-up-icon"></i>
                </label>
                <label htmlFor="" className="ui-select-com">
                    <select ref="city" id="city" className="login_text_input" name="shi">
                        <option value="0">请选择</option>
                    </select>
                    <i className="ui-up-icon"></i>
                </label>
            </div>
        )
    }
}
AreaCity.PropTypes = {
    //title: React.PropTypes.string
}
export default AreaCity