📘 JobSheet 6 – JSON HTTP Endpoints
🧩 Deskripsi Singkat

Pada JobSheet ini, saya mempelajari cara membangun JSON HTTP Endpoints menggunakan Express.js. Fokus utama meliputi pembuatan endpoint dinamis, penggunaan query string (req.query), serta integrasi API eksternal untuk menampilkan data cuaca secara real-time.
Jobsheet ini juga menghubungkan backend dan frontend menggunakan Fetch API tanpa perlu reload halaman.

🎯 Tujuan Pembelajaran

Melalui jobsheet ini, saya memahami:

Konsep JSON HTTP Endpoints

Pembuatan endpoint dinamis dengan Express.js

Penggunaan query string sebagai input pengguna

Integrasi Node.js dengan API eksternal

Komunikasi frontend–backend secara asinkron

Validasi input dan peningkatan tampilan UI

🛠️ Bagian Latihan

Langkah-langkah yang saya lakukan:

Membuat endpoint /infoCuaca dengan respons JSON dinamis

Menggunakan req.query untuk membaca parameter lokasi

Mengintegrasikan API Mapbox dan Weatherstack

Membuat modul:

geocode.js (data lokasi)

prediksiCuaca.js (informasi cuaca)

Menggabungkan modul di app.js hingga menghasilkan output JSON

Menghubungkan frontend dengan Fetch API

Menambahkan validasi input dan CSS agar tampilan lebih interaktif

Contoh respons JSON:

{
  "prediksiCuaca": "Cuaca cerah dengan suhu 30 derajat",
  "lokasi": "Padang, Indonesia",
  "address": "padang"
}

✅ Hasil

Aplikasi berhasil:

Menampilkan data cuaca berdasarkan lokasi

Mengirim dan menerima data dalam format JSON

Mengintegrasikan frontend, backend, dan API eksternal

Menyajikan informasi secara real-time tanpa refresh

📌 Kesimpulan

JobSheet ini membantu saya memahami peran penting JSON HTTP Endpoints dalam aplikasi web modern. Saya belajar membangun endpoint dinamis, mengelola input pengguna, menghubungkan API eksternal, serta mengintegrasikan frontend dan backend secara efektif.
Secara keseluruhan, jobsheet ini memperkuat pemahaman saya tentang alur kerja aplikasi web berbasis API 🌐✨
