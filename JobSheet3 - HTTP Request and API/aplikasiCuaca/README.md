# 🧪 Jobsheet 3 – HTTP Request and API

**Mata Kuliah: Praktikum Pemrograman Jaringan**


## 📘 Pengantar HTTP Request dan API

Pada Jobsheet 3 ini, saya mempelajari konsep dasar **HTTP Request** serta penerapan **API (Application Programming Interface)** untuk menghubungkan aplikasi dengan layanan eksternal. Materi ini berfokus pada bagaimana sebuah aplikasi mengirim permintaan (request) dan menerima respons (response) melalui protokol HTTP menggunakan Node.js.

Melalui jobsheet ini, saya memperoleh pemahaman awal mengenai komunikasi client–server dan cara mengonsumsi data dari API berbasis web.


## 🔑 Konsep Dasar HTTP Request dan API

Beberapa konsep utama yang dipelajari dalam jobsheet ini meliputi:

* **HTTP Request dan Response**  
  Mekanisme komunikasi antara client dan server melalui protokol HTTP.

* **Metode HTTP**  
  Meliputi metode **GET**, **POST**, **PUT**, dan **DELETE** yang digunakan sesuai kebutuhan pengolahan data.

* **API (Application Programming Interface)**  
  Antarmuka yang memungkinkan aplikasi berkomunikasi dengan layanan lain secara terstruktur.

* **Format Data JSON**  
  Format pertukaran data yang ringan dan mudah dibaca dalam komunikasi API.

* **Autentikasi API**  
  Penggunaan access key untuk mengakses layanan API eksternal.


## ⚙️ Implementasi API dengan Node.js

Dalam jobsheet ini, Node.js digunakan untuk mengirim HTTP request ke API eksternal dan memproses data respons yang diterima. Proses implementasi dilakukan secara bertahap, mulai dari pengiriman request hingga menampilkan hasil data di terminal.

Library **postman-request** digunakan untuk mempermudah pengiriman permintaan HTTP dan pengolahan data hasil respons.


## 🌐 Integrasi API Eksternal

Aplikasi yang dibuat mengintegrasikan dua API eksternal, yaitu:

* **Mapbox API**  
  Digunakan untuk melakukan *forward geocoding*, yaitu mengonversi nama lokasi menjadi koordinat geografis (latitude dan longitude).

* **Weatherstack API**  
  Digunakan untuk memperoleh informasi cuaca terkini berdasarkan koordinat lokasi, seperti suhu, deskripsi cuaca, dan kemungkinan hujan.

Kedua API tersebut digabungkan sehingga aplikasi mampu menampilkan informasi lokasi sekaligus kondisi cuaca secara dinamis.


## 🧪 Hasil Implementasi

Hasil dari implementasi jobsheet ini adalah aplikasi Node.js sederhana yang mampu:

* Mengambil input lokasi pengguna
* Mengonversi lokasi menjadi koordinat menggunakan Mapbox API
* Mengambil data cuaca berdasarkan koordinat menggunakan Weatherstack API
* Menampilkan hasil informasi cuaca dalam format teks yang mudah dibaca melalui terminal


## 🧾 Kesimpulan

Melalui Jobsheet 3 ini, saya memahami bahwa komunikasi antara client dan server dalam Node.js dapat dilakukan secara efektif menggunakan **HTTP Request** dan **API**. Saya juga mempelajari cara mengelola data dalam format JSON, menggunakan access key untuk autentikasi API, serta memproses dan menampilkan data hasil respons di terminal.

📌 *Jobsheet ini memberikan dasar penting dalam memahami integrasi API, yang menjadi fondasi untuk pengembangan web server dan endpoint dinamis pada jobsheet berikutnya.*

