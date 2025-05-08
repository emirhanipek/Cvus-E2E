import { test, expect } from '@playwright/test';
import {login} from '../Kullanıcı Yonetimi/login.spec'

test('test', async ({ page }) => {

  login(page)

  await page.getByRole('button', { name: 'Ayarlar' }).click();
  await page.getByRole('link', { name: 'Pozisyon', exact: true }).click();
  await page.getByRole('button', { name: 'Yetersizlik Bilgileri' }).click();
  await page.getByRole('button', { name: 'Yeni', exact: true }).click();
  await page.getByRole('textbox', { name: 'Yetersizlik mesajını giriniz' }).click();
  await page.getByRole('textbox', { name: 'Yetersizlik mesajını giriniz' }).fill('bu pozisyon');
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('div:nth-child(3) > .w-2\\/12 > i').first().click();
  await page.getByRole('textbox', { name: 'Yetersizlik mesajını giriniz' }).click();
  await page.getByRole('textbox', { name: 'Yetersizlik mesajını giriniz' }).fill('poz.syon');
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('div:nth-child(3) > .w-2\\/12 > i:nth-child(2)').click();
  await page.getByRole('button', { name: 'Evet, sil!' }).click();
});