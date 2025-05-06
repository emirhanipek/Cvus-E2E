# Test info

- Name: Kullanıcı ekleme başarıyla tamamlanmalı
- Location: /Users/emirhanipek/Desktop/cvus e2e/Kullanıcı Yonetimi/kullanıcıadd.spec.js:7:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Kullanıcılar' })

    at /Users/emirhanipek/Desktop/cvus e2e/Kullanıcı Yonetimi/kullanıcıadd.spec.js:9:62
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { login } from './login.spec.js'; // login fonksiyonunu içe aktar 
   3 |
   4 | test.beforeEach(async ({ page }) => {
   5 |   await login(page); // 🔥 Login işlemi burada
   6 | });
   7 | test('Kullanıcı ekleme başarıyla tamamlanmalı', async ({ page }) => { 
   8 |     await setTimeout(() => {}, 3000); // 2 saniye bekle
>  9 |     await page.getByRole('button', { name: 'Kullanıcılar' }).click();
     |                                                              ^ Error: locator.click: Target page, context or browser has been closed
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
  27 |
  28 |
  29 |     await page.locator('span').filter({ hasText: 'Bir firma seçin' }).first().click();
  30 |
  31 |     await page.waitForTimeout(2000)
  32 |     await page.locator('div').filter({ hasText: /^Test Company$/ }).click();
  33 |
  34 |     await page.waitForTimeout(2000)
  35 |     await page.locator('div').filter({ hasText: /^Bir rol seçin$/ }).click();
  36 |
  37 |     await page.waitForTimeout(2000)
  38 |     await page.locator('div').filter({ hasText: /^admin test$/  }).nth(1).click();
  39 |
  40 |     await page.waitForTimeout(2000)
  41 |     await expect(page.getByRole('button', { name: 'Kaydet' })).toBeEnabled();
  42 |
  43 |     await page.waitForTimeout(5000)
  44 |     await page.getByRole('button', { name: 'Kaydet' }).click();    
  45 |     await page.getByRole('button', { name: 'Tamam' }).click();
  46 | });
```