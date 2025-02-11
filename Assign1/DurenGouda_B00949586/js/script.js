/**@Duren Gouda
    B00949586
*/

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchCity");
    const cityList = document.getElementById("cityList");

    // this will fetch the data.json file 
    fetch("js/data.json")
        .then(response => response.json())
        .then(cities => {
            searchInput.addEventListener("input", function () {
                const query = searchInput.value.toLowerCase();
                cityList.innerHTML = ""; // if any previous, it will clear it

                const filteredCities = cities.filter(city =>
                    city.name.toLowerCase().includes(query)
                );

                if (filteredCities.length === 0) {
                    cityList.innerHTML = "<li class='list-group-item'>No results found</li>";
                } else {
                    filteredCities.forEach(city => {
                        const li = document.createElement("li");
                        li.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
                        li.textContent = `${city.name}, ${city.country}`;

                        //star button for favourites
                        const starButton = document.createElement("button");
                        starButton.className = "btn btn-outline-warning btn-sm";
                        starButton.innerHTML = "★"; // the star icon I took from my mac's keyboard signs "★★"
                        starButton.addEventListener("click", () => toggleFavorite(city));

                        li.appendChild(starButton);

                        li.addEventListener("click", () => fetchWeather(city));

                        cityList.appendChild(li);
                    });
                }
            });
        })
        .catch(error => console.error("Error loading city data:", error)); // if error is found
});

// method for favorite city
/**
 * I have stored the information for a browser session, learned form the example explained in 
 * "https://www.w3schools.com/jsref/prop_win_localstorage.asp"
 * Also I have used it below with reference to w3schools.com
 */
function toggleFavorite(city) {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    const cityIndex = favourites.findIndex(fav => fav.name === city.name && fav.country === city.country);

    if (cityIndex === -1) {
        favourites.push(city);
        alert(`${city.name} has been added to your favourites!`);
    } else {
        favourites.splice(cityIndex, 1);
        alert(`${city.name} has been removed from your favourites.`);
    }

    // here this updates and stores favourites to localStorage, the localStorage property I learned in "w3schools", link provided above
    localStorage.setItem("favourites", JSON.stringify(favourites)); 
}

// method to fetch weather data from the API provided in the A1 requirement
// API used  (Base) -  https://open-meteo.com/

function fetchWeather(city) {
    const { latitude, longitude, name, country } = city; // made a city object to extract the info from the json file
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=auto`; // provided in the A1 requirement, link a little different for the sake of the assignment

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayCurrentWeather(data.current_weather, name, country);
            displayForecast(data.daily);
        })
        .catch(error => console.error("Error fetching weather data:", error));
}

// method to display the current weather
function displayCurrentWeather(weather, cityName, country) {
    document.getElementById("cityTitle").textContent = `${cityName}, ${country}`;
    document.getElementById("temperature").textContent = `Temperature: ${weather.temperature}°C`;
    document.getElementById("humidity").textContent = `Humidity: ${weather.relative_humidity || "N/A"}%`;
    document.getElementById("windspeed").textContent = `Wind Speed: ${weather.windspeed} km/h`;
}

// method to display the hourly & 7-day weather forecast
function displayForecast(daily) {
    const forecastContainer = document.getElementById("hourly-weather");
    forecastContainer.innerHTML = ""; // will clear the  previous forecast first

    for (let i = 0; i < daily.time.length; i++) {
        const date = new Date(daily.time[i]).toDateString();
        const maxTemp = daily.temperature_2m_max[i];
        const minTemp = daily.temperature_2m_min[i];
        const precipitation = daily.precipitation_sum[i];

        const forecastItem = document.createElement("li");
        forecastItem.className = "list-group-item";
        forecastItem.innerHTML = `<strong>${date}:</strong> Max: ${maxTemp}°C, Min: ${minTemp}°C, Precipitation: ${precipitation}mm`;
        forecastContainer.appendChild(forecastItem);
    }
}