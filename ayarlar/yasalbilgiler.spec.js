import { test, expect } from '@playwright/test';
import {login} from '../Kullanıcı Yonetimi/login.spec';

test('yasal bilgiler başarıyla güncellenmeli', async ({ page }) => {

  login(page)

  await page.waitForTimeout(5000)

  await page.getByRole('button', { name: 'Ayarlar' }).click();
  await page.getByRole('button', { name: 'Yasal Bilgiler' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('10');
  await page.getByRole('combobox').selectOption('4');
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
});