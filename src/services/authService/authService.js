class AuthService {
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

	static getCurentUser() {
		return this.fakeUser;
	}
}

export default AuthService;
