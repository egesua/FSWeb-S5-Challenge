import axios from "axios";

const Tablar = (konu) => {

  const topicDiv = document.createElement("div");
  topicDiv.classList.add("topics");

  konu.forEach((e) => {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    tabDiv.textContent = e ;
    topicDiv.append(tabDiv);
  });
  return topicDiv
}

const tabEkleyici = (secici) => {
  const tab = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/konular")
    .then((res) => {
      console.log(res.data);
      tab.append(Tablar(res.data.konular));
    })
    .catch((err) => {
      console.log(err);
    });
}

export { Tablar, tabEkleyici }
