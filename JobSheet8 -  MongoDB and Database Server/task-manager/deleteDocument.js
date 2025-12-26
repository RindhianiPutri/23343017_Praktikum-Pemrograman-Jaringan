const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'task-manager';

async function main() {
    try {
        await client.connect();
        console.log('Berhasil terhubung ke MongoDB database server');
        const db = client.db(namaDatabase);

        // Contoh: Menghapus satu dokumen dari koleksi 'tugas' berdasarkan ID
        const deleteResult = await db.collection('tugas').deleteOne({ _id: new ObjectId("6511eb329ab8211f65774f71") });
        
        if (deleteResult.deletedCount === 1) {
            console.log('Tugas berhasil dihapus!');
        } else {
            console.log('Tugas tidak ditemukan atau gagal dihapus.');
        }

        // Contoh lain: Menghapus berdasarkan nama tugas
        // const deleteResultByName = await db.collection('tugas').deleteOne({ namaTugas: 'Belajar MongoDB' });
        // console.log(deleteResultByName.deletedCount === 1 ? 'Tugas berhasil dihapus!' : 'Tugas tidak ditemukan.');
        
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
