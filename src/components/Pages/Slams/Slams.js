import React, { Component } from 'react';
import Slam from '../../Molecules/Slam/Slam';
import { BrowserRouter as Redirect } from 'react-router-dom';
import SlamService from '../../../services/SlamService/SlamService';
import {
	Menu,
	Container,
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
		if (this.state.toSlam === true) {
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
							{this.state.searchActive
								? `Searching for ${this.state.searchTerm}`
								: ''}
						</Menu.Menu>
						<Menu.Menu position="right">
							<Form>
								<Input
									icon="search"
									placeholder="Search..."
									onChange={this.handleSearchOnChange.bind(
										this
									)}
								/>
							</Form>
							<Menu.Item>
								<Button>New Slam</Button>
							</Menu.Item>
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
											key={slam.id}
											name={slam.name}
											description={slam.description}
											onClick={() => {
												this.handleSlamClick(slam);
											}}
										/>
									);
								})}
							</Card.Group>
						</Grid.Column>
						<Grid.Column width={6}>
							<Segment>Content</Segment>
						</Grid.Column>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default Slams;
