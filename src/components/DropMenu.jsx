import React from 'react'
import ReactDom from 'react-dom'

class ComMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        // const ergodic = (item) => {
        //     //console.log(item.items)
        //     if(item.items) {
        //         return (
        //             <ComMenu margin={true} menus={item.items}>
        //                 {ergodic(item.items)}
        //             </ComMenu>
        //         )
        //     }
        // }
        const {menus, margin, handleClick} = this.props
        //console.log(menus)
        return (
            <ul style={margin ? {'marginLeft': '.2rem'} : {}} className="ui-menu-main">
                {menus.map((item, index) => {
                    return (
                        <li key={index}>
                            <img className="line"  src="./static/styles/i/dropDown/down-line.png" alt=""/>
                            <label  className="ui-input-label" htmlFor={item.menu.number}>
                                <input onClick={handleClick} id={item.menu.number} data-number={item.menu.number} className="ui-input-checkbox" type="checkbox"/>
                                {item.menu.text}
                                {
                                    item.items ? 
                                    <ComMenu handleClick={handleClick} margin={true} menus={item.items} /> : ''
                                }
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
    handleClick = (event) => {
        let e = event || window.event
        e.target.getAttribute('checked') ? 
            e.target.removeAttribute('checked'):
            e.target.setAttribute('checked','true')
    }
    render() {
        const {menus} = this.props
        return (
            <div>
                {menus.map((menu, index) => {
                    return menu.title ? 
                    <section key={index} className="ui-drop-menu">
                        <header className="ui-menu-title">{menu.title}</header>
                        <ComMenu handleClick={this.handleClick} margin={false} menus={menu.items}></ComMenu>
                    </section> : 
                    <section key={index} className="ui-drop-menu">
                        <label className="ui-input-label" htmlFor={menu.items.number}>
                            <input data-number={menu.items.number} onClick={this.handleClick} id={menu.items.number} className="ui-input-checkbox" type="checkbox"/>
                            {menu.items.text}
                        </label>
                    </section>
                })}
            </div>
        )
    }
}

DropMenu.PropTypes = {
    menus: React.PropTypes.string
}

export default DropMenu