import React, { Component } from 'react';
import SlamService from '../../../services/SlamService/SlamService';
import SlamsList from '../../Organisms/SlamsList/SlamsList';
import {
	Menu,
	Search,
	Container,
	Header,
	Form,
	Input,
	Grid
} from 'semantic-ui-react';

class Slams extends Component {
	constructor(props) {
		super(props);

		this.state = {
			slams: [],
			searchActive: false,
			searchTerm: ''
		};
	}

	componentDidMount() {
		this.setState({
			slams: SlamService.getSlams()
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
		return (
			<div className="slams">
				<Container>
					<Menu secondary>
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
							<SlamsList slams={this.state.slams} />
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
