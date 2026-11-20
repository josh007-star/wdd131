
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Lagos Nigeria",
        location: "Lagos, Nigeria",
        dedicated: "2000, January, 15",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple/lagos-nigeria-temple-400x250.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-400x250.jpg"
    },
    {
        templeName: "Freiberg Germany",
        location: "Freiberg, Germany",
        dedicated: "1985, June, 29",
        area: 21485,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple/freiberg-germany-temple-400x250.jpg"
    }
];

const templeContainer = document.querySelector("#temple-container");
const pageTitle = document.querySelector("#page-title");
const navLinks = document.querySelectorAll(".navigation a");

// Create a temple card
function displayTemples(templeList) {
    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("article");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedication = document.createElement("p");
        dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}

// Filter temples
function filterTemples(filter) {
    let filteredTemples = temples;

    switch (filter) {
        case "old":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            pageTitle.textContent = "Old Temples";
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            pageTitle.textContent = "New Temples";
            break;

        case "large":
            filteredTemples = temples.filter((temple) => temple.area > 90000);
            pageTitle.textContent = "Large Temples";
            break;

        case "small":
            filteredTemples = temples.filter((temple) => temple.area < 10000);
            pageTitle.textContent = "Small Temples";
            break;

        default:
            filteredTemples = temples;
            pageTitle.textContent = "Home";
    }

    displayTemples(filteredTemples);
}

// Navigation click events
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        link.classList.add("active");

        const filter = link.dataset.filter;
        filterTemples(filter);
    });
});

// Display all temples when page loads
displayTemples(temples);

// Footer year and last modified date
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last modified: ${document.lastModified}`;
