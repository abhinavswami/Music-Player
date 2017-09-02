import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.component';

// Search component created as a class
class App extends React.Component {
    // render method is the most important
    // render method returns JSX template
    render() {
        return (
            <Search />
        );
    }
}

// Render to the ID content in the DOM
ReactDOM.render(<App />, document.getElementById('content'));