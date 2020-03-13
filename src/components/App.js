import "./App.css"
import React from 'react';
import Search from './Search';
import Forecast from './Forecast';

class App extends React.Component {
    state = { forecasting: {} };
    
    onSearchSubmit = async (term) => {
            try {
                const result = await fetch (`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${term}`);
                const location_rep = await result.json();
                const cur_woeid = location_rep[0].woeid;
                const woeid_rep = await fetch (`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cur_woeid}/`);
                const data = await woeid_rep.json();
                this.setState({ forecasting: data});
            } catch(error) {
                alert('Not found. Please enter another city.');
            }
    }

    onLocation = async (lat, lon) => {
        try {
            // console.log(lat, lon);
            const result = await fetch (`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`);
            const location_rep = await result.json();
            const cur_woeid = location_rep[0].woeid;
            const woeid_rep = await fetch (`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cur_woeid}/`);
            const data = await woeid_rep.json();
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