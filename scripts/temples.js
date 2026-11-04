
// Get the current year
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date
document.getElementById("lastModified").textContent =
    `Last modified: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});
