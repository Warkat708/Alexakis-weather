let now = new Date ();
let day = now.getDay ();
let number = now.getDate ();
let hour = now.getHours ();
let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

let today = days[now.getDay()];
let beautiful = `${today} ${hour}:${minutes}`

date = document.querySelector("#currentTime")
date.innerHTML = beautiful;

function getForecast (coordinates) {
  console.log(coordinates);
  let apiKey = "5fe458900dd572eaefce331c17176dd2";
  let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`; 
  axios.get(apiUrl).then(displayForecast);
}

function displayWeather(response) {
  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#city");
  let degreesElement = document.querySelector("#degrees");
  let realFeel = document.querySelector("#realFeel");
  let windElement = document.querySelector("#wind"); 
  let iconElement = document.querySelector("#icon");
  let humidityElement = document.querySelector("#humidity");

celsiusTemperature=response.data.main.temp;
descriptionElement.innerHTML = response.data.weather[0].main; 
windElement.innerHTML = Math.round(response.data.wind.speed);
degreesElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
realFeel.innerHTML = Math.round(response.data.main.feels_like); 
humidityElement.innerHTML = response.data.main.humidity;
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

getForecast(response.data.coord);
};

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecast(response) {
let forecast = response.data.daily;

let forecastElement=document.querySelector("#forecast");

let forecastHTML=`<div class= "row">`;
forecast.forEach(function (forecastDay, index) {
  if (index<6) {
forecastHTML = 
forecastHTML + `
        <div class="col-2">
            <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
            <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="" width="42"/>
            <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max"> ${Math.round(forecastDay.temp.max)}° </span>
            <span class="weather-forecast-temperature-min"> ${Math.round(forecastDay.temp.min)}° </span>
        </div>
    </div>
`;
  }
});

forecastHTML = forecastHTML +`</div>`;
forecastElement.innerHTML=forecastHTML;
}

function foreground (event) {
  event.preventDefault (); 
  let apiKey = "5fe458900dd572eaefce331c17176dd2";
  let place = document.querySelector("#citySearch").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("form");
form.addEventListener("click", foreground); 

function faren (event) {
  event.preventDefault (); 
let temperatureElement = document.querySelector("#degrees"); 
let farenheitTemperature=(celsiusTemperature*9)/5 +32;
temperatureElement.innerHTML = Math.round(farenheitTemperature);
}
let toggle = document.querySelector ("#farenheit-link");
toggle.addEventListener ("click", faren);

function showTemp(response) {
  let temperature = response.data.main.temp; 
  console.log(temperature); 
}

let city = "Bristol";
let apiKey = "5fe458900dd572eaefce331c17176dd2";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


axios.get(apiUrl).then(showTemp);

function celsius (event) {
  event.preventDefault (); 
let data = document.querySelector("#degrees"); 
data.innerHTML = response.data.main.temp;
}




function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
  axios.get(apiUrl).then(displayForecast);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#currentButton");
currentLocationButton.addEventListener("click", getCurrentLocation);

function getGrimsby(event) {
  event.preventDefault(); 
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=53.5654&lon=-0.0755&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  axios.get(apiUrl).then(displayForecast);
}

let grimsbyLocationButton = document.querySelector("#grimsby");
grimsbyLocationButton.addEventListener("click", getGrimsby);

function getPittsburgh(event) {
  event.preventDefault(); 
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=40.4406&lon=-79.9959&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  axios.get(apiUrl).then(displayForecast);
}

let pittsburghLocationButton = document.querySelector("#pittsburgh");
pittsburghLocationButton.addEventListener("click", getPittsburgh);

function getBristol(event) {
  event.preventDefault(); 
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=51.4552&lon=-2.5967&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  axios.get(apiUrl).then(displayForecast);
}


let bristolLocationButton = document.querySelector("#bristol");
bristolLocationButton.addEventListener("click", getBristol);

function getLondon(event) {
  event.preventDefault(); 
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  axios.get(apiUrl).then(displayForecast);
}

let londonLocationButton = document.querySelector("#london");
londonLocationButton.addEventListener("click", getLondon);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink=document.querySelector("#farenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);


let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

searchLocation("London");