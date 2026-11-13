
// Static weather information
const temperature = 31;
const windSpeed = 12;

// Wind chill calculation using Celsius and km/h
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Check whether wind chill conditions are met
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

// Display wind chill
document.querySelector("#windchill").textContent = windChill;

// Display current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Display last modified date
document.querySelector("#lastModified").textContent = document.lastModified;
