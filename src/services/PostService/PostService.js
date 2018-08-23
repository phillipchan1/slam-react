class PostService {
	static samplePosts = [
		{
			post: 'this is a sample post',
			author: 'username',
			postDate: new Date(),
			type: 'post'
		},
		{
			post: 'this is a sample post',
			author: 'username',
			postDate: new Date(),
			type: 'post'
		},
		{
			post: 'this is a sample post',
			author: 'username',
			postDate: new Date(),
			type: 'post'
		},
		{
			post: 'this is a sample post',
			author: 'username',
			postDate: new Date(),
			type: 'post'
		}
	];

	static addNewPost(post) {
		this.samplePosts.push(post);
	}

	static getPosts() {
		return this.samplePosts;
	}
}

export default PostService;
