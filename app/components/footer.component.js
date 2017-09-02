// Import React
import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>
                    With love from 
                    <img src="public/img/react.png" className="logo"/>
                     & 
                    <img src="public/img/soundcloud.png" className="soundcloud"/>
                </p>
            </div>
        )
    }
}

export default Footer