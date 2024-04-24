const apiKey = "ae256368922757ba3a7aae21b1dcf4e7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weaterIcon = document.querySelector(".weather-icon")
async function  checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status ==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{
        var data = await response.json();
    
        //console.log(data);
    
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weaterIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weaterIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weaterIcon.src = "images/Rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weaterIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weaterIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    }
  
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

// script.js

// Function to get the current time in 12-hour format
function getCurrentTime12H() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Add leading zeros to minutes if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds + ' ' + period;
}

// Update the time display every second
function updateTime() {
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = getCurrentTime12H();
}

// Initial call to update time
updateTime();

// Update time every second
setInterval(updateTime, 1000);


///
// Function to get the current date
// function getCurrentDate() {
//     const now = new Date();
//     return now.toLocaleDateString();
// }
// Function to get the current date in the format "day/month/year"
// function getCurrentDate() {
//     const now = new Date();
//     const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
//     return now.toLocaleDateString(undefined, options);
// }

// const dateElement = document.querySelector('#current-date');
// dateElement.textContent = getCurrentDate();

function getCurrentDate() {
    const now = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return now.toLocaleDateString('en-GB', options);
}

const dateElement = document.querySelector('#current-date');
dateElement.textContent = getCurrentDate();

