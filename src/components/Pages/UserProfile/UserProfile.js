import React, { Component } from 'react';
import axios from 'axios';
import UserService from '../../../services/UserService/UserService';

import { Container, Form, Message, Header, Divider } from 'semantic-ui-react';
import UserAvatar from 'react-user-avatar';
import SlamsList from '../../Organisms/SlamsList/SlamsList';
import SlamService from '../../../services/SlamService/SlamService';

class UserProfile extends Component {
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
			successfullyUpdated: false,
			slamsUserIsIn: []
		};
	}

	componentWillMount() {
		axios
			.get(`http://localhost:3000/users/${this.props.match.params.id}`)
			.then(res => {
				let user = res.data.user;

				console.log(user);
				this.setState(
					{
						currentUser: user
					},
					() => {
						axios
							.get(
								`http://localhost:3000/users/${
									this.props.match.params.id
								}/slams`
							)
							.then(res => {
								console.log(res);

								this.setState({ slamsUserIsIn: res.data });
							});
					}
				);
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
					{this.props.isAuthenticated ? 'logged in' : 'not logged in'}
				</Header>
				<Divider section />

				<Header as="h3" style={{ textAlign: 'left' }}>
					Slams User is In
				</Header>

				<Divider section hidden />

				{/* <SlamsList
					style={{ marginTop: '1em' }}
					slams={this.state.slamsUserIsIn}
				/> */}

				{/* {this.state.successfullyUpdated ? (
					<Message info> Succesfully Updated </Message>
				) : (
					''
				)}{' '} */}
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
