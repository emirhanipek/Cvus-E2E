# Test info

- Name: test
- Location: /Users/emirhanipek/Desktop/cvus e2e/complate/complateBussiness.spec.js:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.hover\\:bg-gray-50').first()
    - locator resolved to <div class="px-4 py-2.5 mb-1 rounded-md cursor-pointer transition-all flex items-center text-gray-700 hover:bg-gray-50">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-0b2fac3c="" class="rounded-b-sm">…</div> from <div data-v-3a4172e4="" class="vm--container scrollable">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-0b2fac3c="" class="rounded-b-sm">…</div> from <div data-v-3a4172e4="" class="vm--container scrollable">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    38 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div data-v-0b2fac3c="" class="rounded-b-sm">…</div> from <div data-v-3a4172e4="" class="vm--container scrollable">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

    at /Users/emirhanipek/Desktop/cvus e2e/complate/complateBussiness.spec.js:86:53
```

# Test source

```ts
   1 | import { test } from '@playwright/test';
   2 | import {login} from '../Kullanıcı Yonetimi/login.spec';
   3 | import {addPosition} from './addPozisyon.spec';
   4 | import { gofakemail } from './fakemail.spec'
   5 | test('test', async ({ page, browser }) => {
   6 |   test.setTimeout(60000);
   7 |
   8 |   login(page)
   9 |
   10 |   //addPosition(page)
   11 |
   12 |   await page.waitForTimeout(6000)
   13 |  
   14 |   await page.getByRole('button', { name: 'Özgeçmişler' }).click();
   15 |   await page.waitForTimeout(500)
   16 |   
   17 |   const element = await page.waitForSelector('xpath=//*[@id="app-container"]/div[2]/div[5]/div[1]/div[2]/div/table/div/tbody/tr[1]');
   18 |   await element.click();
   19 |   await page.waitForTimeout(500);
   20 |
   21 |   await page.locator('div').filter({ hasText: /^İletişim$/ }).click();
   22 |   await page.waitForTimeout(500)
   23 |
   24 |
   25 |   const targetElement = await page.waitForSelector('xpath=//*[@id="app-container"]/div[2]/div[3]/div/div[4]/div/div/div[2]/div[2]');
   26 |   await targetElement.click();  await page.waitForTimeout(500)
   27 |   await page.getByRole('button', { name: '' }).nth(1).click();
   28 |   await page.waitForTimeout(500)
   29 |   // Yeni sekme için context oluştur
   30 |   const context = await browser.newContext();
   31 |
   32 |   // Yeni sekmeyi aç
   33 |   //gofakemail()
   34 |
   35 |   // Geri dönmek istersen:
   36 |   await page.bringToFront();
   37 |   await page.getByRole('textbox', { name: 'İletişim Adresi' }).click();
   38 |   await page.waitForTimeout(500)
   39 |   await page.getByRole('textbox', { name: 'İletişim Adresi' }).fill(''); // temizle
   40 |   await page.waitForTimeout(500)
   41 |
   42 |   //await page.keyboard.press('Meta+V'); // Command + V (Mac)
   43 |
   44 |
   45 |   //sonra silinecek
   46 |   const input = page.getByRole('textbox', { name: 'İletişim Adresi' });
   47 |   await input.fill('test2@siriusaitech.com'); // önce temizler, sonra yazar
   48 |   await page.waitForTimeout(500); // sonra yarım saniye bekler
   49 |
   50 |
   51 |   await page.waitForTimeout(500)
   52 |   await page.getByRole('button', { name: 'Kaydet' }).click();
   53 |   await page.waitForTimeout(500)
   54 |   await page.getByRole('button', { name: 'Tamam' }).click();
   55 |   await page.waitForTimeout(500)
   56 |
   57 |   //pozisyon ekle 
   58 |   await page.getByRole('button', { name: '' }).click();
   59 |   await page.waitForTimeout(500)
   60 |
   61 |   
   62 |   //pozisyon ekleme tuşu varsa basar yoksa devam eder
   63 |   const button = page.locator('button.bg-cvus-gradient');
   64 |   if (await button.count() > 0) {
   65 |   await button.click();
   66 |   }
   67 |
   68 |   //dropdown acar
   69 |   await page.locator('.multiselect__select').click();
   70 |   await page.waitForTimeout(500)
   71 |
   72 |   //en üstteki veriyi secer
   73 |   await page.click('#null-0');
   74 |   await page.waitForTimeout(500)
   75 |
   76 |
   77 |   //kaydet tıkla
   78 |   await page.getByRole('button', { name: 'Kaydet' }).click();
   79 |   await page.waitForTimeout(500)
   80 |
   81 |
   82 |   //tamam tıkla
   83 |   await page.getByRole('button', { name: 'Tamam' }).click();
   84 |   await page.waitForTimeout(500)
   85 |
>  86 |   await page.locator('.hover\\:bg-gray-50').first().click();
      |                                                     ^ Error: locator.click: Target page, context or browser has been closed
   87 |   await page.waitForTimeout(randomWaitTime); // Rastgele bekleme süresi
   88 |
   89 |
   90 |
   91 |   await page.getByRole('button', { name: 'Soru Ayarları Ön görüşme sü' }).click();
   92 |   await page.waitForTimeout(500)
   93 |
   94 |   await page.getByRole('button', { name: '+ Soru Öner' }).click();
   95 |   await page.waitForTimeout(500)
   96 |
   97 |   await page.getByPlaceholder('Soru Sayısı').click();
   98 |   await page.waitForTimeout(500)
   99 |
  100 |   await page.getByPlaceholder('Soru Sayısı').fill('1');
  101 |   await page.waitForTimeout(500)
  102 |
  103 |   await page.getByRole('button', { name: 'Soru Öner', exact: true }).click();
  104 |   await page.locator('[id="\\30 "]').check();
  105 |   await page.getByRole('button', { name: 'Kaydet' }).click();
  106 |   await page.getByRole('button', { name: 'Tamam' }).click();
  107 |   await page.getByRole('button', { name: '' }).click();
  108 |   await page.locator('tr:nth-child(3) > div > div > td > .inline-flex > .flex').click();
  109 |   await page.getByRole('button', { name: 'Ön Görüşmeyi Başlat' }).click();
  110 |   await page.getByRole('button', { name: 'Oluşturmadan Devam Et' }).click();
  111 |   await page.getByRole('button', { name: 'Tamam' }).click();
  112 |   await page3.locator('iframe[name="aswift_4"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  113 |   await page3.getByRole('link', { name: 'info@cvusai.com 15 s' }).click();
  114 |   const page4Promise = page3.waitForEvent('popup');
  115 |   await page3.locator('#iframe').contentFrame().getByRole('link', { name: 'HEMEN KATIL' }).click();
  116 |   const page4 = await page4Promise;
  117 |   await page4.getByRole('button', { name: 'Tamam' }).click();
  118 |   await page4.getByRole('checkbox').check();
  119 |   await page4.getByRole('button', { name: 'Basılı Tutarak' }).click();
  120 |   await page4.getByRole('button', { name: 'Bas Bırak' }).click();
  121 |   await page4.getByRole('button', { name: 'Başlat' }).click();
  122 |   await page4.goto('https://candidate.softwareoptimize.com/interview/inform');
  123 |   await page4.getByRole('button', { name: 'Tamam' }).click();
  124 |   await page4.getByRole('link', { name: 'Başla' }).click();
  125 |   await page4.getByRole('button', { name: '' }).click();
  126 |   await page4.getByRole('button').nth(2).click({
  127 |     position: {
  128 |       x: 62,
  129 |       y: 50
  130 |     }
  131 |   });
  132 |   await page4.getByRole('button', { name: 'Hayır' }).click();
  133 |   await page4.goto('https://candidate.softwareoptimize.com/answer/list');
  134 |   await page4.getByRole('button', { name: 'Kaydet' }).click();
  135 |   await page4.getByRole('button', { name: 'Evet' }).click();
  136 |   await page4.goto('https://candidate.softwareoptimize.com/end');
  137 |   await page.getByRole('button', { name: 'Yenile' }).click();
  138 |   await page.locator('tr:nth-child(3) > div > div > td > .inline-flex > .flex').click();
  139 |   await page.locator('tr:nth-child(3) > div > div > td > .inline-flex > .flex').click();
  140 |   await page.getByRole('table').getByRole('button', { name: '' }).click();
  141 |   await page.getByRole('button', { name: 'Kısa Listeye Ekle' }).click();
  142 |   await page.getByRole('button', { name: 'Tamam' }).click();
  143 |   await page.getByRole('button', { name: 'Kısa Liste' }).click();
  144 |   await page.locator('td:nth-child(3)').first().click();
  145 |   await page.locator('.hover\\:text-slate-500').first().click();
  146 |   await page.getByRole('dialog').getByRole('button', { name: '' }).click();
  147 |   await page.locator('td:nth-child(4)').first().click();
  148 |   await page.locator('td:nth-child(4) > .hover\\:text-slate-500').first().click();
  149 |   await page.getByPlaceholder('Puan').click();
  150 |   await page.getByPlaceholder('Puan').fill('100');
  151 |   await page.getByRole('button', { name: 'Kaydet' }).click();
  152 |   await page.getByRole('textbox', { name: 'Not' }).fill('test');
  153 |   await page.getByRole('button', { name: 'Kaydet' }).click();
  154 |   await page.getByRole('button', { name: 'Tamam' }).click();
  155 |   await page.locator('td:nth-child(5) > .hover\\:text-slate-500').first().click();
  156 |   await page.getByPlaceholder('Puan').click();
  157 |   await page.getByPlaceholder('Puan').fill('100');
  158 |   await page.getByRole('textbox', { name: 'Not' }).click();
  159 |   await page.getByRole('textbox', { name: 'Not' }).fill('test');
  160 |   await page.getByRole('button', { name: 'Kaydet' }).click();
  161 |   await page.getByRole('button', { name: 'Tamam' }).click();
  162 |   await page.getByRole('button', { name: '' }).first().click();
  163 |   await page.getByRole('button', { name: 'Evet, eminim' }).click();
  164 |   await page.getByRole('banner').getByRole('button', { name: '' }).click();
  165 |   await page.getByRole('button', { name: 'Referans ve Ücret' }).click();
  166 |   await page.getByRole('button', { name: 'Referans', exact: true }).click();
  167 |   await page.getByPlaceholder('Lütfen istediğiniz referans').click();
  168 |   await page.getByPlaceholder('Lütfen istediğiniz referans').fill('1');
  169 |   await page.getByRole('button', { name: 'Referans Maili Gönder' }).click();
  170 |   await page.getByRole('button', { name: 'Tamam' }).click();
  171 |   await page.getByRole('button', { name: 'Ücret', exact: true }).click();
  172 |   await page.getByPlaceholder('Lütfen ücret açıklamasını').click();
  173 |   await page.getByPlaceholder('Lütfen ücret açıklamasını').fill('40000');
  174 |   await page.getByRole('button', { name: 'Ücret Bilgilerini Gönder' }).click();
  175 |   await page.getByRole('button', { name: 'Tamam' }).click();
  176 |   await page.getByRole('button', { name: 'Soruşturma' }).click();
  177 |   await page.getByRole('textbox', { name: 'Lütfen soruşturma açıklamasın' }).click();
  178 |   await page.getByRole('textbox', { name: 'Lütfen soruşturma açıklamasın' }).fill('test');
  179 |   await page.getByRole('button', { name: 'Soruşturma Olumlu' }).click();
  180 |   await page.getByRole('button', { name: 'Tamam' }).click();
  181 |   await page.getByRole('button', { name: 'Ücret', exact: true }).click();
  182 |   await page.getByRole('button', { name: 'Ücret Olumlu' }).click();
  183 |   await page.getByRole('button', { name: 'Tamam' }).click();
  184 |   await page.getByRole('button', { name: 'Referans', exact: true }).click();
  185 |   await page3.getByRole('link', { name: ' Back' }).click();
  186 |   await page3.locator('iframe[name="aswift_2"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
```