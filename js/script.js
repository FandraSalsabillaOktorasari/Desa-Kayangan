const navbarBrand = document.querySelector('.navbar-brand');

navbarBrand.addEventListener('click', function() {
    navbarBrand.classList.add('clicked');

    // Menghapus kelas clicked setelah 1 detik agar animasi berhenti
    setTimeout(function() {
        navbarBrand.classList.remove('clicked');
    }, 1000); // 1 detik
});