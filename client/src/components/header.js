import React, { Component } from 'react';
import {connect} from 'react-redux';

class header extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
            return "deciding"
            case false:
            return "logged out"
            default:
            return "logged in"
        }
    }
	render() {
        console.log(this.props);
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">survey</a>
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
