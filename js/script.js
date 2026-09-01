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
          <p class="italic">Tento web je součástí vyvojářského portfolia, objednávka je simulovaná.</p>
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

     const emptyCart = document.querySelector("#empty-cart");

     if (kosik.length > 0) {
          emptyCart.style.display = "none";
     }

     let celkem = 0;

     kosik.forEach(function (produkt) {
          celkem += produkt.cena;

          const cartTotal = document.querySelector("#cart-total");

          if (kosik.length > 0) {
               cartTotal.innerHTML = `
                   <h2>Celkem: ${celkem.toLocaleString("cs-CZ")} Kč</h2>`;
          }


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
                         <button class="remove-cart" data-id="${produkt.id}">
                                        Odebrat z košíku
                         </button>
                    </div>
               </article>
          `;
     });


     const tlacitkaOdebrat = document.querySelectorAll(".remove-cart");

     tlacitkaOdebrat.forEach(function (tlacitko) {

          tlacitko.addEventListener("click", function () {

               const id = Number(tlacitko.dataset.id);

               const novyKosik = kosik.filter(function (produkt) {
                    return produkt.id !== id;
               });

               localStorage.setItem("kosik", JSON.stringify(novyKosik));

               location.reload();

          });

     });

}


const orderForm = document.querySelector(".order-form-container form");

if (orderForm) {
     orderForm.addEventListener("submit", function (event) {
          event.preventDefault();

          const shipping = document.querySelector('input[name="shipping"]:checked');

          const payment = document.querySelector('input[name="payment"]:checked');

          localStorage.setItem("doprava", shipping.value);
          localStorage.setItem("platba", payment.value);

          window.location.href = "udaje.html";
     });
}

const customerForm = document.querySelector(".order-form-container form");

if (customerForm) {

     customerForm.addEventListener("submit", function (event) {
          event.preventDefault();

          const name = document.querySelector("#name").value;
          const email = document.querySelector("#email").value;
          const phone = document.querySelector("#phone").value;
          const address = document.querySelector("#address").value;
          const city = document.querySelector("#city").value;
          const zip = document.querySelector("#zip").value;

          const udajeZakaznika = {
               name: name,
               email: email,
               phone: phone,
               address: address,
               city: city,
               zip: zip
          };
          localStorage.setItem("udajeZakaznika", JSON.stringify(udajeZakaznika)
          );

          console.log(
               "ULOŽENO DO LOCALSTORAGE:",
               localStorage.getItem("udajeZakaznika")
          );

          window.location.href = "rekapitulace.html"
     });
}

console.log("REKAPITULACE FUNGUJE");
const summaryItems = document.querySelector("#summary-items");

if (summaryItems) {

     const kosik = JSON.parse(localStorage.getItem("kosik")) || [];

     const doprava = localStorage.getItem("doprava");
     const platba = localStorage.getItem("platba");
     const udajeZakaznika = JSON.parse(localStorage.getItem("udajeZakaznika")) || {};

     console.log("Jméno:", udajeZakaznika.name);
     console.log("E-mail:", udajeZakaznika.email);
     console.log("Telefon:", udajeZakaznika.phone);
     console.log("Adresa:", udajeZakaznika.address);
     console.log("Město:", udajeZakaznika.city);
     console.log("PSČ:", udajeZakaznika.zip);


     console.log("Údaje zákazníka:", udajeZakaznika);

     let celkemObjednavky = 0;

     const cenyDopravy = {
          "zasilkovna": 59,
          "posta": 69,
          "osobni-odber": 0
     };

     const cenaDopravy = cenyDopravy[doprava] || 0;

     // Produkty

     kosik.forEach(function (produkt) {
          celkemObjednavky += produkt.cena;

          summaryItems.innerHTML += `
         <div class="summary-items">
                    <img src="${produkt.obrazek}"
                         alt="${produkt.nazev}">
                         
             <div>
                  <h4>${produkt.nazev}</h4>
                  <p>${produkt.kategorie}</p>
                  <p>
                      ${produkt.cena.toLocaleString("cs-CZ")} Kč
                   </p> 
              </div>
         </div>        
       `;
     });

     // Doprava

     const summaryShipping = document.querySelector("#summary-shipping");

     const shippingNames = {
          "zasilkovna": "Zásilkovna – 59 Kč",
          "posta": "Česká pošta – 69 Kč",
          "osobni-odber": "Osobní odběr – zdarma"
     };

     summaryShipping.innerHTML = `
       <p><strong>Doprava:</strong> ${shippingNames[doprava] || ""}</p>`;


     // Platba

     const summaryPayment = document.querySelector("#summary-payment");

     const paymentNames = {
          "prevod": "Bankovní převod – zdarma",
          "karta": "Platba kartou – zdarma",
          "prevzeti": "Platba při převzetí"
     };


     summaryPayment.innerHTML = `
         <p><strong>Platba:</strong> ${paymentNames[platba] || ""}</p>`;

     // Dodací údaje

     const summaryCustomer = document.querySelector("#summary-customer");

     summaryCustomer.innerHTML = `
             <p>${udajeZakaznika.name}</p>
             <p>${udajeZakaznika.email}</p>
             <p>${udajeZakaznika.phone}</p>
             <p>${udajeZakaznika.address}</p>
             <p>${udajeZakaznika.city}</p>
             <p>${udajeZakaznika.zip}</p>
     `;

     // Celková cena

     celkemObjednavky += cenaDopravy;
     const summaryTotal = document.querySelector("#summary-total");

     summaryTotal.innerHTML = `
          <h2>
              Celkem: ${celkemObjednavky.toLocaleString("cs-CZ")} Kč
          </h2> 
       `;
}

// Doprava a platba
const shippingOptions = document.querySelectorAll('input[name="shipping"]');
const paymentOptions = document.querySelectorAll('input[name=payment]');

shippingOptions.forEach(function (option) {
     option.addEventListener("change", function () {
          localStorage.setItem("doprava", this.value);
     });
});

paymentOptions.forEach(function (option) {
     option.addEventListener("change", function () {
          localStorage.setItem("platba", this.value);
     });
});


// Zobrazení vybrané platby a dopravy
const selectedShipping = document.querySelector("#selected-shipping");
const selectedPayment = document.querySelector("#selected-payment");

if (selectedShipping && selectedPayment) {
     const shipping = localStorage.getItem("doprava");
     const payment = localStorage.getItem("platba");

     const shippingNames = {
          "zasilkovna": "Zásilkovna - 59 Kč",
          "posta": "Česká pošta - 69 Kč",
          "osobní-odber": "Osobní odběr - zdarma"
     };

     const paymentNames = {
          "prevod": "Bankovní převod - zdarma",
          "karta": "Platba kartou - zdarma",
          "prevzeti": "Platba při převzetí"
     };

     selectedShipping.textContent = shippingNames[shipping] || "";
     selectedPayment.textContent = paymentNames[payment] || "";
}

// Tlačítko - rekapitulace
const confirmOrder = document.querySelector("#confirm-order");

if (confirmOrder) {
     confirmOrder.addEventListener("click", function () {

          localStorage.removeItem("kosik");
          localStorage.removeItem("doprava");
          localStorage.removeItem("platba");
          localStorage.removeItem("udajeZakaznika");

          window.location.href = "dekujeme.html"
     });
}

// Tlačítko - objednavka
const toShipping = document.querySelector("#to-shipping");

if (toShipping) {
     toShipping.addEventListener("click", function () {
          window.location.href = "doprava.html";
     });
}


// Počet produktů v košíku
const cartCount = document.querySelector(".cart-count");

if (cartCount) {
     const kosik = JSON.parse(localStorage.getItem("kosik")) || [];

     cartCount.textContent = kosik.length;
}

// Produkty v dropdown košíku
const cartDropdownItems = document.querySelector(".cart-dropdown-items");
const cartDropdownTotal = document.querySelector(".cart-dropdown-total");

if (cartDropdownItems && cartDropdownTotal) {
     const kosik = JSON.parse(localStorage.getItem("kosik")) || [];

     let celkem = 0;

     kosik.forEach(function (produkt) {

          celkem += produkt.cena;

          cartDropdownItems.innerHTML += `
               <div class="cart-dropdown-item">
               
                     <img src="${produkt.obrazek}"
                          alt="${produkt.nazev}">
                          
                     <div class="cart-dropdown-item-info">
                     
                           <p>${produkt.nazev}</p>

                           <p class="cart-dropdown-price">
                                ${produkt.cena.toLocaleString("cs-CZ")} Kč
                            </p>    
                     </div>
               </div>
          `;
     });
     cartDropdownTotal.textContent = `Celkem: ${celkem.toLocaleString("cs-CZ")} Kč;`
}

const scrollBtn = document.getElementById("scrollToTop");

window.onscroll = function () {
     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          scrollBtn.style.display = "block";
     } else {
          scrollBtn.style.display = "none";
     }
};

// plynulý scroll nahoru
scrollBtn.onclick = function () {
     window.scrollTo({
          top: 0,
          behavior: 'smooth',
     });
};

// Cookies
function setCookie(name, value, days) {
     let expires = '';
     if (days) {
          const maxAge = days * 24 * 60 * 60;
          expires = `; max-age=${maxAge}`;
     }
     document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
     const cookieString = document.cookie;
     const cookies = cookieString ? cookieString.split('; ') : [];
     for (const cookie of cookies) {
          const [key, value] = cookie.split('=');
          if (decodeURIComponent(key) === name) {
               return decodeURIComponent(value || '');
          }
     }
     return null;
}

function hasCookieConsent() {
     return getCookie('cookieConsent') === 'true';
}

window.addEventListener('DOMContentLoaded', function () {
     const cookieBar = document.getElementById('cookie-bar');
     const acceptButton = document.getElementById('cookie-accept');
     if (!cookieBar || !acceptButton) {
          return;
     }

     cookieBar.style.display = 'none';

     if (!hasCookieConsent()) {
          setTimeout(function () {
               cookieBar.style.display = 'block';
          }, 1000);
     }

     acceptButton.addEventListener('click', function () {
          setCookie('cookieConsent', 'true', 365);
          cookieBar.style.display = 'none';
     });
});



// Mobile
const navIcon = document.querySelector(".jq--nav-icon");
const mainNav = document.querySelector(".jq--main-nav");
const navBack = document.querySelector(".mobile-nav-back");

if (navIcon && mainNav && navBack) {

     navIcon.addEventListener("click", function () {

          mainNav.classList.toggle("open");
          navBack.classList.toggle("open");

          if (mainNav.classList.contains("open")) {
               navIcon.src = "img/crossMenu.webp";
          } else {
               navIcon.src = "img/hamburgerMenu.webp";
          }

     });

     navBack.addEventListener("click", function () {

          mainNav.classList.remove("open");
          navBack.classList.remove("open");
          navIcon.src = "img/hamburgerMenu.webp";

     });
}
















