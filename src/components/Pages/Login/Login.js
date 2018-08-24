import React, { Component } from 'react';
import AuthService from '../../../services/AuthService/AuthService';
import UserService from '../../../services/UserService/UserService';
import { Button, Container, Form, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loginSuccess: false
		};
		this.handleChange.bind(this);
	}

	handleChange(e) {
		var key = e.target.name;
		var value = e.target.value;
		var obj = {};

		obj[key] = value;

		this.setState(obj);
	}

	handleSubmit() {
		AuthService.login(this.state, response => {
			console.log(response);

			if (response.success) {
				this.setState({
					loginSuccess: true
				});

				this.props.successfulLogin(UserService.getUser(1));
			} else {
				this.setState({
					errorMessage: response.message
				});
			}
		});
	}

	render() {
		// if login successful
		if (this.state.loginSuccess === true) {
			console.log('should redirect');
			return <Redirect to="/home" />;
		}

		// error messager handling
		let errMessage;

		if (this.state.errorMessage) {
			errMessage = <Message>{this.state.errorMessage}</Message>;
		} else {
		}
		return (
			<Container>
				{errMessage}

				<Form onSubmit={this.handleSubmit.bind(this)}>
					<Form.Field>
						<label>Email</label>
						<input
							placeholder="Email"
							name="email"
							onChange={this.handleChange.bind(this)}
						/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							onChange={this.handleChange.bind(this)}
						/>
					</Form.Field>
					<Button type="submit">Login</Button>
				</Form>
			</Container>
		);
	}
}

export default Login;
