function initCarousel() {
    const mainCourse = document.querySelector('.main-course-carousel');
    const drinks = document.querySelector('.drinks-carousel');
    const snacks = document.querySelector('.snacks-carousel');

    for (let i = 0; i < 5; i++) {
        const mainCourseCarousel = document.querySelector('.main-course-carousel-slide').cloneNode(true);
        // cloneNode(true) di gunakan untuk menduplikat element yang sudah ada beserta childnya
        const drinksCarousel = document.querySelector('.drinks-carousel-slide').cloneNode(true);
        const snacksCarousel = document.querySelector('.snacks-carousel-slide').cloneNode(true);
        mainCourse.appendChild(mainCourseCarousel);
        drinks.appendChild(drinksCarousel);
        snacks.appendChild(snacksCarousel);
    }
}

initCarousel();

// form reservation

const form = document.querySelector('#reservation-item-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const tableName = document.querySelector('#table_name').value;
    const tableSize = document.querySelector('#table_capacity').value;
    const date = document.querySelector('#order_date').value;
    const order = document.querySelector('#order').value;

    const orderText = `halo, saya ingin reservasi meja untuk ${tableSize} orang, atas nama ${tableName}, tanggal ${date}

    order:
    ${order ? order : "*pesan di tempat"}`;

    window.location.replace(`https://wa.me/+628990724131?text=${encodeURIComponent(orderText)}`);
//     window.location.replace()

// Fungsi ini digunakan untuk mengganti (redirect) URL halaman saat ini ke URL yang baru tanpa menambahkan halaman sebelumnya ke riwayat browser.
// Artinya, pengguna tidak bisa kembali ke halaman sebelumnya dengan tombol Back di browser.

// ?text=${encodeURIComponent(orderText)}

// Bagian ini digunakan untuk mengisi pesan awal yang akan muncul secara otomatis di chat WhatsApp.
// orderText adalah variabel JavaScript yang berisi teks pesan yang ingin dikirim.
// encodeURIComponent() berfungsi untuk mengonversi teks menjadi format URL yang valid (misalnya, spasi diubah menjadi %20, dan karakter khusus lainnya di-encode agar tidak menyebabkan error di URL).
});

const hamburger =document.querySelector('#burger-navigation');
const mobilenavigation = document.querySelector('.nav-mobile-main');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('open');
    mobilenavigation.classList.toggle('menu-active');
});