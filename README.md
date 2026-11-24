# Mobil Programlama — Hafta 6: Öğrenci Ders Programı

**Öğrenci:** Hussam Al Sleem  
**Öğrenci No:** 2210238518  
**Ders:** Mobil Programlama  
**Konu:** Haftalık Ders Programı ve Dinamik Detay Ekranı  

---

## 📌 Proje Hakkında
Bu uygulama, bir üniversite öğrencisinin haftalık ders programını günlere göre listeleyen, gün bazlı filtreleme olanağı tanıyan ve her dersin ayrıntılarını (ders saati, sınıf/lab, öğretim üyesi ve konu başlıkları) dinamik rotalama ile gösteren bir mobil uygulamadır.

### 🚀 Karşılanan Gereksinimler
- **Ders Verileri (`data/courses.js`):** En az 4 ders (Mobil Programlama, JavaScript, Web Tasarımı, Veritabanı, Yazılım Mimarisi) tanımlanmıştır.
- **CourseCard Bileşeni:** Her ders kartında gün, ders adı, kod, saat ve sınıf bilgisi dinamik olarak gösterilir.
- **Gün Filtresi:** Kullanıcı gün çiplerine (Pazartesi, Salı, Çarşamba, Perşembe, Cuma) basarak o güne ait dersleri listeleyebilir.
- **Dinamik Rota (`/ders/[id]`):** Tıklanan dersin ID'si okunur ve detay ekranı oluşturulur.
- **Hata Kontrolü:** Bilinmeyen bir ID denendiğinde (`/ders/hatali-ders-999`) kontrollü bilgi mesajı ve programa dönüş seçeneği sunulur.

---

## 🧪 Test Senaryoları ve Sonuçları

| No | İşlem | Beklenen Sonuç | Durum |
|---|---|---|---|
| T7 | Farklı bir derse bas (d1 Mobil Programlama) | Seçilen dersin sınıf, saat ve eğitmen bilgileri görünür | Başarılı (OK) |
| - | Gün filtresinde "Salı" seç | Yalnızca Salı gününe ait Mobil Programlama listelenir | Başarılı (OK) |
| - | Hatalı ID butonuna tıkla | "Ders Bulunamadı" kontrollü hata mesajı açılır | Başarılı (OK) |
| - | Detaydan geri dön | Haftalık programa sorunsuz geri dönülür | Başarılı (OK) |
