import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import request from 'superagent';
import './styles/app.css';

//^making my HTTP requests

class App extends React.Component {
    //initializing the state of my
    //Giflist component with an array of gifs
    constructor() {
        super();

        this.state = {
            gifs: []
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        //^binding term change to App
    }
    handleTermChange(term) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=yQEmIDabzSHsGabi9fZJ3OlxclIhYpKI`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    }
    //^my URL variable contains what I need to make API
    //calls
    //
    //^receives a search term 
    //and keepstrack of my term while watching for updates
    
    render() {
        return (
            <div>
                <h1>Welcome! Search for GIFS here!</h1>
                <SearchBar onTermChange={this.handleTermChange} />
                                        {/* // ^logs the search term 
                                        // to the console */}
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));