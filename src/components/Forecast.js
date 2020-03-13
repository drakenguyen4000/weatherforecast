import React from "react";

const icons = `https://www.metaweather.com/static/img/weather/png/`;

const Forecast = props => {
  if (!props.weather || !props.weather.parent) {
    return <h2>Data only covers major cities. My Location feature will find the closes city with data.</h2>;
  }

  const overview = props.weather;
  const forecast = props.weather.consolidated_weather;

  //Determining day
  const mydates = [];

  forecast.forEach(function(arr){
    const date = new Date(arr.applicable_date);
    const utc = date.toUTCString();
    const day = utc.slice(0,3);
    mydates.push(day);
  })

  //weather background control
  const mybackground = [];

  forecast.forEach(function(arr){
    const weather = arr.weather_state_name;
    switch(weather) {
      case "Snow":
        mybackground.push("snow");
        break;
      case "Sleet":
        mybackground.push("snow");
        break;
      case "Hail":
        mybackground.push("snow");
        break;
      case "Thunderstorm":
        mybackground.push("thunderstorm");
        break;
      case "Thunder":
        mybackground.push("thunderstorm");
        break;  
      case "Heavy Rain":
        mybackground.push("rain");
        break;
      case "Light Rain":
        mybackground.push("rain");
        break;
      case "Showers":
        mybackground.push("rain");
        break;
      case "Heavy Cloud":
        mybackground.push("cloud");
        break;
      case "Light Cloud":
        mybackground.push("cloud");
        break;
      case "Clear":
        mybackground.push("sunny");
        break;
      default: mybackground.push("sunny");
    }
  })

  //Degree
  function math (temp) {
    //Fahrenheit
    return Math.round(temp * 9 / 5 + 32);
  }
  
  return (
    <div>
      <div className="ui segment city_info">
        <h1 className="city_name">{overview.title}</h1>
        <div className="detail_info">
          <p>State/Country: {overview.parent.title}</p>
          <p>Timezone: {overview.timezone}</p>
          <p>TZName: {overview.timezone_name}</p>
        </div>
      </div>
      <div className="fiveday">
        <div className={`ui card ${mybackground[0]}`}>
          <h1 className="day">{mydates[0]}</h1>
          <div>
            <img className="weather_icon" src={`${icons}${forecast[0].weather_state_abbr}.png`} alt="weather_img"></img>
          </div>
          <h2>{forecast[0].weather_state_name}</h2>
          <h1>H: {math(forecast[0].max_temp)}<sup>o</sup>F</h1>
          <h1>L: {math(forecast[0].min_temp)}<sup>o</sup>F</h1>
        </div>
        <div className={`ui card ${mybackground[1]}`}>
          <h1 className="day">{mydates[1]}</h1>
          <div>
            <img className="weather_icon" src={`${icons}${forecast[1].weather_state_abbr}.png`} alt="weather_img"></img>
          </div>  
          <h2>{forecast[1].weather_state_name}</h2>
          <h1>H: {math(forecast[1].max_temp)}<sup>o</sup>F</h1>
          <h1>L: {math(forecast[1].min_temp)}<sup>o</sup>F</h1>
        </div>
        <div className={`ui card ${mybackground[2]}`}>
          <h1 className="day">{mydates[2]}</h1>
          <div>
            <img className="weather_icon" src={`${icons}${forecast[2].weather_state_abbr}.png`} alt="weather_img"></img>
          </div>  
          <h2>{forecast[2].weather_state_name}</h2>
          <h1>H: {math(forecast[2].max_temp)}<sup>o</sup>F</h1>
          <h1>L: {math(forecast[2].min_temp)}<sup>o</sup>F</h1>
        </div>
        <div className={`ui card ${mybackground[3]}`}>
          <h1 className="day">{mydates[3]}</h1>
          <div>
            <img className="weather_icon" src={`${icons}${forecast[3].weather_state_abbr}.png`} alt="weather_img"></img>
          </div>  
          <h2>{forecast[3].weather_state_name}</h2>
          <h1>H: {math(forecast[3].max_temp)}<sup>o</sup>F</h1>
          <h1>L: {math(forecast[3].min_temp)}<sup>o</sup>F</h1>
        </div>
        <div className={`ui card ${mybackground[4]}`}>
          <h1 className="day">{mydates[4]}</h1>
          <div>
            <img className="weather_icon" src={`${icons}${forecast[4].weather_state_abbr}.png`} alt="weather_img"></img>
          </div>  
          <h2>{forecast[4].weather_state_name}</h2>
          <h1>H: {math(forecast[4].max_temp)}<sup>o</sup>F</h1>
          <h1>L: {math(forecast[4].min_temp)}<sup>o</sup>F</h1>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
