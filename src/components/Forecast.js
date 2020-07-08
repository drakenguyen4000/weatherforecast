import React from "react";

const icons = `https://www.weatherbit.io/static/img/icons/`;

const Forecast = (props) => {
  if (!props.weather || !props.weather.data) {
    return <h2>What's your five day forecast like for the week?</h2>;
  }

  const overview = props.weather;
  const forecast = props.weather.data;

  //Determining day
  const mydays = [];
  const mydates = [];

  forecast.forEach(function (arr) {
    const current_date = new Date(arr.datetime);
    const utc = current_date.toUTCString();
    const day = utc.slice(0, 3);
    const dates = utc.slice(4, 11);
    mydays.push(day);
    mydates.push(dates);
  });

  //weather background control
  const mybackground = [];

  forecast.forEach(function (arr) {
    const x = arr.weather.code;
    switch (true) {
      case x < 300:
        mybackground.push("thunderstorm");
        break;
      case x < 600:
        mybackground.push("rain");
        break;
      case x < 700:
        mybackground.push("snow");
        break;
      case x < 800:
        mybackground.push("fog");
        break;
      case x === 800:
        mybackground.push("sunny");
        break;
      case x < 900:
        mybackground.push("cloud");
        break;
      case x === 900:
        mybackground.push("rain");
        break;
      default:
        mybackground.push("sunny");
    }
  });

  return (
    <div>
      <div className="ui segment city_info">
        <h1 className="city_name">{overview.city_name}</h1>
        <div className="detail_info">
          <p>
            Country: <br />
            {overview.country_code}
          </p>
          <p>
            Timezone: <br />
            {overview.timezone}
          </p>
          <p>
            Latitude: <br />
            {overview.lat}
          </p>
          <p>
            Longitude: <br />
            {overview.lon}
          </p>
        </div>
      </div>
      <div className="fiveday">
        {[...Array(5)].map((x, i) => (
          <DailyForecast
            forecastMaxTemp={forecast[i].max_temp}
            forecastMinTemp={forecast[i].min_temp}
            description={forecast[i].weather.description}
            icon={forecast[i].weather.icon}
            mybackground={mybackground[i]}
            myday={mydays[i]}
            mydate={mydates[i]}
          />
        ))}
      </div>
    </div>
  );
};

const DailyForecast = ({
  forecastMaxTemp,
  forecastMinTemp,
  description,
  icon,
  mybackground,
  myday,
  mydate,
}) => {
  //Degree
  function math(temp) {
    //Fahrenheit
    return Math.round((temp * 9) / 5 + 32);
  }

  return (
    <div className={`ui card ${mybackground}`}>
      <h1 className="day">{myday}</h1>
      <div>
        <img
          className="weather_icon"
          src={`${icons}${icon}.png`}
          alt="weather_img"
        ></img>
      </div>
      <h2>{description}</h2>
      <h1>
        H: {math(forecastMaxTemp)}
        <sup>o</sup>F
      </h1>
      <h1>
        L: {math(forecastMinTemp)}
        <sup>o</sup>F
      </h1>
      <h2>{mydate}</h2>
    </div>
  );
};

export default Forecast;
