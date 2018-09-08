import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Container, Header, Divider } from 'semantic-ui-react';
import UserAvatar from 'react-user-avatar';
import SlamsList from '../../Organisms/SlamsList/SlamsList';

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
			slamsUserIsIn: []
		};
	}

	componentWillMount() {
		axios
			.get(`http://localhost:3000/users/${this.props.match.params.id}`)
			.then(res => {
				let user = res.data.user;

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
					<Header.Subheader>
						{this.props.isAuthenticated ? (
							<Link
								to={`/edituser/${this.state.currentUser._id}`}
							>
								Edit
							</Link>
						) : (
							'not logged in'
						)}
					</Header.Subheader>
				</Header>
				<Divider section />

				<Header as="h3" style={{ textAlign: 'left' }}>
					Slams User is In
				</Header>

				<Divider section hidden />

				{this.state.slamsUserIsIn.length > 0 ? (
					<SlamsList
						style={{ marginTop: '1em' }}
						slams={this.state.slamsUserIsIn}
					/>
				) : (
					<div>
						Not in any slams. Consider{' '}
						<Link to={`/slams`}> joining one.</Link>
					</div>
				)}
			</Container>
		);
	}
}

export default UserProfile;
