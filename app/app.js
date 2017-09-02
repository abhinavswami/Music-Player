import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search.component';
import Details from './components/details.component';
import Player from './components/player.component';
import Progress from './components/progress.component';
import Footer from './components/footer.component';

// Search component created as a class
class App extends React.Component {
    // render method is the most important render method returns JSX template
    render() {
        return (
            <div>
                <Search />
                <Details title={'Title Track'}/>
                <Player/>
                <Progress
                position = {'0.5'}
                elapsed={'00:00'}
                total={'0:40'}/>
                <Footer />
            </div>
        );
    }
}

// Render to the ID content in the DOM
ReactDOM.render(
    <App/>, document.getElementById('content'));