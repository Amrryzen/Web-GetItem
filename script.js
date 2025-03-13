let currentIndex = 0;
const totalSlides = document.querySelectorAll(".product").length;
const carouselContainer = document.querySelector(".carousel-container");

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
