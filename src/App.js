import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pages
import Login from './components/Pages/Login/Login';
import Registration from './components/Pages/Registration/Registration';
import UserProfile from './components/Pages/UserProfile/UserProfile';
import EditUserProfile from './components/Pages/EditUserProfile/EditUserProfile';
import Slams from './components/Pages/Slams/Slams';
import Slam from './components/Pages/Slam/Slam';
import Home from './components/Pages/Home/Home';
import ProtectedRoute from './components/Pages/ProtectedRoute/ProtectedRoute';

// components
import Navigation from './components/Molecules/Navigation/Navigation';
import { Container } from 'semantic-ui-react';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: false,
			currentUser: {}
		};
	}

	handleSuccessfulLogin(user) {
		this.setState({
			isAuthenticated: true,
			currentUser: user
		});
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Container style={{ marginTop: '2em' }}>
						<Navigation
							isAuthenticated={this.state.isAuthenticated}
							currentUser={this.state.currentUser}
							handleLogout={() => {
								this.setState({
									isAuthenticated: false
								});
							}}
						/>
					</Container>

					<Container style={{ marginTop: '3em' }}>
						<Route path="/" exact component={Home} />
						<Route
							path="/slams"
							component={Slams}
							isAuthenticated={this.state.isAuthenticated}
						/>
						<Route path="/home" component={Home} />
						<ProtectedRoute
							path="/edituser/:id"
							isAuthenticated={this.state.isAuthenticated}
							component={EditUserProfile}
						/>
						<Route
							path="/user/:id"
							render={props => (
								<UserProfile
									{...props}
									isAuthenticated={this.state.isAuthenticated}
									currentUser={this.state.currentUser}
								/>
							)}
						/>
						<Route
							path="/slam/:id/:submissionId?"
							render={props => (
								<Slam
									{...props}
									isAuthenticated={this.state.isAuthenticated}
									currentUser={this.state.currentUser}
								/>
							)}
						/>
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
						<Route
							path="/register"
							render={props => (
								<Registration
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
