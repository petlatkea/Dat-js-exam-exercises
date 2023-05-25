"use strict";

// indlæs varer
let products = [];

window.addEventListener("load", start);

async function start() {
  products = await loadProducts();
  console.log(products);
  showProducts(products);
}

async function loadProducts() {
  const resp = await fetch("products.json");
  const data = await resp.json();

  return data;
}

// vis liste af varer
function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  const HTML = /*html*/ `
  <article>
      <h3>${product.name}</h3>
      <p>vægt: ${product.weight} g</p>
      <p>pris: ${product.price},-</p>
      <button>Læg i kurv</button>
  </article>`;

  document.querySelector("#products").insertAdjacentHTML("beforeend", HTML);
  document.querySelector("#products article:last-child button").addEventListener("click", clickPutInBasket);

  function clickPutInBasket(event) {
    addToBasket(product);
    showBasket();
  }
}

// læg i kurv
let basket = [];
function addToBasket(product) {
  // check if product is in basket
  let obj = basket.find(obj => obj.product === product);
  if(!obj) {
    obj = {product: product, antal: 0};
    basket.push(obj);
  }
  
  obj.antal++;  
}

// fjern fra kurv
function removeFromBasket(product) {
  let obj = basket.find(obj => obj.product === product);
  if(obj) {
    obj.antal--;
    if(obj.antal <= 0) {
      const index = basket.indexOf(obj);
      basket.splice(index,1);
    }
  }
}

function showBasket() {
  document.querySelector("#basket tbody").innerHTML = "";
  basket.forEach(showInBasket)
  showBasketTotals();
}

function showInBasket(obj) {
  const HTML = /*html*/`
  <tr>
    <td>
      <button class="remove">-</button>
      ${obj.antal}
      <button class="add">+</button>
    </td>
    <td>${obj.product.name}</td>
    <td>${obj.product.price},-</td>
    <td>${obj.product.price * obj.antal},-</td>
  </tr>
  `;

  document.querySelector("#basket tbody").insertAdjacentHTML("beforeend", HTML);

  document.querySelector("#basket tbody tr:last-child button.remove").addEventListener("click", () => {removeFromBasket(obj.product); showBasket();});
  document.querySelector("#basket tbody tr:last-child button.add").addEventListener("click", () => {addToBasket(obj.product); showBasket();});


}

function showBasketTotals() {
  const productsInBasket = basket.length;
  let totalProducts = 0;
  let totalPrice = 0;
  let totalWeight = 0;
  for(const obj of basket) {
    totalProducts += obj.antal;
    totalPrice += obj.product.price * obj.antal;
    totalWeight += obj.product.weight * obj.antal;
  }

  document.querySelector("#total-in-basket").textContent = productsInBasket;
  document.querySelector("#total-products").textContent = totalProducts;
  document.querySelector("#total-price").textContent = totalPrice;
  document.querySelector("#total-weight").textContent = totalWeight;

  if(totalWeight>=2000) {
    document.querySelector(".warning").classList.add("show");
  } else {
    document.querySelector(".warning").classList.remove("show");
  }


}
