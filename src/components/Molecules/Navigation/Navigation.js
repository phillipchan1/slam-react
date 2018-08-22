import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';

class Navigation extends Component {
	render() {
		let loginActionButton;

		if (this.props.isAuthenticated) {
			loginActionButton = (
				<Menu.Item onClick={this.props.handleLogout}>Logout</Menu.Item>
			);
		} else {
			loginActionButton = (
				<Menu.Item>
					<Link to={`/login`}>Login</Link>
				</Menu.Item>
			);
		}
		return (
			<div>
				<Container>
					<Menu secondary>
						<Menu.Item>
							<Link to={`/slams`}>Slams</Link>
						</Menu.Item>
						<Menu.Menu position="right">
							<Menu.Item>
								<Link to={`/user-profile`}>User Profile</Link>
							</Menu.Item>
							{loginActionButton}
						</Menu.Menu>
					</Menu>
				</Container>
			</div>
		);
	}
}

export default Navigation;
