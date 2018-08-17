import React, {Component} from 'react';

class Slam extends Component {
    render() {
        return (
            <div className="slam" onClick={this.props.onClick}>
                <header>
                    {this.props.name}
                </header>
                <article>
                    {this.props.description}
                </article>
            </div>
        )
    }
}

export default Slam;