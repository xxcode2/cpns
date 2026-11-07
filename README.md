# Latihan SKD CPNS

Website latihan Seleksi Kompetensi Dasar (SKD) CPNS — tryout ala CAT BKN.

## Isi

- **110 soal**: TWK 30, TIU 35, TKP 45
- **Tryout Full**: 110 soal, timer 100 menit, skor otomatis
- **Latihan per bagian**: TWK / TIU / TKP, dan mode Acak 20 soal
- **Passing grade** (formasi umum, acuan KepmenPAN-RB No. 321/2024):
  - TWK ≥ 65 (maks 150)
  - TIU ≥ 80 (maks 175)
  - TKP ≥ 166 (maks 225)
  - Total ≥ 311 (maks 550) — dan harus lolos **ketiga** bagian sekaligus
- Pembahasan tiap soal, navigasi nomor soal, tanda ragu-ragu, riwayat skor (tersimpan di browser)

## Cara pakai

Buka `index.html` di browser, atau aktifkan GitHub Pages di repo ini (Settings → Pages → Deploy from branch → `main` → `/ (root)`), lalu buka link Pages-nya.

Tidak perlu server dan tidak ada data yang dikirim ke mana-mana — semua jalan di browser.

## Penting: soal latihan, bukan soal asli

Soal di sini **bukan soal asli BKN**. Bank soal CAT BKN bersifat rahasia dan tidak dipublikasikan. Soal-soal ini dibuat mengikuti kisi-kisi resmi dan pola soal yang pernah keluar tahun-tahun sebelumnya — tipe dan tingkat kesulitannya sama, angka/contohnya beda. Tujuannya supaya ada gambaran dan bisa belajar polanya.

Info resmi pendaftaran dan jadwal: https://sscasn.bkn.go.id

## File

- `index.html` — halaman utama
- `style.css` — tampilan
- `app.js` — logika tryout, timer, skor
- `soal.js` — bank soal (110 soal, digabung dari `data/`)
- `data/twk.json`, `data/tiu.json`, `data/tkp.json` — sumber soal per bagian
