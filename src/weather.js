import React, { useState } from 'react';

export default function Weather() {
    const [temperature, setTemperature] = useState(null);
    const [weather, setWeather] = useState(null);

    return (
        <div>
            City:
            <input type="text" data-testid="city-input" />
            <button data-testid="submit-button" onClick={() => handleSubmit()}>Submit</button>
        </div>
    );

    function handleSubmit() {
        setTemperature(29);
        setWeather("Hot");
    }
}
