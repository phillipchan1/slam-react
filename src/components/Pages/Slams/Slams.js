import React, {Component} from 'react';
import Slam from '../../Molecules/Slam/Slam';
import {BrowserRouter as Redirect} from 'react-router-dom';
import SlamService from '../../../services/SlamService/SlamService'

class Slams extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toSlam: false,
            slams: [],
            selectedSlam: null
        }

    }

    componentDidMount() {
        this.setState({
            slams: SlamService.getSlams()
        })
    }

    handleSlamClick(slam) {
        this.setState({
            toSlam: true,
            selectedSlam: slam
        })
    }

    render() {
        if (this.state.toSlam === true) {
            return <Redirect to={
                {
                    pathname: `/slam/${this.state.selectedSlam.id}`,
                }
            } />
        }

        return (
            <div className="slams">
                this is the slam page

                {this.state.slams.map((slam) => {
                    return (
                        <Slam key={slam.id} name={slam.name} description={slam.description} onClick={() => {this.handleSlamClick(slam)}}>
                        </Slam>
                    )
                })}
            </div>
        )
    }
}

export default Slams;