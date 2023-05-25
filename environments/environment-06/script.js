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
    putInBasket(product);
  }
}

// læg i kurv
let basket = [];
function putInBasket(product) {
  basket.push(product);

  showInBasket(product);
}

function showInBasket(product) {
  const HTML = /*html*/`
  <tr>
    <td><input type="number" value="1" /></td>
    <td>${product.name}</td>
    <td>${product.price},-</td>
    <td>${product.price},-</td>
  </tr>
  `;

  document.querySelector("#basket tbody").insertAdjacentHTML("beforeend", HTML);
}
