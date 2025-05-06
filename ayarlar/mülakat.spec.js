import { test, expect } from '@playwright/test';
import {login} from '../Kullanıcı Yonetimi/login.spec';

test('test', async ({ page }) => {

  login(page)
  await page.getByRole('button', { name: 'Ayarlar' }).click();
  await page.getByRole('button', { name: 'Mülakat Tercihleri' }).click();
  await page.getByRole('button', { name: 'Yeni', exact: true }).click();
  await page.getByRole('textbox', { name: 'Lütfen mülakat türü adını' }).click();
  await page.getByRole('textbox', { name: 'Lütfen mülakat türü adını' }).fill('test ekibi mülakat');
  await page.getByRole('dialog').getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('div:nth-child(3) > .w-2\\/12 > i').first().click();
  await page.getByRole('textbox', { name: 'Lütfen mülakat türü adını' }).click();
  await page.getByRole('textbox', { name: 'Lütfen mülakat türü adını' }).fill('test ekibi mülakat 2');
  await page.getByRole('dialog').getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('div:nth-child(3) > .w-2\\/12 > i:nth-child(2)').click();
  await page.getByRole('button', { name: 'Evet, sil!' }).click();
});