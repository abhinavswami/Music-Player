import React from 'react';
import ReactDOM from 'react-dom';
// Search component created as a class
class Search extends React.Component {
    // render method is the most important
    // render method returns JSX template
    render() {
        return (
            <form>
                <input type="text"/>
                <input type="submit"/>
            </form>
        );
    }
}

// Render to the ID content in the DOM
ReactDOM.render(<Search/>, document.getElementById('content'));