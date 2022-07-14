import React from 'react';

//this component will be to listen to user input

class SearchBar extends React.Component {
    constructor() {
    //^i used constructor so it will run automatically when
    //the class is initialized
        super();
        //^access this.state
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
        //^passing data from my search component to its parent
        //component(App.js)
    }

    render() {
        return (
            <div className="search">
        {/* onChange passes an event object
        //as an argument each time a user enters or deletes 
        //a character */}
                <input onChange={event => this.onInputChange(event.target.value)} />
                                        {/* ^fires automatically 
                                        each time the input
                                        is changed, and updates
                                        it */}
            </div>
        );
    }
}

export default SearchBar;