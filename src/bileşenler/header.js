const Header = (baslik, tarih, yazi) => {

  const headerDiv = document.createElement("div");
  headerDiv.className = "header"

  const span = document.createElement("span");
  span.className = "date"
  span.textContent = tarih;

  const h1 = document.createElement("h1");
  h1.textContent = baslik;

  const span2 = document.createElement("span");
  span2.className = "temp"
  span2.textContent = yazi

  headerDiv.append(span, h1, span2);

  return headerDiv;
}

const headerEkleyici = (secici) => {

  const baslik = "Teknoloji zamanı";
  const tarih = new Date(Date.now()).toLocaleString();
  const yazi = "Hoşgeldiniz!";

  const header = Header(baslik, yazi, tarih);
  document.querySelector(secici).append(header)
}
export { Header, headerEkleyici }
