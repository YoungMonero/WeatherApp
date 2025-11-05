const apiKey = "0b6bbc8efac4aba518525ffead5e1972";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherSection = document.querySelector(".weather");

const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        alert("City not found");
        return;
    }

    const data = await response.json();

    // Fill the weather info
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    // Change the icon based on weather
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./images/mist.png";
    }
}

    weatherSection.classList.remove("show");
    setTimeout(() => weatherSection.classList.add("show"), 100);

searchButton.addEventListener("click", () => {
    getWeather(searchBox.value);
});