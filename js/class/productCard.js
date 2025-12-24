import { calcDiscountPrice } from "../functions/calcDiscountPrice.js";

const vinterSko2 = {
  id: "vinter-sko-2",
  name: "Vinterstövlar",
  category: "sko",
  season: "vinter",
  colors: ["röd", "svart", "vit"],
  sizes: ["S", "M", "L"],
  basePrice: 749,
  discountPercent: 10,
  image: "assets/images/Vinterstövlar vit.png",
  description: "Varma vinterstövlar med bra grepp för kalla dagar.",
  inStock: true
};

document.addEventListener("DOMContentLoaded", () => {
  // Variabler & datatyper
  const price = vinterSko2.basePrice;
  const name = vinterSko2.name;
  const inStock = vinterSko2.inStock;


  console.log("Namn:", name);
  console.log("Ordinarie pris:", price);
  console.log("Finns i lager:", inStock);

  // If / else
  if (inStock) {
    console.log("Produkten finns i lager.");
  } else {
    console.log("Produkten är slut i lager.");
  }

  // Loopar
  for (let size of vinterSko2.sizes) {
    console.log("Storlek:", size);
  }

  for (let color of vinterSko2.colors) {
    console.log("Färg:", color);
  }

  // DOM
  const productCard = document.querySelector(".js-vinter-sko");
  if (!productCard) return;

  const titleEl   = productCard.querySelector(".titel-klader");
  const imgEl     = productCard.querySelector(".bild-klader img");
  const priceEl   = productCard.querySelector(".pris-klader");
  const descEl    = productCard.querySelector(".beskrivning-klader");
  const buyBtn    = productCard.querySelector(".kop-knapp-klader");
  const imageBox  = productCard.querySelector(".bild-klader");

  if (titleEl) titleEl.textContent = name;

  if (imgEl) {
    imgEl.src = vinterSko2.image;
    imgEl.alt = name;
  }

  if (descEl) descEl.textContent = vinterSko2.description;


  // Pris (med rabatt via import-funktionen)
  const discountedPrice = calcDiscountPrice(vinterSko2);

  if (priceEl) {
    if (vinterSko2.discountPercent > 0) {
      priceEl.innerHTML = `
        <span class="original-price">${vinterSko2.basePrice} kr</span>
        <span class="discounted-price">${discountedPrice} kr</span>
      `;
    } else {
      priceEl.textContent = price + " kr";
    }
  }

  // Rabatt-badge
  if (imageBox && vinterSko2.discountPercent > 0) {
    const badge = document.createElement("div");
    badge.className = "discount-badge";
    badge.textContent = `-${vinterSko2.discountPercent}%`;
    imageBox.appendChild(badge);
  }

  if (buyBtn) {
    const priceForAria =
      vinterSko2.discountPercent > 0 ? discountedPrice : price;

    buyBtn.setAttribute(
      "aria-label",
      `Köp ${name} för ${priceForAria} kronor`
    );
  }

  productCard.setAttribute("aria-label", `Produkt ${name}`);
});
