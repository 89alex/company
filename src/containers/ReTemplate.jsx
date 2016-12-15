
import React from 'react'

//component
import AreaCity from '../components/Area/AreaCity'

// Link
import {Link } from 'react-router'

//数据模拟

class ReTemplate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    getData = async () => {
        const image = await this.fetchs({'url': './static/datas/data.json'})
        const attrs = await this.fetchs({'url': './static/datas/data.json'})
        const users = await this.fetchs({'url': './static/datas/data.json'})
        this.setState({images : image.images, attr: attrs.attr, user: users.user}) 
        //console.log(images)
    }
    fetchs(init) {
        return new Promise(resolve => {
            fetch(init.url)
                .then((res) => { if(res.ok) return res.json() ;})
                .then((res) => { resolve(res)})
                .catch((e) => { console.log(e.message) })
        })
    }
    componentWillMount() {
        //this.getData()
    }
    componentDidMount() {
        
    }
    render() {
        //console.log(data.images)
        return (
            <div className="ui-warp">
            <header className="ui-header">
                <div className="ui-header-container">
                    <Link to="/" href="#" className="ui-header-back ui-color-red"><i className="ui-icon-brackets"></i></Link>
                    <a href="#" className="ui-color-red ui-btn-cancel">完成</a>
                    <span className="ui-header-title">发布模板</span>
                </div>
            </header>
                <div className="ui-ReTemplate ui-upload">
                    <div className="ui-tem-con">
                        <header>
                           <span> 1.自动设置销售价格</span>  <i className="ui-up-icon ui-icon-quest"></i>
                        </header>
                        <div className="ui-tem-txt">
                            <span>默认销售价格 = 批发价 × </span> <input className="ui-input-txt" type="number"/> <span> % + </span> <input className="ui-input-txt" type="number"/> 元
                        </div>
                    </div>
                    <div className="ui-tem-con">
                        <header>
                           <span> 2.自动设置物流</span>  <i className="ui-up-icon ui-icon-quest"></i>
                        </header>
                        <div className="ui-tem-txt">
                            <a href="javascript:;" className="ui-refresh-btn ui-mg-r20"><i className="ui-up-icon ui-icon-refresh"></i>刷新发货地址</a>
                            <a href="javascript:;" className="ui-refresh-btn"><i className="ui-up-icon ui-icon-refresh"></i>刷新运费模板</a>
                        </div>
                        <div className="ui-tem-txt">
                            <span>默认所在地区：</span>
                            <AreaCity></AreaCity>
                        </div>
                        <div className="ui-tem-txt">
                            <span>默认运费模板：</span>
                            <label htmlFor="" className="ui-select-com">
                                <select id="" className="login_text_input" name="shi">
                                    <option value="0">请选择</option>
                                </select><i className="ui-up-icon"></i>
                            </label>
                        </div>
                    </div>
                    <div className="ui-tem-con">
                        <header>
                           <span> 3.图片搬家设置</span>  <i className="ui-up-icon ui-icon-quest"></i>
                        </header>
                        <div className="ui-tem-txt">
                            <a href="javascript:;" className="ui-refresh-btn ui-mg-r20"><i className="ui-up-icon ui-icon-refresh"></i>刷新发货地址</a>
                        </div>
                        <div className="ui-tem-txt">
                            <span>默认图片目录：</span>
                            <label htmlFor="" className="ui-select-com ui-select-theOne">
                                <select id="" className="login_text_input " name="shi">
                                    <option value="0">请选择</option>
                                </select><i className="ui-up-icon"></i>
                            </label>
                        </div>
                        <div className="ui-tem-txt">
                            <label className="ui-input-label" htmlFor="启用强制搬家">
                                <input defaultChecked type="checkbox" id="启用强制搬家"  className="ui-input-checkbox ui-checkbox-checked" value="on" />
                                启用强制搬家
                            </label>
                        </div>
                    </div>
                    <div className="ui-tem-con">
                        <header>
                           <span> 4.自动设置店铺分类</span>  <i className="ui-up-icon ui-icon-quest"></i>
                        </header>
                        <div className="ui-tem-txt">
                            <label className="ui-input-label" htmlFor="启用自动分类">
                                <input defaultChecked type="checkbox" id="启用自动分类"  className="ui-input-checkbox ui-checkbox-checked" value="on" />
                                启用自动分类
                            </label>
                        </div>
                    </div>
                    <div className="ui-tem-con">
                        <header>
                           <span> 5.强制去货号</span>  <i className="ui-up-icon ui-icon-quest"></i>
                        </header>
                        <div className="ui-tem-txt">
                            <label className="ui-input-label" htmlFor="启用强制去除货号">
                                <input defaultChecked type="checkbox" id="启用强制去除货号"  className="ui-input-checkbox ui-checkbox-checked" value="on" />
                                启用强制去除货号
                            </label>
                        </div>
                    </div>
                    <div className="ui-tem-con">
                        <header>
                           <span> 6.其他</span>  <i className="ui-up-icon ui-icon-quest"></i>
                        </header>
                        <div className="ui-tem-txt">
                            <label className="ui-input-label" htmlFor="启用此发布模板">
                                <input defaultChecked type="checkbox" id="启用此发布模板"  className="ui-input-checkbox ui-checkbox-checked" value="on" />
                                启用此发布模板
                            </label>
                        </div>
                    </div>
                </div>
                <div style={{padding: '.2rem 0'}} className="ui-btn-component"><button className="ui-btn-cancel">取消</button><button>保存</button></div>
            </div>
        )
    }
}


export default ReTemplate



