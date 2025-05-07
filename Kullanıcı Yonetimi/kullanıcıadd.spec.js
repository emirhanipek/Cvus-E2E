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
    await page.getByRole('textbox').first().fill('Tahir R');
    await page.getByRole('textbox').first().press('CapsLock');
    await page.getByRole('textbox').first().fill('Tahir Reis');
    await page.getByRole('textbox').first().press('Tab');
    await page.getByRole('textbox').nth(1).press('CapsLock');
    await page.getByRole('textbox').nth(1).fill('Y');
    await page.getByRole('textbox').nth(1).press('CapsLock');
    await page.getByRole('textbox').nth(1).fill('Yıldız');
    await page.getByRole('textbox').nth(1).press('Tab');
    await page.locator('input[type="email"]').fill('thrcn.yldz.reis@gmail.com');
    await page.locator('span').filter({ hasText: 'Bir firma seçin' }).first().click();
    await page.locator('div').filter({ hasText: /^efe$/ }).click();
    await page.locator("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)").click();
    await page.locator('div').filter({ hasText: /^admin test$/ }).nth(1).click();
    page.waitForTimeout(1000);
    await expect(page.getByRole('button', { name: 'Kaydet' })).toBeEnabled();
    await page.getByRole('button', { name: 'Kaydet' }).click();    
    await page.getByRole('button', { name: 'Tamam' }).click();
});

