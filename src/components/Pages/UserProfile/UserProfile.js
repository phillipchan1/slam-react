import React, { Component } from 'react';
import UserService from '../../../services/UserService/UserService';
import { Container, Form, Button, Message } from 'semantic-ui-react';

class UserProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: {
				description: '',
				id: undefined,
				name: '',
				email: '',
				profilePicture: ''
			},
			successfullyUpdated: false
		};
	}

	componentWillMount() {
		this.setState({
			currentUser: UserService.getUser(this.props.match.params.id)
		});
	}

	handleChange(e) {
		var obj = {};
		obj[e.target.name] = e.target.value;

		this.setState({
			currentUser: Object.assign({}, obj)
		});
	}

	handleProfileUpdate() {
		UserService.updateUser(this.state.currentUser, () => {
			this.setState({
				successfullyUpdated: true
			});
		});
	}

	render() {
		return (
			<Container>
				{' '}
				{this.state.successfullyUpdated ? (
					<Message info> Succesfully Updated </Message>
				) : (
					''
				)}{' '}
				<Form>
					<Form.Field>
						<label> Name </label>{' '}
						<input
							value={this.state.currentUser.name}
							placeholder="First Name"
							name="name"
							onChange={this.handleChange.bind(this)}
						/>{' '}
					</Form.Field>{' '}
					<Form.Field>
						<label> About </label>{' '}
						<Form.TextArea
							value={this.state.currentUser.description}
							placeholder="Tell us more about you..."
							name="description"
							onChange={this.handleChange.bind(this)}
						/>{' '}
					</Form.Field>{' '}
					<Button onClick={this.handleProfileUpdate.bind(this)}>
						Update{' '}
					</Button>{' '}
				</Form>{' '}
			</Container>
		);
	}
}

export default UserProfile;
