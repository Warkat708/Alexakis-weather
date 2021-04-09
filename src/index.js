

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

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

let today = days[now.getDay()];
let season = months[now.getMonth()];
let minAdjust = (`0${min}`); 


let beautiful = `${today} ${hour}:${min}`

date = document.querySelector("#currentTime")
date.innerHTML = beautiful;

function displayWeather(response) {
  console.log (response.data);
  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#city");
  let degreesElement = document.querySelector("#degrees");
  let realFeel = document.querySelector("#realFeel");
  let windElement = document.querySelector("#wind"); 
  let iconElement = document.querySelector("#icon");
  let humidityElement = document.querySelector("#humidity");

descriptionElement.innerHTML = response.data.weather[0].main; 
windElement.innerHTML = Math.round(response.data.wind.speed);
degreesElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
realFeel.innerHTML = Math.round(response.data.main.feels_like); 
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
humidityElement.innerHTML = response.data.main.humidity;
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
let data = document.querySelector("#degrees"); 
data.innerHTML = "60";
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

let toggleBack = document.querySelector ("#celsius-link");
toggleBack.addEventListener ("click", celsius);



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
