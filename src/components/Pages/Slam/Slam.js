import React, { Component } from 'react';
import SlamService from '../../../services/SlamService/SlamService';
import { Header, Item, Divider, Grid, Modal } from 'semantic-ui-react';
import UserAvatar from 'react-user-avatar';
import SlotService from '../../../services/SlotService/SlotService';
import Slot from '../../Molecules/Slot/Slot';

class Slam extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			description: '',
			currentUser: {},
			isAuthenticated: false,
			slots: [],
			modalOpen: false
		};
	}

	componentWillMount() {
		this.setState(SlamService.getSlam(this.props.match.params.id));

		this.setState({
			slots: SlotService.getSlotsBySlamId(this.props.match.params.id)
		});
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

				<Grid columns="two" divided>
					<Grid.Row>
						<Item.Group className="slot-container">
							{this.state.slots.map((slot, index) => {
								return <Slot {...slot} />;
							})}
						</Item.Group>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Slam;
