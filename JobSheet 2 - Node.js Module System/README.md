# 🧪 Jobsheet Node.js – Sistem Modul dan NPM

**Mata Kuliah: Praktikum Pemrograman Jaringan**


## 📘 Pengantar Node.js dan Sistem Modul

Pada jobsheet ini, saya memperoleh pengalaman langsung dalam memahami dan menerapkan **sistem modul pada Node.js**. Materi yang dipelajari berfokus pada cara memecah kode menjadi beberapa modul agar lebih terstruktur, mudah dikelola, dan dapat digunakan kembali.

Selain itu, jobsheet ini juga membahas pemanfaatan **modul bawaan Node.js**, pengelolaan dependensi menggunakan **Node Package Manager (NPM)**, serta penggunaan **command line arguments** untuk membuat aplikasi berbasis terminal yang interaktif.


## 🔑 Konsep Dasar yang Dipelajari

Beberapa konsep utama yang dipelajari dalam jobsheet ini meliputi:

* **Sistem Modul Node.js**  
  Penggunaan `require()` dan `module.exports` untuk membangun dan menghubungkan modul antar file.

* **Modul Bawaan Node.js**  
  Pemanfaatan modul `fs` untuk mengelola file, seperti membaca, menulis, dan menambahkan data.

* **Node Package Manager (NPM)**  
  Digunakan untuk mengelola dependensi proyek dan library pihak ketiga.

* **Command Line Arguments**  
  Menggunakan `process.argv` dan `yargs` untuk membaca input dari terminal.


## ⚙️ Implementasi Modul dan NPM

Pada tahap implementasi, aplikasi Node.js dikembangkan secara bertahap dengan pendekatan modular. Kode dipisahkan ke dalam beberapa file agar lebih rapi dan mudah dipahami.

Beberapa package eksternal yang digunakan antara lain:

* **validator** → untuk melakukan validasi data
* **chalk** → untuk menampilkan teks berwarna di terminal
* **nodemon** → untuk menjalankan aplikasi dengan fitur auto-reload


## 🧪 Bagian Latihan

Langkah-langkah latihan yang saya lakukan meliputi:

* Membuat dan mengelola file catatan menggunakan modul `fs`, termasuk menulis dan menambahkan data baru
* Membangun modul sendiri (`catatan.js`) dan mengintegrasikannya ke dalam aplikasi menggunakan `require()`
* Menginisialisasi proyek Node.js dengan `npm init`
* Menginstal dan menggunakan package eksternal melalui NPM
* Menerapkan command line arguments menggunakan `process.argv` dan `yargs`
* Mengembangkan aplikasi catatan sederhana berbasis terminal


## 🧾 Hasil Implementasi

Hasil akhir dari jobsheet ini adalah sebuah **aplikasi catatan (notes app)** berbasis Node.js yang memiliki fitur:

* **Create** → menambahkan catatan baru  
* **Read** → menampilkan dan membaca catatan  
* **Update** → memperbarui catatan  
* **Delete** → menghapus catatan  

Seluruh fitur dijalankan melalui terminal menggunakan perintah yang interaktif.


## 🧾 Kesimpulan

Melalui jobsheet ini, saya memahami cara kerja **sistem modul pada Node.js** serta pentingnya modularisasi kode dalam pengembangan aplikasi. Saya juga mempelajari penggunaan **NPM** untuk mengelola dependensi, pemanfaatan modul bawaan seperti `fs`, serta penerapan **command line arguments** untuk membangun aplikasi berbasis terminal yang dinamis.

📌 *Jobsheet ini memberikan dasar yang kuat dalam pengembangan aplikasi Node.js sebelum masuk ke tahap web server dan API pada jobsheet selanjutnya.*

