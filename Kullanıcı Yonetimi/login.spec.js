export async function login(page) {
  await page.goto('https://portal.softwareoptimize.com/project');

  await page.getByRole('textbox', { name: 'E-posta' }).click();
  await page.getByRole('textbox', { name: 'E-posta' }).fill('melih.demir@gmail.com');
  await page.getByRole('textbox', { name: 'E-posta' }).press('Tab');

  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('M');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Melih.demir@12');

  await page.getByRole('button', { name: 'Giriş Yap' }).click();

}