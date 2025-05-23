// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh
// Created on: May 2025
// This file contains the JS functions for index.html
  "use strict"
/**
 * This function gets the weather today
 * The 'async' is there because it will take time for the internet to return the value
 */
async function weatherToday() {
  // the 'try' is here because the internet may not be working
  // it is like an 'if ... else' statement'
  try {
    const resultJSON = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
    )
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    // bring the information from API
    const iconCode = jsonData.weather[0].icon
    const tempCelsius = (jsonData.main.temp - 273.15).toFixed(1)
    // output
    document.getElementById("weather-icon").src =
      "https://openweathermap.org/img/wn/" + iconCode + "@2x.png"
    document.getElementById("weather-today").innerHTML = "Temperature is " +
      tempCelsius +
      " °C"
  } catch (error) {
    console.error(error)
  }
}
