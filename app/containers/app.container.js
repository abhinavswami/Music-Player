// Import React
import React, {Component} from 'react';

// Axios of Ajax
import Axios from 'axios';

// AppContainer class
class AppContainer extends Component {
    // AppContainer constructor
    constructor(props) {
        super(props);
    }
    // componentDidMount lifecycle method. Called once a component is loaded
    componentDidMOunt() {
        this.randomTrack();
    }

    randomTrack() {
        let _this = this;
        // Request for a playlist via Soundcloud using a client id
        Axios
            .get(`https://api.soundcloud.com/playlists/209262931?client_id=${this.client_id}`)
            .then(function (response) {
                // Store the length of the tracks
                const trackLength = response.data.tracks.length;

                // Pick a random number
                const randomNumber = Math.floor((Math.random() * trackLength) + 1);

                // Set the track state with a random track from the playlist
                _this.setState({track: response.data.tracks[randomNumber]});
            })
            .catch(function (err) {
                // If something goes wrong, let us know
                console.log(err);
            })
    }

    render() {
        return (
            <div className="music"></div>
        );
    }
}

// Export AppContainer component
export default AppContainer
