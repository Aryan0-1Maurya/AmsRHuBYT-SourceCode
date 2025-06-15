require('dotenv').config();
const axios = require('axios');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));
app.post('/weather', express.json(), async (req, res) => {
    const {city} = req.body;
    const apiKey = process.env.WEATHER_API_KEY;
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        res.json({
            name: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            visibility: data.visibility / 1000,
            cloudiness: data.clouds.all,
            sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
        });
    }
    catch (error) {
        if (error.response) {
            res.status(400).json({ error: error.response.data.message });
        } else if (error.request) {
            res.status(500).json({ error: 'No response received from the server.' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}
);
app.listen(port, () => {
    console.log(`Weather GUI server running at http://localhost:${port}`);
}   );