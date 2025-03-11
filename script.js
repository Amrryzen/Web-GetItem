// Inisialisasi index slide saat ini
let currentIndex = 0;
const totalSlides = 3; // Jumlah slide
const carouselContainer = document.querySelector('.carousel-container');

// Fungsi untuk mengupdate posisi carousel
function updateCarousel() {
  // Geser container sesuai dengan index (misal: slide 1 = 0%, slide 2 = -33.333%, slide 3 = -66.666%)
  carouselContainer.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
}

// Pindah slide otomatis setiap 3 detik
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}, 3000);
