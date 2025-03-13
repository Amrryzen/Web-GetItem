document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('form');
    
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Mencegah submit form default
      
      // Jika perlu, tambahkan validasi form di sini
      
      // Arahkan ke halaman sukses setelah submit
      window.location.href = 'signupsuccess.html';
    });
  });
  