# Fun With Multiple APIs

Up until this point, you've been able to gain a lot of experience working with a single API, rendering pretty much exactly what has been given to you from the back end. For this challenge, we will now need to access multiple back end routes. Correctly displaying the needed data will require you to take data retrieved from one fetch request and pass that data to a second route, which will return the content to populate the DOM. The second route ONLY accepts latitude and longitude as position data, which explains the need for the multiple calls.

## Objectives

- Create a site with a form which takes in a location data point (zip code, address, city, etc) and returns a geocode object from one of Google's API.  

- The data you get back from this first call will contain a latitude and longitude value, which will need to be passed to the second get request in order to retrieve weather data from the second provided URI.

- With the data from the second call, render the daily forecast provided.

## Getting started

A barebones HTML scaffold has been provided for your in `index.html`. In `index.js`, grab the appropriate DOM elements that you will need to access to submit your fetch requests.

You will use the following endpoints to access the data.

`BASE_URL = https://weather-app-rails.herokuapp.com`

`LOCATION_ENDPOINT = /location/${location}`

`WEATHER_ENDPOINT = /weather?loc="${latitude}_${longitude}"`

Location and weather data are being provided by Google and Dark Sky. We have set up these routes as it is typically inadvisable to store API keys on the front end of a client facing application.

Ultimately, how you display your forcast is completely up to you, but at minimum it will want to display a parsed date object followed by the summary for each day's weather forecast.

## Stretch Goals

If you find yourself finishing this lab early, here are some other goals that will stretch your comprehension of various aspects of web development.

1. Make it look pretty! - We've purposefully left the front end of this application very bare bones. Once you have the data displayed as needed, spice up your css and html skills and make this all look a little more appealing that just plain html.

2. Visit the resource links below, obtain an API key or two, and refactor your code to hit these routes directly. As noted above, this is not typically best practice, but the skills gained from reading documentation and applying that knowledge are what you'll be using constantly as a developer. JUST DON'T PUSH YOUR API KEYS UP TO GITHUB.

3. Want to follow best practices? Build out a rails server with it's own endpoints to hit these APIs in a more appropriate way. This will likely take more time, but will again to help solidify the ways in which your front end interacts with the back end, giving you full control over both.

## Resources

- Location data provided by [Google's Geocoding Service](https://developers.google.com/maps/documentation/javascript/geocoding)

- Weather data provided by [Dark Sky's API](https://darksky.net/dev/docs)
