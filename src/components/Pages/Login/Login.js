import React, { Component } from 'react';
import { Button, Container, Checkbox, Form } from 'semantic-ui-react';
import AuthService from '../../../services/AuthService/AuthService';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {};
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
		AuthService.login(this.state, success => {
			if (success) {
				console.log('successfu');
			} else {
				console.log('error');
			}
		});
	}

	render() {
		return (
			<Container>
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
