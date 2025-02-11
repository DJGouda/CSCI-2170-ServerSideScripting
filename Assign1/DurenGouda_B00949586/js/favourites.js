/**@Duren Gouda
    B00949586
*/

// this js file is for the favourites pages, in which all the cities which will be marked as favourite will be stored.

document.addEventListener("DOMContentLoaded", () => {
    const favouritesList = document.getElementById("favouritesList");
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    if (favourites.length === 0) {
        favouritesList.innerHTML = "<li class='list-group-item'>You have no favorite cities.</li>";
    } else {
        favourites.forEach(city => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `${city.name}, ${city.country}`;
            li.addEventListener("click", () => fetchWeather(city)); 
            favouritesList.appendChild(li);
        });
    }
});