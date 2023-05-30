"use strict";
const students = [];

window.addEventListener("load", initApp);

function initApp() {
    document.querySelector("#create-student-form").addEventListener("submit", submitCreateForm);
}

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
    return newStudent;
}

function showStudents(listOfStudents) {
    // reset
    document.querySelector("#students-table-body").innerHTML = "";
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
