const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/prediksiCuaca')

// === Buat express app ===
const app = express()

// === Konfigurasi path ===
const direktoriPublic = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

// === Setup Handlebars & static folder ===
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)
app.use(express.static(direktoriPublic))


// ======================================================
// ==============   HALAMAN UTAMA   =====================
// ======================================================
app.get('', (req, res) => {
  res.render('index', {
    judul: 'Aplikasi Cek Cuaca',
    nama: 'Rindhiani Putri'
  })
})

// ======================================================
// ==============   HALAMAN BANTUAN   ===================
// ======================================================
app.get('/bantuan', (req, res) => {
  res.render('bantuan', {
    judul: 'Bantuan Saya',
    teksBantuan: 'Ini adalah teks bantuan',
    nama: 'Rindhiani Putri'
  })
})

// ======================================================
// ==============   HALAMAN TENTANG   ===================
// ======================================================
app.get('/tentang', (req, res) => {
  res.render('tentang', {
    judul: 'Tentang Saya',
    nama: 'Rindhiani Putri'
  })
})

// ======================================================
// ==============   HALAMAN INFO CUACA   ================
// ======================================================
app.get('/infocuaca', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Kamu harus memasukkan lokasi yang ingin dicari'
    })
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error })
    }

    forecast(latitude, longitude, (error, dataPrediksi) => {
      if (error) {
        return res.send({ error })
      }

      res.send({
        prediksiCuaca: dataPrediksi,
        lokasi: location,
        address: req.query.address
      })
    })
  })
})

// ======================================================
// ==============   HALAMAN BERITA   ====================
// ======================================================

// Render halaman berita HBS
app.get('/berita', (req, res) => {
  res.render('berita', {
    judul: 'Berita Terkini',
    nama: 'Rindhiani Putri'
  })
})

// API JSON berita dari Mediastack
app.get('/berita/data', async (req, res) => {
  try {
    const kategori = req.query.kategori || 'technology';

    // Gunakan HTTPS
    const url = `https://api.mediastack.com/v1/news?access_key=345a04cfaa559e4eb87ff24ec24c5487&keywords=${kategori}&limit=10`;
    console.log('🔗 Memanggil URL:', url);

    // <-- DI SINI letakkan fetch() langsung
    const response = await fetch(url);
    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      console.log('❌ Tidak ada hasil berita.');
      return res.json({ berita: [] });
    }

    const berita = data.data.map(item => ({
      title: item.title,
      description: item.description,
      url: item.url,
      source: item.source,
      image: item.image,
      published_at: item.published_at
    }));

    res.json({ berita });
  } catch (error) {
    console.error('⚠️ Error fetch berita:', error);
    res.json({ error: 'Gagal mengambil data berita.' });
  }
});


// ======================================================
// ==============   HALAMAN ERROR 404   =================
// ======================================================
app.get('/bantuan/*', (req, res) => {
  res.render('404', {
    judul: '404',
    nama: 'Rindhiani Putri',
    pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    judul: '404',
    nama: 'Rindhiani Putri',
    pesanKesalahan: 'Halaman tidak ditemukan.'
  })
})

// ======================================================
// ==============   JALANKAN SERVER   ===================
// ======================================================
app.listen(4000, () => {
  console.log('✅ Server berjalan di port 4000')
})
