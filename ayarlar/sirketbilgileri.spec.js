import { test, expect } from '@playwright/test';
import {login} from '../Kullanıcı Yonetimi/login.spec';

test('şirket bilgileri başarıyla güncellenmeli', async ({ page }) => {

  login(page)

  await page.waitForTimeout(5000)
 
  await page.getByRole('button', { name: 'Ayarlar' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('');
  await page.getByRole('textbox').press('CapsLock');
  await page.getByRole('textbox').fill('Sirius ai tech');
  await page.locator('div').filter({ hasText: /^Restaurant Management$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'Ara...' }).click();
  await page.getByRole('textbox', { name: 'Ara...' }).fill('resta');
  await page.getByText('Restaurant Management').nth(1).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('140');
  await page.getByRole('combobox').selectOption('8:00 - 16:00');
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
});