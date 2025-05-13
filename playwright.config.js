module.exports = {
    use: {
      // Global yapılandırmalar
      headless: false, // Tarayıcıyı görünür yapar
      //baseURL: 'https://example.com', // Testlerin temel URL'si
      screenshot: 'only-on-failure', // Test başarısız olursa ekran görüntüsü alır
      video: 'retain-on-failure', // Test başarısız olursa video kaydeder
      slowMo: 1150, // Her adımda 50ms bekler
      ignoreHTTPSErrors: true, // HTTPS hatalarını görmezden gelir
    },
    projects: [
      {
        name: 'chromium',
        use: { browserName: 'chromium' },
      },
    ],
    // Test parametreleri
    timeout: 60000, // Test başına zaman aşımı süresi (ms cinsinden)
    //retries: 2, // Test başarısız olduğunda 2 defa daha dener
  };
  

//npx playwright test sirketbilgileri.spec.js --headed --browser=chromium

