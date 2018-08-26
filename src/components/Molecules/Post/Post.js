import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import UserTab from '../../Atoms/UserTab/UserTab';

class Post extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};
	}

	componentDidMount() {
		// this.setState({
		// 	user: UserService.getUser(this.props.userId)
		// });
	}

	render() {
		return (
			<Card>
				<Card.Content description={this.props.post} />
				<UserTab userId={this.props.userId} />
			</Card>
		);
	}
}

export default Post;
