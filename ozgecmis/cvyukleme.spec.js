import { test, expect } from '@playwright/test';
import { login } from '../Kullanıcı Yonetimi/login.spec'; // login fonksiyonunu içe aktar 
const path = require('path');


test.beforeEach(async ({ page }) => {
  await login(page); // 🔥 Login işlemi burada
});


test('Kullanıcı CV yükleme işlemi başarıyla tamamlanmalı', async ({ page }) => {


  const filePath = path.resolve(__dirname, "../complate/cv/7.pdf");


    await page.getByRole('button', { name: 'Özgeçmişler' }).click();
    await page.waitForTimeout(2000)

    const fileInput = page.locator("span[class='text-cvus-primary-light2 font-semibold text-md max-[1310px]:text-xs']");

  await fileInput.setInputFiles(filePath);

      await page.waitForTimeout(5000)



});

















