import { test, expect } from '@playwright/test';
import {login} from '../Kullanıcı Yonetimi/login.spec';


test('özlük bilgileri başarıyla güncellenmeli', async ({ page }) => {

  login(page)

  await page.getByRole('button', { name: 'Ayarlar' }).click();
  await page.getByRole('link', { name: 'Pozisyon', exact: true }).click();
  await page.getByRole('button', { name: 'Yeni', exact: true }).click();
  await page.getByRole('textbox', { name: 'Lütfen özlük bilgisi türünün adını giriniz' }).click();
  await page.getByRole('textbox', { name: 'Lütfen özlük bilgisi türünün adını giriniz' }).fill('burayta bir mesaj');
  await page.getByRole('textbox', { name: 'Lütfen özlük bilgisi türünün adını giriniz' }).press('Tab');
  await page.getByRole('textbox', { name: 'Lütfen özlük bilgisi türünün açıklamasını giriniz' }).fill('acıklama giriniz');
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('div:nth-child(2) > .w-2\\/12 > i').first().click();
  await page.getByRole('textbox', { name: 'Lütfen özlük bilgisi türünün adını giriniz' }).click();
  await page.getByRole('textbox', { name: 'Lütfen özlük bilgisi türünün adını giriniz' }).fill('burayta bir mesaj22');
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('div:nth-child(2) > .w-2\\/12 > i:nth-child(2)').click();
  await page.getByRole('button', { name: 'Evet, sil!' }).click();
});