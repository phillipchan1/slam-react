import React, { Component } from 'react';

class Slam extends Component {
    render() {
        return(
            <div>
                Slam Page
                {this.props.match.params.id}
            </div>
        )
    }
}

export default Slam;