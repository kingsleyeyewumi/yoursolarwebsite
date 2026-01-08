let carocellHolder = document.querySelector(".carocellHolder");
let otherItemsContainer = document.querySelector(".otherItemsContainer");

carocellHolder.addEventListener("click", () => {
  otherItemsContainer.classList.toggle("otherItemsHide");
});
