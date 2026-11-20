


const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005, August 7",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-400x250.jpg"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, United States",
        dedicated: "1888, May 21",
        area: 74792,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-400x250.jpg"
    },
    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah, United States",
        dedicated: "2015, June 7",
        area: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-400x250.jpg"
    },
    {
        templeName: "Yigo Guam Temple",
        location: "Yigo, Guam",
        dedicated: "2020, May 2",
        area: 6861,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-400x250.jpg"
    },
    {
        templeName: "Washington D.C. Temple",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November 19",
        area: 156558,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-dc-temple/washington-dc-temple-400x250.jpg"
    },
    {
        templeName: "Lima Peru Temple",
        location: "Lima, Peru",
        dedicated: "1986, January 10",
        area: 9600,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-400x250.jpg"
    },
    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December 2",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-400x250.jpg"
    },
    {
        templeName: "Lagos Nigeria Temple",
        location: "Lagos, Nigeria",
        dedicated: "2000, January 15",
        area: 10700,
        imageUrl: "images/lagos-nigeria.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March 10",
        area: 41000,
        imageUrl: "images/rome-italy.jpg"
    },
    {
        templeName: "Freiberg Germany Temple",
        location: "Freiberg, Germany",
        dedicated: "1985, June 29",
        area: 21485,
        imageUrl: "images/freiberg-germany.jpg"
    }
];

const templeContainer = document.querySelector("#temple-container");
const pageTitle = document.querySelector("#page-title");

function displayTemples(templeList) {
    templeContainer.replaceChildren();

    templeList.forEach((temple) => {
        const card = document.createElement("article");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `Exterior view of ${temple.templeName}`;
        image.loading = "lazy";
        image.decoding = "async";
        image.width = 400;
        image.height = 250;

        image.addEventListener("error", () => {
            image.alt = `Image unavailable for ${temple.templeName}`;
            image.removeAttribute("src");
            image.classList.add("image-unavailable");
        });

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}

function filterTemples(filter) {
    let filteredTemples = temples;

    switch (filter) {
        case "old":
            filteredTemples = temples.filter((temple) => {
                return Number(temple.dedicated.split(",")[0]) < 1900;
            });
            pageTitle.textContent = "Old Temples";
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                return Number(temple.dedicated.split(",")[0]) > 2000;
            });
            pageTitle.textContent = "New Temples";
            break;

        case "large":
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
            pageTitle.textContent = "Large Temples";
            break;

        case "small":
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
            pageTitle.textContent = "Small Temples";
            break;

        default:
            pageTitle.textContent = "Home";
            break;
    }

    displayTemples(filteredTemples);
}

document.querySelectorAll(".navigation a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        document.querySelector(".navigation a.active")?.classList.remove("active");
        link.classList.add("active");

        filterTemples(link.dataset.filter);
    });
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last modified: ${document.lastModified}`;

displayTemples(temples);
