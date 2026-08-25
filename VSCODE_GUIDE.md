

1/2

Next.js 16.1.6
Turbopack
Console Error



Encountered two children with the same key, ``. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted - the behavior is unsupported and could change in a future version.
app/components/Projects.tsx (56:45) @ <unknown>


  54 |                                     <div className="flex justify-center gap-5" style={{ borderTop: "1px solid var(--bdr)", paddingTop: "0.8rem" }}>
  55 |                                         {project.metrics.map((m) => (
> 56 |                                             <div key={m.label} className="flex flex-col">
     |                                             ^
  57 |                                                 <span style={{ fontFamily: "var(--fh)", fontSize: "1rem", fontWeight: 700, color: "var(--cy)" }}>{m.value}</span>
  58 |                                                 <span style={{ fontFamily: "var(--fb)", fontSize: "0.68rem", color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 500 }}>{m.label}</span>
  59 |                                             </div>
Call Stack
26

Show 19 ignore-listed frame(s)
div
<anonymous>
<unknown>
app/components/Projects.tsx (56:45)
Array.map
<anonymous>
<unknown>
app/components/Projects.tsx (55:58)
Array.map
<anonymous>
Projects
app/components/Projects.tsx (33:31)
Home
app/page.tsx (32:7)
1
2
Was this helpful?# 🔧 VSCode'dan Site Güncelleme Rehberi

## 📥 ADIM 1: Dosyaları İndir ve Aç

### Dosyaları İndirme
1. Bu chat penceresinden tüm dosyaları indir
2. `portfolio` klasörü olarak kaydet
3. Masaüstüne veya Documents'a koy

### VSCode'da Açma
```bash
# Terminal veya Command Prompt'ta:
cd Desktop/portfolio
code .
```

Ya da:
- VSCode'u aç
- `File` → `Open Folder`
- `portfolio` klasörünü seç

---

## 🖼️ ADIM 2: Görsel Ekleme

### CV'deki Görselleri Export Et

#### Yöntem 1: Screenshot (Kolay)
1. CV PDF'ini aç (Muhammet_Ali_Yavuz_-_Resume.pdf)
2. Sayfa 4, 5, 6'daki görselleri screenshot al
3. Crop et (sadece görseli bırak)
4. Şu isimlerle kaydet:
   - `suboff-streamlines.jpg` (Figure A5)
   - `kcs-wave.jpg` (Figure A3)
   - `offshore-pressure.jpg` (Figure A1)

#### Yöntem 2: PDF'den Extract (Daha iyi kalite)
1. Adobe Acrobat ile aç
2. Tools → Export PDF → Images
3. JPG olarak export et
4. İsimlendirip kaydet

### Görselleri Kopyala
```
portfolio/
  images/
    projects/
      ├── suboff-streamlines.jpg    ← Buraya
      ├── kcs-wave.jpg               ← Buraya
      └── offshore-pressure.jpg      ← Buraya
```

### Görsel Optimizasyonu (Opsiyonel ama önerilen)
- https://tinypng.com adresine git
- Görselleri yükle ve compress et
- İndirip aynı yere kaydet

---

## 📝 ADIM 3: İçerik Güncelleme

### VSCode'da Düzenleme

#### A) İletişim Bilgileri Kontrol
`index.html` dosyasını aç:

**Ctrl+F (Windows) / Cmd+F (Mac)** ile ara:
- `yavuzmu21@itu.edu.tr` → Doğru mu?
- `in/yavuzitu` → Doğru mu?

#### B) CV PDF'ini Ekle
1. Tek sayfalık CV'ni hazırla
2. `CV_Muhammet_Ali_Yavuz.pdf` olarak kaydet
3. `portfolio/docs/` klasörüne koy

#### C) Proje Detaylarını Güncelle (Opsiyonel)
`index.html` içinde proje açıklamalarını istersen değiştirebilirsin

---

## 🌐 ADIM 4: Local Test (Önce Test Et!)

### Live Server ile Test

#### Live Server Extension Kurulumu
1. VSCode'da sol tarafta Extensions ikonuna tıkla (veya `Ctrl+Shift+X`)
2. "Live Server" ara
3. Ritwick Dey'in "Live Server" extension'ını yükle

#### Siteyi Çalıştır
1. `index.html` dosyasını aç
2. Sağ altta "Go Live" butonuna tıkla
3. Ya da: `index.html`'e sağ tıkla → "Open with Live Server"
4. Tarayıcıda `http://localhost:5500` açılacak

#### Test Et
- ✅ Tüm bölümler görünüyor mu?
- ✅ Resimler yüklendi mi?
- ✅ Animasyonlar çalışıyor mu?
- ✅ Link'ler doğru mu?
- ✅ Mobil görünüm iyi mi? (F12 → Device Toolbar)

---

## 🚀 ADIM 5: GitHub'a Yükleme

### Method A: GitHub Desktop (En Kolay) ⭐

#### 1. GitHub Desktop İndir ve Kur
- https://desktop.github.com adresinden indir
- GitHub hesabınla giriş yap

#### 2. Repository Clone Et
- `File` → `Clone Repository`
- `URL` tab'ına geç
- Yapıştır: `https://github.com/muhammetaliyavuz-itu/muhammetaliyavuz-itu.github.io.git`
- Konum seç (örn: Documents/GitHub)
- `Clone` tıkla

#### 3. Dosyaları Kopyala
```bash
# Windows (File Explorer'da):
portfolio klasörünün içindeki HER ŞEYİ kopyala
muhammetaliyavuz-itu.github.io klasörüne yapıştır

# Mac (Finder'da):
Aynısını yap
```

#### 4. Commit ve Push
- GitHub Desktop'ta değişiklikleri göreceksin
- Sol altta "Summary" yaz: `Update portfolio with dark theme`
- Description (opsiyonel): `Added CFD visualizations and new design`
- `Commit to main` butonuna tıkla
- `Push origin` butonuna tıkla

#### 5. Bekle ve Kontrol Et
- 5-10 dakika bekle
- https://muhammetaliyavuz-itu.github.io adresine git
- Site güncellenmiş olmalı! 🎉

---

### Method B: VSCode Terminal (Biraz Teknik)

#### 1. Repository Clone Et
VSCode'da Terminal aç (`Ctrl+`` veya View → Terminal):

```bash
# Ana klasöre git
cd ~/Documents

# Repo'yu clone et
git clone https://github.com/muhammetaliyavuz-itu/muhammetaliyavuz-itu.github.io.git

# Repo klasörüne gir
cd muhammetaliyavuz-itu.github.io
```

#### 2. Dosyaları Kopyala
```bash
# Windows (Git Bash)
cp -r ../portfolio/* .

# Mac/Linux
cp -r ../portfolio/* .

# Ya da manuel olarak File Explorer'da kopyala-yapıştır yap
```

#### 3. Git İşlemleri
```bash
# Değişiklikleri stage'e al
git add .

# Commit yap
git commit -m "Update portfolio with dark theme"

# Push et
git push origin main
```

#### 4. Şifre İsterse
- GitHub Personal Access Token gerekir
- GitHub → Settings → Developer settings → Personal access tokens
- Token oluştur ve kaydet
- Şifre yerine token'ı kullan

---

### Method C: Web Üzerinden (Tek Dosya İçin)

Küçük değişiklikler için:
1. https://github.com/muhammetaliyavuz-itu/muhammetaliyavuz-itu.github.io git
2. İlgili dosyaya git (örn: index.html)
3. Kalem ikonuna tıkla (Edit)
4. Değişikliği yap
5. Commit changes

**Not:** Çok dosya varsa bu yöntem pratik değil!

---

## 🔄 Gelecekte Güncelleme Yapma

### GitHub Desktop ile (Önerilen)

#### Dosyaları Düzenle
1. VSCode'da `muhammetaliyavuz-itu.github.io` klasörünü aç
2. Değişiklikleri yap
3. Kaydet

#### GitHub'a Yükle
1. GitHub Desktop'ı aç
2. Değişiklikleri gör
3. Summary yaz
4. `Commit to main`
5. `Push origin`
6. 5 dakika bekle → Site güncellendi!

---

## 📱 Mobil Test

### Tarayıcıda
1. F12 bas (Developer Tools)
2. Device Toolbar'ı aç (Ctrl+Shift+M)
3. Farklı cihazları test et:
   - iPhone 12/13/14
   - iPad
   - Samsung Galaxy

### Gerçek Cihazda
1. Telefonunda tarayıcı aç
2. https://muhammetaliyavuz-itu.github.io git
3. Test et

---

## 🐛 Sık Karşılaşılan Sorunlar

### Resimler Görünmüyor
```
❌ Yanlış: Images/Projects/photo.jpg
✅ Doğru:  images/projects/photo.jpg

# Linux/GitHub büyük-küçük harfe duyarlı!
```

### Site Güncellenmiyor
1. 5-10 dakika bekle (GitHub Pages yavaş olabilir)
2. Hard refresh yap (Ctrl+Shift+R veya Cmd+Shift+R)
3. Incognito/Private mode'da dene
4. GitHub Actions'da hata var mı kontrol et

### Git Hatası: "Permission Denied"
- Personal Access Token kullan
- SSH key ekle
- GitHub Desktop kullan (daha kolay)

### Dosya Yüklenmedi
```bash
# Terminal'de kontrol et:
cd muhammetaliyavuz-itu.github.io
git status

# Eksik varsa:
git add .
git commit -m "Add missing files"
git push
```

---

## ✅ Checklist

Push etmeden önce kontrol et:

- [ ] Tüm görseller eklendi mi?
- [ ] CV PDF eklendi mi?
- [ ] İletişim bilgileri doğru mu?
- [ ] Local test yaptın mı?
- [ ] Mobil görünüm iyi mi?
- [ ] Tüm linkler çalışıyor mu?

---

## 🎓 Git Komutları Özeti

```bash
# Durumu kontrol et
git status

# Değişiklikleri stage'e al
git add .

# Commit yap
git commit -m "Mesajın"

# Push et
git push origin main

# Son değişiklikleri çek
git pull origin main

# Commit geçmişi
git log --oneline
```

---

## 💡 İpuçları

1. **Yedekleme:** Değişiklik yapmadan önce yedeğini al
2. **Küçük adımlar:** Her değişiklikten sonra commit yap
3. **Test et:** Her zaman local'de test et
4. **Commit mesajları:** Açıklayıcı ol (örn: "Add project images", "Fix mobile layout")

---

## 🆘 Yardım

Bir şey ters giderse:

1. **Stack Overflow:** Hatayi google'a yaz
2. **GitHub Docs:** https://docs.github.com
3. **Claude:** Bana tekrar sor! 😊

---

**Hazır mısın?** 🚀
1. Görselleri ekle
2. Local test yap
3. GitHub'a yükle
4. 5 dakika bekle
5. Tadını çıkar! 🎉

Kolay gelsin! Başarılar! 💪
