const today = new Date();

let currentYear = today.getFullYear();

document.getElementById("current-year").innerHTML = `${currentYear}`;

document.getElementById("lastModified").innerHTML = document.lastModified;