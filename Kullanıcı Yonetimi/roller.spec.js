import { test, expect } from '@playwright/test';
import { login } from './login.spec.js'; // login fonksiyonunu içe aktar 

test.beforeEach(async ({ page }) => {
  await login(page); // 🔥 Login işlemi burada
});

test('Rol ekleme başarıyla tamamlanmalı', async ({ page }) => {


await page.getByRole('button', { name: 'Roller' }).click();
await page.getByRole('button', { name: '+ Rol Ekle' }).click();
await page.getByRole('textbox').click();
await page.getByRole('textbox').press('CapsLock');
await page.getByRole('textbox').fill('T');
await page.getByRole('textbox').press('CapsLock');
await page.getByRole('textbox').fill('Tahir ');
await page.getByRole('textbox').press('CapsLock');
await page.getByRole('textbox').fill('Tahir D');
await page.getByRole('textbox').press('CapsLock');
await page.getByRole('textbox').fill('Tahir Deneme ');
await page.getByRole('textbox').press('CapsLock');
await page.getByRole('textbox').fill('Tahir Deneme R');
await page.getByRole('textbox').press('CapsLock');
await page.getByRole('textbox').fill('Tahir Deneme Rol');
await page.locator('div').filter({ hasText: /^Kullanıcılar \(0\/8\)$/ }).nth(2).click();
await page.locator('div:nth-child(2) > div > div > .inline-flex > .flex').first().click();
await page.locator('div').filter({ hasText: /^Özgeçmiş \(0\/3\)$/ }).nth(2).click();
await page.locator('div:nth-child(2) > div > div:nth-child(2) > div > div > .inline-flex > .flex').first().click();
await page.locator('div').filter({ hasText: /^Proje \(0\/5\)$/ }).nth(2).click();
await page.locator('div:nth-child(3) > div > div:nth-child(2) > div > div > .inline-flex > .flex').first().click();
await page.locator('div').filter({ hasText: /^Ayarlar \(0\/6\)$/ }).nth(2).click();
await page.locator('div:nth-child(5) > div > .border-b > div > .ml-2 > .iconify').click();
await page.getByText('Özgeçmis Detayi (0/7)').click();
await page.locator('div:nth-child(10) > div > div:nth-child(2) > div > div:nth-child(3) > .inline-flex > .flex').click();
await page.locator('div').filter({ hasText: /^Firma \(0\/4\)$/ }).first().click();
await page.locator('div:nth-child(12) > div > div:nth-child(2) > div > div > .inline-flex > .flex').first().click();
await page.getByRole('button', { name: 'Kaydet' }).click();
await page.getByRole('button', { name: 'Tamam' }).click();
await page.getByRole('button', { name: 'Yenile' }).click();
});