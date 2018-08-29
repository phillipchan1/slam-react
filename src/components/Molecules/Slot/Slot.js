import React, { Component } from 'react';
import { Item, Modal, Header, Button } from 'semantic-ui-react';
import UserAvatar from 'react-user-avatar';
import SubmissionService from '../../../services/SubmissionService/SubmissionService';
import UserService from '../../../services/UserService/UserService';
import UserAndProgress from '../../Molecules/UserAndProgress/UserAndProgress';
import { Link } from 'react-router-dom';
import AddEditSubmission from '../../Organisms/AddEditSubmission/AddEditSubmission';

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

						<Modal trigger={<a href="#">Submit a Submission!</a>}>
							<Modal.Content image>
								<AddEditSubmission />
							</Modal.Content>
						</Modal>
					</div>
				</header>
				<div className="users-container">
					<Header as="h4" style={{ textAlign: 'left' }}>
						Users Participating
					</Header>
					<div className="user-and-progress-container">
						{this.state.usersAndProgress.usersAndProgress.map(
							usersAndProgress => {
								return (
									<UserAndProgress
										{...usersAndProgress}
										totalSlots={
											this.state.usersAndProgress
												.slotsInSlam
										}
										key={usersAndProgress.user.id}
									/>
								);
							}
						)}
					</div>
				</div>
			</Item>
		);
	}
}

export default Slot;
