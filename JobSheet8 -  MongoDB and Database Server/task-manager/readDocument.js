const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'task-manager';

async function main() {
    try {
        await client.connect();
        console.log('Berhasil terhubung ke MongoDB database server');
        const db = client.db(namaDatabase);

        // Menambahkan beberapa data pengguna baru
        const newUsers = [
            { nama: 'Rina', usia: 22 },
            { nama: 'Dika', usia: 25 },
            { nama: 'Sari', usia: 20 },
            { nama: 'Budi', usia: 28 },
            { nama: 'Tia', usia: 24 }
        ];

        const insertResult = await db.collection('pengguna').insertMany(newUsers);
        console.log('Data pengguna baru berhasil ditambahkan:', insertResult.insertedIds);

        // Mencari satu dokumen dalam koleksi 'pengguna' berdasarkan nama 'Rindhi'.
        const byNama = await db.collection('pengguna').findOne({ nama: 'Rindhi' });

        // Mencari satu dokumen dalam koleksi 'pengguna' berdasarkan ID objek tertentu.
        const byObjectID = await db.collection('pengguna').findOne({ _id: new ObjectId("6911eb329ab8211f65774f7e") });

        // Mencari beberapa dokumen dalam koleksi 'pengguna' dengan kriteria usia 20
        const toArray = await db.collection('pengguna').find({ usia: 20 }).toArray();

        if (byNama || byObjectID || toArray.length > 0) {
            console.log('Data Pengguna ditemukan (berdasarkan nama):', byNama);
            console.log('Data Pengguna ditemukan (berdasarkan ID Objek):', byObjectID);
            console.log('Data Pengguna ditemukan (dalam format array):', toArray);
        } else {
            console.log('Data Pengguna tidak ditemukan');
        }
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
