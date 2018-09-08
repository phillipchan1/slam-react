// libraries
import React, { Component } from 'react';
import axios from 'axios';

//services
import SlamService from '../../../services/SlamService/SlamService';
import SlotService from '../../../services/SlotService/SlotService';

// components
import { Header, Divider, Grid } from 'semantic-ui-react';
import UserAvatar from 'react-user-avatar';
import Slot from '../../Molecules/Slot/Slot';
import UsersAndProgress from '../../Organisms/UsersAndProgress/UsersAndProgress';
import UserService from '../../../services/UserService/UserService';

class Slam extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ' ',
			description: '',
			slots: [],
			modalOpen: false
		};
	}

	componentWillMount() {
		axios
			.get(`http://localhost:3000/slams/${this.props.match.params.id}`)
			.then(res => {
				let slam = res.data.slam[0];
				this.setState(slam);
			});

		this.setState(SlamService.getSlam(this.props.match.params.id));

		this.setState({
			slots: SlotService.getSlotsBySlamId(this.props.match.params.id)
		});

		this.setState({
			usersAndProgress: UserService.getUsersAndProgressBySlamId(
				this.props.match.params.id
			)
		});
	}

	componentWillReceiveProps() {
		console.log('componentwillreceiveprops');
	}

	render() {
		return (
			<div>
				<UserAvatar
					size="128"
					src={this.state.imageUrl}
					name={this.state.name}
					style={{ display: 'flex', justifyContent: 'center' }}
				/>
				<Header as="h1">{this.state.name}</Header>
				<Header.Subheader>{this.state.description}</Header.Subheader>
				<Divider />
				<UsersAndProgress
					usersAndProgress={this.state.usersAndProgress}
				/>
				<Divider />

				<div className="slot-container">
					{this.state.slots.map((slot, index) => {
						return (
							<div>
								<Slot
									{...slot}
									slamId={this.props.match.params.id}
									key={slot.id}
									currentUser={this.props.currentUser}
									isAuthenticated={this.props.isAuthenticated}
								/>
								<Divider />
							</div>
						);
					})}
				</div>

				<Grid columns="two" divided>
					<Grid.Row />
				</Grid>
			</div>
		);
	}
}

export default Slam;
