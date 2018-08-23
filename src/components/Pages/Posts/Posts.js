import React, { Component } from 'react';
import PostService from '../../../services/PostService/PostService';
import SubmissionService from '../../../services/SubmissionService/SubmissionService';
import ArrayUtils from '../../../utils/ArrayUtils';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			combinedPosts: []
		};
	}

	componentDidMount() {
		var posts = PostService.getPosts();
		var submissions = SubmissionService.getSubmissions();
		var combinedPosts = ArrayUtils.shuffle([...posts, ...submissions]);

		this.setState({ combinedPosts: combinedPosts });
	}

	render() {
		return (
			<div className="posts-container">
				{this.state.combinedPosts.map(post => {
					if (post.type === 'post') {
						return 'post';
					} else if (post.type === 'submission') {
						return 'submission';
					}
				})}
			</div>
		);
	}
}

export default Posts;
