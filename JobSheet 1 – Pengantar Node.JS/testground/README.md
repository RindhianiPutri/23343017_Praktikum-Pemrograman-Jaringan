# 🧪 Jobsheet 1 – Pengantar Node.js

**Mata Kuliah: Praktikum Pemrograman Jaringan**



## 📘 Pengantar Pemrograman Jaringan

Pemrograman jaringan merupakan cabang ilmu komputer yang membahas pembuatan aplikasi yang dapat **berkomunikasi dan bertukar data antar perangkat** melalui jaringan komputer. Jaringan yang digunakan dapat berupa **LAN (Local Area Network)** maupun **WAN (Wide Area Network)**.

Bidang ini menjadi fondasi penting dalam pengembangan aplikasi modern seperti website, layanan cloud, dan aplikasi mobile yang saling terhubung melalui internet.



## 🔑 Konsep Dasar Pemrograman Jaringan

Beberapa konsep utama yang perlu dipahami dalam pemrograman jaringan antara lain:

* **Arsitektur Client–Server**
  Klien berperan sebagai pengirim permintaan (request), sedangkan server bertugas memproses dan memberikan respon.

* **Protokol Jaringan**
  Aturan komunikasi antar perangkat, contohnya HTTP untuk web, SMTP untuk email, dan FTP untuk transfer file.

* **Socket**
  Mekanisme yang memungkinkan aplikasi berkomunikasi melalui jaringan menggunakan protokol TCP atau UDP.

* **Pemrograman Sinkron dan Asinkron**
  Sinkron menunggu proses selesai sebelum melanjutkan, sedangkan asinkron memungkinkan proses berjalan tanpa menunggu respon.

* **Pemrograman Web**
  Aplikasi yang berjalan di server dan diakses melalui browser menggunakan protokol HTTP.

* **Pemrograman Mobile**
  Aplikasi mobile umumnya berkomunikasi dengan server melalui REST API untuk pertukaran data.



## ⚙️ Peran Node.js dalam Pemrograman Jaringan

Node.js merupakan **runtime JavaScript di sisi server** yang dirancang untuk menangani proses asinkron dan berbasis event. Dengan Node.js, JavaScript tidak hanya berjalan di browser, tetapi juga dapat digunakan untuk membangun server dan aplikasi jaringan.

Keunggulan utama Node.js dalam pemrograman jaringan antara lain:

* Mengelola operasi I/O secara efisien
* Cocok untuk aplikasi dengan banyak koneksi bersamaan
* Menggunakan mekanisme **event loop** tanpa blocking proses utama



## ⭐ Keunggulan Node.js

* **Skalabilitas Tinggi**
  Mampu menangani ribuan koneksi secara bersamaan dengan penggunaan resource yang ringan.

* **Performa Responsif**
  Tetap cepat meskipun terdapat proses input/output yang lambat.

* **Lintas Platform**
  Dapat dijalankan pada berbagai sistem operasi seperti Windows, Linux, dan macOS.

* **Satu Bahasa Pemrograman**
  JavaScript dapat digunakan baik di sisi client maupun server.

* **Ekosistem NPM**
  Tersedia banyak library dan modul yang mempermudah pengembangan aplikasi.



## 🧾 Kesimpulan Latihan B

Pada Latihan B, dilakukan pembuatan file JavaScript sederhana bernama `hello.js` yang kemudian dijalankan menggunakan Node.js melalui terminal.

Dari latihan ini dapat disimpulkan bahwa:

* Node.js mampu menjalankan file JavaScript tanpa browser
* JavaScript dapat dieksekusi langsung dari command line
* Node.js berfungsi sebagai lingkungan runtime JavaScript di sisi server



## 🧾 Kesimpulan Latihan C

Latihan C berfokus pada pembuatan file `hello-world.js` untuk menjalankan **server HTTP sederhana** menggunakan Node.js.

Setelah server dijalankan, aplikasi dapat diakses melalui browser dengan alamat:


http://127.0.0.1:3000/


Latihan ini memberikan pemahaman dasar mengenai:

* Cara membuat server menggunakan modul bawaan `http`
* Konsep komunikasi client dan server
* Peran Node.js sebagai fondasi pemrograman jaringan berbasis web



📌 *Jobsheet ini menjadi langkah awal dalam memahami penggunaan Node.js untuk pengembangan aplikasi jaringan.*
