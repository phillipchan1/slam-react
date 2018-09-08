import React, { Component } from 'react';
import { Button, Container, Form, Grid, Header } from 'semantic-ui-react';
import axios from 'axios';

class Registration extends Component {
	constructor(props) {
		super(props);

		this.state = {
			errorMessage: ''
		};

		this.handleChange.bind(this);
	}

	handleSubmit() {
		axios
			.post(`http://localhost:3000/register`, {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
			.then(res => {
				console.log(res);
			});
	}

	handleChange(e) {
		var key = e.target.name;
		var value = e.target.value;
		var obj = {};

		obj[key] = value;

		this.setState(obj);
	}

	render() {
		return (
			<Container>
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column style={{ textAlign: 'left' }}>
							<Header as="h1">Welcome to FishSlam!</Header>
							<p>
								FishSlam is an online community of fishermen and
								women.
							</p>
							<p>Creating an account is easy</p>
						</Grid.Column>

						<Grid.Column style={{ textAlign: 'left' }}>
							{this.state.errMessage}
							<Form onSubmit={this.handleSubmit.bind(this)}>
								<Form.Field>
									<label>Full Name</label>
									<input
										placeholder="Full Name"
										name="name"
										onChange={this.handleChange.bind(this)}
									/>
								</Form.Field>
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
								<Button type="submit">Create Account</Button>
							</Form>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

export default Registration;
