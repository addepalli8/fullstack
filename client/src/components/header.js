import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class header extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
            return "deciding"
            case false:
            return (
                
                <li><a href="/auth/google">login</a></li>
            )
            default:
            return (
                <li><a href="/api/logout">logout</a></li>
            )
        }
    }
	render() {
        console.log(this.props);
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to="/" className="left brand-logo">survey</Link>
				<ul className="right">
                    <li>
                       {this.renderContent()}
                    </li>
                </ul>
                
                </div>
			</nav>
		);
	}
}
function mapStateToProps({auth}){
    return{
        auth
    };
}
export default connect(mapStateToProps)(header);
