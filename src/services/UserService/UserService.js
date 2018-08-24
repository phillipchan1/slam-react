class UserService {
	static users = [{
			description: 'Pellentesque a mi vel tellus venenatis accumsan. Aliquam ultrices magna bibendum enim sagittis, eget commodo turpis suscipit. Maecenas ut ex mattis, accumsan nibh quis, congue turpis. Fusce eu tellus ac erat sagittis aliquet. Sed euismod justo et consequat tempus.',
			id: 1,
			name: 'Phil',
			email: 'phillipchan1@gmail.com',
			profilePicture: 'https://www.iconspng.com/images/male-avatar/male-avatar.jpg'
		},
		{
			description: 'Pellentesque a mi vel tellus venenatis accumsan. Aliquam ultrices magna bibendum enim sagittis, eget commodo turpis suscipit. Maecenas ut ex mattis, accumsan nibh quis, congue turpis. Fusce eu tellus ac erat sagittis aliquet. Sed euismod justo et consequat tempus.',
			id: 2,
			name: 'Bob Marley',
			email: 'phillipchan1@gmail.com',
			profilePicture: 'https://www.iconspng.com/images/male-avatar/male-avatar.jpg'
		},
	]



	static updateUser(newProperties, cb) {
		console.log('newProperties', newProperties);
		this.fakeUser = Object.assign(this.fakeUser, newProperties);

		cb(this.fakeUser);
	}

	static getUser(id) {
		return this.users.find(user => {
			return user.id == id;
		});
	}
}

export default UserService;