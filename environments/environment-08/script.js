"use strict";

const songs = [
    { artist: "Taylor Swift", title: "Blank space", duration: "4:33" },
    { artist: "Beastie Boys", title: "Sabotage", duration: "3:02" },
    { artist: "Skrillex", title: "Bangarang", duration: "3:35" },
    { artist: "Wolfgang Amadeus Mozart", title: "Eine kleine Nachtmusik", duration: "5:45" },
    { artist: "Coldplay", title: "Yellow", duration: "4:27" },
    { artist: "Metallica", title: "Enter Sandman", duration: "5:32" }
];

window.addEventListener("load", initApp);

function initApp() {
    console.log(songs);
    // showSongs();
    sortBy("artist");

    document.querySelector("#sort-artist").addEventListener("change", sortChanged);
    document.querySelector("#sort-title").addEventListener("change", sortChanged);
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
