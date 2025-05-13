import { test } from '@playwright/test';
import {login} from '../Kullanıcı Yonetimi/login.spec';
import {addPosition} from './addPozisyon.spec';
import { gofakemail } from './fakemail.spec'
test('test', async ({ page, browser }) => {
  test.setTimeout(60000);

  login(page)

  //addPosition(page)

  await page.waitForTimeout(6000)
 
  await page.getByRole('button', { name: 'Özgeçmişler' }).click();
  await page.waitForTimeout(500)
  
  const element = await page.waitForSelector('xpath=//*[@id="app-container"]/div[2]/div[5]/div[1]/div[2]/div/table/div/tbody/tr[1]');
  await element.click();
  await page.waitForTimeout(500);

  await page.locator('div').filter({ hasText: /^İletişim$/ }).click();
  await page.waitForTimeout(500)


  const targetElement = await page.waitForSelector('xpath=//*[@id="app-container"]/div[2]/div[3]/div/div[4]/div/div/div[2]/div[2]');
  await targetElement.click();  await page.waitForTimeout(500)
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.waitForTimeout(500)
  // Yeni sekme için context oluştur
  const context = await browser.newContext();

  // Yeni sekmeyi aç
  //gofakemail()

  // Geri dönmek istersen:
  await page.bringToFront();
  await page.getByRole('textbox', { name: 'İletişim Adresi' }).click();
  await page.waitForTimeout(500)
  await page.getByRole('textbox', { name: 'İletişim Adresi' }).fill(''); // temizle
  await page.waitForTimeout(500)

  //await page.keyboard.press('Meta+V'); // Command + V (Mac)


  //sonra silinecek
  const input = page.getByRole('textbox', { name: 'İletişim Adresi' });
  await input.fill('test3@siriusaitech.com'); // önce temizler, sonra yazar
  await page.waitForTimeout(500); // sonra yarım saniye bekler


  await page.waitForTimeout(500)
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.waitForTimeout(500)
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.waitForTimeout(500)

  //pozisyon ekle 
  await page.getByRole('button', { name: '' }).click();
  await page.waitForTimeout(500)

  
  //pozisyon ekleme tuşu varsa basar yoksa devam eder
  const button = page.locator('button.bg-cvus-gradient');
  if (await button.count() > 0) {
  await button.click();
  }

  //dropdown acar
  await page.locator('.multiselect__select').click();
  await page.waitForTimeout(500)

  //en üstteki veriyi secer
  await page.click('#null-0');
  await page.waitForTimeout(500)


  //kaydet tıkla
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.waitForTimeout(500)


  //tamam tıkla
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.waitForTimeout(500)

  await page.locator('.hover\\:bg-gray-50').first().click();
  await page.waitForTimeout(randomWaitTime); // Rastgele bekleme süresi



  await page.getByRole('button', { name: 'Soru Ayarları Ön görüşme sü' }).click();
  await page.waitForTimeout(500)

  await page.getByRole('button', { name: '+ Soru Öner' }).click();
  await page.waitForTimeout(500)

  await page.getByPlaceholder('Soru Sayısı').click();
  await page.waitForTimeout(500)

  await page.getByPlaceholder('Soru Sayısı').fill('1');
  await page.waitForTimeout(500)

  await page.getByRole('button', { name: 'Soru Öner', exact: true }).click();
  await page.locator('[id="\\30 "]').check();
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.locator('tr:nth-child(3) > div > div > td > .inline-flex > .flex').click();
  await page.getByRole('button', { name: 'Ön Görüşmeyi Başlat' }).click();
  await page.getByRole('button', { name: 'Oluşturmadan Devam Et' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page3.locator('iframe[name="aswift_4"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await page3.getByRole('link', { name: 'info@cvusai.com 15 s' }).click();
  const page4Promise = page3.waitForEvent('popup');
  await page3.locator('#iframe').contentFrame().getByRole('link', { name: 'HEMEN KATIL' }).click();
  const page4 = await page4Promise;
  await page4.getByRole('button', { name: 'Tamam' }).click();
  await page4.getByRole('checkbox').check();
  await page4.getByRole('button', { name: 'Basılı Tutarak' }).click();
  await page4.getByRole('button', { name: 'Bas Bırak' }).click();
  await page4.getByRole('button', { name: 'Başlat' }).click();
  await page4.goto('https://candidate.softwareoptimize.com/interview/inform');
  await page4.getByRole('button', { name: 'Tamam' }).click();
  await page4.getByRole('link', { name: 'Başla' }).click();
  await page4.getByRole('button', { name: '' }).click();
  await page4.getByRole('button').nth(2).click({
    position: {
      x: 62,
      y: 50
    }
  });
  await page4.getByRole('button', { name: 'Hayır' }).click();
  await page4.goto('https://candidate.softwareoptimize.com/answer/list');
  await page4.getByRole('button', { name: 'Kaydet' }).click();
  await page4.getByRole('button', { name: 'Evet' }).click();
  await page4.goto('https://candidate.softwareoptimize.com/end');
  await page.getByRole('button', { name: 'Yenile' }).click();
  await page.locator('tr:nth-child(3) > div > div > td > .inline-flex > .flex').click();
  await page.locator('tr:nth-child(3) > div > div > td > .inline-flex > .flex').click();
  await page.getByRole('table').getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: 'Kısa Listeye Ekle' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.getByRole('button', { name: 'Kısa Liste' }).click();
  await page.locator('td:nth-child(3)').first().click();
  await page.locator('.hover\\:text-slate-500').first().click();
  await page.getByRole('dialog').getByRole('button', { name: '' }).click();
  await page.locator('td:nth-child(4)').first().click();
  await page.locator('td:nth-child(4) > .hover\\:text-slate-500').first().click();
  await page.getByPlaceholder('Puan').click();
  await page.getByPlaceholder('Puan').fill('100');
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('textbox', { name: 'Not' }).fill('test');
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.locator('td:nth-child(5) > .hover\\:text-slate-500').first().click();
  await page.getByPlaceholder('Puan').click();
  await page.getByPlaceholder('Puan').fill('100');
  await page.getByRole('textbox', { name: 'Not' }).click();
  await page.getByRole('textbox', { name: 'Not' }).fill('test');
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.getByRole('button', { name: '' }).first().click();
  await page.getByRole('button', { name: 'Evet, eminim' }).click();
  await page.getByRole('banner').getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: 'Referans ve Ücret' }).click();
  await page.getByRole('button', { name: 'Referans', exact: true }).click();
  await page.getByPlaceholder('Lütfen istediğiniz referans').click();
  await page.getByPlaceholder('Lütfen istediğiniz referans').fill('1');
  await page.getByRole('button', { name: 'Referans Maili Gönder' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.getByRole('button', { name: 'Ücret', exact: true }).click();
  await page.getByPlaceholder('Lütfen ücret açıklamasını').click();
  await page.getByPlaceholder('Lütfen ücret açıklamasını').fill('40000');
  await page.getByRole('button', { name: 'Ücret Bilgilerini Gönder' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.getByRole('button', { name: 'Soruşturma' }).click();
  await page.getByRole('textbox', { name: 'Lütfen soruşturma açıklamasın' }).click();
  await page.getByRole('textbox', { name: 'Lütfen soruşturma açıklamasın' }).fill('test');
  await page.getByRole('button', { name: 'Soruşturma Olumlu' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.getByRole('button', { name: 'Ücret', exact: true }).click();
  await page.getByRole('button', { name: 'Ücret Olumlu' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.getByRole('button', { name: 'Referans', exact: true }).click();
  await page3.getByRole('link', { name: ' Back' }).click();
  await page3.locator('iframe[name="aswift_2"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await page3.getByRole('link', { name: 'info@cvusai.com 29 s' }).click();
  const page5Promise = page3.waitForEvent('popup');
  await page3.locator('#iframe').contentFrame().getByRole('link', { name: 'Referans Bilgileri Formu' }).click();
  const page5 = await page5Promise;
  await page5.getByRole('checkbox').check();
  await page5.getByRole('button', { name: 'Başla' }).click();
  await page5.getByRole('textbox', { name: 'İsim Soyisim *' }).click();
  await page5.getByRole('textbox', { name: 'İsim Soyisim *' }).fill('test');
  await page5.getByRole('textbox').nth(1).click();
  await page5.getByRole('textbox').nth(1).fill('+90 5555555555');
  await page5.getByRole('textbox', { name: 'Şirket Adı *' }).click();
  await page5.getByRole('textbox', { name: 'Şirket Adı *' }).fill('test');
  await page5.getByRole('textbox', { name: 'E-Posta *' }).click();
  await page5.getByRole('textbox', { name: 'E-Posta *' }).fill('test');
  await page5.getByRole('textbox', { name: 'E-Posta *' }).click();
  await page5.getByRole('textbox', { name: 'E-Posta *' }).fill('test@gmail.com');
  await page5.getByRole('button', { name: 'Gönder' }).click();
  await page.locator('div:nth-child(6) > div:nth-child(2) > div > .flex').first().click();
  await page.getByRole('button', { name: 'Referans', exact: true }).click();
  await page.getByRole('button', { name: 'Referanslar Olumlu' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: 'Evet, eminim' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();

});