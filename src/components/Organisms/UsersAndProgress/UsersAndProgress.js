import React, { Component } from 'react';
import UserAndProgress from '../../Molecules/UserAndProgress/UserAndProgress';
import { Header } from 'semantic-ui-react';

class UsersAndProgress extends Component {
	render() {
		return (
			<div className="users-and-progress-wrapper">
				<Header as="h2">People Participating in this Slam</Header>
				<div className="users-and-progress-container">
					{this.props.usersAndProgress.map(usersAndProgress => {
						return (
							<UserAndProgress
								{...usersAndProgress}
								key={usersAndProgress.user.id}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default UsersAndProgress;
