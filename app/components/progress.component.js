// Import Reatc
import React, {Component} from 'react';

// Create progress component class
class Progress extends Component {
    render() {
        return (
            <div className="progress">
                <span className="player__time-elapsed">{this.props.elapsed}</span>
                <progress value={this.props.position} max="1"></progress>
                <span className="player__total-time">{this.props.total}</span>
            </div>
        )
    }
}

export default Progress