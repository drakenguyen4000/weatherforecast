import React from "react";

class Search extends React.Component {
  state = {term: '', lat: null, lon: null}

  onFormSubmit = event => {
    event.preventDefault();
    this.props.runMySubmit(this.state.term);
  }

  onMySearch = () => {
    this.props.runMyLocation(this.state.lat, this.state.lon);
  }

  mySearchSubmit = event => {
    event.preventDefault();
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        this.onMySearch();
      },
      err => alert('Please turn on location & try again!')
    );
  };
  
  render() {
    return (
      <div className="ui segment">
        <div className="wrapper">
          <h1 className="appName">Weather Forecast</h1>
          <button className="ui button" onClick={this.mySearchSubmit}>
            <i className="crosshairs icon"></i>My Location
          </button>
        </div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search by City</label>
            <div className="wrapper">
                <input id="searchfield" placeholder="Los Angeles, New York, Paris, London, Cairo, Tokyo, etc." type="text" value={this.state.term} onChange={ event => this.setState({term: event.target.value})} ></input><div className="ui submit button" onClick={this.onFormSubmit}>Search</div>
            </div>
            <p className="copyright">&copy; Designed by <a className="link" href="https://drakenguyen4000.github.io/portfolio/">Drake
            Nguyen 2020</a></p>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
