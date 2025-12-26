# 🧪 Jobsheet 5 – Web Server and Express.js

**Mata Kuliah: Pemrograman Jaringan**

---

## 📘 Pengantar Web Server dan Express.js

Web server merupakan komponen penting dalam aplikasi web yang berfungsi untuk menerima permintaan (request) dari client dan mengirimkan respon (response) melalui protokol **HTTP**. Dalam pengembangan web modern, web server tidak hanya menyajikan halaman statis, tetapi juga mampu menghasilkan konten dinamis sesuai kebutuhan pengguna.

Pada jobsheet ini, saya mempelajari cara membangun **web server sederhana menggunakan Node.js dan Express.js**, serta menerapkan **templating engine Handlebars (hbs)** untuk menghasilkan tampilan web yang dinamis dan terstruktur.

---

## 🔑 Konsep Dasar Web Server

Beberapa konsep utama yang dipelajari dalam jobsheet ini antara lain:

* **Web Server Statis dan Dinamis**  
  Web server statis menyajikan file apa adanya, sedangkan web server dinamis mampu menghasilkan konten berdasarkan logika dan data dari backend.

* **Protokol HTTP**  
  Digunakan sebagai media komunikasi antara browser (client) dan server melalui request dan response.

* **Routing**  
  Mekanisme untuk mengatur respon server berdasarkan URL yang diakses pengguna.

* **Static Assets**  
  File pendukung seperti HTML, CSS, JavaScript, dan gambar yang disajikan langsung oleh server.

---

## ⚙️ Implementasi Express.js

Express.js digunakan sebagai **framework backend** untuk membangun web server secara lebih sederhana dan terstruktur. Pada jobsheet ini, Express.js dimanfaatkan untuk:

* Membuat route dasar menggunakan metode **`app.get()`**
* Menyediakan halaman seperti:
  - Halaman utama  
  - Halaman bantuan  
  - Halaman info cuaca  
  - Halaman tentang  

Express.js mempermudah pengelolaan routing serta respon server dalam pengembangan aplikasi web.

---

## 🧩 Integrasi HTML dan JSON

Pada jobsheet ini, server tidak hanya menampilkan halaman web dalam format **HTML**, tetapi juga mengirimkan data dalam format **JSON**. Hal ini bertujuan untuk memperkenalkan perbedaan jenis response yang dapat diberikan oleh server sesuai kebutuhan aplikasi.

---

## 📂 Pengelolaan Static Assets

Untuk mengatur file statis, digunakan modul **`path`** dan middleware **`express.static()`**. Dengan cara ini, server dapat menyajikan:

* File HTML  
* File CSS  
* File JavaScript  
* Gambar dan ikon web  

Pengelolaan static assets membantu menjaga struktur proyek tetap rapi dan terorganisir.

---

## 🧵 Penggunaan Handlebars (hbs)

Jobsheet ini juga menerapkan **Handlebars (hbs)** sebagai template engine untuk menghasilkan tampilan web dinamis. Dengan Handlebars, halaman web dapat menampilkan data yang dikirim dari backend ke frontend.

Beberapa penerapan Handlebars yang dilakukan antara lain:

* Menggunakan **views** untuk halaman utama
* Membuat **partials** seperti header dan footer agar kode HTML dapat digunakan ulang
* Mengatur layout halaman agar lebih konsisten dan mudah dikelola

---

## 🎨 Tampilan dan Halaman Error

Untuk mempercantik tampilan aplikasi, ditambahkan:

* File **`styles.css`** untuk mengatur desain halaman
* Ikon dan gambar cuaca (misalnya `cuaca.png`)
* Pengaturan layout melalui sistem templating

Selain itu, diterapkan **wildcard route (404 page)** untuk menangani URL yang tidak ditemukan, sehingga aplikasi tetap memberikan respon yang informatif kepada pengguna.

---

## 🧾 Kesimpulan

Melalui Jobsheet 5 ini, saya memahami cara kerja **web server** serta bagaimana **Express.js** mempermudah proses pembuatan dan pengelolaan routing, tampilan, dan konten web dinamis. Saya juga mempelajari penerapan **templating engine Handlebars (hbs)** untuk membangun antarmuka yang lebih fleksibel dan terstruktur menggunakan konsep views dan partials.

Secara keseluruhan, jobsheet ini membantu saya membangun **aplikasi web server sederhana** dengan Node.js dan Express.js yang mampu menampilkan halaman HTML, data JSON, serta menangani halaman kesalahan (404) secara profesional.

📌 *Jobsheet ini menjadi dasar penting dalam memahami pengembangan aplikasi web berbasis server menggunakan Node.js dan Express.js.*

