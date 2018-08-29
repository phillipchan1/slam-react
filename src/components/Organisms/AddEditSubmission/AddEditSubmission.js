import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class AddEditSubmission extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: []
		};
	}

	onDrop(files) {
		this.setState({
			files
		});
	}

	render() {
		return (
			<div>
				{this.state.files.map(f => (
					<li key={f.name}>
						{f.name} - {f.size} bytes
					</li>
				))}
				<Dropzone onDrop={this.onDrop.bind(this)}>
					<p>
						Try dropping some files here, or click to select files
						to upload.
					</p>
				</Dropzone>
			</div>
		);
	}
}

export default AddEditSubmission;
