import React from "react";

const icons = `https://www.weatherbit.io/static/img/icons/`;

const Forecast = props => {
  if (!props.weather || !props.weather.data) {
    return <h2>What's your five day forecast like for the week?</h2>;
  }

  const overview = props.weather;
  const forecast = props.weather.data;

  //Determining day
  const mydays = [];
  const mydates = [];

  forecast.forEach(function(arr){
    const current_date = new Date(arr.datetime);
    const utc = current_date.toUTCString();
    const day = utc.slice(0,3);
    const dates = utc.slice(4,11);
    mydays.push(day);
    mydates.push(dates);
  })

  //weather background control
  const mybackground = [];

  forecast.forEach(function(arr){
    const x = arr.weather.code;
    switch(true) {
      case (x < 300):
        mybackground.push("thunderstorm");
        break;
      case (x < 600):
        mybackground.push("rain");
        break;
      case (x < 700):
        mybackground.push("snow");
        break;
      case (x < 800):
        mybackground.push("fog");
        break;
      case (x === 800):
        mybackground.push("sunny");
        break;  
      case (x < 900):
        mybackground.push("cloud");
        break;
      case (x === 900):
        mybackground.push("rain");
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
        <h1 className="city_name">{overview.city_name}</h1>
        <div className="detail_info">
          <p>Country: <br/>{overview.country_code}</p>
          <p>Timezone: <br/>{overview.timezone}</p>
          <p>Latitude: <br/>{overview.lat}</p>
          <p>Longitude: <br/>{overview.lon}</p>
        </div>
      </div>
      <div className="fiveday">
        <div className={`ui card ${mybackground[0]}`}>
          <h1 className="day">{mydays[0]}</h1>
          <div>
            <img className="weather_icon" src={`${icons}${forecast[0].weather.icon}.png`} alt="weather_img"></img>
          </div>
          <h2>{forecast[0].weather.description}</h2>
          <h1>H: {math(forecast[0].max_temp)}<sup>o</sup>F</h1>
          <h1>L: {math(forecast[0].min_temp)}<sup>o</sup>F</h1>
          <h2>{mydates[0]}</h2>
        </div>
        <div className={`ui card ${mybackground[1]}`}>
          <h1 className="day">{mydays[1]}</h1>
          <div>
            <img className="weather_icon" src={`${icons}${forecast[1].weather.icon}.png`} alt="weather_img"></img>
          </div>  
          <h2>{forecast[1].weather.description}</h2>
          <h1>H: {math(forecast[1].max_temp)}<sup>o</sup>F</h1>
          <h1>L: {math(forecast[1].min_temp)}<sup>o</sup>F</h1>
          <h2>{mydates[1]}</h2>
        </div>
        <div className={`ui card ${mybackground[2]}`}>
          <h1 className="day">{mydays[2]}</h1>
          <div>
            <img className="weather_icon" src={`${icons}${forecast[2].weather.icon}.png`} alt="weather_img"></img>
          </div>  
          <h2>{forecast[2].weather.description}</h2>
          <h1>H: {math(forecast[2].max_temp)}<sup>o</sup>F</h1>
          <h1>L: {math(forecast[2].min_temp)}<sup>o</sup>F</h1>
          <h2>{mydates[2]}</h2>
        </div>
        <div className={`ui card ${mybackground[3]}`}>
          <h1 className="day">{mydays[3]}</h1>
          <div>
            <img className="weather_icon" src={`${icons}${forecast[3].weather.icon}.png`} alt="weather_img"></img>
          </div>  
          <h2>{forecast[3].weather.description}</h2>
          <h1>H: {math(forecast[3].max_temp)}<sup>o</sup>F</h1>
          <h1>L: {math(forecast[3].min_temp)}<sup>o</sup>F</h1>
          <h2>{mydates[3]}</h2>
        </div>
        <div className={`ui card ${mybackground[4]}`}>
          <h1 className="day">{mydays[4]}</h1>
          <div>
            <img className="weather_icon" src={`${icons}${forecast[4].weather.icon}.png`} alt="weather_img"></img>
          </div>  
          <h2>{forecast[4].weather.description}</h2>
          <h1>H: {math(forecast[4].max_temp)}<sup>o</sup>F</h1>
          <h1>L: {math(forecast[4].min_temp)}<sup>o</sup>F</h1>
          <h2>{mydates[4]}</h2>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
