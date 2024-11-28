const hamburger_menu = document.querySelector(".hamburger_menu");
const hamburger_menu_item = document.querySelector(".hamburger_menu i");
const dropdown_menu = document.querySelector(".dropdown_menu");
const swiperWrapper = document.querySelector(".swiper-wrapper");
const slides = document.querySelectorAll(".swiper-slide");
const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");

let currentIndex = 0;

hamburger_menu.addEventListener("click", function () {
  dropdown_menu.classList.toggle("open");
  let isOpen = dropdown_menu.classList.contains("open");
  hamburger_menu_item.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
});
