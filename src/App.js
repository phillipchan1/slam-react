import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Redirect
} from 'react-router-dom';
// services
import AuthService from './services/AuthService/AuthService';

// pages
import Login from './components/Pages/Login/Login';
import UserProfile from './components/Pages/UserProfile/UserProfile';
import Slams from './components/Pages/Slams/Slams';
import Slam from './components/Pages/Slam/Slam';
import ProtectedRoute from './components/Pages/ProtectedRoute/ProtectedRoute';

// components
import Navigation from './components/Molecules/Navigation/Navigation';
import { Container } from 'semantic-ui-react';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: false
		};
	}

	handleSuccessfulLogin() {
		this.setState({
			isAuthenticated: true
		});
		console.log(this.state);
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Navigation authStatus={this.isAuthenticated} />

					<Container style={{ marginTop: '3em' }}>
						<ProtectedRoute
							path="/slams"
							component={Slams}
							isAuthenticated={this.state.isAuthenticated}
						/>
						<Route path="/user-profile" component={UserProfile} />
						<Route path="/slam/:id" component={Slam} />
						<Route
							path="/login"
							render={props => (
								<Login
									{...props}
									successfulLogin={this.handleSuccessfulLogin.bind(
										this
									)}
								/>
							)}
						/>
					</Container>
				</div>
			</Router>
		);
	}
}

export default App;
