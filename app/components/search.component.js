// Import React
import React from 'react';
// Import React's Autocomplete component
import Autocomplete from 'react-autocomplete';

// Create search component class
class Search extends React.Component {
    handleRenderItem(item, isHighlighted) {
        // Some basic styles
        const lineStyles = {
            item: {
                padding: '2px 6px',
                cursor: 'default'
            },

            highlightedItem: {
                color: 'white',
                background: '#F38B72',
                padding: '2px 6px',
                cursor: 'default'
            }
        };

        // Render list items
        return (
            <div
            style={isHighlighted ? lineStyles.highlightedItem : lineStyles.item}
            key = {item.id}
            id={item.id}
            >{item.title} </div>
        )
    }

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
                    renderItem={this.handleRenderItem.bind(this)}/>

            </div>
        );
    }
}

// Export Search

export default Search