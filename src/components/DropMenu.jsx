import React from 'react'
import ReactDom from 'react-dom'

class ComMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        const ergodic = (item) => {
            //console.log(item.items)
            if(item.items) {
                return (
                    <ComMenu margin={true} menus={item.items}>
                        {ergodic(item.items)}
                    </ComMenu>
                )
            }
        }
        const {menus, margin} = this.props
        //console.log(menus)
        return (
            <ul style={margin ? {'marginLeft': '.2rem'} : {}} className="ui-menu-main">
                {menus.map((item, index) => {
                    return (
                        <li key={index}>
                            <img className="line"  src="./static/styles/i/dropDown/down-line.png" alt=""/>
                            <label  className="ui-input-label" htmlFor={item.menu.number}>
                                <input id={item.menu.number} data-number={item.menu.number} className="ui-input-checkbox" type="checkbox"/>
                                {item.menu.text}
                                {ergodic(item)}
                            </label>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
class DropMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        //const {placeholder} = this.props
        const menus = [
            {
                'title': '衣服',
                'items': [
                    {'menu': {'text': '内衣', 'number': '0111'}, 'items': [{'menu': {text: '内衣', number: '0112'}}, {'menu': {text: '内衣2', number: '0123'}}]},
                    {'menu': {'text': '内库', 'number': '0114'}}
                ]
            },
            {
                'title': '床上用品',
                'items': [
                    {'menu': {'text': '内衣', 'number': '0115'}, 'items': [{'menu': {text: '内衣', number: '013'}}, {'menu': {text: '内衣2', number: '0146'}}]},
                    {'menu': {'text': '内库', 'number': '0117'}}
                ]
            },
            {
                'items': [
                    {'menu': {'text': '衬衫', 'number': '0111'}}
                ]
            }
        ]
        //console.log(menus)
        return (
            <div>
                {menus.map((menu, index) => {
                    return menu.title ? 
                    <section key={index} className="ui-drop-menu">
                        <header className="ui-menu-title">{menu.title}</header>
                        <ComMenu margin={false} menus={menu.items}></ComMenu>
                    </section> : 
                    <label key={index} className="ui-input-label" htmlFor={menu.number}>
                        <input id={menu.number} className="ui-input-checkbox" type="checkbox"/>
                        衬衫
                    </label>
                })}
            </div>
        )
    }
}

export default DropMenu