//loader ==================================
window.onload = () => {
  document.querySelector(".page-loader").style.display = "none";
  AOS.init();
};
//menu ================================
let menuButt = document.querySelector("header .menu");
let exitButt = document.querySelector("header .exit");
let nav = document.querySelector("header nav");
menuButt.addEventListener("click", () => {
  nav.style.right = "0";
});
exitButt.addEventListener("click", () => {
  nav.style.right = "-243px";
});
let links = document.querySelectorAll("header .links a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.style.right = "-243px";
  });
});
//slider ====================================
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let index = 0;

function nextSlide() {
  index = (index + 1) % images.length;
  updateSlider();
}

function updateSlider() {
  const translateX = -index * 100;
  slider.style.transform = `translateX(${translateX}%)`;
}

// Automatically switch slides every 3 seconds (adjust as needed)
setInterval(nextSlide, 3000);

// Initial slide
updateSlider();
