import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Image, Header, Button } from 'semantic-ui-react';

class AddEditSubmission extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			featuredSubmission: {},
			featuredSubmissionIndex: 0
		};
	}

	handleClick(e) {
		var submissionReference = e.target.parentNode;
		var submissionsContainer = e.target.parentNode.parentNode;
		var nodes = Array.prototype.slice.call(submissionsContainer.children);
		var selectedIndex = nodes.indexOf(submissionReference);

		this.setState({ featuredSubmissionIndex: selectedIndex });
	}

	handleSubmission() {
		console.log('submitted');
	}

	onDrop(files) {
		this.setState({
			files: this.state.files.concat(files)
		});
	}

	render() {
		return (
			<div className="add-edit-submission-wrapper">
				<header>
					<Header as="h1">Submit Submissions</Header>
					<p>
						Upload your submission and select the photo you want to
						be featured
					</p>
				</header>
				<Dropzone
					accept="image/jpeg, image/png"
					onDrop={this.onDrop.bind(this)}
					className="drop-container"
				>
					<p>
						Try dropping some files here, or click to select files
						to upload.
					</p>
				</Dropzone>
				<div className="submission-results">
					<header>
						{this.state.files.length > 0 ? (
							<h3>Your submissions:</h3>
						) : (
							''
						)}
					</header>

					<div className="submission-container">
						{this.state.files.map((f, index) => {
							let className;

							if (index === this.state.featuredSubmissionIndex) {
								className = 'featured';
							}

							return (
								<aside
									key={f.name}
									onClick={this.handleClick.bind(this)}
									className={className}
								>
									<Image
										size="small"
										rounded
										src={f.preview}
									/>
								</aside>
							);
						})}
					</div>
				</div>
				<Button onClick={this.handleSubmission.bind(this)}>
					Upload Submission
				</Button>
			</div>
		);
	}
}

export default AddEditSubmission;
