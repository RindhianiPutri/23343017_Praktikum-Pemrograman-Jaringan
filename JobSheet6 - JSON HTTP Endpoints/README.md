📘 JobSheet 6 – JSON HTTP Endpoints
🧩 Deskripsi Singkat

Pada JobSheet ini, saya mempelajari cara membangun JSON HTTP Endpoints menggunakan Express.js. Fokus utama meliputi pembuatan endpoint dinamis, penggunaan query string (req.query), serta integrasi API eksternal untuk menampilkan data cuaca secara real-time.

Selain itu, jobsheet ini juga menghubungkan backend dan frontend menggunakan Fetch API tanpa perlu melakukan reload halaman.

🎯 Tujuan Pembelajaran

Melalui jobsheet ini, saya memahami:

Konsep JSON HTTP Endpoints

Pembuatan endpoint dinamis dengan Express.js

Penggunaan query string sebagai input pengguna

Integrasi Node.js dengan API eksternal

Komunikasi frontend–backend secara asinkron

Validasi input dan peningkatan tampilan antarmuka (UI)

🛠️ Bagian Latihan

Langkah-langkah yang saya lakukan meliputi:

Membuat endpoint /infoCuaca dengan respons JSON dinamis

Menggunakan req.query untuk membaca parameter lokasi

Mengintegrasikan API Mapbox dan Weatherstack

Membuat modul:

geocode.js → pengambilan data lokasi

prediksiCuaca.js → pengambilan informasi cuaca

Menggabungkan seluruh modul di dalam app.js

Menghubungkan frontend menggunakan Fetch API

Menambahkan validasi input dan CSS agar tampilan lebih interaktif

Contoh Respons JSON
{
  "prediksiCuaca": "Cuaca cerah dengan suhu 30 derajat",
  "lokasi": "Padang, Indonesia",
  "address": "padang"
}

✅ Hasil

Aplikasi yang dibangun berhasil:

Menampilkan data cuaca berdasarkan lokasi pengguna

Mengirim dan menerima data dalam format JSON

Mengintegrasikan frontend, backend, dan API eksternal

Menyajikan informasi secara real-time tanpa reload halaman
