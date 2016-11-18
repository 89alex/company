import React, {PropTypes} from 'react'

class UploadTitle extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {text, tip} = this.props.title
        return (
            <div className="ui-entry-area ui-content-pad">
                <header className="ui-txt-title"><i className="ui-block-red"></i> {text} <p className="ui-tip-red ui-tip-warn"><i className="ui-up-icon ui-icon-warn"></i>{tip}</p></header>
                {this.props.children}
            </div>
        )
    }
}
/*UploadTitle.PropTypes = {
    title: React.PropTypes.string
}*/
export default UploadTitle