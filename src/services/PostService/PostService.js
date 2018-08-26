class PostService {
	static samplePosts = [
		{
			post: 'this is a sample post',
			userId: 1,
			dateCreated: new Date(),
			type: 'post'
		},
		{
			post: 'this is a sample post',
			userId: 2,
			dateCreated: new Date(),
			type: 'post'
		},
		{
			post: 'this is a sample post',
			userId: 1,
			dateCreated: new Date(),
			type: 'post'
		},
		{
			post: 'this is a sample post',
			userId: 4,
			dateCreated: new Date(),
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
