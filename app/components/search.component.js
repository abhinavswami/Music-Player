// Import React
import React from 'react';
// Import React's Autocomplete component
import Autocomplete from 'react-autocomplete';

// Create search component class
class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <Autocomplete
                    ref="autocomplete"
                    inputProps={{
                    title: "Title"
                }}
                    value={this.props.autoCompleteValue}
                    items={this.props.tracks}
                    getItemValue={(item) => item.title}
                    onSelect={this.props.handleSelect}
                    onChange={this.props.handleChange}
                    />

            </div>
        );
    }
}

// Export Search

export default Search