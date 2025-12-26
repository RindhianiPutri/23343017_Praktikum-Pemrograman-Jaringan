# 🗂 Jobsheet 8 – MongoDB & Database Server

**Mata Kuliah:** Praktikum Pemrograman Jaringan  

## 📌 Topik
- Node.js
- MongoDB
- Database Server


## 💡 Penjelasan Singkat
Database server adalah sistem yang **mengelola, menyimpan, dan mengambil data** secara terstruktur.  
Fungsi utama database server:
1. **Penyimpanan Data** → Data tersimpan dalam format terstruktur (tabel/collection).  
2. **Manajemen Data** → Menambah, memperbarui, menghapus data secara konsisten.  
3. **Pengolahan Permintaan** → Memproses query dan request pengguna.  
4. **Kontrol Kesesuaian** → Mengatur akses multi-user agar data aman.  
5. **Keamanan & Enkripsi** → Melindungi data dari akses tidak sah.  
6. **Indeks & Optimisasi** → Mempercepat pengambilan data.  
7. **Cadangan & Pemulihan** → Mencegah kehilangan data.  
8. **Replikasi Data** → Untuk redundansi dan penyeimbangan beban.


## 🗃 SQL vs NoSQL
| Relational DB | Document DB (MongoDB) |
|---------------|----------------------|
| Database      | Database             |
| Table         | Collection           |
| Column        | Field                |
| Row/Record    | Document (JSON/BSON) |
| Join Table    | Embedded Doc/Reference |
| SQL           | JavaScript (MongoDB) |

- **SQL**: Cocok untuk transaksi, CMS, keuangan, analitik.  
- **NoSQL (MongoDB)**: Cocok untuk data besar, e-commerce, media sosial, IoT.


## ⚙️ MongoDB Key Concepts
- **Database** → Wadah koleksi dokumen.  
- **Collection** → Kumpulan dokumen.  
- **Document** → Unit data tunggal (JSON/BSON).  
- **ObjectId** → ID unik tiap dokumen, termasuk timestamp & counter.


🔗 Referensi

MongoDB Manual

Node.js MongoDB Driver

