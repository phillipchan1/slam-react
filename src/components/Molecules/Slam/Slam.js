import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
class Slam extends Component {
	render() {
		return (
			<Card fluid className="slam" onClick={this.props.onClick}>
				<header>{this.props.name}</header>
				<article>{this.props.description}</article>
			</Card>
		);
	}
}

export default Slam;
