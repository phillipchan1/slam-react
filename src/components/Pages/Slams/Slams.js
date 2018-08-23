import React, { Component } from 'react';
import Slam from '../../Molecules/Slam/Slam';
import { Redirect, Link } from 'react-router-dom';
import SlamService from '../../../services/SlamService/SlamService';
import {
	Menu,
	Container,
	Header,
	Button,
	Card,
	Form,
	Input,
	Grid,
	Segment
} from 'semantic-ui-react';

class Slams extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toSlam: false,
			slams: [],
			selectedSlam: null,
			searchActive: false,
			searchTerm: ''
		};
	}

	componentDidMount() {
		this.setState({
			slams: SlamService.getSlams()
		});
	}

	handleSlamClick(slam) {
		this.setState({
			toSlam: true,
			selectedSlam: slam
		});
	}

	handleSearchOnChange(e) {
		if (e.target.value.length > 0) {
			this.setState({
				searchActive: true,
				searchTerm: e.target.value
			});
		} else {
			this.setState({
				searchActive: false
			});
		}
	}

	render() {
		if (this.state.toSlam == true) {
			return (
				<Redirect
					to={{
						pathname: `/slam/${this.state.selectedSlam.id}`
					}}
				/>
			);
		}

		return (
			<div className="slams">
				<Container>
					<Menu secondary>
						<Menu.Menu>
							<Menu.Item>
								<Button>
									<Link to={`/add-edit-slam`}>New Slam</Link>
								</Button>
							</Menu.Item>
						</Menu.Menu>
						<Menu.Menu position="right">
							{this.state.searchActive
								? `Searching for ${this.state.searchTerm}`
								: ''}
							<Form>
								<Input
									icon="search"
									placeholder="Search..."
									onChange={this.handleSearchOnChange.bind(
										this
									)}
								/>
							</Form>
						</Menu.Menu>
					</Menu>
				</Container>
				<Container style={{ marginTop: '3em' }}>
					<Grid columns={2} stackable>
						<Grid.Column width={10}>
							<Card.Group>
								{this.state.slams.map(slam => {
									return (
										<Slam
											{...slam}
											onClick={() => {
												this.handleSlamClick(slam);
											}}
										/>
									);
								})}
							</Card.Group>
						</Grid.Column>
						<Grid.Column width={6}>
							<Container>
								<Header as="h2">Slams You're In</Header>
							</Container>
						</Grid.Column>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default Slams;
