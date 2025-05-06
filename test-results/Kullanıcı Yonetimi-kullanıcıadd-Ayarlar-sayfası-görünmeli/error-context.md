# Test info

- Name: Ayarlar sayfası görünmeli
- Location: C:\Users\tahir\OneDrive\Masaüstü\Klasörler\Sirius\CVUS\Cvus-E2E\Kullanıcı Yonetimi\kullanıcıadd.spec.js:8:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Kullanıcılar' })

    at C:\Users\tahir\OneDrive\Masaüstü\Klasörler\Sirius\CVUS\Cvus-E2E\Kullanıcı Yonetimi\kullanıcıadd.spec.js:10:62
```

# Page snapshot

```yaml
- heading "CV US' u kullanarak Işe Alım Süreçlerinizi Yönetin, Takım Çalışmasını Planlayın ve Verimliliği Artırın" [level=1]
- paragraph: İşe alım süreçlerinizi hızlandırmak ve daha etkili hale getirmek için CVUS'u kullanın. Giriş yaparak veya kaydolarak, adayların özgeçmişleri yönetebilir, otomatik görüşmeler yapabilir ve en uygun adayları kolayca belirleyebilirsiniz. İşe alım süreçlerinde başarıyı yakalayın ve geleceğin iş gücünü şekillendirin.
- paragraph: Gizlilik Politikası
- paragraph: Bu platformun tüm hakları saklıdır copyright 2023 cvus.app
- paragraph: Lütfen tüm alanları eksiksiz olarak doldurunuz.
- textbox "E-posta": melih.demir@gmail.com
- textbox "Password": Melih.demir@12
- button ""
- checkbox "Beni Hatırla"
- text: Beni Hatırla
- link "Şifremi unuttum":
  - /url: /set/password
- button "Giriş Yap"
- img
- iframe
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
   8 | test('Ayarlar sayfası görünmeli', async ({ page }) => { 
   9 |     await setTimeout(() => {}, 3000); // 2 saniye bekle
> 10 |     await page.getByRole('button', { name: 'Kullanıcılar' }).click();
     |                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  11 |     await page.getByRole('button', { name: '+ Kullanıcı Ekle' }).click();
  12 |     await page.getByRole('textbox').first().click();
  13 |     await page.getByRole('textbox').first().press('CapsLock');
  14 |     await page.getByRole('textbox').first().fill('T');
  15 |     await page.getByRole('textbox').first().press('CapsLock');
  16 |     await page.getByRole('textbox').first().fill('Tahir ');
  17 |     await page.getByRole('textbox').first().press('CapsLock');
  18 |     await page.getByRole('textbox').first().fill('Tahir R');
  19 |     await page.getByRole('textbox').first().press('CapsLock');
  20 |     await page.getByRole('textbox').first().fill('Tahir Reis');
  21 |     await page.getByRole('textbox').first().press('Tab');
  22 |     await page.getByRole('textbox').nth(1).press('CapsLock');
  23 |     await page.getByRole('textbox').nth(1).fill('Y');
  24 |     await page.getByRole('textbox').nth(1).press('CapsLock');
  25 |     await page.getByRole('textbox').nth(1).fill('Yıldız');
  26 |     await page.getByRole('textbox').nth(1).press('Tab');
  27 |     await page.locator('input[type="email"]').fill('thrcn.yldz.reis@gmail.com');
  28 |     await page.locator('span').filter({ hasText: 'Bir firma seçin' }).first().click();
  29 |     await page.locator('div').filter({ hasText: /^Test Company$/ }).click();
  30 |     await page.locator('div').filter({ hasText: /^Bir rol seçin$/ }).click();
  31 |     await page.locator('div').filter({ hasText: 'admin test' }).nth(1).click();
  32 |     await expect(page.getByRole('button', { name: 'Kaydet' })).toBeEnabled();
  33 |     await page.getByRole('button', { name: 'Kaydet' }).click();    
  34 |     await page.getByRole('button', { name: 'Tamam' }).click();
  35 | });
```