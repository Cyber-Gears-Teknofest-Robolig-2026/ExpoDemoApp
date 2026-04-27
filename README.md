# ExpoDemoApp

Expo React-Native ile yapılmış bir demo uygulamadır.

## Gerekli Programlar:

* NodeJS
* Android Studio (Android telefonlar için)
* Herhangi bir browser (Chrome, Firefox gibi)
* VS Code veya Windsurf gibi bir editör

### Kurulumlar:

```
git clone https://github.com/Cyber-Gears-Teknofest-Robolig-2026/ExpoDemoApp.git
```

Bu komut ile mevcut proje kodunu bilgisayarınıza çekin.

```
npm install
```

Bu komut ile gerekli nodejs paketlerini kurabilirsiniz.

```
npm run start
```

Bu komut ile de programı başlatabilirsiniz.` package.json` dosyasındaki `scripts` alanına bakarak diğer komutların nasıl çalıştığını görebilirsiniz.

### .env Dosyası:

Bu dosya bizim projede kullanılacak olan temel değişkenleri tutar. Bu proje için de birkaç adet değişken tanımladık.

* `EXPO_PUBLIC_HOST`: Projenin başlatılacağı ana kaynak. Kaynak olarak birkaç çeşit verebiliyoruz:
  * `localhost`: Yalnızca mevcut bilgisayarındaki programlar bağlanabilir
  * `lan`: Aynı WiFi'ye bağlı olan cihazlar erişebilir.
  * `tunnel`: Expo modülü kendi alanında bir sunucu açıp globalde kullanılabilir hale getiriyor.
* `EXPO_PUBLIC_PORT`: Projenin başlatılacağı port numarası
* `EXPO_PUBLIC_LAUNCH_MODE`: Projenin özellikle Android ve iOS için geliştirme aşamasında emülatör üzerinden nasıl başlatılacağının ayarlar.
  * `--go`: Mobil uygulamayı Expo Go uygulaması üzerinden çalıştırır
  * `--dev-client` Mobil uygulama için debug uygulamaya çevirir ve oradan çalıştırır. Bu debug uygulaması telefonumuzdaki mevcut uygulamalara benzer. Tek farkı mevcut uygulamanın içerisini mevcutta çalışan kod doldurur. Yani proje kodlarını kapatırsak debug uygulaması da boşa düşer.
