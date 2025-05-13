export default async function gofakemail(page) {
    const page2 = await context.newPage();
    await page2.goto('https://tempail.com/en/fake-mail/');
  
    await page2.waitForTimeout(500)
    await page2.locator('a').filter({ hasText: 'Delete' }).click();
    await page2.waitForTimeout(500)
    await page2.locator('#eposta_adres').click();
    await page2.waitForTimeout(500)
}