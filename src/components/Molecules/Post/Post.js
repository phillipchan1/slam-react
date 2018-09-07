// libraries
import React, { Component } from 'react';
import Moment from 'react-moment';

// components
import { Card } from 'semantic-ui-react';
import UserTab from '../../Atoms/UserTab/UserTab';

class Post extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};
	}

	render() {
		return (
			<Card>
				<Card.Content description={this.props.post} />
				<Card.Meta>
					<span className="date">
						<Moment format="MMMM Do YYYY">
							{this.props.dateCreated.toString()}
						</Moment>
					</span>
				</Card.Meta>
				<UserTab userId={this.props.userId} />
			</Card>
		);
	}
}

export default Post;
