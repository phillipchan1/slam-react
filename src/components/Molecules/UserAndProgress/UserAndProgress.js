import React, { Component } from 'react';
import { List, Image, Progress } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class UserAndProgress extends Component {
	render() {
		return (
			<Link
				className="user-progress-card"
				to={`/user/${this.props.user.id}`}
			>
				<header>
					{/* <Image avatar src={this.props.user.imageUrl} /> */}
					<List.Header as="a">{this.props.user.name}</List.Header>
				</header>
				<div className="user-and-progress-content">
					<Progress
						percent={Math.round(
							(this.props.slotsSubmitted /
								this.props.totalSlots) *
								100
						)}
					/>
				</div>
			</Link>
		);
	}
}

export default UserAndProgress;
