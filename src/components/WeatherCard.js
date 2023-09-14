import React from 'react';
import Card from 'react-bootstrap/Card';

import weatherIMG from '../images/weather.jpg';
import './WeatherCard.css';

const WeatherCard = props => {
        
    const { location, temp, weatherDesc, uvIndex } = props.weather;

    return (
        <div className='centered'>
            <Card className='mt-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src= { weatherIMG } />
                <Card.Body>
                    <Card.Title data-testid="WeatherLocation">{ location }</Card.Title>
                    <hr className="dashed"></hr>
                    <Card.Text>
                        <li data-testid="WeatherDescription">{ weatherDesc }</li>
                        <li data-testid="Temperature"> Temperature: { temp }{'\u2103'}</li>
                        <li data-testid="UVIndex"> UV Index: { uvIndex }</li>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};

export default WeatherCard;