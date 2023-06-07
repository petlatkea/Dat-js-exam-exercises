"use strict";

let students = [];

window.addEventListener("load", initApp);

function initApp() {
    document.querySelector("#create-student-form").addEventListener("submit", submitCreateForm);
}

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`,
// fra formularen på websiden og tilføjer det til en liste.

function submitCreateForm(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = Number(form.age.value);
    createStudent(name, email, age);
    showStudents(students);
}

function createStudent(name, email, age) {
    const newStudent = { name, email, age };
    students.push(newStudent);
    filterStudents();
    console.log(students);
}

//2. Lav en funktion der tjekker om en student har en korrekt email der består af mindst 4 tegn efterfulgt af @stud.kea.dk

function validateEmail(email) {
    const mailArray = email.split("@");
    const prefix = mailArray[0];
    const domain = mailArray[1];

    return prefix.length >= 4 && domain === "stud.kea.dk";
}

// 3. Brug funktionen til at fjerne students uden korrekt email fra listen.

function filterStudents() {
    students = students.filter(student => validateEmail(student.email));
}

// Vis alle students i tabel - ikke en del af prøveeksamen 1

function showStudents(listOfStudents) {
    // reset DOM
    document.querySelector("#students-table-body").innerHTML = "";
    // filter - age over eller lig med 18
    listOfStudents = listOfStudents.filter(student => student.age >= 18);
    // sort - efter age
    listOfStudents.sort((student1, student2) => student1.name.localeCompare(student2.name));

    for (const student of listOfStudents) {
        const html = /*html*/ `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.age}</td>
            </tr>
        `;
        document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
    }
}
