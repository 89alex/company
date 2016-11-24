import React, {PropTypes} from 'react'
import ReactDom, {render} from 'react-dom'
import './dialog.scss'

class DiaLog extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            fade: 'fadeInUp',
            displays: 'block'
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        const dialog = ReactDom.findDOMNode(this.refs.uiDialog)
        dialog.addEventListener('touchmove',function (e) {
            var e = e || window.event
            e.stopPropagation();
        })
    }
    CloseTip(){
        this.setState({displays: 'none'})
        //ReactDom.findDOMNode(this.refs.diaTitle).style.display = 'none'
    }
    CloseTitle(){
        this.setState({fade: 'fadeOutDownBig'},() => {
            setTimeout(() => {
                this.setState({displays: 'none'})
            },300)
        })
    }
    render(){
        const {value} = this.props
        const com = value.type == 'title' ?
            (
                <div ref="diaTitle" className={`ui-dialog-title ui-dialog-con animated ${this.state.fade}`}>
                    <header>
                        <i className="ui-up-icon ui-icon-warn"></i>
                        操作失败
                    </header>
                    <p className="ui-txt-tip">淘宝接口请求不稳定，请点击重试！</p>
                    <section className="ui-btn-con">
                        <button onClick={this.CloseTip.bind(this)} className="ui-btn-one">点击重试</button>
                    </section>
                </div>
            )
            :
            (
                <div className={`ui-dialog-tip ui-dialog-con animated ${this.state.fade}`}>
                     <section>
                          <p className="ui-txt-tip">系统默认有缓存，如果当前页面的商品数据与实际不符，请点击按钮进行刷新！</p>
                     </section>
                     <section className="ui-btn-con">
                          <a onClick={this.CloseTitle.bind(this)} href="javascript:;" className="ui-btn-one ui-color-red">关闭</a>
                     </section>
                </div>
            )

        return(
            <div ref="uiDialog" className="ui-dialog" style={{display: this.state.displays}}>
                {com}
            </div>
        )
    }
}

DiaLog.PropTypes = {

}

/*function dialog() {
    var a = DiaLog()
    console.log(a)
    /!*const dialogs = document.createElement(DiaLog)
    document.body.appendChild(dialogs)*!/
}*/
export default DiaLog