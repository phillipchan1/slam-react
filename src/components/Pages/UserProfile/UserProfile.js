import React, { Component } from 'react';
import UserService from '../../../services/UserService/UserService';
import { Container, Form, Button } from 'semantic-ui-react';

class UserProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: {}
		};
	}

	componentDidMount() {
		this.setState({
			currentUser: UserService.getUser()
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
		UserService.updateUser(this.state.currentUser);
	}

	render() {
		return (
			<Container>
				<Form>
					<Form.Field>
						<label> Name</label>
						<input
							value={this.state.currentUser.name}
							placeholder="First Name"
							name="name"
							onChange={this.handleChange.bind(this)}
						/>
					</Form.Field>
					<Form.Field>
						<label>About</label>
						<Form.TextArea
							value={this.state.currentUser.description}
							placeholder="Tell us more about you..."
							onChange={this.handleChange.bind(this)}
						/>
					</Form.Field>
					<Button onClick={this.handleProfileUpdate.bind(this)}>
						Update
					</Button>
				</Form>
			</Container>
		);
	}
}

export default UserProfile;
