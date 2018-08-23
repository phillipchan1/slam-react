import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { Icon } from 'react-icons-kit';
import { pencil } from 'react-icons-kit/fa/';
import PostService from '../../../services/PostService/PostService';

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
		console.log('submitted');
		this.setState({
			modalOpen: false
		});
		PostService.addNewPost(this.state.post);
	}

	handleOpen = () => this.setState({ modalOpen: true });

	handleClose = () => this.setState({ modalOpen: false });

	render() {
		return (
			<Modal
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
