const today = new Date();

let currentYear = today.getFullYear();

document.getElementById("current-year").innerHTML = `&copy;${currentYear}`;

document.getElementById("lastModified").innerHTML = `last Modification ${document.lastModified}`;