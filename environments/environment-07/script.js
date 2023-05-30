"use strict";
let students = [];

window.addEventListener("load", initApp);

function initApp() {
    document.querySelector("#create-student-form").addEventListener("submit", submitCreateForm);
    console.log(isEmailValid("te@stud.kea.dk"));
    console.log(isEmailValid("test@stud.kea.dk"));
    console.log(isEmailValid("test@stud.ka.dk"));
}

function submitCreateForm(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = Number(form.age.value);
    createStudent(name, email, age);
    validateEmails();
    showStudents(students);
}

function createStudent(name, email, age) {
    const newStudent = { name, email, age };
    students.push(newStudent);
}

function showStudents(listOfStudents) {
    // reset
    document.querySelector("#students-table-body").innerHTML = "";

    // sort
    listOfStudents.sort((student1, student2) => student1.age - student2.age);

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

function validateEmails() {
    students = students.filter(student => isEmailValid(student.email));
}

function isEmailValid(email) {
    const mailArray = email.split("@");
    const prefix = mailArray[0];
    const domain = mailArray[1];

    if (prefix.length >= 4 && domain === "stud.kea.dk") {
        return true;
    } else {
        return false;
    }
    // return prefix.length >= 4 && domain === "stud.kea.dk";
}
