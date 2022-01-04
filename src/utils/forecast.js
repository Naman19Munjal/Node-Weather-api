const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=f39af29aa13e13cfab5c25290de3a57f&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}° out 🌡️. It feels like ${body.current.feelslike}° out 🥵.
         Wind is flowing in ${body.current.wind_dir} direction 🧭 with a speed of ${body.current.wind_speed} 💨. There is ${body.current.cloudcover} cloud cover ⛅ and a ${body.current.humidity} humidity 🌡.`
      );
    }
  });
};

module.exports = forecast;
