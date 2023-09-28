import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  //State to manage weather data with default values, updated when API retrieves data
  const [weatherData, setWeatherData] = useState(
      {location: '...', temp: '...', weatherDesc: '...', uvIndex: '...'}
  );

  //Fetches weather data from an API on initial render
  useEffect(() => {
    const apiUrl = `https://wttr.in/?format=j1`;
    const fetchWeatherData = () => {
      return fetch(apiUrl)
          .then((res) => res.json())
          .then((res) => {
              const resLocation = res.nearest_area[0].areaName[0].value;
              const resTemp = res.current_condition[0].temp_C;
              const resWeatherDesc = res.current_condition[0].weatherDesc[0].value;
              const resUvIndex = res.current_condition[0].uvIndex;
              setWeatherData({
                location: resLocation, 
                temp: resTemp, 
                weatherDesc: resWeatherDesc,
                uvIndex: resUvIndex
              });
          })
          .catch((error) => {
              console.error("Error:", error);
          });
     };
      fetchWeatherData();
    }, []);

  return (
    <div className="App">
        <NavBar/>
        <h1 data-testid="PageHeading" className='mt-5'>Today's Weather</h1>
        <hr className="rounded trimMargin"></hr>
        <WeatherCard weather ={weatherData}/>
    </div>
  );
}

export default App;