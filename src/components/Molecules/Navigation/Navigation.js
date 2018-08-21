import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Navigation extends Component {
	render() {
		return (
			<div>
				<Menu>
					<Menu.Item>
						<Link to={`/slams`}>Slams</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to={`/user-profile`}>User Profile</Link>
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}

export default Navigation;
