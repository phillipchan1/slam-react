import React, { Component } from 'react';
import SlamService from '../../../services/SlamService/SlamService';

class Slam extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		console.log(SlamService.getSlam(this.props.match.params.id));
		this.setState(SlamService.getSlam(this.props.match.params.id));
	}

	render() {
		return (
			<div>
				Slam Page
				{this.state.id}
				{this.state.name}
				{this.state.description}
			</div>
		);
	}
}

export default Slam;
