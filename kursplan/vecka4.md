# Vecka 4 – DOM & Events

## Veckans syfte

Syftet med vecka 4 är att förstå hur JavaScript kan användas för att manipulera
innehållet på en webbsida och skapa interaktivitet med hjälp av DOM och events.

Vi ska lära oss hur vi kan skapa, ändra och ta bort element samt reagera på
användarens handlingar.

---

## Vad vi ska göra

Under vecka 4 ska vi arbeta med följande moment:

- Förstå vad DOM är och hur HTML representeras i webbläsaren
- Hämta element med `querySelector`
- Skapa och lägga till element med `createElement` och `append`
- Ändra text och innehåll på sidan med JavaScript
- Ändra klasser dynamiskt för att visa fel och status
- Arbeta med events:
  - `input`
  - `click`
  - `submit`
- Bygga ett enklare projekt som använder DOM och events

---

## Hur ska vi tänka

Under vecka 4 ska vi fokusera på att tänka i termer av interaktion.

Vi ska:
- Bygga UI med JavaScript steg för steg
- Börja enkelt och lägga till funktionalitet successivt
- Testa ofta och se hur sidan reagerar på input och klick
- Separera struktur (DOM), logik (JavaScript) och utseende (CSS)
- Skriva kod som är lätt att läsa och förstå

Målet är inte att bygga något avancerat, utan att förstå hur DOM och events
fungerar tillsammans.

---

## Pseudokod

1. Hitta element i DOM
   - Använd `querySelector` för att hämta root-element

2. Skapa innehåll med JavaScript
   - Skapa element med `createElement`
   - Ge element text, klasser och attribut
   - Lägg in elementen i rätt ordning med `append`

3. Koppla events
   - Lyssna på `input` för att reagera när användaren skriver
   - Lyssna på `click` för knappar
   - Lyssna på `submit` för formulär

4. Uppdatera sidan
   - Ändra text och klasser baserat på användarens input
   - Visa fel eller statusmeddelanden

5. Testa och justera
   - Testa olika scenarion
   - Se till att sidan beter sig som förväntat
