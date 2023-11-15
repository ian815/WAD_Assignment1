const weather=require("./Ian_WAD.js");

const settings={
    latitude:1.290270,
    longitude:103.851959,
    location:"Singapore",
    zipcode:90011,
    countryCode:"US",
    days:"3",
}

async function fetchLocationByLatLon(){
    const latitude=settings.latitude;
    const longitude=settings.longitude;
    const res = await weather.getLocationByLatLon(latitude,longitude);
    console.log(res);
}

async function fetchLatLonByLocation(){
    const location=settings.location;
    const res = await weather.getLatLonByLocation(location);
    console.log(res);
}

async function fetchWeatherByCoordinate(){
    const latitude=settings.latitude;
    const longitude=settings.longitude;    

    const res=await weather.getWeatherByCoordinates(latitude,longitude);
    console.log(res);
    // const celsius=res.main.temp-273.15;
    // console.log("Function: fetchWeatherByCoordinate")
    // console.log("Location: "+res.name);
    // console.log("Temperature(kelvin): "+res.main.temp);
    // console.log("Temperature(celsius): "+celsius);
    // console.log("Weather: "+res.weather[0].description);
    // if(res.rain=='undefined'||"[object Object]"){
    // }else{
    //     console.log("Rain: "+res.rain);
    // }
    // console.log("==================================================");
}

async function fetchCurrentWeather(){
    const location=settings.location;

    const res=await weather.getCurrentWeather(location);
    console.log(res);
    // const celsius=res.main.temp-273.15;
    // console.log("Function: fetchCurrentWeather");
    // console.log("Location: "+res.name);
    // console.log("Temperature(kelvin): "+res.main.temp);
    // console.log("Temperature(celsius): "+celsius);
    // console.log("Weather: "+res.weather[0].description);
    // if(res.rain=='undefined'||"[object Object]"){
    // }else{
    //     console.log("Rain: "+res.rain);
    // }
    // console.log("==================================================");
}

//Doesnt support singapore
//Refer to ISO 3166(https://www.iso.org/obp/ui/#search) for state or country codes
async function fetchWeatherByZipcode(){
    const zipcode=settings.zipcode;
    const countrycode=settings.countryCode;

    const res=await weather.getWeatherByZipCode(zipcode,countrycode);
    console.log(res);
    // const celsius=res.main.temp-273.15;
    // console.log("Function: fetchWeatherByZipcode");
    // console.log("Location: "+res.name);
    // console.log("Temperature(kelvin): "+res.main.temp);
    // console.log("Temperature(celsius): "+celsius);
    // console.log("Weather: "+res.weather[0].description);
    // if(res.rain=='undefined'||"[object Object]"){
    // }else{
    //     console.log("Rain: "+res.rain);
    // }
    // console.log("==================================================");
}

async function fetchForecast(){
    const days=settings.days;
    const location=settings.location;

    const res=await weather.getForecast(location,days);
    console.log(res);
    // console.log("Function: fetchForecast");
    // for(i=0;i<days;i++){
    //     console.log("--------------------------------------------------")
    //     console.log("Day: "+i);
    //     const celsius=res.list[0].main.temp-273.15;
    //     console.log("Location: "+location);
    //     console.log("Temperature(kelvin): "+res.list[i].main.temp);
    //     console.log("Temperature(celsius): "+celsius);
    //     console.log("Weather: "+res.list[i].weather[0].description);
    //     if(res.list[0].rain=='undefined'||"[object Object]"){
    //         // console.log("Rain: "+res.list[i].rain);
    //     }else{
    //         console.log("Rain: "+res.list[i].rain);
    //     }
    // }
    // console.log("==================================================");
}

async function fetchWeatherAlerts(){
    const location=settings.location;
    const res=await weather.getWeatherAlerts(location);
    console.log(res);
    // console.log("Function: fetchWeatherAlerts");
    // if(res[0]="undefined"){
    //     console.log("No Alerts")
    // }else{
    //     console.log(res);
    // }
    // console.log("==================================================");
}

async function fetchWeatherUVIndex(){
    const latitude=settings.latitude;
    const longitude=settings.longitude; 

    const res=await weather.getWeatherUV(latitude,longitude);
    console.log(res);
    // console.log("Function: fetchWeatherUVIndex");
    // console.log("UV Index: "+res);
    // console.log("==================================================");
}



// fetchLocationByLatLon();
// fetchLatLonByLocation();
// fetchWeatherByCoordinate();
// fetchCurrentWeather();
// fetchWeatherByZipcode();
// fetchForecast();
// fetchWeatherAlerts();
// fetchWeatherUVIndex();
