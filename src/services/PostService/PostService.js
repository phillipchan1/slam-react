class PostService {
	static samplePosts = [
		{
			post: 'this is a sample post',
			userId: 1,
			postDate: new Date(),
			type: 'post'
		},
		{
			post: 'this is a sample post',
			userId: 2,
			postDate: new Date(),
			type: 'post'
		},
		{
			post: 'this is a sample post',
			userId: 1,
			postDate: new Date(),
			type: 'post'
		},
		{
			post: 'this is a sample post',
			userId: 4,
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
