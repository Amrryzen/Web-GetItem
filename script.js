const carouselContainer = document.querySelector('.carousel-container');
let currentIndex = 0;
const slides = document.querySelectorAll('.product');
const totalSlides = slides.length;

function updateCarousel() {
  // Asumsi tiap slide 250px + margin 1rem (disesuaikan jika diperlukan)
  // Ganti perhitungan ini jika lebar slide berubah (atau gunakan clientWidth)
  carouselContainer.style.transform = `translateX(-${currentIndex * 160}px)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}, 3000);
