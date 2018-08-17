import React, {Component} from 'react';
import Slam from '../../Molecules/Slam/Slam';
import {BrowserRouter as Link, Route, Redirect} from 'react-router-dom';

class Slams extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toSlam: false,

        }

    }
    slams = [
        {
            name: 'slam name',
            description: 'description',
            id: 1
        },
        {
            name: 'slam name 2',
            description: 'description',
            id: 2
        },
        {
            name: 'slam name 3',
            description: 'description',
            id: 3
        }
    ]

    handleSlamClick(slam) {
        console.log('clicked');
        this.setState({
            toSlam: true
        })
    }

    render() {
        if (this.state.toSlam === true) {
            console.log('should redirect');
          return <Redirect to='/slam' />
        }

        return (
            <div className="slams">
                this is the slam page

                {this.slams.map((slam) => {
                    return (
                        <Slam key={slam.id} name={slam.name} description={slam.description} onClick={() => {this.handleSlamClick(slam)}} />
                    )
                })}
            </div>
        )
    }
}

export default Slams;