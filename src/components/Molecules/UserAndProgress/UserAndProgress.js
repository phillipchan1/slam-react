import React, { Component } from 'react';
import { List, Image, Progress } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class UserAndProgress extends Component {
	render() {
		return (
			<div className="user-progress-card">
				<Link to={`/user/${this.props.user.id}`}>
					<header>
						{/* <Image avatar src={this.props.user.imageUrl} /> */}
						<List.Header as="a">{this.props.user.name}</List.Header>
					</header>
				</Link>
				<div className="user-and-progress-content">
					<Progress
						percent={
							(this.props.slotsSubmitted /
								this.props.totalSlots) *
							100
						}
						progress
					/>
				</div>
			</div>
		);
	}
}

export default UserAndProgress;
