const axios = require('axios');
const apiKey = "b5637ec2e4781eb98b3a8e438276f1a7";
const apiUrl = 'http://api.openweathermap.org/data/2.5';
const googleApiKey = "AIzaSyAd-OTcBkWsUj0FCLYUfwLSHyTKa_PnsnA";
const googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";

module.exports = {
    async getLocationByLatLon(lat,lng){
        try{
            const response = await axios.get(`${googleApiUrl}latlng=${lat},${lng}&key=${googleApiKey}`);
            const functionName="Function: getLocationByLatLon";
            const locationName = "\nLocation: "+response.data.plus_code.compound_code.substring(8)+"\n==================================================";
            return functionName+locationName;
        }catch(error){
            if(error.response.status == 400 && error.response.data.error_message=="Invalid request. Invalid 'latlng' parameter."){
                console.error("Latitude or Longitude value is invalid");
                throw error;
            }
            else {
                throw error;
            }
        }
    },
    async getLatLonByLocation(location){
        try{
            const response = await axios.get(`${googleApiUrl}address=${location}&key=${googleApiKey}`);
            if(response.data.status=='ZERO_RESULTS'){
                return "Entered address can't be found";
            }else{
                const functionName="Function: getLatLonByLocation";
                const locationName = "\nLocation: "+location;
                const latitudenum = "\nLatitude: "+response.data.results[0].geometry.location.lat;
                const LongitudeNum = "\nLongitude: "+response.data.results[0].geometry.location.lng+"\n==================================================";
                return functionName+locationName+latitudenum+LongitudeNum;
            }
        }catch(error){
            throw error;
        }
    },
    async getCurrentWeather(location){
        try {
            const response = await axios.get(`${apiUrl}/weather?q=${location}&appid=${apiKey}`);
            const celsius=response.data.main.temp-273.15;
            const functionName="Function: getCurrentWeather";
            const locationName="\nLocation: "+response.data.name;
            const tempKelvin="\nTemperature(kelvin): "+response.data.main.temp;
            const tempCelsius="\nTemperature(celsius): "+celsius;
            const weather="\nWeather: "+response.data.weather[0].description;
            const rain="\n==================================================";
            if(response.data.rain=='undefined'||"[object Object]"){
            }
            else{
                const rain="\nRain: "+response.data.rain;
            }
            return functionName+locationName+tempKelvin+tempCelsius+weather+rain;
            // return response.data;
        } catch (error) {
            if(error.response.status == 404 && error.response.data.message=='city not found'){
                console.error("Location value is invalid");
                throw error;
            }
            else {
                throw error;
            }
        }
    },
    async getWeatherByCoordinates(lat,lon){
        try {
            const response = await axios.get(`${apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
            const celsius=response.data.main.temp-273.15;
            const functionName="Function: fetchWeatherByCoordinate";
            const locationName="\nLocation: "+response.data.name;
            const tempKelvin="\nTemperature(kelvin): "+response.data.main.temp;
            const tempCelsius="\nTemperature(celsius): "+celsius;
            const weather="\nWeather: "+response.data.weather[0].description;
            const rain="\n==================================================";
            if(response.data.rain=='undefined'||"[object Object]"){
            }
            else{
                const rain="\nRain: "+response.data.rain;
            }
            return functionName+locationName+tempKelvin+tempCelsius+weather+rain;
            // return response.data;
        } catch (error) {
            if(error.response.status == 400 && error.response.data.message=='wrong latitude'){
                console.error("Latitude value is invalid");
                throw error;
            }
            else if(error.response.status == 400 && error.response.data.message=='wrong longitude'){
                console.error("Longitude value is invalid");
                throw error;
            }
            else {
                throw error;
            }
        }
    },
    async getWeatherByZipCode(zipcode,countrycode){
        try {
            const response = await axios.get(`${apiUrl}/weather?zip=${zipcode},${countrycode}&appid=${apiKey}`);
            const celsius=response.data.main.temp-273.15;
            const functionName="Function: fetchWeatherByZipcode";
            const locationName="\nLocation: "+response.data.name;
            const tempKelvin="\nTemperature(kelvin): "+response.data.main.temp;
            const tempCelsius="\nTemperature(celsius): "+celsius;
            const weather="\nWeather: "+response.data.weather[0].description;
            const rain="\n==================================================";
            if(response.data.rain=='undefined'||"[object Object]"){
            }
            else{
                const rain="\nRain: "+response.data.rain;
            }
            return functionName+locationName+tempKelvin+tempCelsius+weather+rain;
            // return response.data;
        } catch (error) {

            if(error.response.status == 404 && error.response.data.message=='city not found'){
                console.error("Zip or country code invalid");
                throw error;
            }
            else{
                throw error;
            }
        }
    },
    async getForecast(location,days){
        try {
            const response = await axios.get(`${apiUrl}/forecast?q=${location}&cnt=${days}&appid=${apiKey}`);
            var final="\n";
            for(i=0;i<days;i++){
                const celsius=response.data.list[0].main.temp-273.15;
                const dayNumber="--------------------------------------------------\nDay: "+i;
                const functionName="\nFunction: fetchForecast";
                const locationName="\nLocation: "+location;
                const tempKelvin="\nTemperature(kelvin): "+response.data.list[i].main.temp;
                const tempCelsius="\nTemperature(celsius): "+celsius;
                const weather="\nWeather: "+response.data.list[i].weather[0].description+"\n";
                const rain="";
                if(response.data.list[0].rain=='undefined'||"[object Object]"){
                }
                else{
                    rain="\nRain: "+response.data.list[i].rain;
                }
                final=final+dayNumber+functionName+locationName+tempKelvin+tempCelsius+weather+rain;
                // const final= functionName+locationName+tempKelvin+tempCelsius+weather+rain;
            }
            const end="==================================================";
            return final+end;
            // return response.data;
        } catch (error) {
            if(error.response.status == 404 && error.response.data.message=='city not found'){
                console.error("Location value is invalid");
                throw error;
            }
            else if(error.response.status == 400 && error.response.data.message==days+" is not a number"){
                console.error("Days value: "+days+" is not a number");
                throw error;
            }
            else{
                throw error;
            }
        }
    },
    async getWeatherAlerts(location){
        try {
            const response = await axios.get(`${apiUrl}/weather?q=${location}&appid=${apiKey}`);
            // return response.data.alerts || [];
            const functionName="Function: fetchWeatherAlerts";
            const locationName="\nLocation: "+location;
            var result="";
            if(response.data.alerts='undefined'){
                result="\nNo Alerts\n==================================================";
            }else{
                console.log(response.data.alerts);
            }
            return functionName+locationName+result;
        } catch (error) {
            if(error.response.status == 404 && error.response.data.message=='city not found'){
                console.error("Location value is invalid");
                throw error;
            }
            else {
                throw error;
            }
        }
    },
    async getWeatherUV(lat,lon){
        try {
            const response = await axios.get(`${apiUrl}/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`);
            const responseLocation = await axios.get(`${googleApiUrl}latlng=${lat},${lon}&key=${googleApiKey}`);
            const locationName = "\nLocation: "+responseLocation.data.plus_code.compound_code.substring(8);
            const functionName="Function: fetchWeatherUVIndex";
            const uvIndex="\nUV Index: "+response.data.value+"\n==================================================";
            return functionName+locationName+uvIndex;
        } catch (error) {
            console.log(error);
            if(error.response.data=="Lat field is not valid: actual - "+lat+", expected - latitude "&& error.response.status==400){
                console.error("Latitude value is invalid");
                throw error;
            }
            else if(error.response.data=="Lon field is not valid: actual - "+lon+", expected - longitude "&& error.response.status==400){
                console.error("Longitude value is invalid");
                throw error;
            }
            else {
                throw error;
            }
        }
    },
}