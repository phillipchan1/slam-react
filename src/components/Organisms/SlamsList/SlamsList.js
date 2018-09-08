import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Slam from '../../Molecules/Slam/Slam';

class SlamsList extends Component {
	render() {
		return (
			<Card.Group>
				{this.props.slams.map(slam => {
					return (
						<Link
							to={`/slam/${slam._id}`}
							style={{
								width: '100%',
								marginBottom: '1em'
							}}
							key={slam._id}
						>
							<Slam {...slam} />
						</Link>
					);
				})}
			</Card.Group>
		);
	}
}

export default SlamsList;
