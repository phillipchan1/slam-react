import React, { Component } from 'react';
import SlamService from '../../../services/SlamService/SlamService';
import { Header, Divider } from 'semantic-ui-react';
import UserAvatar from 'react-user-avatar';

class Slam extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			description: ''
		};
	}

	componentWillMount() {
		this.setState(SlamService.getSlam(this.props.match.params.id));
	}

	render() {
		return (
			<div>
				<UserAvatar
					size="128"
					src={this.state.imageUrl}
					name={this.state.name}
					style={{
						display: 'flex',
						justifyContent: 'center'
					}}
				/>
				<Header as="h1">{this.state.name}</Header>
				<Header.Subheader>{this.state.description}</Header.Subheader>
				<Divider />
			</div>
		);
	}
}

export default Slam;
