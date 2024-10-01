import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);

  const access_key = import.meta.env.VITE_WEATHER_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&APPID=${access_key}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [country]);

  if (weather) {
    const weatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>Capital: {country.capital}</div>
        <div>Area: {country.area} km2</div>
        <h3>Languages:</h3>
        <div>
          {Object.entries(country.languages).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </div>
        <p />
        <img src={country.flags.png} />
        <h3>Weather in {country.name.common}</h3>
        <div>Temperature: {weather.main.temp} Celsius</div>
        <img src={weatherIcon} />
        <div>Wind: {weather.wind.speed} m/s</div>        
      </div>
    );
  } else {
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital}</div>
      <div>Area: {country.area} km2</div>
      <h3>Languages:</h3>
      <div>
        {Object.entries(country.languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </div>
      <p />
      <img src={country.flags.png} />
    </div>;
  }
};

export default Country;