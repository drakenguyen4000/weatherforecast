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
            <input type="text" value={this.state.term} onChange={ event => this.setState({term: event.target.value})} ></input>
          <p className="copyright">&copy; Designed by Drake Nguyen 2020. Powered by <a class="metaweather" href="https://www.metaweather.com/"> MetaWeather </a> API.</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
