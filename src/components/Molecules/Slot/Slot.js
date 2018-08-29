import React, { Component } from 'react';
import { Item, Grid, Divider, List } from 'semantic-ui-react';
import UserAvatar from 'react-user-avatar';
import SubmissionService from '../../../services/SubmissionService/SubmissionService';
import UserService from '../../../services/UserService/UserService';
import UserAndProgress from '../../Molecules/UserAndProgress/UserAndProgress';

class Slot extends Component {
	constructor(props) {
		super(props);

		this.state = {
			submissions: []
		};
	}

	componentWillMount() {
		this.setState({
			submissions: SubmissionService.getSubmissionsBySlotId(
				this.props.id
			),
			usersAndProgress: UserService.getUsersAndProgressBySlotId(
				this.props.id
			)
		});
	}

	render() {
		return (
			<Item className="slot">
				<header>
					<div className="slot-image-container">
						<UserAvatar
							size="64"
							src={this.props.imageUrl}
							name={this.props.name}
						/>
					</div>
					<div className="slot-information-container">
						<Item.Header as="h3">{this.props.name}</Item.Header>
						<Item.Meta>{this.props.description}</Item.Meta>
					</div>
				</header>
				<Divider />
				<List horizontal>
					{this.state.usersAndProgress.usersAndProgress.map(
						usersAndProgress => {
							return (
								<UserAndProgress
									{...usersAndProgress}
									totalSlots={
										this.state.usersAndProgress.slotsInSlam
									}
								/>
							);
						}
					)}
				</List>
			</Item>
		);
	}
}

export default Slot;
