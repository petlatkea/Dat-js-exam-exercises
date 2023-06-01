"use strict";

window.addEventListener("load", initApp);

let usersGlobal = [];

async function initApp() {
    usersGlobal = await getUsers();
    displayUsers(usersGlobal);

    // displayAdmins(users);
}

async function getUsers() {
    const response = await fetch("users.json");
    const data = await response.json();
    return data;
}

function displayUsers(listOfUsers) {
    for (const user of listOfUsers) {
        const html = /*html*/ `
            <li>${user.name} (${user.role}), active: ${user.active}</li>
        `;
        console.log(html);
        document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
    }
}

function displayAdmins() {
    const admins = usersGlobal.filter(user => user.role === "admin");
    displayUsers(admins);
}
