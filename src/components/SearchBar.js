import React from "react";

class SearchBar extends React.Component {
  state = {term: ''}

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.runMySubmit(this.state.term);
  }
  
  render() {
    return (
      <div className="ui segment">
        <h1>Weather Forecast</h1>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search City</label>
            <input placeholder="Los Angeles, New York, Paris, London, Cairo, Tokyo, etc." type="text" value={this.state.term} onChange={ event => this.setState({term: event.target.value})} ></input>
            <p className="copyright">&copy; Designed by <a class="link" href="https://drakenguyen4000.github.io/portfolio/">Drake
            Nguyen 2020</a>. Powered by <a class="link" href="https://www.metaweather.com/"> MetaWeather </a> API.</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
