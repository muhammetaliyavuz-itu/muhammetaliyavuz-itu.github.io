# 🔧 Koyu Temayı Yükleme - Hızlı Çözüm

## ⚠️ SORUN: 
Şu anda GitHub Pages'de ESKİ (açık renkli) versiyon var.
Yeni hazırladığımız KOYU TEMA versiyonu yüklenmemiş.

## ✅ ÇÖZÜM: Doğru Dosyaları Yükle

### ADIM 1: Doğru Klasörü Bul

İndirdiğin dosyalarda şu yapıda olmalı:

```
indirdiklerim/
├── index.html          ← YENİ (koyu tema)
├── css/
│   └── style.css       ← YENİ (koyu tema)
├── js/
│   └── script.js       ← YENİ (gelişmiş animasyonlar)
├── images/
├── assets/
├── docs/
├── README.md
├── QUICKSTART.md
├── VSCODE_GUIDE.md
└── .gitignore
```

### ADIM 2: Eski Dosyaları Sil (GitHub'da)

#### Yöntem A: GitHub Desktop (ÖNERİLEN)

1. **GitHub Desktop'ı aç**
2. **Repository'ni aç** (muhammetaliyavuz-itu.github.io)
3. **Eski dosyaları sil:**
   - Eski `index.html` → Sil
   - Eski `style.css` → Sil  
   - Eski `script.js` → Sil

4. **Commit yap:**
   - Summary: "Remove old files"
   - Commit to main
   - Push origin

#### Yöntem B: Web Üzerinden

1. https://github.com/muhammetaliyavuz-itu/muhammetaliyavuz-itu.github.io git
2. Her dosyaya tıkla → Çöp kutusu ikonu → Commit changes
3. Şu dosyaları sil:
   - `index.html` (eski)
   - `style.css` (eski)
   - `script.js` (eski)

### ADIM 3: Yeni Dosyaları Yükle

#### Yöntem A: GitHub Desktop (ÖNERİLEN)

1. **Yeni dosyaları kopyala:**
   ```
   İndirdiğin portfolio klasöründen →
   Repository klasörüne (muhammetaliyavuz-itu.github.io)
   
   Kopyalanacaklar:
   - index.html (YENİ)
   - css/ klasörü (YENİ style.css ile)
   - js/ klasörü (YENİ script.js ile)
   - images/ klasörü
   - assets/ klasörü
   - docs/ klasörü
   - .gitignore
   - README.md
   ```

2. **GitHub Desktop'ta:**
   - Summary: "Update to dark theme design"
   - Description: "New dark theme with modern design and animations"
   - Commit to main
   - Push origin

3. **5-10 dakika bekle** → Site güncellenecek!

#### Yöntem B: Sürükle-Bırak (Web)

1. https://github.com/muhammetaliyavuz-itu/muhammetaliyavuz-itu.github.io git
2. **Add file** → **Upload files**
3. Yeni dosyaları sürükle-bırak:
   - index.html
   - css/style.css
   - js/script.js
4. **Commit changes**

### ADIM 4: Dosya Yapısını Kontrol Et

GitHub repo'nda şöyle olmalı:

```
muhammetaliyavuz-itu.github.io/
├── index.html               ← YENİ (koyu tema HTML)
├── css/
│   └── style.css           ← YENİ (koyu tema CSS)
├── js/
│   └── script.js           ← YENİ (animasyonlar)
├── images/
│   └── projects/
│       ├── suboff-streamlines.jpg   (sen ekleyeceksin)
│       ├── kcs-wave.jpg             (sen ekleyeceksin)
│       └── offshore-pressure.jpg    (sen ekleyeceksin)
├── docs/
│   └── CV_Muhammet_Ali_Yavuz.pdf    (sen ekleyeceksin)
└── README.md
```

---

## 🎨 Koyu Tema vs Açık Tema Farkı

### Eski (Şu andaki):
- ❌ Beyaz arka plan
- ❌ Açık renkler
- ❌ Orbitron font
- ❌ Basit animasyonlar

### Yeni (Yükleyeceğin):
- ✅ Koyu mavi-siyah arka plan (#0a0e17)
- ✅ Cyan ve turuncu vurgular
- ✅ Syne + IBM Plex Mono fontları
- ✅ Gelişmiş animasyonlar
- ✅ Custom cursor
- ✅ Parallax effects
- ✅ Modern tasarım

---

## 🔍 Kontrol: Doğru Dosyayı Yükledin mi?

### index.html içinde şunlar OLMALI:

```html
<!-- Koyu tema için doğru fontlar -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght=400;600;700;800&family=Space+Mono...">

<!-- Koyu tema için doğru dosya yolları -->
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>
```

### style.css içinde şunlar OLMALI:

```css
:root {
    /* Colors - Dark Theme */
    --bg-primary: #0a0e17;
    --bg-secondary: #111827;
    --accent-cyan: #06b6d4;
    --accent-orange: #f97316;
}

body {
    font-family: 'IBM Plex Mono', 'Space Mono', monospace;
    background: var(--bg-primary);
    color: var(--text-primary);
}
```

**Eğer bunlar YOKSA, yanlış dosyayı yüklemişsin!**

---

## 🚀 Hızlı Çözüm Özeti

```bash
# 1. Repository'i clone et (yeniden)
git clone https://github.com/muhammetaliyavuz-itu/muhammetaliyavuz-itu.github.io.git

# 2. İçine gir
cd muhammetaliyavuz-itu.github.io

# 3. Eski dosyaları sil
rm index.html style.css script.js

# 4. Yeni dosyaları kopyala (indirdiğin portfolio klasöründen)
cp -r ~/Downloads/portfolio/* .

# 5. Git işlemleri
git add .
git commit -m "Update to dark theme"
git push origin main
```

---

## 📞 Hâlâ Sorun Varsa

### Seçenek 1: Tüm Repo'yu Sil ve Yeniden Yükle

1. GitHub'da repository ayarlarına git
2. En alta scroll et
3. "Delete this repository"
4. Yeni repo oluştur (aynı isimle)
5. Sadece yeni dosyaları yükle

### Seçenek 2: Branch Kullan

```bash
git checkout -b dark-theme
# Yeni dosyaları ekle
git add .
git commit -m "Dark theme"
git push origin dark-theme
# GitHub'da Pull Request aç ve merge et
```

---

## ✅ Başarı Kontrolü

Site güncellendikten sonra:

1. https://muhammetaliyavuz-itu.github.io'a git
2. **F12** bas (Developer Tools)
3. Console'da şunu gör:
   ```
   🚢 Portfolio Loaded Successfully!
   ```
4. Sayfa arka planı **koyu mavi-siyah** olmalı
5. Animasyonlar çalışmalı
6. Custom cursor olmalı (desktop'ta)

---

## 🎯 Sonuç

Problem: **Eski dosyalar yüklü**
Çözüm: **Yeni koyu tema dosyalarını yükle**

Şu anda repository'nde:
- ❌ Eski index.html (açık tema)
- ❌ Eski style.css (açık renkler)
- ❌ Eski script.js (basit)

Olması gereken:
- ✅ Yeni index.html (koyu tema)
- ✅ css/style.css (koyu renkler)
- ✅ js/script.js (gelişmiş)

**GitHub Desktop kullanarak hemen güncelle!** 🚀
