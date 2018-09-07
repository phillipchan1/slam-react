// libraries
import React, { Component } from 'react';
import axios from 'axios';
import PostService from '../../../services/PostService/PostService';
import * as Cookies from 'es-cookie';

// components
import { Button, Modal, Form } from 'semantic-ui-react';
import { Icon } from 'react-icons-kit';
import { pencil } from 'react-icons-kit/fa/';

class NewPostButtonModal extends Component {
	constructor(props) {
		super(props);

		this.state = { post: {}, modalOpen: false };
	}

	handleChange(e) {
		this.setState({
			post: {
				post: e.target.value,
				date: new Date()
			}
		});
	}

	handleSubmit() {
		this.setState({
			modalOpen: false
		});

		const authCookie = {
			'connect.sid': Cookies.get('connect.sid')
		};

		axios.post(
			`http://localhost:3000/posts`,
			Object.assign({}, this.state.post, authCookie),
			{ withCredentials: true }
		);
	}

	handleOpen = () => this.setState({ modalOpen: true });

	handleClose = () => this.setState({ modalOpen: false });

	render() {
		return (
			<Modal
				onClose={this.handleClose}
				trigger={
					<Button primary onClick={this.handleOpen}>
						<Icon icon={pencil} style={{ marginRight: '0.5em' }} />
						New Post
					</Button>
				}
				open={this.state.modalOpen}
			>
				<Modal.Header>New Post</Modal.Header>
				<Modal.Content image>
					<Modal.Description>
						<Form
							value={this.state.post}
							onChange={this.handleChange.bind(this)}
							style={{ marginBottom: '1em', border: 'none' }}
							maxLength="50"
						>
							<Form.TextArea placeholder="Say anything" />
						</Form>
						<Button onClick={this.handleSubmit.bind(this)} primary>
							Post
						</Button>
					</Modal.Description>
				</Modal.Content>
			</Modal>
		);
	}
}

export default NewPostButtonModal;
