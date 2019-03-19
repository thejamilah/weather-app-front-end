const BASE_URL = 'https://weather-app-rails.herokuapp.com'

const locationField = document.getElementById('location');
const locationSubmit = document.getElementById('location-submit');
const weatherDisplay = document.getElementById('weather-display');


locationSubmit.addEventListener('click', () => {
  event.preventDefault();
  if (locationField.value === '') {
    alert('Enter a value please');
    return;
  } else {
    getLocation(locationField.value);
  }
})

const getLocation = (loc) => {
  fetch(`${BASE_URL}/location/${loc}`)
  .then(res => res.json())
.then(json => {
  let lat = json.results[0].geometry.location.lat;
  let lng = json.results[0].geometry.location.lng;
  getWeather(lat, lng);
});
}

const getWeather = (lat, lng) => {
  fetch(`${BASE_URL}/weather?loc="${lat}_${lng}`)
  .then(res => res.json())
  .then(json => {
    displayForecast(json);
  });
}

const displayForecast = (data) => {
  const forecastList = document.createElement('ul');
  weatherDisplay.appendChild(forecastList);
  const forecast = data.daily.data;
  for (let i = 0; i < forecast.length; i++) {
    const daily = document.createElement('li');
    daily.textContent = forecast[i].summary;
    forecastList.appendChild(daily);
  }
}