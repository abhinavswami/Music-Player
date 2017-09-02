// Import React
import React, {Component} from 'react';

class Details extends Component {
    // render
    render() {
        return (
            <div className="details">
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

// Export
export default Details
