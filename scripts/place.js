const today = new Date();
let currentYear = today.getFullYear();

document.getElementById("copyright").innerHTML = `&copy;${currentYear} &diams; Brendin Sauer &diams; Layton Utah`;
document.getElementById("last-modified").innerHTML = `last Modification: ${document.lastModified}`;

// Weather data
let temp = 90;
let windSpeed = 4;
let windChill = 'na'; 

// Wind Chill = 35.74 + 0.6215T - 35.75V ^0.16 + 0.4275TV^0.16
const temperature = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const chill = document.querySelector('#chill');

// T = Temperature (in F)
// V = Wind Speed (MPH)
// If Temp <= 50 F and Wind Speed > 3mph

const calculateWindChill = () => {
 windChill = (35.74 + (0.6215 * temp)) - ((35.75 * windSpeed ) ** 0.16) + ((0.4275 * temp * windSpeed) ** (0.16));
 windChill = windChill.toFixed(1);
}

if(temp > 48 && windSpeed > 3){
   calculateWindChill();
}

temperature.innerHTML = `Temperature: ${temp}`;
wind.innerHTML = `Wind Speed: ${windSpeed}`;
chill.innerHTML = `Wind Chill: ${windChill}`;



