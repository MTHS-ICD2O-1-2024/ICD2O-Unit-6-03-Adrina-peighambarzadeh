// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: May 2025
// This file contains the JS functions for index.html
'use strict'
/**
* This function gets the weather today
* The 'async' is there because it will take time for the internet to return the value
*/
async function weatherToday () {
 // the 'try' is here because the internet may not be working
 // it is like an 'if ... else' statement'
 try {
   const resultJSON = await fetch(
     'https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5'
   )
   const jsonData = await resultJSON.json()
   console.log(jsonData)
   // bring the information from API
   const iconCode = jsonData.weather[0].icon
   const location = jsonData.name
   const coordinate = jsonData.coord
   const weatherMain = jsonData.weather[0].main
   const weatherDescription = jsonData.weather[0].description
   const tempCelsius = (jsonData.main.temp - 273.15).toFixed(1)
   const windSpeed = jsonData.wind.speed
   // output
   document.getElementById('weather-icon').src = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png'
   document.getElementById('weather-today').innerHTML =
     'Location: ' + location + ' (lat: ' + coordinate.lat + ', lon: ' + coordinate.lon + ')<br />' +
     'Weather: ' + weatherMain + '; ' + weatherDescription + '<br />' +
     'Temperature: ' + tempCelsius + ' °C<br />' +
     'Wind speed: ' + windSpeed + ' m/h<br />'
 } catch (error) {
   console.error(error)
 }
}

