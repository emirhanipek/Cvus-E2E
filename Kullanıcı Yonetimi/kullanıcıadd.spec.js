import { test, expect } from '@playwright/test';
import { login } from './login.spec.js'; // login fonksiyonunu içe aktar 

test.beforeEach(async ({ page }) => {
  await login(page); // 🔥 Login işlemi burada
});

test('Kullanıcı ekleme başarıyla tamamlanmalı', async ({ page }) => { 
    await page.getByRole('button', { name: 'Kullanıcılar' }).click();
    await page.getByRole('button', { name: '+ Kullanıcı Ekle' }).click();
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().press('CapsLock');
    await page.getByRole('textbox').first().fill('T');
    await page.getByRole('textbox').first().press('CapsLock');
    await page.getByRole('textbox').first().fill('Tahir ');
    await page.getByRole('textbox').first().press('CapsLock');
    await page.getByRole('textbox').first().fill('Tahir C');
    await page.getByRole('textbox').first().press('CapsLock');
    await page.getByRole('textbox').first().fill('Tahir Can');
    await page.getByRole('textbox').first().press('Tab');
    await page.getByRole('textbox').nth(1).press('CapsLock');
    await page.getByRole('textbox').nth(1).fill('Y');
    await page.getByRole('textbox').nth(1).press('CapsLock');
    await page.getByRole('textbox').nth(1).fill('Yıldız');
    await page.getByRole('textbox').nth(1).press('Tab');
    await page.locator('input[type="email"]').fill('thrcn.yldz5@gmail.com');
    await page.locator('div').filter({ hasText: /^Bir firma seçin$/ }).locator('i').click();
    await page.locator('div').filter({ hasText: /^Sirius Ai Tech$/ }).click();
    await page.locator('div').filter({ hasText: /^Bir rol seçin$/ }).locator('i').click();
    await page.locator('div').filter({ hasText: /^Admin$/ }).click();
    await page.getByRole('button', { name: 'Kaydet' }).click();
    await page.getByRole('button', { name: 'Tamam' }).click();
    await page.getByRole('row', { name: '  1 Tahir Can Yıldız Admin' }).getByRole('button').nth(1).click();
    await page.getByRole('button', { name: 'Evet, sil!' }).click();
    await page.getByRole('button', { name: 'Tamam' }).click();
});

