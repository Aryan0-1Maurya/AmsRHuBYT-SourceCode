require('dotenv').config();
const axios = require('axios');
const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter city name: ', async (city) => {
    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        console.log(`Weather in ${data.name}, ${data.sys.country}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Weather: ${data.weather[0].description}`); 
        console.log(`Humidity: ${data.main.humidity}%`);
        console.log(`Wind Speed: ${data.wind.speed} m/s`);
        console.log(`Visibility: ${data.visibility / 1000} km`);
        console.log(`Cloudiness: ${data.clouds.all}%`);
        console.log(`Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`);
        console.log(`Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`);
    } catch (error) {
        if (error.response) {
            log(`Error: ${error.response.data.message}`);
        } else if (error.request) {
            log('Error: No response received from the server.');
        } else {
            log(`Error: ${error.message}`);
        }
    }
    rl.close();
}
);