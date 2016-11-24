import React from 'react'
//import ReactDom from 'react-dom'

class EntryArea extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            word: 0
        }
    }
    componentDidMount(){

    }
    handleChange = (event) => {
        //e.target.value == '' ? e.target.value.
        const {showTipChange, title} = this.props
        const e = event.target
        this.setState({word: e.value.length})
        e.value.trim().length == "" ?
            showTipChange(title.order, true) :
            showTipChange(title.order, false)
        //console.log(area.parentNode.parentNode.querySelector('header .ui-tip-warn'))
    }
    render(){
        const {text} = this.props.title
        const {word} = this.state
        return (
            <section className="ui-txt-area">
                <textarea onChange={this.handleChange} maxLength="64" placeholder={`请输入${text}`} />
                <span className="ui-font-tip">{word}/64</span>
            </section>
        )
    }
}

EntryArea.PropTypes = {
    placeholder: React.PropTypes.string
}

export default EntryArea