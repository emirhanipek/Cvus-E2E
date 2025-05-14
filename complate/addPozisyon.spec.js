import timeOut from "./timeOut";

export async function addPosition(page, randomTitle) {
    console.log("pozisyon girlidi")
    await page.getByRole('button', { name: 'Açık Pozisyonlar' }).click();
    timeOut(page,2000)
    console.log("1")
    await page.getByRole('button', { name: '+ Yeni Pozisyon' }).click();
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'İş İlanı Başlığı' }).click();
    timeOut(page,500)
    console.log("2")
    console.log(randomTitle)
    await page.getByRole('textbox', { name: 'İş İlanı Başlığı' }).fill(randomTitle);
    timeOut(page,500)
    console.log("3")
    await page.locator('i:nth-child(2)').click();
    timeOut(page,500)
    await page.getByRole('textbox', { name: 'Ara...' }).click();
    timeOut(page,500)
    await page.getByRole('textbox', { name: 'Ara...' }).fill('software');
    timeOut(page,500)
    await page.getByText('Assistant Software Design').click();
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Kapanma Tarihi' }).click();
    timeOut(page,500)

    //pozisyon kapanma tarihi seciyor.
    const today = new Date().getDate(); // Örneğin 13
    await page.locator('span').filter({ hasText: new RegExp(`^${today}$`) }).click();
    timeOut(page,500)

    await page.getByText('Bir seçenek seçin').first().click();
    timeOut(page,500)

    await page.locator('div').filter({ hasText: /^Normal$/ }).click();
    timeOut(page,500)

    await page.locator('div').filter({ hasText: /^Bir seçenek seçin$/ }).first().click();
    timeOut(page,500)

    await page.locator('div').filter({ hasText: /^Açık$/ }).click();
    timeOut(page,500)

    //işe alıncak kişi sayısı seciyoruz
    await page.getByPlaceholder('İşe Alınacak Kişi Sayısı').click();
    timeOut(page,500)

    //işe alıncak kişi sayısı giriyoruz
    await page.getByPlaceholder('İşe Alınacak Kişi Sayısı').fill('1'); // 1 giriyoruz
    await page.waitForTimeout(1500)


    //pozisyon sorumlular dropdown ac
    await page.locator('.truncate.flex.w-full.h-full.min-h-\\[20px\\].text-gray-400').first().click();
    await page.waitForTimeout(1500)

    //istediğin kişi sec
    await page.locator('body > div:nth-child(9) > div:nth-child(2)').click();
    await page.waitForTimeout(1500)


    //calışma modelini seciyoruz.
    await page.locator('div').filter({ hasText: /^Bir seçenek seçin$/ }).locator('i').click();
    timeOut(page,500)

    //acılan dropdown seciyoruz
    await page.locator('div').filter({ hasText: /^Uzaktan çalışma$/ }).click(); // uzaktan calışma sec
    timeOut(page,500)

    //ileri diyoruz
    await page.getByRole('button', { name: 'İLERİ' }).click();
    await page.waitForTimeout(2000)

    await page.getByText('Bir seçenek seçin').first().click();
    timeOut(page,500)

    await page.locator('div').filter({ hasText: /^İlkokul$/ }).click();
    timeOut(page,500)

    await page.locator('div').filter({ hasText: /^Lise$/ }).click();
    timeOut(page,500)

    await page.locator('div').filter({ hasText: /^Ön Lisans$/ }).click();
    timeOut(page,500)

    await page.locator('div').filter({ hasText: /^Lisans$/ }).click();
    timeOut(page,500)

    await page.locator('div:nth-child(10)').click();
    timeOut(page,500)

    await page.getByText('Bir seçenek seçin').nth(1).click();
    timeOut(page,500)

    await page.locator('body > div:nth-child(10)').click();
    timeOut(page,500)

    await page.locator('div').filter({ hasText: /^Bir seçenek seçin$/ }).first().click();
    timeOut(page,500)

    await page.locator('body > div:nth-child(10)').click();
    timeOut(page,500)

    await page.getByText('Bir seçenek seçin').first().click();
    timeOut(page,500)

    await page.locator('body > div:nth-child(10)').click();
    timeOut(page,500)

    await page.getByText('Bir seçenek seçin').nth(3).click();
    timeOut(page,500)

    await page.locator('body > div:nth-child(10)').click();
    timeOut(page,500)

    await page.locator('div:nth-child(3) > .vue-slider-dot-handle').click();
    timeOut(page,500)

    await page.getByRole('spinbutton').first().click();
    timeOut(page,500)

    await page.getByRole('spinbutton').first().fill('10');
    timeOut(page,500)

    await page.getByRole('spinbutton').nth(1).click();
    timeOut(page,500)

    await page.getByRole('spinbutton').nth(1).click();
    timeOut(page,500)

    await page.getByRole('spinbutton').nth(1).fill('123');
    timeOut(page,500)

    await page.getByRole('button', { name: 'İLERİ' }).click();
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).click();
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).fill('php');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).press('Enter');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).fill('laravel');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).press('Enter');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).fill('nodejs');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).press('Enter');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).click();
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).fill('liderlik');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).press('Enter');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).fill('yonetim');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).press('Enter');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).fill('iş gücü');
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).press('Enter');
    await page.waitForTimeout(1000)


    await page.locator('div').filter({ hasText: /^Bir seçenek seçin$/ }).click();
    timeOut(page,500)

    await page.locator('div').filter({ hasText: /^Turkish$/ }).nth(1).click();
    timeOut(page,500)

    await page.getByText('Turkish').nth(1).click();
    timeOut(page,500)

    await page.getByText('Turkish').nth(2).click();
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Notunuzu buraya yazabilirsiniz' }).click();
    timeOut(page,500)

    await page.getByRole('textbox', { name: 'Notunuzu buraya yazabilirsiniz' }).fill('bu bir test notlarıdır e2e');
    timeOut(page,500)

    const [response] = await Promise.all([
        // İstek tamamlanana kadar bekler
        page.waitForResponse(response =>
            response.url() === 'https://api.softwareoptimize.com/project/add' &&
            response.request().method() === 'POST'
        ),
        // Bu sırada butona basılır
        page.getByRole('button', { name: 'Kaydet' }).click(),
    ]);

    // Gelen yanıtın içeriğini al
    const responseBody = await response.json();
    console.log('API Yanıtı:', responseBody);

    await page.getByRole('button', { name: 'Evet' }).click();
    timeOut(page,500)

    await page.getByRole('button', { name: 'Tamam' }).click();
    timeOut(page,500)
}
