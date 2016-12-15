
import React from 'react'

//component
import AreaCity from '../components/Area/AreaCity'
import DiaLog from '../static/plugin/dialog/dialog'

// Link
import {Link } from 'react-router'

//数据模拟

class UpResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: "SB940"
            }
        }
    }
    handleClick = (e) => {
        this.setState({
            current: e.key
        })
        DiaLog({
            type: 'tipTitle',
            title: '提示',
            btnfont:'我知道了',
            con: '例如：批发价为30元|1.计划按批发价盈利 50元，价格公式会这样计算：30*100%+50=80元|2.计划按批发价的 200% ，价格公式会这样计算：30*200%+0=60元',
            cancelFun: function () {
                return true
            }
        })
    }
    componentWillMount() {
        //this.getData()
    }
    componentDidMount() {
        
    }
    render() {
        //console.log(data.images)
        const {user} = this.state
        return (
            <div className="ui-warp">
                <header className="ui-header">
                    <div className="ui-header-container">
                        <Link to="/" href="#" className="ui-header-back ui-color-red"><i className="ui-icon-brackets"></i></Link>
                        <a href="#" className="ui-color-red ui-btn-cancel">完成</a>
                        <span className="ui-header-title">发布模板</span>
                    </div>
                </header>
                <div className="ui-upload">
                    <div className="ui-user-login">
                        <section className="ui-left ui-logo">
                            <img width="100%" src="static/styles/i/logo.png" alt=""/>
                        </section>
                        <section className="ui-right">
                            <span className="ui-username">{user && user.username}</span>
                            {
                                user ? 
                                    <button onClick={this.handleClick.bind(this)} className="ui-bg-red ui-btn-out">退出</button> : ''
                            }
                        </section>
                    </div>
                </div>
                {/*上传成功提示*/}
                <div className="ui-up-result-bg">
                    <div className="ui-up-result">
                        {/*<header><i className="ui-re-icon ui-succ-icon"></i><h2>上传失败</h2></header>*/}
                        <header><i className="ui-re-icon ui-fail-icon"></i><h2>上传成功</h2></header>
                        {/*<section className="ui-re-fail">
                            <p>失败原因</p>
                            <p>获取不到该宝贝的数据，请检查此宝贝是否存在</p>
                        </section>*/}
                        <ul className="ui-re-succ">
                            <li><a href="">前往->17首页[一起做网店17zwd.com]</a></li>
                            <li><a href="">前往->17首页[一起做网店17zwd.com]</a></li>
                            <li><a href="">前往->17首页[一起做网店17zwd.com]</a></li>
                            <li><a href="">前往->17首师大附近艾斯蒂法is好地分页[一起做网店17zwd.com]</a></li>
                            <li><a href="">前往->17首页[一起做网店17zwd.com]</a></li>
                        </ul>
                        <section className="ui-btn-con">
                            <a href="" className="ui-btn-close">关闭</a>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}


export default UpResult



