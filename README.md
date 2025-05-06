# CVUS E2E Test Projesi

Bu proje, CVUS uygulamasının end-to-end testlerini Playwright test framework'ü kullanarak gerçekleştirmektedir.

## Gereksinimler

- Node.js 14 veya üzeri
- NPM veya Yarn

## Kurulum

1. Projeyi klonlayın
```sh
git clone <proje-url>
cd cvus-e2e
```

2. Bağımlılıkları yükleyin
```sh
npm install
```

3. Playwright browser'larını yükleyin
```sh 
npx playwright install
```

## Testleri Çalıştırma

Tüm testleri çalıştırmak için:
```sh
npx playwright test
```

Belirli bir test dosyasını çalıştırmak için:
```sh
npx playwright test <dosya-adı>
```

## Test Grupları

- **Kullanıcı Yönetimi**
  - Login
  - Kullanıcı Ekleme
  - Firma İşlemleri
  - Rol Yönetimi

- **Ayarlar**
  - Şirket Bilgileri
  - İletişim
  - Özlük Bilgileri
  - Yasal Bilgiler
  - Referanslar
  - Mülakat
  - Sabit Soru
  - İlan Bilgileri
  - Yetersizlik

- **Pozisyon**
  - İlan Detayı
  - Pozisyon Ekleme

- **Özgeçmiş**
  - CV Yükleme

## Raporlama

Test raporlarını görüntülemek için:
```sh
npx playwright show-report
```

## Test Geliştirme

Yeni test eklemek için ilgili klasör altında `*.spec.js` formatında dosya oluşturun.