// Calculation starts here
let calcBtn = document.querySelector(".calcBtn");
let calcItemsContainer = document.querySelector(".calcItemsContainer");
let calcItemsHide = document.querySelector(".calcItemsHide");
let close = document.querySelector(".close");

function calculation() {
  calcItemsContainer.classList.toggle("calcItemsHide");
}
calcBtn.addEventListener("click", calculation);
// Calculation ends here

// Close button of calcItemsContainer start here
let closeCalcItemsContainer = document.createElement("button");
closeCalcItemsContainer.setAttribute("class", "closeCalcItemsContainer");
closeCalcItemsContainer.textContent = "x";
calcItemsContainer.appendChild(closeCalcItemsContainer);

function closeCalcContainer() {
  calcItemsContainer.style.display = "none";
}
closeCalcItemsContainer.addEventListener("click", closeCalcContainer);
// Close button of calcItemsContainer ends here
