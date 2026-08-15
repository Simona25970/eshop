// Efekt pro menu při scrollování - jemná spodní linka
window.addEventListener('scroll', function () {
     const menu = document.querySelector('.menu');

     if (window.scrollY > 10) {
          menu.classList.add('scrolled');
     } else {
          menu.classList.remove('scrolled');
     }
});

const produkty = [
     {
          id: 1,
          nazev: "Květiny na louce",
          cena: 1800,
          obrazek: "img/kvetinynalouce.jpg",
          kategorie: "Krajina",
          technika: "Akryl na plátně",
          rozmer: "50 x 40 cm"
     },
     {
          id: 2,
          nazev: "Zahrádka",
          cena: 2500,
          obrazek: "img/zahradka.jpg",
          kategorie: "Krajina",
          technika: "Akryl na plátně",
          rozmer: "50 x 40 cm"
     },
     {
          id: 3,
          nazev: "Slunečnice",
          cena: 2200,
          obrazek: "img/slunecnice.jpg",
          kategorie: "Květiny",
          technika: "Akryl na plátně",
          rozmer: "50 x 40 cm"
     },
     {
          id: 4,
          nazev: "Ulička",
          cena: 2200,
          obrazek: "img/ulicka.jpg",
          kategorie: "Vesnice",
          technika: "Akryl na plátně",
          rozmer: "50 x 40 cm"
     },
     {
          id: 5,
          nazev: "Chata v horách",
          cena: 2500,
          obrazek: "img/chatavhorach.jpg",
          kategorie: "Krajina",
          technika: "Akryl na plátně",
          rozmer: "50 x 40 cm"
     },
     {
          id: 6,
          nazev: "Západ slunce v zimě",
          cena: 2800,
          obrazek: "img/zapadsluncevzime.jpg",
          kategorie: "Zima",
          technika: "Akryl na plátně",
          rozmer: "50 x 40 cm"
     },
     {
          id: 7,
          nazev: "Most v zimě",
          cena: 2600,
          obrazek: "img/mostvzime.jpg",
          kategorie: "Zima",
          technika: "Akryl na plátně",
          rozmer: "50 x 40 cm"
     },
     {
          id: 8,
          nazev: "Vlčí máky",
          cena: 1900,
          obrazek: "img/vlcimaky.jpg",
          kategorie: "Krajina",
          technika: "Akryl na plátně",
          rozmer: "50 x 40 cm"
     },
     {
          id: 9,
          nazev: "Západ slunce",
          cena: 2400,
          obrazek: "img/zapadslunce.jpg",
          kategorie: "Krajina",
          technika: "Akryl na plátně",
          rozmer: "50 x 40 cm"
     }
];

const productsContainer = document.querySelector("#products");

produkty.forEach(function (produkt) {

     const karta = document.createElement("article");

     karta.classList.add("product-card");

     karta.innerHTML = `
     <div class="product-image">
          <img src="${produkt.obrazek}"
          alt="Obraz ${produkt.nazev}"
          width="400"
          height="300"
          loading="lazy">
     </div>
     
     <div class="product-info">
     
          <h3>${produkt.nazev}</h3>
     
          <p class="product-description">
               Originální obraz
          </p>

          <p>${produkt.technika}</p>

          <p>${produkt.rozmer}</p>

          <p class="price">
               ${produkt.cena.toLocaleString("cs-CZ")} Kč
          </p>

          <a href="#" class="btn" data-id="${produkt.id}">
               PROHLÉDNOUT
          </a>

     </div>
     `;

     productsContainer.appendChild(karta);
});


const tlacitka = document.querySelectorAll(".product-card .btn");

tlacitka.forEach(function (tlacitko) {

     tlacitko.addEventListener("click", function (event) {

          event.preventDefault();

          const idProduktu = Number(tlacitko.dataset.id);

          const produkt = produkty.find(function (produkt) {
               return produkt.id === idProduktu;
          });


          const detail = document.querySelector("#products-detail");

          detail.innerHTML = `
     <div class="detail-image">
         <img src="${produkt.obrazek}" alt="${produkt.nazev}">
     </div>

     <div class="detail-info">
          <h3>${produkt.nazev}</h3>

          <p class="detail-category">
              ${produkt.kategorie}
          </p>

          <p>
              <strong>Technika:</strong>${produkt.technika}
          </p>

          <p>
              <strong>Rozmer:</strong>${produkt.rozmer}
          </p>

          <p class="detail-price">
              ${produkt.cena.toLocaleString("cs-CZ")} Kč
          </p>
     </div>
`;
     });
});