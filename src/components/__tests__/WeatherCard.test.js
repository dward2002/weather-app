import { render, screen } from '@testing-library/react';
import WeatherCard from '../WeatherCard';

test('renders WeatherCard Component', () => {
    const weatherData = {location: "Dudley", temperature: 15};
    render(<WeatherCard weather = {weatherData}/>);
  });

test('WeatherCard Displays Correct Location',() => {
    const weatherData = {location: "Dudley", temperature: 15};
    render(<WeatherCard weather = {weatherData}/>);
    const NewWeatherElement = screen.getByTestId('WeatherLocation');
    expect(NewWeatherElement).toHaveTextContent("Dudley");
});

test('WeatherCard Displays Correct Temperature',() => {
    const weatherData = {location: "Dudley", avgTemp: 15, temp: 10};
    render(<WeatherCard weather = {weatherData}/>);
    const NewWeatherElement = screen.getByTestId('Temperature');
    expect(NewWeatherElement).toHaveTextContent("Temperature: 10\u2103");
});

test('WeatherCard Displays Correct Weather Description',() => {
    const weatherData = {location: "Dudley", avgTemp: 15, temp: 10, weatherDesc: "Partly cloudy"};
    render(<WeatherCard weather = {weatherData}/>);
    const NewWeatherElement = screen.getByTestId('WeatherDescription');
    expect(NewWeatherElement).toHaveTextContent("Partly cloudy");
});

test('WeatherCard Displays Correct UV Index',() => {
    const weatherData = {location: "Dudley", avgTemp: 15, temp: 10, weatherDesc: "Partly cloudy", uvIndex: 5};
    render(<WeatherCard weather = {weatherData}/>);
    const NewWeatherElement = screen.getByTestId('UVIndex');
    expect(NewWeatherElement).toHaveTextContent("UV Index: 5");
});