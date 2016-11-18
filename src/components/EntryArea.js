import React from 'react'

class EntryArea extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {placeholder} = this.props
        return (
            <section className="ui-txt-area">
                <textarea placeholder={placeholder}></textarea>
                <span className="ui-font-tip">14/64</span>
            </section>
        )
    }
}
export default EntryArea