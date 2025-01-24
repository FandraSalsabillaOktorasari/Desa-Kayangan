const navbarBrand = document.querySelector('.navbar-brand');

navbarBrand.addEventListener('click', function() {
    navbarBrand.classList.add('clicked');

    // Menghapus kelas clicked setelah 1 detik agar animasi berhenti
    setTimeout(function() {
        navbarBrand.classList.remove('clicked');
    }, 1000); // 1 detik
});

// Ambil elemen tombol
const backToTopBtn = document.getElementById("backToTop");

// Fungsi untuk menampilkan tombol saat scroll melewati section hero
window.onscroll = function () {
    const heroHeight = document.querySelector(".hero-section").offsetHeight;
    if (window.scrollY > heroHeight) {
        backToTopBtn.style.display = "flex"; // Tampilkan tombol
    } else {
        backToTopBtn.style.display = "none"; // Sembunyikan tombol
    }
};

// Fungsi untuk scroll kembali ke atas
backToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Animasi smooth scroll
    });
};
