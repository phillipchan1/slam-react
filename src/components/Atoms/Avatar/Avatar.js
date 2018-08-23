import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/ikons/';

class Avatar extends Component {
	render() {
		return (
			<div
				className="avatar"
				style={{
					background: this.props.image,
					height: this.props.height ? this.props.height : '2em',
					width: this.props.width ? this.props.width : '2em'
				}}
			>
				{this.props.image ? '' : <Icon icon={user} />}
			</div>
		);
	}
}

export default Avatar;
