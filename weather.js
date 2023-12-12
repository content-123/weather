function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityInput)}&appid=cb2fe737365cdf54082827a9b4f47b4f`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        document.getElementById('weatherDescription').textContent = data.weather[0].description;
        const temperature = data.main.temp - 273.15; // Convert to Celsius
        document.getElementById('temperature').textContent = `Temperature: ${temperature.toFixed(2)}°C`;
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }
  