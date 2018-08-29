import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class Slam extends Component {
	render() {
		return (
			<Card
				fluid
				className="slam"
				centered={false}
				className="slam"
				onClick={this.props.onClick}
			>
				<Card.Content>
					<Card.Header style={{ marginBottom: '1em' }}>
						<Image
							src={this.props.imageUrl}
							avatar
							style={{ marginRight: '1em' }}
						/>
						{this.props.name}
					</Card.Header>
					<Card.Meta>
						<span className="date">{this.props.description}</span>
					</Card.Meta>
				</Card.Content>
			</Card>
		);
	}
}

export default Slam;
