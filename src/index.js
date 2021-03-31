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



console.log(season);

let beautiful = `${today} ${hour}:${min}`
console.log (beautiful);

date = document.querySelector("#currentTime")
date.innerHTML = beautiful;

function foreground (event) {
  event.preventDefault (); 
  let target = document.querySelector ("h1");
let input = document.querySelector ("#citySearch");
  target.innerHTML = input.value;  
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

function celsius (event) {
  event.preventDefault (); 
let data = document.querySelector("#degrees"); 
data.innerHTML = "19";
}

let toggleBack = document.querySelector ("#celsius-link");
toggleBack.addEventListener ("click", celsius);