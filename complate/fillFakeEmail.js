async function fillFakeEmail(browser, page) {
  const context = await browser.newContext();
  const page2 = await context.newPage();

  // Fake mail sitesine git
  await page2.goto('https://tempail.com/en/fake-mail/');

  // "Delete" linkini bekle ve tıkla
  const deleteLink = page2.locator('a:has-text("Delete")');
  await deleteLink.waitFor({ state: 'visible' });
  await deleteLink.click();

  // E-posta adresini al
  const emailInput = page2.locator('#eposta_adres');
  await emailInput.waitFor({ state: 'visible' });
  await emailInput.click();
  const email = await emailInput.inputValue();

  console.log('Fake Email:', email);

  // Ana sayfaya geri dön
  await page.bringToFront();

  // E-posta kutusunu doldur
  const emailBox = page.getByRole('textbox', { name: 'İletişim Adresi' });
  await emailBox.click();
  await page.waitForTimeout(500);
  await emailBox.fill('');
  await page.waitForTimeout(500);
  await emailBox.fill(email); // E-postayı doğrudan doldur

  // Alternatif olarak panoya kopyalayarak yapıştırmak istersen:
  await page.keyboard.press('Meta+V'); // sadece eğer email panoya kopyalanmışsa
}
