
import React from 'react'

// Link
import {Link } from 'react-router'

//数据模拟

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        //console.log(data.images)
        return (
                <div className="ui-upload ui-new-tip">
                    <Link className="ui-link-block" to="/UpLoad">1.一键上传 <i className="ui-up-icon ui-icon-link-new"></i></Link><br/>
                    <Link className="ui-link-block" to="/ReTemplate">2.发布模板 <i className="ui-up-icon ui-icon-link-new"></i></Link>
                    {this.props.children}
                </div>
        )
    }
}


export default App



