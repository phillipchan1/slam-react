// libraries
import React, { Component } from 'react';
import axios from 'axios';

// components
import { Form, Message, Button } from 'semantic-ui-react';

class EditUserProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: {
				description: '',
				id: undefined,
				name: 'undefined',
				email: '',
				profilePicture: ''
			},
			successfullyUpdated: false
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:3000/users/${this.props.match.params.id}`)
			.then(res => {
				let user = res.data.user;

				this.setState({ currentUser: user });

				console.log(user);
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
		// UserService.updateUser(this.state.currentUser, () => {
		// 	this.setState({
		// 		successfullyUpdated: true
		// 	});
		// });
	}

	render() {
		return (
			<div>
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
			</div>
		);
	}
}

export default EditUserProfile;
