"use strict";

const songs = [];

window.addEventListener("load", initApp);

function initApp() {
    console.log(songs);
    showSongs();

    document.querySelector("#add-song-form").addEventListener("submit", createFormSubmit);
    document.querySelector("#sort-artist").addEventListener("change", sortChanged);
    document.querySelector("#sort-title").addEventListener("change", sortChanged);
}

function createFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const artist = form.name.value;
    const title = form.title.value;
    const duration = form.duration.value;

    createSong(artist, title, duration);
    showSongs();
}

function createSong(artist, title, duration) {
    const song = { artist, title, duration };
    songs.push(song);
}

function showSongs() {
    document.querySelector("#songlist").innerHTML = "";
    for (const song of songs) {
        const html = /*html*/ `
            <li>${song.artist}: ${song.title} (${song.duration})</li>
        `;
        document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    }
}

function sortChanged(event) {
    const selectedSortBy = event.target.value;
    console.log(selectedSortBy);
    sortBy(selectedSortBy);
}

function sortBy(key) {
    songs.sort((song1, song2) => song1[key].localeCompare(song2[key]));
    showSongs();
}
