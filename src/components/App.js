import "./App.css"
import React from 'react';
import Search from './Search';
import Forecast from './Forecast';

const api_key = process.env.REACT_APP_API_KEY;

class App extends React.Component {
    state = { forecasting: {} };
    
    onSearchSubmit = async (term) => {
            try {
                let result = await fetch (`https://api.weatherbit.io/v2.0/forecast/daily?city=${term}&key=${api_key}`);
                let data = await result.json();
                this.setState({ forecasting: data});
            } catch(error) {
                alert('Not found. Please enter another city.');
            }
    }

    onLocation = async (lat, lon) => {
        try {
            let mylocation = await fetch (`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=${api_key}`);
                let data = await mylocation.json();
                this.setState({ forecasting: data});
        } catch(error) {
            alert('Not found. Please search by field.');
        }
}
    
    render() {
    return <div className="ui container" style={{marginTop: '10px', marginBottom: '100px'}}>
        <Search runMySubmit={this.onSearchSubmit} runMyLocation={this.onLocation} />
        <Forecast weather={this.state.forecasting}/>
    </div>
    }
}

export default App;