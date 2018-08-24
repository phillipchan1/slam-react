import React, { Component } from 'react';
import UserService from '../../../services/UserService/UserService';
import {
	Container,
	Form,
	Button,
	Message,
	Header,
	Divider
} from 'semantic-ui-react';
import UserAvatar from 'react-user-avatar';

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
				<Header as="h2" icon textAlign="center">
					<Header.Content>
						<UserAvatar
							size="128"
							name={this.state.currentUser.name}
							src={this.state.currentUser.imageUrl}
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						/>
					</Header.Content>
					<Header.Content>
						{this.state.currentUser.name}
					</Header.Content>
					<Header.Subheader>
						{this.state.currentUser.description}
					</Header.Subheader>
				</Header>
				<Divider />
				{this.state.successfullyUpdated ? (
					<Message info> Succesfully Updated </Message>
				) : (
					''
				)}{' '}
				{/* <Form>
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
				</Form>{' '} */}
			</Container>
		);
	}
}

export default UserProfile;
