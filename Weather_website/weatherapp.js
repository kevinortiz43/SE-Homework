const userInputCity = document.getElementById("userInputCity")
const displayCityName = document.getElementById("displayCityName");
const displayCountryName = document.getElementById("displayCountryName");
const displayTemperature = document.getElementById("displayTemperature");
const displaymin = document.getElementById("displaymin");
const displaymax = document.getElementById("displaymax");
const displayHumidity = document.getElementById("displayHumidity");
const displayFeelsLike = document.getElementById("displayFeelsLike");
const displayWindSpeed = document.getElementById("windSpeed");
const displayweatherdescription = document.getElementById("displayweatherdescription");
const displayIcon = document.getElementById("displayIcon");
const displayError = document.getElementById("displayErrorMessage")
const cityButton= document.getElementById("cityButton")

const userInputZip = document.getElementById("userInputZip")
const displayCityNameZip = document.getElementById("displayCityNameZip");
const displayCountryNameZip = document.getElementById("displayCountryNameZip");
const displayTemperatureZip = document.getElementById("displayTemperatureZip");
const displayminZip = document.getElementById("displayminZip");
const displaymaxZip = document.getElementById("displaymaxZip");
const displayHumidityZip = document.getElementById("displayHumidityZip");
const displayFeelsLikeZip = document.getElementById("displayFeelsLikeZip");
const displayWindSpeedZip = document.getElementById("windSpeedZip");
const displayweatherdescriptionZip = document.getElementById("displayweatherdescriptionZip");
const displayIconZip = document.getElementById("displayIconZip");
const displayErrorZip = document.getElementById("displayErrorMessageZip")
const zipButton = document.getElementById("zipButton")

const unit = "imperial";
// metrics for Fahrenheit, this will remain constant
const APIkey = "a4a45650e5f60155d63b1c8b9d1efb59#";
// authentication to access website, this will remain constant

cityButton.addEventListener("click", ()=> {
// callback function for fetch
  let userInput = userInputCity.value;

  const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=${unit}&appid=${APIkey}`;
// endpoint with parameter to get city when user searches it

    fetch(url1)
    .then((response) => response.json())
    .then((data) => {
      displayCityName.innerText = ` City name: ${data.name}`;
      displayCountryName.innerText = `Country name: ${data.sys.country}`;
      displayTemperature.innerText = `Current Temperature ${Math.round(data.main.temp)} degrees Fahrenheit`;
      displayFeelsLike.innerText = ` Feels like temperature ${Math.round(data.main.feels_like)} degrees Fahrenheit`;
      displaymin.innerText = `Min temperature for today: ${Math.round(data.main.temp_min)} degrees Fahrenheit`;
      displaymax.innerText = `Max temperature for today: ${Math.round(data.main.temp_max)} degrees Fahrenheit`;
      displayHumidity.innerText = `Humidity: ${data.main.humidity}%`;
      displayWindSpeed.innerText = `Windspeed: ${Math.round(data.wind.speed)} mile(s)/hour`;
      const imageURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      displayIcon.innerHTML = `<img src=${imageURL}>`;
      displayweatherdescription.innerText = `Current weather: ${data.weather[0].description}`;
    })
    .catch((error) => { 
      displayError.innerText = `Error please input a city name`
    })  
  })
  
  zipButton.addEventListener("click", ()=> {
    let userInput2 = userInputZip.value;
  
    const url2 = `https://api.openweathermap.org/data/2.5/weather?zip=${userInput2}&units=${unit}&appid=${APIkey}`;
    // user input zipcode second option instead of cities.    
  
    fetch(url2)
      .then((response) => response.json())
      .then((dataZip) => {
        displayCityNameZip.innerText = ` City name: ${dataZip.name}`;
        displayCountryNameZip.innerText = `Country name: ${dataZip.sys.country}`;
        displayTemperatureZip.innerText = `Current Temperature ${Math.round(dataZip.main.temp)} degrees Fahrenheit`;
        displayFeelsLikeZip.innerText = ` Feels like temperature ${Math.round(dataZip.main.feels_like)} degrees Fahrenheit`;
        displayminZip.innerText = `Min temperature for today: ${Math.round(dataZip.main.temp_min)} degrees Fahrenheit`;
        displaymaxZip.innerText = `Max temperature for today: ${Math.round(dataZip.main.temp_max)} degrees Fahrenheit`;
        displayHumidityZip.innerText = `Humidity: ${dataZip.main.humidity}%`;
        displayWindSpeedZip.innerText = `Windspeed: ${Math.round(dataZip.wind.speed)} mile(s)/hour`;
        const imageURL2 = `http://openweathermap.org/img/wn/${dataZip.weather[0].icon}@2x.png`;
        displayIconZip.innerHTML = `<img src=${imageURL2}>`;
        displayweatherdescriptionZip.innerText = `Current weather: ${dataZip.weather[0].description}`;
      })
      .catch((error) => { 
        displayErrorZip.innerText = `Error input a US zip code`
      })  
    })

  // add event listener so when they input london and hit submit itll run that
  
// const letter =  
// const urlz = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
// Zbutton.addEventListener("click", () => {
//     fetch(urlz)
//     .then((response) => response.json())
//     .then((data) =>{
//     //   display whatever you want

//   });
// })


// fetch(url2)
//   .then((response) => response.json())
//   .then((datazip) => console.log(datazip))
//   .catch((error2) => console.log("error"));

//         const temp = weatherData.main.feels_like
//         const weatherDescription = weatherData.weather[0].description
//         const icon = weatherData.weather[0].icon
//         const imageURL = " http://openweathermap.org/img/wn/" + icon +"@2x.png"
//         res.write("<p> The weather is currently " + weatherDescription + "</p>")
//         res.write("<h1>The temperature in" +query + "is " + temp + " degrees Fahrenheit.</h1>")
//         res.write("<img src=" + imageURL + ">")

