import { test, expect } from '@playwright/test';
import {login} from '../Kullanıcı Yonetimi/login.spec';

test('sabit soru bilgileri başarıyla güncellenmeli', async ({ page }) => {
  login(page)
  await page.getByRole('button', { name: 'Ayarlar' }).click();
  await page.getByRole('link', { name: 'Pozisyon', exact: true }).click();
  await page.getByRole('button', { name: 'Sabit Sorular' }).click();
  await page.getByRole('button', { name: 'Yeni Soru' }).click();
  await page.getByRole('textbox', { name: 'Sorunuzu girin' }).click();
  await page.getByRole('textbox', { name: 'Sorunuzu girin' }).fill('calışıyor musun');
  await page.getByPlaceholder('Soru ağırlığını girin (1-100)').click();
  await page.getByPlaceholder('Soru ağırlığını girin (1-100)').fill('20');
  await page.getByText('Bir seçenek seçin').click();
  await page.locator('div').filter({ hasText: /^Genel$/ }).click();
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('div:nth-child(4) > .w-2\\/12 > i').first().click();
  await page.locator('div').filter({ hasText: /^Bir seçenek seçin$/ }).click();
  await page.locator('div').filter({ hasText: /^Yönetici$/ }).click();
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('div:nth-child(4) > .w-2\\/12 > i:nth-child(2)').click();
  await page.getByRole('button', { name: 'Evet, sil!' }).click();
});