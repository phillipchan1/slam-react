import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import SlamService from '../../../services/SlamService/SlamService';
import SlotService from '../../../services/SlotService/SlotService';
import UserService from '../../../services/UserService/UserService';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Submission extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			slam: {
				id: undefined,
				name: ''
			}
		};
	}

	componentDidMount() {
		var user = UserService.getUser(this.props.userId);
		var slot = SlotService.getSlot(this.props.slotId);

		if (user) {
			this.setState({
				username: user.name
			});
		}

		if (slot) {
			this.setState({
				slam: SlamService.getSlam(slot.slamId)
			});
		}
	}

	render() {
		return (
			<div>
				<Link
					to={`/slam/${this.state.slam.id}/submission/${
						this.props.id
					}`}
				>
					<Card>
						<Image src={this.props.imageUrl} />
						<Card.Content>
							<Card.Header>{this.state.slam.name}</Card.Header>
							<Card.Meta>
								<span className="date">
									<Moment format="MMMM Do YYYY">
										{this.props.dateCreated.toString()}
									</Moment>
								</span>
							</Card.Meta>
						</Card.Content>
						<Card.Content extra>
							<Link to={`/user/${this.props.userId}`}>
								<Icon name="user" />
								{this.state.username}
							</Link>
						</Card.Content>
					</Card>
				</Link>
			</div>
		);
	}
}

export default Submission;
