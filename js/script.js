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

if (productsContainer) {

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

                    <a href="produkt.html?id=${produkt.id}" class="btn">
                         PROHLÉDNOUT
                    </a>

               </div>
          `;

          productsContainer.appendChild(karta);
     });
}

let kosik = JSON.parse(localStorage.getItem("kosik")) || [];

const productDetail = document.querySelector("#product-detail");

if (productDetail) {

     const parametry = new URLSearchParams(window.location.search);

     const idProduktu = Number(parametry.get("id"));

     console.log("Vybrané ID:", idProduktu);

     const vybranyProdukt = produkty.find(function (produkt) {
          return produkt.id === idProduktu;
     });

     console.log("Vybraný produkt:", vybranyProdukt);


     productDetail.innerHTML = `
     <div class="detail-image">
          <img src="${vybranyProdukt.obrazek}" 
               alt="${vybranyProdukt.nazev}">
     </div>

     <div class="detail-info">

          <h1>${vybranyProdukt.nazev}</h1>

          <p class="detail-category">
               ${vybranyProdukt.kategorie}
          </p>

          <p>
               <strong>Technika:</strong>
               ${vybranyProdukt.technika}
          </p>

          <p>
               <strong>Rozměr:</strong>
               ${vybranyProdukt.rozmer}
          </p>

          <p class="detail-price">
          ${vybranyProdukt.cena.toLocaleString("cs-CZ")} Kč
          </p>
          
          
          <a href="" class="btn detail-cart">
          PŘIDAT DO KOŠÍKU
          </a>
          
          </div>
          `;

     const tlacitkoKosik = document.querySelector(".detail-cart");
     tlacitkoKosik.addEventListener("click", function (event) {
          event.preventDefault();

          kosik.push(vybranyProdukt);

          localStorage.setItem("kosik", JSON.stringify(kosik));

          console.log("Košík:", kosik);

          window.location.href = "kosik.html";
     });

}
const cart = document.querySelector("#cart");

if (cart) {

     const kosik = JSON.parse(localStorage.getItem("kosik")) || [];


     console.log("Obsah košíku:", kosik);

     kosik.forEach(function (produkt) {

          cart.innerHTML += `
               <article class="cart-item">

                    <img src="${produkt.obrazek}" 
                         alt="${produkt.nazev}">

                    <div class="cart-info">

                         <h2>${produkt.nazev}</h2>

                         <p>${produkt.kategorie}</p>

                         <p class="cart-price">
                              ${produkt.cena.toLocaleString("cs-CZ")} Kč
                         </p>

                    </div>

               </article>
          `;

     });

}










