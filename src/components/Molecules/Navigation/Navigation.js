import React, { Component } from 'react';
import NewPostButtonModal from '../NewPostButtonModal/NewPostButtonModal';
import { Link } from 'react-router-dom';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

class Navigation extends Component {
	render() {
		let loginActionButton;

		if (this.props.isAuthenticated) {
			loginActionButton = (
				<Menu.Menu position="right">
					<NewPostButtonModal />

					<Dropdown
						button
						text={
							this.props.currentUser.name
								? this.props.currentUser.name
								: 'Menu'
						}
					>
						<Dropdown.Menu>
							<Dropdown.Item text="User Profile">
								<Link
									to={`/user/${this.props.currentUser._id}`}
								>
									User Profile
								</Link>
							</Dropdown.Item>
							<Dropdown.Item
								text="Log Out"
								onClick={this.props.handleLogout}
							/>
						</Dropdown.Menu>
					</Dropdown>
				</Menu.Menu>
			);
		} else {
			loginActionButton = (
				<Menu.Menu position="right">
					<Menu.Item>
						<Link to={`/login`}>Login</Link>
					</Menu.Item>
				</Menu.Menu>
			);
		}
		return (
			<div>
				<Container>
					<Menu secondary>
						<Menu.Item>
							<Link to={`/home`}>Home</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to={`/slams`}>Slams</Link>
						</Menu.Item>

						{loginActionButton}
					</Menu>
				</Container>
			</div>
		);
	}
}

export default Navigation;
