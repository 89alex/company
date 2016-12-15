import React, {PropTypes} from 'react'
import DiaLog from '../../static/plugin/dialog/dialog'

class ImgRemove extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lists:[
                {
                    title:'一起做网店（勿删）_商品详1',
                    links: [
                        {link: 'www.baidu.com/1', state: 'fail'},
                        {link: 'www.baidu.com/2', state: 'fail'},
                        {link: 'www.baidu.com/3', state: 'loading'},
                        {link: 'www.baidu.com/4', state: 'fail'}
                    ]
                },
                {
                    title:'一起做网店（勿删）_商品详情2',
                    links: [
                        {link: 'www.baidu.com/1', state: 'fail'},
                        {link: 'www.baidu.com/2', state: 'fail'},
                        {link: 'www.baidu.com3', state: 'loading'},
                        {link: 'www.baidu.com4/', state: 'fail'}
                    ]
                }
            ],
            catalog: 0
        }
    }
    handleChange = (event) => {
        var e = event.target
        this.setState({catalog: e.selectedIndex})
    }
    handleUpload = () => {
         const {catalog, lists} = this.state
         const _lists = lists
         const newLinks = _lists
         for(let i in newLinks){
             for(let k in newLinks[i].links){
                 newLinks[i].links[k].state = "loading"
             }
         }
         this.setState({lists: newLinks})
         let loading = new DiaLog({
            type: 'loading',
            title: '图片搬家中...'
        })
        setTimeout(loading.delete, 2000) //移除
    }
    handleRetry = () => {
        const {catalog, lists} = this.state
         const _lists = lists
         const newLinks = _lists
         for(let i in newLinks){
             for(let k in newLinks[i].links){
                 newLinks[i].links[k].state == 'fail' ? newLinks[i].links[k].state = "loading" : ''
             }
         }
         this.setState({lists: newLinks})
    }
    handleRemove = () => {
         const {catalog, lists} = this.state
         const _lists = lists
         const newLinks = _lists
         for(let i in newLinks){
             for(let k in newLinks[i].links){
                 newLinks[i].links[k].state == 'fail' ? (newLinks[i].links.splice(k, 1)) : ''
             }
         }
         this.setState({lists: newLinks})
    }
    handleClick = function(index, event){
        const {catalog, lists} = this.state
        const e = event.target, li = e.parentNode
        const links = lists
        const newLinks = links
        newLinks[catalog].links.splice(index, 1)
        //console.log(links)
        li.className = 'animated bounceOutLeft'
        setTimeout(() => {
            this.setState({lists: newLinks})
            li.className = ''
        }, 500)
    }
    render(){
        const {handleUpdateTip} = this.props
        const {lists, catalog} = this.state
        return (
            <section className="ui-bot-3">
                <section className="ui-refresh-con">
                    <a href="javascript:;" className="ui-refresh-btn"><i className="ui-up-icon ui-icon-refresh"></i>刷新图片目录</a>
                    <p onClick={handleUpdateTip}><i className="ui-up-icon ui-icon-gray"></i>系统默认24小时更新缓存</p>
                </section>
                <section className="ui-select-title ui-select-theOne">
                    <span>图片目录</span>
                    <label htmlFor="" className="ui-select-com">
                        <select id="Select-imgCatalog" onChange={this.handleChange}>
                            {
                                lists.map((list, index) => {
                                   return <option key={index} value={list.title}>{list.title}</option>
                                })
                            }
                        </select>
                        <i className="ui-up-icon"></i>
                    </label>
                </section>
                <section className="ui-remove-con">
                    <header className="ui-txt-title">
                        <button className="ui-color-red" onClick={this.handleUpload}>一键搬家</button>
                        {/*<button className="ui-color-red" onClick={this.handleRemove}>一键移除</button>
                        <button className="ui-color-red " onClick={this.handleRetry}>一键重试</button>
                        <p className="ui-tip-red"><i className="ui-up-icon ui-icon-warn"></i>部分图片失败</p>
                        <p className="ui-tip-red"><i className="ui-up-icon ui-icon-succ"></i>完美图片，无需“图片搬家”！</p>*/}
                        <p className="ui-tip-red"><i className="ui-up-icon ui-icon-warn"></i>有盗链，请点击“一键搬家”！</p>
                    </header>
                    <ul id="List-imgRemove" className="ui-link-list">
                        {
                            lists[catalog].links.map((links, index) => {
                                return (
                                    <li key={index}>
                                        <i className={`ui-up-icon ${links.state == 'loading' ? 'ui-icon-loading' : links.state == 'not' || links.state == 'fail' ?'ui-icon-warn' : ''}`}></i>
                                        <p className={`ui-txt-p ${links.state == 'succ' ? 'ui-color-blue' : 'ui-color-red'}`}>{links.link}</p>
                                        <a className="ui-color-red ui-right" href="javascript:;" onClick={this.handleClick.bind(this, index)}>移除</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </section>
        )
    }
}
ImgRemove.PropTypes = {
    // handleUpdateClick: React.PropTypes.object
}
export default ImgRemove