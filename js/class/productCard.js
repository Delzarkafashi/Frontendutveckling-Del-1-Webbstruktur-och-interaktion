import { Product } from "./ProductClass.js";
import { calcDiscountPrice } from "../functions/calcDiscountPrice.js";
import { setupColorImageSwitcher } from "../functions/colorImageSwitcher.js";
import { applyStockStatus } from "../functions/stockStatus.js";
import { applySizeAvailability } from "../functions/sizeAvailability.js";

export class ProductCard {
  constructor(product) {
    if (!(product instanceof Product)) {
      throw new Error("ProductCard behöver ett Product-objekt");
    }
    this.product = product;
  }

  render() {
    // wrapper runt kortet
    const wrapper = document.createElement("div");
    wrapper.className = "parent-klader";

    // själva kortet
    const card = document.createElement("section");
    card.className = "produkt-kort-klader";
    card.dataset.id = this.product.id;

    // titel
    const title = document.createElement("h3");
    title.className = "titel-klader";
    title.textContent = this.product.name;
    card.appendChild(title);

    // bild
    const bildWrapper = document.createElement("div");
    bildWrapper.className = "bild-klader";

    const img = document.createElement("img");
    img.src = this.product.image;
    img.alt = this.product.name;
    bildWrapper.appendChild(img);
    card.appendChild(bildWrapper);

    // beskrivning (kort)
    const desc = document.createElement("p");
    desc.className = "beskrivning-klader";

    const fullDesc = (this.product.description || "").trim();
    if (fullDesc) {
      const words = fullDesc.split(" ");
      const short = words.slice(0, 10).join(" ");
      desc.textContent = words.length > 10 ? short + " ..." : fullDesc;
    } else {
      desc.textContent = "";
    }
    card.appendChild(desc);

    // pris + rabatt
    const discounted = calcDiscountPrice(this.product);
    const price = document.createElement("div");
    price.className = "pris-klader";

    if (discounted !== this.product.basePrice) {
      // badge på bilden
      const badge = document.createElement("div");
      badge.className = "discount-badge";

      const badgeText = document.createElement("span");
      badgeText.className = "badge-minus";
      badgeText.textContent = `-${this.product.discountPercent}%`;

      badge.appendChild(badgeText);
      bildWrapper.appendChild(badge);

      // original + nytt pris
      const original = document.createElement("span");
      original.className = "original-price";
      original.textContent = `${this.product.basePrice} kr`;

      const discountedEl = document.createElement("span");
      discountedEl.className = "discounted-price";
      discountedEl.textContent = `${discounted} kr`;

      price.appendChild(original);
      price.appendChild(discountedEl);
    } else {
      price.textContent = `${this.product.basePrice} kr`;
    }

    card.appendChild(price);

    // storlekar
    const ALL_SIZES = ["S", "M", "L"];
    const sizeContainer = document.createElement("div");
    sizeContainer.className = "produkt-storlek";

    const sizeLabel = document.createElement("p");
    sizeLabel.className = "storlek-titel";
    sizeLabel.textContent = "Storlek:";
    sizeContainer.appendChild(sizeLabel);

    const sizeVal = document.createElement("div");
    sizeVal.className = "storlek-val";

    ALL_SIZES.forEach((size) => {
      const btn = document.createElement("button");
      btn.className = "size-btn";
      btn.dataset.size = size;
      btn.textContent = size;
      sizeVal.appendChild(btn);
    });

    sizeContainer.appendChild(sizeVal);
    card.appendChild(sizeContainer);

    // markera vilka storlekar som INTE finns
    applySizeAvailability(card, this.product);

    // färger
    const colorContainer = document.createElement("div");
    colorContainer.className = "produkt-farg";

    const colorLabel = document.createElement("p");
    colorLabel.className = "farg-titel";
    colorLabel.textContent = "Färg:";
    colorContainer.appendChild(colorLabel);

    const colorVal = document.createElement("div");
    colorVal.className = "farg-val";

    (this.product.colors || []).forEach((color) => {
      const btn = document.createElement("button");
      btn.className = "farg-btn";
      btn.dataset.color = color;

      if (color === "röd") btn.classList.add("farg-rod");
      if (color === "svart") btn.classList.add("farg-svart");
      if (color === "vit") btn.classList.add("farg-vit");

      colorVal.appendChild(btn);
    });

    colorContainer.appendChild(colorVal);
    card.appendChild(colorContainer);

    // köp-knapp
    const buyBtn = document.createElement("button");
    buyBtn.className = "kop-knapp-klader";
    buyBtn.type = "button";
    buyBtn.textContent = "Köp";
    card.appendChild(buyBtn);

    // aria label
    const priceForAria =
      this.product.discountPercent > 0 ? discounted : this.product.basePrice;

    buyBtn.setAttribute(
      "aria-label",
      `Köp ${this.product.name} för ${priceForAria} kronor`
    );
    card.setAttribute("aria-label", `Produkt ${this.product.name}`);

    // lager-logik + färg-switch
    applyStockStatus(card, this.product);
    setupColorImageSwitcher(card, this.product);

    // lägg kortet i wrappern
    wrapper.appendChild(card);

    return wrapper;
  }
}
