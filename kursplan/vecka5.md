# Vecka 5 – Struktur & Data

## Veckans syfte

Syftet med vecka 5 är att lära oss hur vi kan arbeta med data i JavaScript och
använda den datan för att skapa användargränssnitt dynamiskt.

Vi ska fokusera på att läsa data, förstå dess struktur och använda JavaScript
för att generera innehåll på sidan baserat på den datan.

---

## Viktigt att veta

Under tidigare veckor har vi redan arbetat med:

- Strukturering av JavaScript i flera filer
- Grundläggande komponent-tänk
- Imports och exports mellan filer

Dessa delar repeteras kort, men huvudfokus under vecka 5 ligger på **data och UI**.

---

## Vad vi ska göra

Under vecka 5 ska vi arbeta med följande moment:

- Förstå vad mockdata är och varför vi använder det
- Arbeta med data i `.json`-filer
- Lära oss hur data är uppbyggd (objekt, arrayer)
- Hämta och använda data i JavaScript
- Loopa igenom data och skapa UI baserat på innehållet
- Koppla data till komponenter
- Bygga ett enkelt mini-projekt med data som grund

---

## Hur ska vi tänka

Under vecka 5 ska vi tänka “data först”.

Vi ska:
- Börja med att förstå datan innan vi skriver UI-kod
- Titta på hur datan är strukturerad
- Använda loopar för att skapa flera element från samma mall
- Hålla JavaScript-koden tydlig genom att separera data och presentation
- Undvika att hårdkoda innehåll direkt i HTML

Målet är att förstå hur **data styr UI**, inte tvärtom.

---

## Pseudokod

1. Skapa mockdata
   - Skapa en `.json`-fil
   - Lägg in flera objekt (t.ex. produkter)
   - Ge varje objekt relevanta fält (id, namn, pris, bild, beskrivning)

2. Läs in data i JavaScript
   - Importera eller hämta JSON-data
   - Kontrollera att datan laddas korrekt

3. Skapa UI från data
   - Loopa igenom datan
   - Skapa element för varje objekt
   - Använd samma struktur för alla objekt

4. Visa datan på sidan
   - Lägg in elementen i DOM
   - Se till att layouten blir tydlig och konsekvent

5. Testa och justera
   - Lägg till/ta bort objekt i JSON
   - Se att UI uppdateras automatiskt
