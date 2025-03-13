let currentIndex = 0;
const totalSlides = document.querySelectorAll('.product').length;
const carouselContainer = document.querySelector('.carousel-container');

// Fungsi untuk mengupdate posisi carousel
function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * (160 / totalSlides)}%)`;
}

// Pergeseran slide setiap 3 detik
const slideInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}, 5000);

// Reset carousel ke slide pertama setiap 10 detik
const resetInterval = setInterval(() => {
  currentIndex = 0;
  updateCarousel();
}, 15000);
