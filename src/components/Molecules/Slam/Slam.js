import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
class Slam extends Component {
	render() {
		return (
			<Card
				fluid
				className="slam"
				centered={false}
				className="slam"
				description={this.props.description}
				header={this.props.name}
				onClick={this.props.onClick}
				meta={`${this.props.slotsFilled}/${this.props.slots} Slots`}
			/>
		);
	}
}

export default Slam;
