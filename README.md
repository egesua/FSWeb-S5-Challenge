# Uygulamalı JavaScript Sprint Mücadelesi

**Bu talimatları dikkatlice okuyun. Bu Sprint Mücadelesine başlamadan önce tam olarak ne beklendiğini anlayın.**

Bu mücadele, geçmiş sprint boyunca öğrenilen kavramları ve teknikleri uygulamanıza ve bunları somut bir projede kullanmanıza olanak tanır. Bu sprint sayesinde **Uygulamalı JavaScript** 'i keşfettiniz. Bu sprint boyunca **DOM ve bileşenler**'i öğrendiniz. Bu mücadelede, **çevrimiçi bir Teknoloji Gazetesi** oluşturarak bu becerilerdeki ustalığınızı göstereceksiniz.

Bu projeyi, herkesin kendisinin yapması beklenmektedir. Tüm iş size ait olmalıdır. Mücadele puanınız, bu sprint boyunca işlenen materyali kullanarak bağımsız çalışma yeteneğinizin bir ölçüsüdür. Önceki Sprint'te tanıtılan ve uygulanan kavram ve hedeflerde yeterlilik göstermeniz gerekir.

Bu sprint mücadelesi sırasında işbirliği yapmanıza izin verilmez.

### Proje Kurulumu

* [ ] Bu projenyi forklayarak bir kopyasını oluşturun.
* [ ] Reponun kendi versiyonunuzu klonlayın.
* [ ] Commitinizi pushlayın: `git push origin main`.

## Proje Açıklaması

### Giriş

Bir teknoloji gazetesi oluşturacaksınız. İşiniz, gazetenin ana sayfasını oluşturan bileşenleri oluşturmak olacak..

Aşağıda listelenen minimum uygulanabilir ürün (MVP) spesifikasyonlarını karşılayan projeniz, aşağıda bağlantısı verilen görüntüye benzer görünmelidir.:

[Teknoloji Zamanı](/tasarım.png)

### Detaylar

- [ ] Komut satırınızla projenin kök dizinine gidin.
- [ ] `package.json` dosyasında listelenen bağımlılıkları indirmek için `npm install` komutunu çalıştırın.
- [ ] Projeyi derlemek ve sunmak için `npm start` komutunu çalıştırın.
- [ ] Chrome'da `http://localhost:3000` konumuna gidin
- [ ] Testleri çalıştırmak için ayrı bir terminalde `npm test` komutunu yazın.

**MVP için adımlar:**

- [ ] Adım 1 ve 2 `src/bileşenler/header.js` dosyasında açıklandı.
- [ ] Adım 3 ve 4 `src/bileşenler/tabs.js` dosyasında açıklandı.
- [ ] Adım 5 ve 6 `src/bileşenler/card.js` dosyasında açıklandı.

**Önemli Notlar:**

- Lütfen **dosyaları ya da klasörleri taşımayın ve isimlerini değiştirmeyin** .
- Geliştirme sunucunuz "otomatik yeniden yüklemeyi" durdurursa, `CTRL+C` ile manuel olarak sonlandırın ve yeniden başlatın.
- `package.json` 'ı değiştirmeyin, sadece NPM ile dosyaları indirin (Axios _halihazırda_ `package.json` 'a eklendi).
- Çözümünüzde en iyi uygulamaları izlemeniz, temiz ve profesyonel sonuçlar üretmeniz önemlidir.
- Yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere çalışmanızı gözden geçirmek, iyileştirmek için zaman planlayın.
- MVP'yi karşılayan bir meydan okuma göndermek, çok fazla detayla uğraşılıp da çalışmayan bir kod göndermekten daha iyidir.


## Ek Sorular

Aşağıdaki soruları yanıtlayarak bu sprint'in kavramlarını anladığınızı gösterin. Her sorudan sonra yanıtlarınızı eklemek için bu belgeyi düzenleyin.

1. DOM nedir?
    DOM, bir web sayfasının her bir öğesini (örneğin başlık, paragraf, resim, bağlantı vb.) bir nesne olarak temsil eder. Bu nesneler, bir hiyerarşi içinde düzenlenir; yani, bir öğenin içinde bulunduğu diğer öğeleri ve ilişkileri gösterir. Bu sayede JavaScript gibi programlama dilleri, DOM'a erişerek sayfa içeriğini değiştirebilir, ekleyebilir veya kaldırabilir.
2. Bir event nedir?
    "event" terimi, web sayfalarının etkileşimli ve dinamik hale getirilmesinde büyük öneme sahiptir. Bir web sayfasında, kullanıcının bir düğmeye tıklaması, fare imlecini bir öğenin üzerine getirmesi, bir tuşa basması gibi olaylar, JavaScript kullanılarak yakalanabilir ve işlenebilir. Bu tür olaylar, DOM eventleri olarak adlandırılır.
3. Bir event dinleyici(listener) nedir?
    DOM olaylarını yakalamak ve işlemek için olay dinleyicileri kullanılır. Bir olay dinleyicisi, belirli bir DOM öğesine (örneğin, bir düğme veya bir bağlantı) atandığında, belirtilen olayın meydana gelmesini bekler. Eğer olay gerçekleşirse, dinleyici tarafından belirtilen işlev (fonksiyon) otomatik olarak çağrılır.
4. Neden bir NodeList'i Array'e dönüştürelim??
    Bir NodeList'i (NodeList) bir diziye (Array) dönüştürmek, NodeList'in sahip olmadığı bazı özelliklere ve işlevselliğe erişim sağlayabilir ve verilerinizi daha rahat bir şekilde işlemenizi kolaylaştırabilir.
5. Bileşen nedir?
    Yazılım geliştirmede veya mühendislikte kullanılan ve daha büyük bir yapıyı oluşturan daha küçük parçalara verilen addır.Örneğin, bir web uygulamasını düşünün. Bu uygulama, kullanıcı kaydı, giriş, profil yönetimi ve içerik gösterimi gibi farklı işlevleri içerebilir. Her bir işlevsellik bölümü, ayrı bir bileşen olarak düşünülebilir. Bu modüler yaklaşım, kodun daha sürdürülebilir, ölçeklenebilir ve yeniden kullanılabilir olmasına yardımcı olabilir.
