// Variables
const btn = document.querySelector("#loadImageButton");
const dogImage = document.querySelector("#dogsAPI");
const dogId = document.querySelector("#dogId");
const dogAge = document.querySelector("#dogAge");
const dogRegistry = document.querySelector("#dogRegistry");

// Event listener
btn.addEventListener("click", loadDogInfo);

// Function to load dog information
function loadDogInfo() {
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => {
const image = data.message;
dogImage.src = image;
// Dummy data for ID, age, and registry
dogId.textContent = Math.floor(Math.random() * 1000);
dogAge.textContent = Math.floor(Math.random() * 10+1) + " Years";
dogRegistry.textContent = Math.floor(Math.random() * 10000);
});
}