//Feature 1
let currentDate = new Date();

let h2 = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
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
  "December",
];
let day = days[currentDate.getDay()];
let date = currentDate.getDate();
let month = months[currentDate.getMonth()];
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();

h2.innerHTML = `${day}, ${month} ${date}, ${hour}:${minutes}`;

//Feature 2

function searchCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

//Feature 3
function showCelsius(event) {
  event.preventDefault();
  let celsiusTemp = document.querySelector("#temperature");
  celsiusTemp.innerHTML = 9;
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", showCelsius);

function showFahreinheit(event) {
  event.preventDefault();
  let fahreinheitTemp = document.querySelector("#temperature");
  let temperature = fahreinheitTemp.innerHTML;
  fahreinheitTemp.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showFahreinheit);

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}
let apiKey = "2a2eaa51d996796495bf456e5b58adf4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Haarlem&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
