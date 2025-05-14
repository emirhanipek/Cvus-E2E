export default async function timeOut(page, time) {
    await page.waitForTimeout(time);
}
