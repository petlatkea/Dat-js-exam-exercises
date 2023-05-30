"use strict";

/* 
  Som en ekstra service har vi lavet denne løsning til øvelse 15, 16, 17 og 18.
  Der er ikke løsninger til de øvrige opgaver, og dette er kun et forslag til hvordan det
  kunne se ud - det er på ingen måde forkert hvis I er nået til det ønskede resultat af anden vej.

  Opgaverne er meget sværere end normalt, så denne løsning består af en masse commits - minimum
  en commit pr. delopgave - så kig på dem én commit ad gangen, i stedet for blot den endelige løsning.
*/

window.addEventListener("load", start);

let products = []; // laver en global variabel til at opbevare products, selv om det ikke står i opgaven
                   // Først i øvelse 16.1 står der at den skal være global

async function start() {
  products = await getProducts(); // gemmer i den globale variabel, selv om vi ikke bruger den endnu.
  console.log(products);
  showProducts(products);
}

async function getProducts() {
  const response = await fetch("products.json");
  const data = await response.json();

  return data;
}

function showProducts(products) {
  for(const product of products) {
    const html = /*html*/ `
    <article>
      <h3>${product.name}</h3>
      <p>vægt: ${product.weight} g</p>
      <p>pris: ${product.price},-</p>
      <button>Læg i kurv</button>
    </article>`;

    document.querySelector("#products").insertAdjacentHTML("beforeend", html);

    /* Øvelse 15.2 starter her */

    // kald add to basket på den senest tilføjede articles knap
    // gør det med en arrow-function for at udnytte closure og få product-objektet med
    document.querySelector("#products article:last-child button").addEventListener("click", () => addToBasket(product));
  }
}

const basket = [];

function addToBasket(product) {
  // Øvelse 16.2 ændrer i denne funktion - først skal vi lave et objekt med et produkt og et antal
  const productAndCount = { product, count: 1};

  basket.push(productAndCount);
  
  /* Øvelse 15.3 giver os også mulighed for at showBasket */
  showBasket();
}

function showBasket() {
  document.querySelector("#basket tbody").innerHTML = ""; // Fjern alt hvad der vises i kurven

  basket.forEach(showProductInBasket);  // Viser alle produkter i kurven
}

// Øvelse 16.2 har ændret basket fra at indeholde produkter til productAndCount
function showProductInBasket(productAndCount) {
  const html = /*html*/`
  <tr>
    <td>
      <button class="remove">-</button>
        ${productAndCount.count}
      <button class="add">+</button>
    </td>
    <td>${productAndCount.product.name}</td>
    <td>${productAndCount.product.price},-</td>
    <td>PRIS I ALT,-</td>
  </tr>`

  // NB: Vi ved endnu ikke hvad ANTAL er, og derfor heller ikke prisen i alt (for denne linje)

  document.querySelector("#basket tbody").insertAdjacentHTML("beforeend", html);
}