class AuthService {
    static fakeUser = {
        description: 'Pellentesque a mi vel tellus venenatis accumsan. Aliquam ultrices magna bibendum enim sagittis, eget commodo turpis suscipit. Maecenas ut ex mattis, accumsan nibh quis, congue turpis. Fusce eu tellus ac erat sagittis aliquet. Sed euismod justo et consequat tempus.',
        id: 23,
        name: 'Phil',
        profilePicture: '',
    }

    static login() {

    }

    static logout() {

    }

    static getCurentUser() {
        return this.fakeUser;
    }

    loggedIn = true;
}

export default AuthService;