📘 JobSheet 6 – JSON HTTP Endpoints
🔹 Deskripsi Umum

Pada JobSheet ini, saya memperoleh pengalaman langsung dalam membangun dan mengelola JSON HTTP Endpoints menggunakan Express.js. Materi yang dipelajari berfokus pada pembuatan endpoint dinamis untuk mengirim dan menerima data dalam format JSON, penggunaan query string (req.query), serta integrasi API eksternal untuk menampilkan data cuaca secara real-time.

Selain sisi backend, jobsheet ini juga melibatkan integrasi frontend menggunakan Fetch API, sehingga aplikasi dapat berinteraksi dengan server tanpa perlu memuat ulang halaman.

🔹 Tujuan Pembelajaran

Melalui jobsheet ini, saya mempelajari:

Konsep dasar JSON HTTP Endpoints pada aplikasi web

Penerapan Express.js untuk membuat endpoint dinamis

Penggunaan query string sebagai input dari pengguna

Integrasi Node.js dengan API eksternal

Koneksi frontend dan backend secara asinkron

Validasi input serta peningkatan tampilan antarmuka pengguna

🔹 Bagian Latihan

Pada bagian latihan, saya mengerjakan tahapan berikut secara bertahap:

Mempelajari konsep JSON HTTP Endpoints, yaitu URL pada aplikasi web yang digunakan untuk mengirim dan menerima data dalam format JSON melalui protokol HTTP.

Menggunakan req.query pada Express.js untuk mengambil parameter dari URL, seperti ?address=padang, dan mengembalikan respons JSON secara dinamis.

Membuat endpoint /infoCuaca yang memberikan respons berbeda tergantung pada ada atau tidaknya parameter address.

Menghubungkan aplikasi Node.js dengan API eksternal menggunakan modul postman-request.

Membuat dua modul utilitas, yaitu:

geocode.js → Mengakses Mapbox API untuk mendapatkan koordinat lokasi (latitude, longitude, dan nama lokasi).

prediksiCuaca.js → Mengakses Weatherstack API untuk menampilkan informasi cuaca seperti deskripsi cuaca, suhu, visibilitas, dan indeks UV.

Menggabungkan kedua modul tersebut di dalam app.js, sehingga hasil pencarian lokasi dapat ditampilkan dalam format JSON dinamis, seperti:

{
  "prediksiCuaca": "Cuaca cerah dengan suhu 30 derajat",
  "lokasi": "Padang, Indonesia",
  "address": "padang"
}


Mengintegrasikan frontend menggunakan Fetch API dengan menambahkan form pencarian pada index.hbs, sehingga pengguna dapat mencari lokasi dan melihat hasil cuaca tanpa perlu refresh halaman.

Menambahkan CSS untuk memperindah tampilan form input, tombol pencarian, serta hasil pencarian agar lebih interaktif.

Menerapkan validasi input pengguna, sehingga ketika kolom pencarian kosong akan muncul pesan:

“Kamu harus memasukkan lokasi yang ingin dicari”

Menyesuaikan tampilan halaman Bantuan dan Tentang, agar lebih informatif dan sesuai dengan tujuan masing-masing halaman.

🔹 Hasil yang Dicapai

Dari hasil implementasi, aplikasi berhasil:

Menampilkan data cuaca berdasarkan lokasi yang dimasukkan pengguna

Mengirim dan menerima data dalam format JSON

Menghubungkan frontend, backend, dan API eksternal secara terintegrasi

Menyajikan informasi secara real-time tanpa reload halaman

🔹 Kesimpulan

Melalui JobSheet ini, saya memahami bahwa JSON HTTP Endpoints merupakan komponen penting dalam pengembangan aplikasi web modern berbasis API. Saya belajar cara membuat endpoint dinamis menggunakan Express.js, membaca input pengguna dengan req.query, serta mengintegrasikan Node.js dengan layanan API eksternal seperti Mapbox dan Weatherstack.

Selain itu, saya juga berhasil menghubungkan frontend dan backend menggunakan Fetch API, menerapkan validasi input, serta meningkatkan tampilan aplikasi dengan CSS. Secara keseluruhan, jobsheet ini membantu saya memahami alur kerja aplikasi web dari sisi frontend, backend, hingga integrasi API secara menyeluruh.
