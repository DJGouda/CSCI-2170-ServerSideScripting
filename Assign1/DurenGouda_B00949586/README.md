# Assignment 1 - Interactive Web Application

## Student Information

- **Name**: Duren Gouda
- **Student ID**: B00949586
- **Date Created**: January 23, 2025

## Application Type and Description

**Application Type:** Weather Application

**Description :**
I thought this to be interesting that is why I made it.

## Additional Details [As Needed]

*** MausamApp - The Weather App ***

**Description**

MausamApp is a web-based weather application that allows users to search for cities and view their current weather conditions as well as a 7-day weather forecast. The application also provides the ability to favorite cities and manage them on a separate “Favorites” page, allowing users to keep track of their preferred cities.

**Features**
	•	City Search: Users can search for cities by name, and the application will display matching cities with their country names.
	•	Weather Display: The current weather for a selected city is shown, including temperature, humidity, and wind speed.
	•	7-Day Weather Forecast: Displays a 7-day weather forecast with high and low temperatures, precipitation, and wind speeds.
	•	Favorites: Users can add and remove cities from their “Favorites” list by clicking on a star button next to each city.
	•	Favorites Page: A separate page allows users to view and manage their favorite cities.
        (To add favourite just click the "★" icon and  vice-versa to remove from the favouties page.)
	•	Responsive Design: The application is built to be responsive, ensuring it works across a variety of screen sizes.

## Citations & Acknowledgements

**API Links:**

1. API used  (Base) -  https://open-meteo.com/

2. API full endpoint - https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=auto , latitude and longitude as per the provided data.json file

**Bootstrap Links:**

1. Main - https://getbootstrap.com/docs/5.3/getting-started/introduction/#cdn-links
2. CSS -  https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
3. JS - https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js


**Setup and Run Instructions**


Before setting up and running the WeatherApp, ensure we have the following installed on our local device:
	1.	Ofcourse, a web browser (I use Firefox).
	2.	XAMPP for serving the application locally (I faced difficulty while setting this up during the starting but now its good).
	3.	And very important, Internet connection to fetch weather data from the Open-Meteo API (I use EastLink, Jio was good back in India).

*CORS Issues:* If you encounter CORS issues(which I did and spend like a week to figure out why it was not working) when fetching data from the API, ensure you’re running the app on a local server (I use) XAMPP. Directly opening the index.html file in the browser may block external requests (Which did for me, crazy right??).

""Thank you for reading this README, that is why it is called ReadME ig LOL.""