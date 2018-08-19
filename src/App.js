import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
// services
import AuthService from './services/AuthService/AuthService';

// components
import Login from './components/Pages/Login/Login';
import UserProfile from './components/Pages/UserProfile/UserProfile';
import Slams from './components/Pages/Slams/Slams';
import Slam from './components/Pages/Slam/Slam';

class App extends Component {

	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<Link to={`/slams`}>Slams</Link>
						<Link to={`/user-profile`}>User Profile</Link>
					</header>

					<div className="main">
						<Route path="/slams" component={Slams}></Route>
						<Route path="/user-profile" component={UserProfile}></Route>
						<Route path="/slam/:id" component={Slam}></Route>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
