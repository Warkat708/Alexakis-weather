let now = new Date ();
let day = now.getDay ();
let number = now.getDate ();
let hour = now.getHours ();
let min = now.getMinutes (); 

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
let minAdjust = (`0${min}`); 
let beautiful = `${today} ${hour}:${min}`

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
function displayForecast(response) {
  let forecastElement=document.querySelector("#forecast");
let days = ["Thur", "Fri", "Sat", "Sun", "Mon", "Tues"];

let forecastHTML=`<div class= "row">`;

days.forEach(function (day) {
forecastHTML = 
forecastHTML + `
        <div class="col-2">
            <div class="weather-forecast-date">${day}</div>
            <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" width="42">
            <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max"> 18° </span>
            <span class="weather-forecast-temperature-min"> 12° </span>
        </div>
    </div>
`;
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
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#currentButton");
currentLocationButton.addEventListener("click", getCurrentLocation);

function displayFarenheitTemperature(event) {
  event.preventDefault(); 
  let farenheitTemperature = (celsiusTemperature*9)/5 +32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML=farenheitTemperature;
}

let celsiusTemperature=null; 

let farenheitLink=document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", displayFarenheitTemperature);
