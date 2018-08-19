import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../../../services/AuthService/AuthService';

const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			AuthService.isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			)
		}
	/>
);

export default ProtectedRoute;
