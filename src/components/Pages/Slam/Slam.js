import React, { Component } from 'react';
import SlamService from '../../../services/slamService/slamService';


class Slam extends Component {
    constructor(props) {
        super(props)

        this.state ={
            slam: {}
        }
    }

    componentDidMount() {
        this.setState({
            slam: SlamService.getSlam(this.props.match.params.id)
        })
    }

    render() {
        return(
            <div>
                Slam Page
                {this.state.slam.id}
                {this.state.slam.name}
                {this.state.slam.description}
            </div>
        )
    }
}

export default Slam;