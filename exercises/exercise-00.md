# Øvelse 0
Dette er en simpel lille øvelse for at komme i gang med at bruge øvelses-repositoriet.

Der er derfor flere trin, og mere beskrivende tekst end i de almindelige øvelser.

## Opsætning - første gang

1. Hvis du ikke allerede har gjort det, så fork repositoriet: https://github.com/petlatkea/Dat-js-exam-exercises
2. Brug Github desktop til at clone **dit eget** repository - altså vælg det under "Github.com" i stedet for at paste linket ind.
3. Vælg **For my own purposes** når den spørger hvordan du planlægger at bruge den fork.

## Klargøring og opdatering

Der kommer løbende opdateringer - nye øvelser, eller rettelser til environments. Du skal opdatere din fork ved at merge upstream/main ind i din egen main.

1. I Github Desktop, vælg Current Branch: main
2. Derefter, tryk på "Choose a branch to merge into main"-knappen i bunden af branch-listen.
3. Vælg "upstream/main" 
4. Hvis der er ændringer, tryk "Create a merge commit"-knappen. Hvis du ikke kan trykke på knappen, er der ikke ændringer.

## Lav en øvelse

Vælg først den øvelse du vil lave, og lav en branch til den.
1. Sikr dig at du står i Current Branch: main
2. Tryk New branch og lav en ny branch med navnet på den øvelse du vil lave - du bestemmer selv systemet.
3. Åbn projektet i Visual Studio Code
4. Åbn den environment-mappe der er angivet i øvelsen, og skriv JavaScript-kode i script.js filen. Åbn den tilsvarende index.html i live-server.
5. Commit så ofte du vil, men sørg for at holde dig i samme branch.

### Når du er færdig med en øvelse

6. Hvis du vil dele din øvelse med andre, eller tage backup, kan du pushe branchen, men ellers nøjes med at committe, og skift tilbage til main, før du vælger en ny øvelse.
7. Hvis du vil prøve at lave den samme øvelse igen, på en anden måde, kan du lave en ny branch. Du må selv om du vil starte fra main, eller den eksisterende branch.

# Øvelse 0

Environment: `environment-00`

1. Lav en funktion `clicked`, der udskriver "Det virker" i konsollen, når man trykker på knappen på HTML-siden.
2. Udvid funktionen så den skjuler teksten `#result_failure` og viser teksten `#result_success` ved hjælp af klasserne `hide` og `show`.
3. Tilføj en funktion der automatisk skjuler begge tekster så snart siden loades - sørg for at knappen stadig virker og viser den rette tekst.