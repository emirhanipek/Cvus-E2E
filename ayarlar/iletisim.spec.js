import { test, expect } from '@playwright/test';
import {login} from '../Kullanıcı Yonetimi/login.spec';

test('iletişim bilgileri başarıyla güncellenmeli', async ({ page }) => {


  login(page)
  await page.getByRole('button', { name: 'Ayarlar' }).click();
  await page.getByRole('link', { name: 'İletişim' }).click();
  await page.locator('input[type="text"]').first().click();
  await page.locator('input[type="text"]').first().fill('https:/x/');
  await page.locator('input[type="text"]').first().press('ControlOrMeta+a');
  await page.locator('input[type="text"]').first().fill('test company');
  await page.getByRole('textbox', { name: 'Enter a phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter a phone number' }).fill('+905413609917');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('emirhan.ipek');
  await page.locator('input[type="email"]').press('Alt+@');
  await page.locator('input[type="text"]').nth(1).click();
  await page.locator('input[type="text"]').nth(1).press('ControlOrMeta+a');
  await page.locator('input[type="text"]').nth(1).fill('www.siriusiaitech.com');
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('https://www.linkedin.com/');
  await page.locator('input[type="text"]').nth(3).click();
  await page.locator('input[type="text"]').nth(3).click();
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('linkedin');
  await page.locator('input[type="text"]').nth(3).click();
  await page.locator('input[type="text"]').nth(3).fill('https://www.insx/');
  await page.locator('input[type="text"]').nth(3).press('ControlOrMeta+a');
  await page.locator('input[type="text"]').nth(3).fill('instgram');
  await page.locator('input[type="text"]').nth(4).click();
  await page.locator('input[type="text"]').nth(4).press('ControlOrMeta+a');
  await page.locator('input[type="text"]').nth(4).fill('twiter');
  await page.getByRole('button', { name: 'Yeni', exact: true }).click();
  await page.getByRole('textbox', { name: 'Ad ve Soyad' }).click();
  await page.getByRole('textbox', { name: 'Ad ve Soyad' }).fill('test emir');
  await page.getByRole('textbox', { name: 'Mail' }).click();
  await page.getByRole('textbox', { name: 'Mail' }).fill('test');
  await page.getByRole('textbox', { name: 'Telefon Numarası' }).click();
  await page.getByRole('textbox', { name: 'Telefon Numarası' }).fill('5413609917');
  await page.getByRole('dialog').getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('textbox', { name: 'Mail' }).click();
  await page.getByRole('textbox', { name: 'Mail' }).fill('test@siriusaitech.com');
  await page.getByRole('dialog').getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('#app-container i').nth(3).click();
  await page.getByRole('textbox', { name: 'Ad ve Soyad' }).click();
  await page.getByRole('textbox', { name: 'Ad ve Soyad' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Ad ve Soyad' }).fill('test emir2132');
  await page.getByText('Ad Soyad Mail Telefon Numaras').click();
  await page.getByRole('dialog').getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('#app-container i').nth(4).click();
  await page.getByRole('button', { name: 'Evet, sil!' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
});