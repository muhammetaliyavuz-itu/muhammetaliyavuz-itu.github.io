# 🚀 Quick Start Guide

## Dosya Yapısı

```
portfolio/
├── index.html                 ← Ana sayfa
├── .gitignore                 ← Git ignore dosyası
├── README.md                  ← Detaylı dökümentasyon
│
├── css/
│   └── style.css             ← Dark theme CSS (koyu tema)
│
├── js/
│   └── script.js             ← Interaktif animasyonlar
│
├── images/
│   ├── projects/             ← BURAYA CFD GÖRSELLERİNİ EKLE!
│   │   ├── README.md         ← Resim ekleme talimatları
│   │   ├── suboff-streamlines.jpg  (CV'den Figure A5)
│   │   ├── kcs-wave.jpg            (CV'den Figure A3)
│   │   └── offshore-pressure.jpg   (CV'den Figure A1)
│   │
│   ├── hero/                 ← Hero bölümü resimleri (opsiyonel)
│   └── background/           ← Arka plan resimleri (opsiyonel)
│
├── assets/
│   ├── fonts/                ← Özel fontlar (gerekirse)
│   └── icons/                ← İkonlar
│
└── docs/
    └── CV_Muhammet_Ali_Yavuz.pdf  ← CV'ni buraya koy!
```

## ✅ Yapman Gerekenler

### 1. CFD Görsellerini Ekle
CV'indeki Appendix'teki görselleri export et:
- **Figure A5** → `images/projects/suboff-streamlines.jpg`
- **Figure A3** → `images/projects/kcs-wave.jpg`
- **Figure A1** → `images/projects/offshore-pressure.jpg`

### 2. CV PDF Ekle
Tek sayfalık özgeçmişini koy:
- `docs/CV_Muhammet_Ali_Yavuz.pdf`

### 3. VSCode'da Aç
```bash
cd portfolio
code .
```

### 4. Live Server ile Test Et
- VSCode'da "Live Server" extension'ını yükle
- `index.html`'e sağ tıkla → "Open with Live Server"
- `http://localhost:5500` adresinde siteni gör

### 5. GitHub'a Yükle
```bash
# GitHub repo'nu clone et
git clone https://github.com/muhammetaliyavuz-itu/muhammetaliyavuz-itu.github.io.git

# Portfolio dosyalarını kopyala
cp -r portfolio/* muhammetaliyavuz-itu.github.io/

# Commit ve push
cd muhammetaliyavuz-itu.github.io
git add .
git commit -m "Dark theme portfolio with CFD projects"
git push origin main
```

### 6. Canlıya Geç!
5-10 dakika içinde siteniz yayına girer:
**https://muhammetaliyavuz-itu.github.io**

## 🎨 Tasarım Özellikleri

### Renkler (Dark Theme)
- **Arka Plan:** Koyu mavi-siyah (#0a0e17)
- **Ana Vurgu:** Cyan (#06b6d4)
- **İkincil Vurgu:** Turuncu (#f97316)
- **Metin:** Açık gri tonları

### Fontlar
- **Başlıklar:** Syne (bold, modern)
- **Metin:** IBM Plex Mono (teknik, okunabilir)
- **Kod:** Space Mono (monospace)

### Animasyonlar
- Smooth scroll
- Fade-in effects
- Hover animations
- Parallax background
- Custom cursor (desktop)
- Counter animations

## 📱 Responsive
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (375px+)

## 🔧 Özelleştirme

### Renkleri Değiştir
`css/style.css` dosyasında:
```css
:root {
    --accent-cyan: #06b6d4;    /* Burası ana renk */
    --accent-orange: #f97316;  /* Burası vurgu rengi */
}
```

### İçerik Güncelle
`index.html` dosyasında:
- İletişim bilgileri (email, telefon, LinkedIn)
- Proje detayları
- Deneyim açıklamaları
- Eğitim bilgileri

## 🐛 Sorun Giderme

**Resimler görünmüyor:**
- Dosya yollarını kontrol et (büyük-küçük harf duyarlı!)
- Resimlerin doğru klasörde olduğundan emin ol

**Animasyonlar çalışmıyor:**
- `js/script.js` dosyasının yüklendiğini kontrol et
- Browser console'da (F12) hata var mı bak

**GitHub Pages'de 404:**
- Repository ayarlarında "Pages" bölümünü kontrol et
- Branch'in `main` olduğundan emin ol
- 5-10 dakika bekle

## 💡 İpuçları

1. **Performans:** Resimleri 300KB altında tut
2. **SEO:** Meta description ve title güncelle
3. **Analytics:** Google Analytics ekleyebilirsin
4. **Domain:** Özel domain bağlayabilirsin (opsiyonel)

## 📞 Yardım

Sorularınız için: yavuzmu21@itu.edu.tr

---

**Hazırlayan:** Claude
**Tarih:** Şubat 2025
**Versiyon:** 2.0 (Dark Theme)
