"use strict";

const songs = [];

window.addEventListener("load", initApp);

function initApp() {
    console.log("initApp 🎉");

    document.querySelector("#add-song-form").addEventListener("submit", createFormSubmit);
    // document.querySelector("#sort-artist").addEventListener("change", sortChanged);
    // document.querySelector("#sort-title").addEventListener("change", sortChanged);
    document.querySelector("#sort-songs-form").addEventListener("change", sortChanged);
}

// 1. Lav en liste over sange, og lav en funktion til at tilføje et sang-objekt med
// `artist`, `title` og `duration` fra formularen på websiden.
function createFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const artist = form.name.value;
    const title = form.title.value;
    const duration = form.duration.value;

    createSong(artist, title, duration);
    showSongs(songs);
}

function createSong(artist, title, duration) {
    const song = { artist, title, duration };
    songs.push(song);
}

// 2. Lav en funktion til at udskrive listen af sange på websiden.
function showSongs(listOfSongs) {
    document.querySelector("#songlist").innerHTML = "";
    for (const song of listOfSongs) {
        const html = /*html*/ `
            <li>${song.artist}: ${song.title} (${song.duration})</li>
        `;
        document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    }
}

// 3. Sortér listen alfabetisk efter `artist` eller `title` alt efter
// hvad der bliver valgt på websiden.
function sortChanged(event) {
    const selectedSortBy = event.target.value;
    console.log(selectedSortBy);
    sortBy(selectedSortBy);
}

function sortBy(key) {
    songs.sort((song1, song2) => song1[key].localeCompare(song2[key]));
    showSongs(songs);
}
