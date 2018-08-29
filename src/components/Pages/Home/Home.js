import React, { Component } from 'react';
import PostService from '../../../services/PostService/PostService';
import SubmissionService from '../../../services/SubmissionService/SubmissionService';
import Submission from '../../Molecules/Submission/Submission';
import Post from '../../Molecules/Post/Post';
import ArrayUtils from '../../../utils/ArrayUtils';
import { Card } from 'semantic-ui-react';
import Masonry from 'react-masonry-component';

class Home extends Component {
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

		console.log('combinedPosts', combinedPosts);

		this.setState({ combinedPosts: combinedPosts });
	}

	render() {
		return (
			<div className="posts-container">
				<Masonry
					className={'posts-container'}
					elementType={'div'}
					options={{ gutter: 16 }}
					disableImagesLoaded={false}
					updateOnEachImageLoad={false}
				>
					{this.state.combinedPosts.map(post => {
						if (post.post) {
							return <Post {...post} />;
						} else if (post.slotId) {
							return <Submission {...post} key={post.id} />;
						}
					})}
				</Masonry>
			</div>
		);
	}
}

export default Home;
