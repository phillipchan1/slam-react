class AuthService {
	static fakeUser = {
		description:
			'Pellentesque a mi vel tellus venenatis accumsan. Aliquam ultrices magna bibendum enim sagittis, eget commodo turpis suscipit. Maecenas ut ex mattis, accumsan nibh quis, congue turpis. Fusce eu tellus ac erat sagittis aliquet. Sed euismod justo et consequat tempus.',
		id: 23,
		name: 'Phil',
		profilePicture: ''
	};

	static credentials = {
		email: 'phil',
		password: 'phil'
	};

	static login(credentials, cb) {
		if (
			credentials.email === this.credentials.email &&
			credentials.password === this.credentials.password
		) {
			cb({
				success: true,
				message: ''
			});
		} else {
			cb({
				success: false,
				message: 'Credentials Incorrect'
			});
		}
	}

	static logout() {
		this.props.handleLogout();
	}

	static getCurentUser() {
		return this.fakeUser;
	}
}

export default AuthService;
