const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// Import fungsi dari catatan.js
const catatan = require('./catatan.js');

// Tes ambilCatatan
console.log(catatan.ambilCatatan());

// Validator
console.log(validator.isURL('https://proska.com'));

// Setup yargs
const y = yargs(hideBin(process.argv))
  .version('10.1.0')

// Command tambah
.command({
  command: 'tambah',
  describe: 'Tambah sebuah catatan baru',
  builder: {
    judul: {
      describe: 'Judul catatan',
      demandOption: true,
      type: 'string'
    },
    isi: {
      describe: 'Isi catatan',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    catatan.tambahCatatan(argv.judul, argv.isi);
  }
})

// Command hapus (sudah diperbaiki)
.command({
  command: 'hapus',
  describe: 'Hapus catatan berdasarkan judul',
  builder: {
    judul: {
      describe: 'Judul catatan yang ingin dihapus',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    catatan.hapusCatatan(argv.judul);
  }
})

// Command list
.command({
  command: 'list',
  describe: 'Tampilkan semua catatan',
  handler: function () {
    catatan.listCatatan();
  }
})

// Command read
.command({
  command: 'read',
  describe: 'Baca catatan',
  builder: {
    judul: {
      describe: 'Judul catatan yang ingin dibaca',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    catatan.bacaCatatan(argv.judul);
  }
});

// Jalankan yargs
y.parse();
