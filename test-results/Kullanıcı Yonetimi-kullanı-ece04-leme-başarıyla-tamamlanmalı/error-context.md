# Test info

- Name: Kullanıcı ekleme başarıyla tamamlanmalı
- Location: C:\Users\tahir\OneDrive\Masaüstü\Klasörler\Sirius\CVUS\Cvus-E2E\Kullanıcı Yonetimi\kullanıcıadd.spec.js:8:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div').filter({ hasText: /^admin test$/ }).nth(1)

    at C:\Users\tahir\OneDrive\Masaüstü\Klasörler\Sirius\CVUS\Cvus-E2E\Kullanıcı Yonetimi\kullanıcıadd.spec.js:30:74
```

# Page snapshot

```yaml
- link "Açık Pozisyonlar":
  - /url: /project
  - button "Açık Pozisyonlar"
- link "Özgeçmişler":
  - /url: /cv
  - button "Özgeçmişler"
- link "Genel Raporlama":
  - /url: /general
  - button "Genel Raporlama"
- link "İşe Alınanlar":
  - /url: /hired
  - button "İşe Alınanlar"
- link "Kullanıcılar":
  - /url: /users
  - button "Kullanıcılar"
- link "Ayarlar":
  - /url: /setting
  - button "Ayarlar"
- button
- button "Çıkış Yap"
- button
- button "Sirius Ai Tech - Holding"
- button
- button "Yenile"
- button "Türkçe"
- button
- button "Kullanıcılar"
- button "Roller"
- button "Firmalar"
- dialog:
  - heading "Kullanıcı Ekle" [level=1]
  - button ""
  - text: Ad
  - paragraph: 
  - textbox: Tahir Reis
  - text: Soyad
  - paragraph: 
  - textbox: Yıldız
  - text: E-posta
  - paragraph: 
  - textbox: thrcn.yldz.reis@gmail.com
  - text: Firma  efe  Rol  Bir rol seçin   Zorunlu alanlar
  - button "Kaydet" [disabled]
- button "+ Kullanıcı Ekle"
- textbox "Kullanıcı ara..."
- button ""
- table:
  - rowgroup:
    - row "# Ad Rol Firma E-posta":
      - cell "#"
      - cell "Ad"
      - cell "Rol"
      - cell "Firma"
      - cell "E-posta"
      - cell
  - rowgroup:
    - row "  1 Berk Dorukan Gülle... test99 Sirius Ai Tech berkdorukan@gmail.com":
      - button ""
      - button ""
      - cell "1"
      - cell "Berk Dorukan Gülle..."
      - cell "test99"
      - cell "Sirius Ai Tech"
      - cell "berkdorukan@gmail.com"
      - cell
    - row "  2 efe ozat efe1 Tav-Havaş tigarap860@astimei.com":
      - button ""
      - button ""
      - cell "2"
      - cell "efe ozat"
      - cell "efe1"
      - cell "Tav-Havaş"
      - cell "tigarap860@astimei.com"
      - cell
    - row "  3 efe can efe1 Tav-Havaş efeozt8@hotmail.com":
      - button ""
      - button ""
      - cell "3"
      - cell "efe can"
      - cell "efe1"
      - cell "Tav-Havaş"
      - cell "efeozt8@hotmail.com"
      - cell
    - row "  4 test test deneme Sirius Ai Tech emirtest@gmail.com":
      - button ""
      - button ""
      - cell "4"
      - cell "test test"
      - cell "deneme"
      - cell "Sirius Ai Tech"
      - cell "emirtest@gmail.com"
      - cell
    - row "  5 efe özat Admin Sirius Ai Tech nilagov315@asaption.com":
      - button ""
      - button ""
      - cell "5"
      - cell "efe özat"
      - cell "Admin"
      - cell "Sirius Ai Tech"
      - cell "nilagov315@asaption.com"
      - cell
    - row "  6 Tahir Firma Yıldız admin Tahir A.Ş. hipog36678@noroasis.com":
      - button ""
      - button ""
      - cell "6"
      - cell "Tahir Firma Yıldız"
      - cell "admin"
      - cell "Tahir A.Ş."
      - cell "hipog36678@noroasis.com"
      - cell
    - row "  7 Tahir Can Yıldız CV Operatörü Tav-Havaş thrcn.yldz4@gmail.com":
      - button ""
      - button ""
      - cell "7"
      - cell "Tahir Can Yıldız"
      - cell "CV Operatörü"
      - cell "Tav-Havaş"
      - cell "thrcn.yldz4@gmail.com"
      - cell
    - row "  8 Emirhan İpek Admin Sirius Ai Tech emirhanipek231@gmail.com":
      - button ""
      - button ""
      - cell "8"
      - cell "Emirhan İpek"
      - cell "Admin"
      - cell "Sirius Ai Tech"
      - cell "emirhanipek231@gmail.com"
      - cell
- text: 8 Adet Kayıt Listelendi
- list:
  - listitem: Önceki
  - listitem: "1"
  - listitem: Sonraki
- img
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { login } from './login.spec.js'; // login fonksiyonunu içe aktar 
   3 |
   4 | test.beforeEach(async ({ page }) => {
   5 |   await login(page); // 🔥 Login işlemi burada
   6 | });
   7 |
   8 | test('Kullanıcı ekleme başarıyla tamamlanmalı', async ({ page }) => { 
   9 |     await page.getByRole('button', { name: 'Kullanıcılar' }).click();
  10 |     await page.getByRole('button', { name: '+ Kullanıcı Ekle' }).click();
  11 |     await page.getByRole('textbox').first().click();
  12 |     await page.getByRole('textbox').first().press('CapsLock');
  13 |     await page.getByRole('textbox').first().fill('T');
  14 |     await page.getByRole('textbox').first().press('CapsLock');
  15 |     await page.getByRole('textbox').first().fill('Tahir ');
  16 |     await page.getByRole('textbox').first().press('CapsLock');
  17 |     await page.getByRole('textbox').first().fill('Tahir R');
  18 |     await page.getByRole('textbox').first().press('CapsLock');
  19 |     await page.getByRole('textbox').first().fill('Tahir Reis');
  20 |     await page.getByRole('textbox').first().press('Tab');
  21 |     await page.getByRole('textbox').nth(1).press('CapsLock');
  22 |     await page.getByRole('textbox').nth(1).fill('Y');
  23 |     await page.getByRole('textbox').nth(1).press('CapsLock');
  24 |     await page.getByRole('textbox').nth(1).fill('Yıldız');
  25 |     await page.getByRole('textbox').nth(1).press('Tab');
  26 |     await page.locator('input[type="email"]').fill('thrcn.yldz.reis@gmail.com');
  27 |     await page.locator('span').filter({ hasText: 'Bir firma seçin' }).first().click();
  28 |     await page.locator('div').filter({ hasText: /^efe$/ }).click();
  29 |     await page.locator("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)").click();
> 30 |     await page.locator('div').filter({ hasText: /^admin test$/ }).nth(1).click();
     |                                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  31 |     page.waitForTimeout(1000);
  32 |     await expect(page.getByRole('button', { name: 'Kaydet' })).toBeEnabled();
  33 |     await page.getByRole('button', { name: 'Kaydet' }).click();    
  34 |     await page.getByRole('button', { name: 'Tamam' }).click();
  35 | });
  36 |
  37 |
```