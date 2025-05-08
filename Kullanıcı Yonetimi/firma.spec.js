import { test, expect } from '@playwright/test';
import { login } from './login.spec.js'; // login fonksiyonunu içe aktar 

test.beforeEach(async ({ page }) => {
  await login(page); // 🔥 Login işlemi burada
});



test('Firma Ekle',  async ({ page }) => {
    await page.getByRole('button', { name: 'Kullanıcılar' }).click();
    await page.getByRole('button', { name: 'Firmalar' }).click();
    await page.getByRole('button', { name: '+ Firma Ekle' }).click();
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
    await page.getByRole('textbox').fill('Tahir Deneme F');
    await page.getByRole('textbox').press('CapsLock');
    await page.getByRole('textbox').fill('Tahir Deneme Firma');
    await page.getByRole('button', { name: 'Kaydet' }).click();
    await page.getByRole('button', { name: 'Tamam' }).click();
    await page.getByRole('row', { name: 'Tahir Deneme Firma' }).getByRole('button').nth(1).click();
    await page.getByRole('button', { name: 'Evet, sil!' }).click();
    await page.getByRole('button', { name: 'Tamam' }).click();


});