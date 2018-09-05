import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Image } from 'semantic-ui-react';

class AddEditSubmission extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			featuredSubmission: {}
		};
	}

	handleClick(e) {
		console.log(e.target);
		// e.target.classList.add('selected');
	}

	onDrop(files) {
		this.setState({
			files: this.state.files.concat(files)
		});
	}

	render() {
		return (
			<div className="add-edit-submission-wrapper">
				<Dropzone
					accept="image/jpeg, image/png"
					onDrop={this.onDrop.bind(this)}
				>
					<p>
						Try dropping some files here, or click to select files
						to upload.
					</p>
				</Dropzone>
				<div className="submission-results">
					{this.state.files.map(f => (
						<aside
							key={f.name}
							onClick={this.handleClick.bind(this)}
						>
							<Image size="small" rounded src={f.preview} />
						</aside>
					))}
				</div>
			</div>
		);
	}
}

export default AddEditSubmission;
