import React, { useState } from 'react';

export default function Weather() {
    const [temperature, setTemperature] = useState(null);
    const [weather, setWeather] = useState(null);

    return (
        <div>
            City:
            <input type="text" data-testid="city-input" />
            <button data-testid="submit-button" onClick={() => handleSubmit()}>Submit</button>
            <WeatherInformation temperature={temperature} weather={weather} />
        </div>
    );

    function handleSubmit() {
        setTemperature(29);
        setWeather("Hot");
    }
}

function WeatherInformation(props) {
    if (!props.temperature && !props.weather) {
        return <p>Enter the name of a city and click the Submit.</p>;
    } else {
        return <div>
            <p>Weather: {props.weather}</p>
            <p>Temperature: {props.temperature}</p>
        </div>;
    }
}