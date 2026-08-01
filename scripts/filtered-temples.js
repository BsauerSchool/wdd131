const navbutton = document.querySelector('#ham-button');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Ogden Utah Temple",
    location: " Ogden, Utah, United States",
    dedicated: "1972, January, 18",
    area: 112232,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ogden-utah/400x250/ogden-utah-temple-1300442-wallpaper.jpg"
  },
  {
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
  },
  {
    templeName: "Seattle Washington Temple",
    location: "Bellevue, Washington, United States",
    dedicated: "1980, November, 17",
    area: 110000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seattle-washington/400x250/seattle-washington-temple-lighted-1079843-wallpaper.jpg"
  }
];


const templeCards = document.querySelector('#temple-cards');

function displayTemples(filteredTemples){
    document.querySelector('#temple-cards').innerHTML = "";
    filteredTemples.forEach(temple =>{
        let card = document.createElement('Section');
        let name = document.createElement('h3');
        name.textContent = `${temple.templeName}`;
        let location = document.createElement('p');
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        let dedicated = document.createElement('p');
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        let area = document.createElement('p');
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
        let templeImage = document.createElement('img');
        templeImage.setAttribute('src', temple.imageUrl);
        templeImage.setAttribute('alt', `${temple.templeName} Temple`);
        templeImage.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(templeImage);
        templeCards.appendChild(card);
    })
}
const filteredTemples = temples;
displayTemples(filteredTemples);
// old before 1900
const older = document.querySelector('#older');
older.addEventListener('click', () => {
    displayTemples(temples.filter(temple => 
        temple.dedicated.split(",")[0] < 1900
    ));
})

// new after 2000
const newer = document.querySelector('#newer');
newer.addEventListener('click', () => {
    displayTemples(temples.filter(temple => 
        temple.dedicated.split(",")[0] > 2000
    ));
})

// large larger than 90,000
const larger = document.querySelector('#larger');
larger.addEventListener('click', () => {
    displayTemples(temples.filter(temple => temple.area > 90000));
})

// small smaller than 10,0000
const small = document.querySelector('#smaller');

small.addEventListener('click', () => {
    displayTemples(temples.filter(temple => temple.area < 10000));
})

// Home - all
const home = document.querySelector('#home');
home.addEventListener('click', () => {

    
    displayTemples(temples);
})