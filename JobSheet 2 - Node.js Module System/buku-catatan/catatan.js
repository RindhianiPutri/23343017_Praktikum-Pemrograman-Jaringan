const fs = require('fs');
const chalk = require('chalk'); // e. Tambahkan chalk

const ambilCatatan = function () {
    return 'Ini Catatan Rindhiani Putri...';
}

const tambahCatatan = function (judul, isi) {
    const catatan = muatCatatan();
    const catatanGanda = catatan.filter(function (note) {
        return note.judul === judul;  // konsisten pakai key "judul"
    });

    if (catatanGanda.length === 0) {
        catatan.push({
            judul: judul,
            isi: isi
        });
        simpanCatatan(catatan);
        console.log(chalk.green.inverse('Catatan baru ditambahkan!'));
    } else {
        console.log(chalk.red.inverse('Judul catatan telah dipakai'));
    }
}

// f. Tambahkan fungsi hapusCatatan
const hapusCatatan = function (judul) {
    const catatan = muatCatatan();
    const catatanUntukDisimpan = catatan.filter(function (note) {
        return note.judul !== judul;
    });

    if (catatan.length > catatanUntukDisimpan.length) {
        console.log(chalk.green.inverse('Catatan dihapus!'));
        simpanCatatan(catatanUntukDisimpan);
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'));
    }
}

// Tambahan: fungsi untuk list semua catatan
const listCatatan = function () {
    const catatan = muatCatatan();
    console.log(chalk.blue.inverse('Daftar Catatan:'));
    catatan.forEach((note, index) => {
        console.log(`${index + 1}. ${note.judul} - ${note.isi}`);
    });
}

// Tambahan: fungsi untuk baca 1 catatan
const bacaCatatan = function (judul) {
    const catatan = muatCatatan();
    const note = catatan.find((note) => note.judul === judul);

    if (note) {
        console.log(chalk.cyan.inverse('Catatan ditemukan:'));
        console.log(`Judul: ${note.judul}`);
        console.log(`Isi: ${note.isi}`);
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'));
    }
}

const simpanCatatan = function (catatan) {
    const dataJSON = JSON.stringify(catatan);
    fs.writeFileSync('catatan.json', dataJSON);
}

const muatCatatan = function () {
    try {
        const dataBuffer = fs.readFileSync('catatan.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

// f. Perbarui module.exports agar semua fungsi ikut diexport
module.exports = {
    ambilCatatan: ambilCatatan,
    tambahCatatan: tambahCatatan,
    hapusCatatan: hapusCatatan,
    listCatatan: listCatatan,
    bacaCatatan: bacaCatatan
}
