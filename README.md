# README - Kartu Ucapan Ulang Tahun Digital 🎉

Panduan penggunaan sederhana

## 📁 Struktur Folder

```
folder-anda/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── orang-ganteng.webp
```

## ✏️ Cara Mengganti Konten

### 1. **Mengganti Foto**

- Siapkan foto Anda (format .jpg atau .png)
- Edit foto agar berbentuk persegi (1:1)
- Simpan di folder `assets/images/`
- Beri nama file, misal: `foto-saya.jpg`
- Buka file `index.html`
- Cari baris ini:
  ```html
  src="assets/images/orang-ganteng.webp"
  ```
- Ganti `orang-ganteng.webp` dengan nama file foto Anda

### 2. **Mengganti Nama Penerima**

Di file `index.html`:

- Cari tulisan **"Orang Ganteng!"** di baris `<h2>`
- Ganti dengan nama yang diinginkan

### 3. **Mengganti Nama Pengirim**

Di file `index.html`:

- Cari tulisan **"Yanto"** di baris `<span>`
- Ganti dengan nama Anda

### 4. **Mengganti Pesan Ucapan**

Di file `index.html`:

- Cari paragraf dengan class `message`
- Ganti teks di antara `<p class="message">` dan `</p>`

### 5. **Mengganti Judul di Tab Browser**

Di file `index.html`:

- Cari baris `<title>`
- Ganti teks di antara `<title>` dan `</title>`

### 6. **Mengganti Teks Tombol**

Di file `index.html`:

- Cari **"Bisa dipencet"** di baris `<button>`
- Ganti dengan teks yang diinginkan

## 🚀 Cara Menjalankan

Cukup **klik 2 kali file `index.html`** atau drag & drop ke browser. Selesai! Tidak perlu install apapun.

## 💡 Tips

- Jangan hapus atau ganti nama folder `assets/`
- Pastikan semua file masih dalam satu folder yang sama
- Untuk mengganti warna, bisa edit file `style.css` di bagian `:root`

---

Selamat mencoba! 🎂✨
