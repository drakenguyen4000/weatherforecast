//App.js
import "./App.css"
import React from 'react';
import SearchBar from './SearchBar';
import Forecast from './Forecast';

class App extends React.Component {
    state = { forecasting: {} };
    
    onSearchSubmit = async (event) => {
            try {
                const result = await fetch (`/api/location/search/?query=${event}`);
                const location_rep = await result.json();
                const cur_woeid = location_rep[0].woeid;
                const woeid_rep = await fetch (`/api/location/${cur_woeid}/`);
                const data = await woeid_rep.json();
                this.setState({ forecasting: data});
            } catch(error) {
                alert('Not found. Please enter another city.');
            }
    }
    
    render() {
    return <div className="ui container" style={{marginTop: '10px', marginBottom: '100px'}}>
        <SearchBar runMySubmit={this.onSearchSubmit} />
        <Forecast weather={this.state.forecasting}/>
    </div>
    }
}

export default App;
