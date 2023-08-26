import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headDiv = document.createElement("div");
  headDiv.classList.add("headline");
  headDiv.textContent = makale.anabaslik;
  cardDiv.appendChild(headDiv);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  cardDiv.appendChild(authorDiv);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");
  authorDiv.appendChild(imgDiv);

  const img = document.createElement("img");
  img.setAttribute("src", `${makale.yazarFoto}`);
  imgDiv.appendChild(img);

  const span = document.createElement("span");
  span.textContent = `${makale.yazarAdi} tarafından`;
  authorDiv.appendChild(span);

  return cardDiv;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const card = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((res) => {
      console.log(res.data);
      for(let key in res.data.makaleler) {
        for(let i = 0; i < res.data.makaleler[key].length; i++) {
          card.appendChild(Card(res.data.makaleler[key][i]))
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export { Card, cardEkleyici }
