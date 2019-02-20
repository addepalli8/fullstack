import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import Landing from './Landing';
import {connect} from 'react-redux'
import * as actions from '../actions'

const dash = () => <h2>dash</h2>;
const survey = () => <h2>survey</h2>;

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
	render() {
		return (
			<div>
            <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route exact path="/dash" component={dash} />
                <Route exact path="/survey" component={survey} />
            </div>
            </BrowserRouter>
			</div>
		);
	}
}

export default connect(null,actions)(App);
