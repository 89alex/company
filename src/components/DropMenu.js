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
                            <label  className="ui-input-label" htmlFor="">
                                <input className="ui-input-checkbox" type="checkbox"/>
                                {item.menu}
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
                    {'menu': '内衣', 'items': [{'menu': '内衣1'}, {'menu': '内衣2'}]},
                    {'menu': '内库', 'items': []}
                ]
            },
            {
                'title': '床上用品',
                'items': [
                    {'menu': '内衣', 'items': [{'menu': '内衣1'}, {'menu': '内衣2'}]},
                    {'menu': '内库', 'items': []}
                ]
            }
        ]
        //console.log(menus)
        return (
            <div>
                {menus.map((menu, index) => {
                    return (
                        <section key={index} className="ui-drop-menu">
                            <header className="ui-menu-title">{menu.title}</header>
                            <ComMenu margin={false} menus={menu.items}></ComMenu>
                        </section>
                    )
                })}
            </div>
        )
    }
}

export default DropMenu