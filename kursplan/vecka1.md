# Vecka 5 – Struktur & Data

## Veckans syfte

Syftet med vecka 5 är att lära oss hur vi kan arbeta med data i JavaScript och
använda den datan för att skapa användargränssnitt dynamiskt.

Fokus ligger på att förstå hur data är uppbyggd och hur vi kan använda den för att
bygga upp en sida automatiskt, utan att hårdkoda innehåll i HTML.

---

## Viktigt att veta

Under tidigare veckor har vi redan arbetat med:

- Strukturering av JavaScript i flera filer
- Grundläggande komponent-tänk
- Imports och exports mellan filer

Detta repeteras kort, men huvudfokus under vecka 5 ligger på **data och UI**.

--

## Vad vi ska göra

Under vecka 5 ska vi arbeta med följande moment:

- Förstå vad mockdata är och varför vi använder det
- Arbeta med data i `.json`-filer
- Förstå hur data är uppbyggd (objekt och arrayer)
- Hämta data med `fetch()`
- Loopa igenom data och skapa UI från den
- Skapa och visa produktkort baserat på datan
- Koppla data till våra klasser och funktioner
- Felsöka med `console.log()` och Network/Console i DevTools

---

## Hur ska vi tänka

Under vecka 5 ska vi tänka “data först”.

Vi ska:
- Börja med att förstå datan (JSON) innan vi bygger UI
- Bygga UI så att det automatiskt anpassas när datan ändras
- Hålla ordning genom att dela upp ansvar i olika filer
- Använda `console.log()` för att se vad som händer steg för steg
- Vara noga med paths (import-paths + bildvägar) eftersom små stavfel kan stoppa allt

Vi har redan jobbat med struktur i flera filer och komponent-tänk tidigare,
så nu använder vi det vi kan och lägger fokus på **mockdata + UI från data**.

---

## Pseudokod

1. Skapa mockdata
   - Skapa en fil `products-data.json`
   - Lägg in en array med produkter
   - Varje produkt ska ha fält som:
     - id, name, category, season
     - colors, sizes
     - basePrice, discountPercent
     - image, inStock, description

2. Hämta data
   - Skapa en funktion `fetchProducts()`
   - Använd `fetch("assets/data/products-data.json")`
   - Konvertera till JSON och plocka ut `data.products`
   - Kontrollera i console att datan kommer in korrekt

3. Skapa UI från data
   - Loopa igenom alla produkter
   - För varje produkt:
     - skapa ett Product-objekt
     - skapa ett ProductCard
     - rendera kortet (DOM-element)

4. Visa på sidan
   - Hitta root-elementet (t.ex. `#products-app`)
   - Skapa en grid-container (t.ex. `.product-grid`)
   - Lägg in alla kort i grid
   - Lägg grid i root

5. Testa och felsök
   - Kontrollera att:
     - root-elementet hittas
     - fetch returnerar data
     - listan är en array
     - bilder inte ger 404 (rätt filnamn + rätt path)
   - Justera JSON om något är felstavat
   - Uppdatera och testa igen
