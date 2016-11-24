import React, {PropTypes} from 'react'

class ImgRemove extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        //const {text, tip} = this.props.title
        //const {showTip} = this.props
        return (
            <section className="ui-bot-3">
                <section className="ui-refresh-con">
                    <a href="#" className="ui-refresh-btn"><i className="ui-up-icon ui-icon-refresh"></i>刷新图片目录</a>
                    <p><i className="ui-up-icon ui-icon-gray"></i>系统默认24小时更新缓存</p>
                </section>
                <section className="ui-select-title ui-select-theOne">
                    <span>图片目录</span>
                    <label htmlFor="" className="ui-select-com">
                        <select>
                            <option>一起做网店（勿删）_商品详情</option>
                            <option>模板一</option>
                        </select>
                        <i className="ui-up-icon"></i>
                    </label>
                </section>
                <section className="ui-remove-con">
                    <header className="ui-txt-title">
                        <button className="ui-color-red">一键移除</button>
                        <button className="ui-color-red">一键重试</button>
                        <p className="ui-tip-red ui-tip-warn"><i className="ui-up-icon ui-icon-warn"></i>部分图片失败</p>
                    </header>
                    <ul className="ui-link-list">
                        <li><p className="ui-txt-p">www.baidu.com/1234567891011155565456</p><i className="ui-up-icon"></i><a className="ui-color-red" href="javascript:;">移除</a></li>
                        <li><p className="ui-txt-p">www.baidu.com/1234567891011155565456</p><a className="ui-color-red" href="javascript:;">移除</a></li>
                        <li><p className="ui-txt-p">www.baidu.com/1234567891011155565456</p><a className="ui-color-red" href="javascript:;">移除</a></li>
                    </ul>
                </section>
            </section>
        )
    }
}
ImgRemove.PropTypes = {
    //title: React.PropTypes.string
}
export default ImgRemove