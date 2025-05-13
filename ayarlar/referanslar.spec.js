import { test, expect } from '@playwright/test';
import {login} from '../Kullanıcı Yonetimi/login.spec';

test('referans bilgileri başarıyla güncellenmeli', async ({ page }) => {

  login(page)

  await page.getByRole('button', { name: 'Ayarlar' }).click();
  await page.getByRole('link', { name: 'Pozisyon', exact: true }).click();
  await page.getByRole('button', { name: 'Referanslar' }).click();
  await page.getByRole('button', { name: 'Yeni', exact: true }).click();
  await page.getByRole('textbox', { name: 'Referans türü başlığını' }).click();
  await page.getByRole('textbox', { name: 'Referans türü başlığını' }).fill('refersan');
  await page.locator('div').filter({ hasText: /^Referans türü seçiniz$/ }).click();
  await page.getByText('Telefon Numarası').click();
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('div:nth-child(4) > .w-2\\/12 > i').first().click();
  await page.getByRole('textbox', { name: 'Referans türü başlığını' }).click();
  await page.getByRole('textbox', { name: 'Referans türü başlığını' }).fill('refersan1');
  await page.locator('span').filter({ hasText: 'Telefon Numarası' }).first().click();
  await page.locator('div').filter({ hasText: /^Metin$/ }).click();
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('div:nth-child(4) > .w-2\\/12 > i:nth-child(2)').click();
  await page.getByRole('button', { name: 'Evet, sil!' }).click();
});