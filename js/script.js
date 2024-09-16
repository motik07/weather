//*            made by the student moti oved! 😉
//! ****************** sider declarations: ******************
let sider = document.querySelector("#sider_id");
let hamburger = document.querySelector("#id_sider_btn");
let bool = true;
hamburger.addEventListener("click", (event) => {
  bool = !bool;
  switch (bool) {
    case false:
      sider.style.left = "0%";
      break;
    case true:
      sider.style.left = "-100%";
      break;
  }
  console.log(bool);
});
//! ****************** weather declarations: ******************
const API_KEY = `30ac524f525b4dbd88e4298db5f8ff7a`;
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;
const query = document.querySelector("#input_citys"); 
const btn = document.querySelector("#btn"); 
let cityName = document.querySelector("#id_present_city"); 
let temperature = document.querySelector("#id_present_temperature");
let description = document.querySelector("#id_description");
let errorMesseage = document.querySelector("#id_error_text");
let weatherInfo = document.querySelector("#id_weather_info");
let weatherIcon = document.querySelector("#id_weather_icon");
let dayInfo = document.querySelector("#id_present_day");
let presentTime = document.querySelector("#id_date");
let windInfo = document.querySelector("#id_present_wind"); 
let humidityInfo = document.querySelector("#id_present_humidity"); 
let tempMax = document.querySelector("#id_present_temp_max");
let tempMin = document.querySelector("#id_present_temp_min");
let feelsLike = document.querySelector("#id_present_feel_temp");
let pressure = document.querySelector("#id_pressure");
let visibility = document.querySelector("#id_visibility");
let countryCode = document.querySelector("#id_country_code");

let time = new Date();
let day = time.getDay();
let dayDate = time.getDate();
let month = time.getMonth() + 1;
let year = time.getFullYear();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

function getDayName(dayInfo) {
  switch (dayInfo) {
    case 0:
      return "SUNDAY";
    case 1:
      return "MONDAY";
    case 2:
      return "TUESDAY";
    case 3:
      return "WEDNSDAY";
    case 4:
      return "THURSDAY";
    case 5:
      return "FRIDAY";
    case 6:
      return "SATURDAY";
  }
}
day = getDayName(day);
let currentTime = `${dayDate}/${month}/${year} ${hours < 10 ? `0${hours}` : hours}:${minutes}:${ seconds < 10 ? "0" + seconds : seconds
}${hours > 12 ? ` PM` : ` AM`}`;
console.log(currentTime);

async function getWeather(city) {
  if (city != "") {
    try {
      const response = await fetch(URL + city);
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      console.log(new Error(error));
    }
  } else {
    // alert("Enter country name please!");
    query.placeholder = "Enter country please!";
  }
}

// `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

function displayWeather(weatherData) {
  let currentIcon;

  switch (weatherData.weather[0].icon) {
    case "01d":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg`;
      break;
    case "01n":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/moon-full.svg`;
      break;
    case "02d":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg`;
      break;
    case "02n":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night.svg`;
      break;
    case "03d":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg`;
      break;
    case "03n":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg`;
      break;
    case "04d":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg`;
      break;
    case "04n":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme.svg`;
      break;
    case "09d":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-rain.svg`;
      break;
    case "09n":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-rain.svg`;
      break;
    case "10d":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg`;
      break;
    case "10n":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-rain.svg`;
      break;
    case "11d":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-overcast.svg`;
      break;
    case "11n":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night-overcast.svg`;
      break;
    case "13d":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg`;
      break;
    case "13n":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-snow.svg`;
      break;
    case "50d":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/haze.svg`;
      break;
    case "50n":
      currentIcon = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-haze.svg`;
      break;
  }

  if (weatherData.cod == 200) {
    //^  zone:
    cityName.textContent = weatherData.name;
    countryCode.textContent = `${weatherData.sys.country}`;
    //^  temperatures:
    temperature.textContent = `${weatherData.main.temp}°C`;
    tempMax.textContent = `max temp: ${weatherData.main.temp_max}°C`;
    tempMin.textContent = `max temp: ${weatherData.main.temp_min}°C`;
    feelsLike.textContent = `feels like: ${weatherData.main.feels_like}°C`;
    //^  field conditions:
    windInfo.textContent = `wind: ${weatherData.wind.speed} km/h`;
    humidityInfo.textContent = `humidity: ${weatherData.main.humidity}%`;
    visibility.textContent = `visibility: ${weatherData.visibility}m`;
    pressure.textContent = `pressure: ${weatherData.main.pressure}mb`;
    //^  descriptions:
    description.textContent = weatherData.weather[0].description;
    //^  time:
    presentTime.textContent = currentTime;
    dayInfo.textContent = day;
    //^  icon:
    weatherIcon.src = currentIcon;
  } else {
    //^  zone:
    cityName.textContent = "";
    countryCode.textContent = "";
    //^  temperatures:
    temperature.textContent = "";
    tempMax.textContent = "";
    tempMin.textContent = "";
    feelsLike.textContent = "";
    //^  field conditions:
    windInfo.textContent = "";
    humidityInfo.textContent = "";
    visibility.textContent = "";
    pressure.textContent = "";
    //^  descriptions:
    description.textContent = "";
    //^  time:
    presentTime.textContent = "";
    dayInfo.textContent = day;
    //^  icon:
    weatherIcon.src = "";
    errorMesseage.innerHTML = `<p class="error-text">${weatherData.message}</p>`;
  }
}

btn.addEventListener("click", ($event) => {
  getWeather(query.value);
});

window.addEventListener("keypress", ($event) => {
    if ($event.key === "Enter") getWeather(query.value);;
});
