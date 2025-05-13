import { test, expect } from '@playwright/test';
import {login} from '../Kullanıcı Yonetimi/login.spec';


test('ilan bilgileri başarıyla güncellenmeli', async ({ page }) => {
    login(page)

  await page.waitForTimeout(5000)
  await page.getByRole('button', { name: 'Ayarlar' }).click();
  await page.getByRole('button', { name: 'İlan Bilgileri' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('');
  await page.getByRole('textbox').first().press('CapsLock');
  await page.getByRole('textbox').first().fill('Sirius ai tech ');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Türkiye\'nin bankacılık sektörünün lider firması için ekip arkadaşı arayışımız bulunmak\n\n');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).press('ArrowDown');
  await page.getByRole('textbox').nth(2).press('ArrowDown');
  await page.getByRole('textbox').nth(2).press('ArrowDown');
  await page.getByRole('textbox').nth(2).press('ArrowRight');
  await page.getByRole('textbox').nth(2).fill('Akbank, yerel bir banka olarak, 1948 yılının Ocak ayında, Adana’da kurulmuştur. Kuruluş amacı bölgedeki pamuk üreticilerine finansman sağlamak olan Akbank, ilk İstanbul şubesini, 14 Temmuz 1950’de Sirkeci’de açmıştır. 1954 yılında Genel Müdürlüğü’nün İstanbul’a taşınmasının ardından şube sayısını hızla artıran Akbank, 1963 yılında tüm bankacılık işlemlerinde otomasyona geçmiştir.\n\nAkbank, 1990 yılında halka açılmış ve 1998 yılında ikincil halka arz ile uluslararası piyasalarda American Depository Receipt (ADR) olarak da işlem görmeye başlamıştır.\n\n1996 yılında Ak Yatırım Menkul Değerler A.Ş. (AKYatırım), 1998 yılında Ak B Tipi Yatırım Ortaklığı A.Ş., 2000 yılında Ak Portföy Yönetimi A.Ş. (AKPortföy) ve Özel Bankacılık Bölümü, 2003 yılında da Ak Emeklilik A.Ş. kurulmuştur. Akbank, 2005 yılında Ak Finansal Kiralama A.Ş.’yi (AKLease) bünyesine katmıştır. Şubat 2006’da ise Ak Emeklilik’in Aksigorta A.Ş.’ye satışı gerçekleşmiştir. \n\nt');
  await page.getByRole('button', { name: 'Kaydet' }).click();
  await page.getByRole('button', { name: 'Tamam' }).click();
});