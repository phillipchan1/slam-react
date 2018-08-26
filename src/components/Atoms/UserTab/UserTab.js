import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import UserService from '../../../services/UserService/UserService';
import { Link } from 'react-router-dom';

class UserTab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				name: ''
			}
		};
	}

	componentDidMount() {
		this.setState({
			user: UserService.getUser(this.props.userId)
		});
	}

	render() {
		return (
			<Card.Content extra>
				<Link to={`/user/${this.props.userId}`}>
					<div>
						<Icon name="user" />
						{this.state.user.name}
					</div>
				</Link>
			</Card.Content>
		);
	}
}

export default UserTab;
