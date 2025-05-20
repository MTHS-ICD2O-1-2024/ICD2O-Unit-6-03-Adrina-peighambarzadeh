
// Copyright (c) 2025 Adrina Peighambarzadeh
//
// Created by: Adrina Peighambarzadeh
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets the current weather.
 */
async function getWeather() {
  // Replace this with your actual API key from Google Classroom
  const apiKey = "YOUR_API_KEY_HERE"
  const city = "Toronto"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  try {
    const resultJSON = await fetch(url)
    const jsonData = await resultJSON.json()
    // console.log(jsonData)

    const temperature = jsonData.main.temp
    const description = jsonData.weather[0].description
    const iconCode = jsonData.weather[0].icon
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

    // output
    document.getElementById("weather-temp").innerHTML = "<p>Temperature: " + temperature + "°C</p>"
    document.getElementById("weather-description").innerHTML = "<p>Conditions: " + description + "</p>"
    document.getElementById("weather-icon").innerHTML = '<img src="' + iconURL + '" alt="Weather icon">'
  } catch (error) {
    console.error(error)
    document.getElementById("weather-temp").innerHTML = "<p>Could not get weather data.</p>"
    document.getElementById("weather-description").innerHTML = ""
    document.getElementById("weather-icon").innerHTML = ""
  }
}



