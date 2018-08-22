class UserService {
	static fakeUser = {
		description:
			'Pellentesque a mi vel tellus venenatis accumsan. Aliquam ultrices magna bibendum enim sagittis, eget commodo turpis suscipit. Maecenas ut ex mattis, accumsan nibh quis, congue turpis. Fusce eu tellus ac erat sagittis aliquet. Sed euismod justo et consequat tempus.',
		id: 23,
		name: 'Phil',
		profilePicture:
			'https://www.iconspng.com/images/male-avatar/male-avatar.jpg'
	};

	static updateUser(newProperties, cb) {
		console.log('newProperties', newProperties);
		this.fakeUser = Object.assign(this.fakeUser, newProperties);

		cb(this.fakeUser);
	}

	static getUser() {
		return this.fakeUser;
	}
}

export default UserService;
