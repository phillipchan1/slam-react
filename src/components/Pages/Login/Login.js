import React, { Component } from 'react';
import AuthService from '../../../services/AuthService/AuthService';
import UserService from '../../../services/UserService/UserService';
import { Button, Container, Form, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { userSecret } from 'react-icons-kit/fa';

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
		axios.post(`http://localhost:3000/login`, this.state).then(res => {
			this.setState({
				loginSuccess: true
			});

			this.props.successfulLogin(UserService.getUser(1));
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
				<div style={{ marginTop: '2em' }}>
					Don't have an account?{' '}
					<Link to={'/register'}>Create an Account</Link>
				</div>
			</Container>
		);
	}
}

export default Login;
