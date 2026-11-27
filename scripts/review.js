
// Get the previous review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase the count whenever the confirmation page loads
reviewCount++;

// Save the updated count
localStorage.setItem("reviewCount", reviewCount);

// Display the updated count
document.querySelector("#reviewCount").textContent = reviewCount;

// Footer information
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;
