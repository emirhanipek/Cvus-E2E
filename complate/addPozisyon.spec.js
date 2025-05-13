

function generateRandomTitle() {
  const titles = [
    'Frontend Developer',
    'Backend Engineer',
    'Full Stack Developer',
    'QA Tester',
    'Mobile App Developer',
    'DevOps Engineer',
    'Software Engineer',
    'Automation Specialist',
    'Cloud Architect',
    'AI Developer',
  ];

  const random = titles[Math.floor(Math.random() * titles.length)];
  const suffix = Math.floor(Math.random() * 1000); // örn: Software Engineer 847
  return `${random} TEST E2E ${suffix}`;
}

export async function addPosition(page) {

    await page.getByRole('button', { name: 'Açık Pozisyonlar' }).click();
    await page.waitForTimeout(6000)

    await page.getByRole('button', { name: '+ Yeni Pozisyon' }).click();
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'İş İlanı Başlığı' }).click();
    await page.waitForTimeout(500)

    const randomTitle = generateRandomTitle();
    await page.getByRole('textbox', { name: 'İş İlanı Başlığı' }).fill(randomTitle);
    await page.waitForTimeout(500);

    await page.locator('i:nth-child(2)').click();
    await page.waitForTimeout(500)
    await page.getByRole('textbox', { name: 'Ara...' }).click();
    await page.waitForTimeout(500)
    await page.getByRole('textbox', { name: 'Ara...' }).fill('software');
    await page.waitForTimeout(500)
    await page.getByText('Assistant Software Design').click();
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Kapanma Tarihi' }).click();
    await page.waitForTimeout(500)

    //pozisyon kapanma tarihi seciyor.
    const today = new Date().getDate(); // Örneğin 13
    await page.locator('span').filter({ hasText: new RegExp(`^${today}$`) }).click();
    await page.waitForTimeout(500)

    await page.getByText('Bir seçenek seçin').first().click();
    await page.waitForTimeout(500)

    await page.locator('div').filter({ hasText: /^Normal$/ }).click();
    await page.waitForTimeout(500)

    await page.locator('div').filter({ hasText: /^Bir seçenek seçin$/ }).first().click();
    await page.waitForTimeout(500)

    await page.locator('div').filter({ hasText: /^Açık$/ }).click();
    await page.waitForTimeout(500)

    //işe alıncak kişi sayısı seciyoruz
    await page.getByPlaceholder('İşe Alınacak Kişi Sayısı').click();
    await page.waitForTimeout(500)

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
    await page.waitForTimeout(500)

    //acılan dropdown seciyoruz
    await page.locator('div').filter({ hasText: /^Uzaktan çalışma$/ }).click(); // uzaktan calışma sec
    await page.waitForTimeout(500)

    //ileri diyoruz
    await page.getByRole('button', { name: 'İLERİ' }).click();
    await page.waitForTimeout(2000)

    await page.getByText('Bir seçenek seçin').first().click();
    await page.waitForTimeout(500)

    await page.locator('div').filter({ hasText: /^İlkokul$/ }).click();
    await page.waitForTimeout(500)

    await page.locator('div').filter({ hasText: /^Lise$/ }).click();
    await page.waitForTimeout(500)

    await page.locator('div').filter({ hasText: /^Ön Lisans$/ }).click();
    await page.waitForTimeout(500)

    await page.locator('div').filter({ hasText: /^Lisans$/ }).click();
    await page.waitForTimeout(500)

    await page.locator('div:nth-child(10)').click();
    await page.waitForTimeout(500)

    await page.getByText('Bir seçenek seçin').nth(1).click();
    await page.waitForTimeout(500)

    await page.locator('body > div:nth-child(10)').click();
    await page.waitForTimeout(500)

    await page.locator('div').filter({ hasText: /^Bir seçenek seçin$/ }).first().click();
    await page.waitForTimeout(500)

    await page.locator('body > div:nth-child(10)').click();
    await page.waitForTimeout(500)

    await page.getByText('Bir seçenek seçin').first().click();
    await page.waitForTimeout(500)

    await page.locator('body > div:nth-child(10)').click();
    await page.waitForTimeout(500)

    await page.getByText('Bir seçenek seçin').nth(3).click();
    await page.waitForTimeout(500)

    await page.locator('body > div:nth-child(10)').click();
    await page.waitForTimeout(500)

    await page.locator('div:nth-child(3) > .vue-slider-dot-handle').click();
    await page.waitForTimeout(500)

    await page.getByRole('spinbutton').first().click();
    await page.waitForTimeout(500)

    await page.getByRole('spinbutton').first().fill('10');
    await page.waitForTimeout(500)

    await page.getByRole('spinbutton').nth(1).click();
    await page.waitForTimeout(500)

    await page.getByRole('spinbutton').nth(1).click();
    await page.waitForTimeout(500)

    await page.getByRole('spinbutton').nth(1).fill('123');
    await page.waitForTimeout(500)

    await page.getByRole('button', { name: 'İLERİ' }).click();
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).click();
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).fill('php');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).press('Enter');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).fill('laravel');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).press('Enter');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).fill('nodejs');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Anahtar Ekle (Enter ile' }).press('Enter');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).click();
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).fill('liderlik');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).press('Enter');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).fill('yonetim');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).press('Enter');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).fill('iş gücü');
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Yetkinlik Ekle (Enter ile' }).press('Enter');
    await page.waitForTimeout(1000)


    await page.locator('div').filter({ hasText: /^Bir seçenek seçin$/ }).click();
    await page.waitForTimeout(500)

    await page.locator('div').filter({ hasText: /^Turkish$/ }).nth(1).click();
    await page.waitForTimeout(500)

    await page.getByText('Turkish').nth(1).click();
    await page.waitForTimeout(500)

    await page.getByText('Turkish').nth(2).click();
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Notunuzu buraya yazabilirsiniz' }).click();
    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Notunuzu buraya yazabilirsiniz' }).fill('bu bir test notlarıdır e2e');
    await page.waitForTimeout(500)

    await page.getByRole('button', { name: 'Kaydet' }).click();
    await page.waitForTimeout(500)

    await page.getByRole('button', { name: 'Evet' }).click();
    await page.waitForTimeout(500)

    await page.getByRole('button', { name: 'Tamam' }).click();
    await page.waitForTimeout(500)
}
