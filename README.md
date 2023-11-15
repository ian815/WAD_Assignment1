# Assignment 1
## Weather tracker
This is an node module to provide weather details. There are many functions to get details on the weather such as temperature, rain, UV index and forecast. These are done using open weather map's API. There are also functions to aid you in finding out the latitude/longitude of a location, or find a location name depending on the latitude/longitude with the use of Google Maps API. The documentations for both API's can found below.

# Functions
## Find location name using Latitude and Longitude (getLocationByLatLon)
This function will output the name of the location according to the latitude and longitude entered
Take note for the parameters that **Latitude comes before Longitude**

Input example:<br>
```ruby
getLocationByLatLon(1.290270,103.851959)
```
Output example: <br>
Function: getLocationByLatLon<br>
Location:  Singapore

Error handling:
If theres an issue with the inputted values(Latitude and Longitude), an console error message would appear displaying "Latitude or Longitude value is invalid".

## Find Latitude and Longitude using Location name (getLatLonByLocation)
This function will output the latitude and longitude of the location entered.

Input example:<br>
getLatLonByLocation(Singapore)

Output example:<br>
Function: getLatLonByLocation<br>
Location: Singapore<br>
Latitude: 1.352083<br>
Longitude: 103.819836

Error handling:
If theres an issue with the inputted value(Location), an console message would appear displaying "Entered address can't be found".

## Find current weather of the location entered (getCurrentWeather)
This function will output the current weather of a place based on the location name entered. Details of the weather that are shown are temperature in both kelvin and celsius, weather and rain if there is.

Input example:<br>
getCurrentWeather(Singapore)

Output example:<br>
Function: getCurrentWeather<br>
Location: Singapore<br>
Temperature(kelvin): 299.64<br>
Temperature(celsius): 26.49000000000001<br>
Weather: scattered clouds

Error handling:
If theres an issue with the inputted value(Location), an console message would appear displaying "Location value is invalid".

## Find current weather of a location based on latitude and longitude (getWeatherByCoordinates)
This function will output the current weather of a place based on the latitude and longitude entered. Details of the weather that are shown are temperature in both kelvin and celsius, weather and rain if there is.

Input example:<br>
getWeatherByCoordinates(1.290270,103.851959)

Output example:<br>
Function: fetchWeatherByCoordinate<br>
Location: Singapore<br>
Temperature(kelvin): 300.31<br>
Temperature(celsius): 27.160000000000025<br>
Weather: scattered clouds

Error handling:
If theres an issue with the inputted value(Latitude), an console message would appear displaying "Latitude value is invalid". And if theres an issue with the inputted value(Longitude), an console message would appear displaying "Longitude value is invalid". 

## Find current weather of a location based on zip code and country code(getWeatherByZipCode)
This function will output the current weather of a place based on the zip and country code entered. Details of the weather that are shown are temperature in both kelvin and celsius, weather and rain if there is.

Note that there are many restrictions with this function. The zip code and country code for a location has to be retrieved from **"Open Weather Map" sample data list** which can be found in the documentations. The file name in that webpage containing the **zip and country codes is "city.list.json.gz"**.

Input example:<br>
getWeatherByZipCode(90011,US)

Output example:<br>
Function: fetchWeatherByZipcode<br>
Location: Los Angeles<br>
Temperature(kelvin): 288.94<br>
Temperature(celsius): 15.79000000000002<br>
Weather: overcast clouds

Error handling:
If theres an issue with the inputted value(zipCode/countryCode), an console message would appear displaying "Zip or country code invalid".

## Find forecast of a location according to the amount of days entered (getForecast)
This function will output the current weather and weather for the next few days according to the amount of days entered. Details of the weather that are shown are temperature in both kelvin and celsius, weather and rain if there is.

Note that by entering 3 for the days field, the function would output the current weather and the weather for the next 2 days only.

Input example:<br>
getForecast(Singapore,3)

Output example:

Day: 0<br>
Function: fetchForecast<br>
Location: Singapore<br>
Temperature(kelvin): 300.02<br>
Temperature(celsius): 26.870000000000005<br>
Weather: broken clouds

Day: 1<br>
Function: fetchForecast<br>
Location: Singapore<br>
Temperature(kelvin): 300.18<br>
Temperature(celsius): 26.870000000000005<br>
Weather: broken clouds

Day: 2<br>
Function: fetchForecast<br>
Location: Singapore<br>
Temperature(kelvin): 300.15<br>
Temperature(celsius): 26.870000000000005<br>
Weather: light rain

Error handling:
If theres an issue with the inputted value(Location), an console message would appear displaying "Location value is invalid". And if theres an issue with the inputted value(days), an console message would appear displaying "Days value: "+3<sup>This value changes according to the number entered by user. In this example, it is 3</sup>+" is not a number". 

## Find current weather alerts of a location(getWeatherAlerts)
This function will output the current weather alert of a place based on the Location entered.

Input example:<br>
getWeatherAlerts(Singapore)

Output example:<br>
Function: fetchWeatherAlerts<br>
Location: Singapore<br>
No Alerts

Error handling:
If theres an issue with the inputted value(Location), an console message would appear displaying "Location value is invalid". 

## Find UV Index of a location(getWeatherUV)
This function will output the UV Index of a location based on the Latitude and Longitude entered.

Input example:<br>
getWeatherUV(1.290270,103.851959)

Output example:<br>
Function: fetchWeatherUVIndex<br>
Location:  Singapore<br>
UV Index: 13.57

Error handling:
If theres an issue with the inputted value(Latitude), an console message would appear displaying "Latitude value is invalid". And if theres an issue with the inputted value(Longitude), an console message would appear displaying "Longitude value is invalid".

## Documentations
openweathermap documentation: https://openweathermap.org/current#geocoding<br>
openweathermap sample data: https://bulk.openweathermap.org/sample/<br>
google maps geocoding documentation: https://developers.google.com/maps/documentation/geocoding/requests-geocoding