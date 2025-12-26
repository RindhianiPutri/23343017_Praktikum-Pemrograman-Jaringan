# 🧪 Jobsheet 6 – JSON HTTP Endpoints

**Mata Kuliah: Pemrograman Jaringan**

---

## 📘 Pengantar JSON HTTP Endpoints

JSON HTTP Endpoints merupakan bagian penting dalam pengembangan aplikasi web modern berbasis **API**. Endpoint berfungsi sebagai **alamat (URL)** yang digunakan client untuk mengirim permintaan dan menerima respon data dari server melalui protokol **HTTP** dalam format **JSON (JavaScript Object Notation)**.

Pada jobsheet ini, JSON HTTP Endpoints dibangun menggunakan **Express.js** untuk melayani permintaan data cuaca secara dinamis berdasarkan input lokasi dari pengguna.

---

## 🔑 Konsep Dasar JSON HTTP Endpoints

Beberapa konsep utama yang dipelajari dalam jobsheet ini antara lain:

* **JSON (JavaScript Object Notation)**  
  Format pertukaran data yang ringan, mudah dibaca, dan banyak digunakan dalam komunikasi client–server.

* **HTTP Endpoints**  
  URL khusus pada aplikasi web yang digunakan untuk mengirim dan menerima data melalui metode HTTP.

* **Query String (`req.query`)**  
  Digunakan untuk mengambil parameter dari URL, misalnya `?address=padang`, sebagai input dari pengguna.

* **Pemrograman Asinkron**  
  Memungkinkan server memproses permintaan tanpa harus menunggu proses lain selesai.

* **Integrasi API Eksternal**  
  Menghubungkan aplikasi dengan layanan pihak ketiga untuk mendapatkan data tambahan.

---

## ⚙️ Implementasi Express.js

Express.js digunakan sebagai **framework backend** untuk membangun server dan endpoint JSON. Pada jobsheet ini dibuat endpoint utama, yaitu:

* **`/infoCuaca`**  
  Endpoint ini mengembalikan data cuaca dalam format JSON berdasarkan alamat yang dimasukkan pengguna.

Penggunaan Express.js mempermudah pengelolaan routing, request, dan response sehingga pembuatan API menjadi lebih terstruktur.

---

## 🌐 Integrasi API Eksternal

Untuk menampilkan informasi cuaca, aplikasi dihubungkan dengan dua API eksternal, yaitu:

* **Mapbox API**  
  Digunakan untuk mengubah alamat menjadi koordinat lokasi (latitude dan longitude).

* **Weatherstack API**  
  Digunakan untuk menampilkan informasi cuaca seperti deskripsi cuaca, suhu, visibilitas, dan indeks UV.

Kedua API tersebut diakses melalui dua modul utilitas:

* `geocode.js` → pengambilan data lokasi  
* `prediksiCuaca.js` → pengambilan informasi cuaca  

---

## 🧪 Hasil Implementasi Endpoint

Hasil akhir dari endpoint JSON yang dibuat berupa respons sebagai berikut:

```json
{
  "prediksiCuaca": "Cuaca cerah dengan suhu 30 derajat",
  "lokasi": "Padang, Indonesia",
  "address": "padang"
}
