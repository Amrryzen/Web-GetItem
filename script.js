// Inisialisasi index slide saat ini
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.product').length; // Hitung jumlah slide
const carouselContainer = document.querySelector('.carousel-container');

// Fungsi untuk mengupdate posisi carousel
function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
}

// Pindah slide otomatis setiap 3 detik
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}, 3000);
