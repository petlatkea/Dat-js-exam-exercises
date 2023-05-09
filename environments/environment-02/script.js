"use strict";

window.addEventListener("load", initApp);

const animals = [];

function initApp() {
    createAnimal("Bo", "abe", 22); // test af del 1
    console.log(animals); // test af del 1
    // event på formular
    document.querySelector("#create-form").addEventListener("submit", createFormSubmitted);
}

function createAnimal(name, type, age) {
    const animal = {
        name: name,
        type: type,
        age: age
    };
    animals.push(animal);
    return animal;
}

function createFormSubmitted(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const type = form.type.value;
    const age = form.age.value;

    createAnimal(name, type, age);
    console.log(animals);

    showAnimals();
}

function showAnimals() {
    // sort animals by name
    animals.sort(compareName);
    console.log(animals);
    // reset tbody
    document.querySelector("#list-container tbody").innerHTML = "";

    for (const animal of animals) {
        const html = /*html*/ `
            <tr>
                <td>${animal.name}</td>
                <td>${animal.type}</td>
                <td>${animal.age}</td>
            </tr>
        `;
        document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
    }
}

function compareName(a, b) {
    return a.name.localeCompare(b.name);
}
