import React, { Component } from 'react';
import { List, Image, Progress } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class UserAndProgress extends Component {
	render() {
		return (
			<List.Item className="user-progress-card">
				<Link to={`/user/${this.props.user.id}`}>
					<Image avatar src={this.props.user.imageUrl} />
					<List.Content>
						<List.Header as="a">{this.props.user.name}</List.Header>
						<List.Description>
							<Progress
								percent={
									(this.props.slotsSubmitted /
										this.props.totalSlots) *
									100
								}
							/>
						</List.Description>
					</List.Content>
				</Link>
			</List.Item>
		);
	}
}

export default UserAndProgress;
