# Øvelse 16

Environment: `environment-06`

*NB: Øvelse 15, 16, 17 og 18 kan alle kombineres i den samme script.js fil*

<sub>Denne øvelse indeholder ikke noget udskrift - alt foregår i konsollen. Den er også en del sværere end en gennemsnitlig eksamensopgave, men når du har løst den, kan du alt!</sub>

1. Indlæs JSON-filen `products.json` og gem listen af produkter i en global variabel `products`. Lav en anden global variabel `basket` til at indeholde produkter i kurven.
2. Lav en funktion `addToBasket` der modtager et produkt, og putter et objekt i kurven bestående af det produkt og et antal (1). 
   Hvis et produktet allerede er i kurven skal der ikke tilføjes et nyt objekt, men antallet skal tælles op.
3. Lav en funktion `removeFromBasket` der modtager et produkt, og hvis det allerede er i kurven skal der trækkes en fra dets antal - hvis antallet ender på 0, skal objektet fjernes fra kurven.