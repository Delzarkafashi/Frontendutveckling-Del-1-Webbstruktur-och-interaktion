import { fetchProducts } from "../api/productsApi.js";
import { ProductCard } from "../class/productCard.js";

console.log("✅ productsPage.js laddad");

document.addEventListener("DOMContentLoaded", async () => {
  console.log("✅ DOMContentLoaded körs (productsPage)");

  const root = document.querySelector("#products-app");
  console.log("🔎 root (#products-app):", root);

  if (!root) {
    console.warn("⚠️ Hittar inte #products-app. Finns div:en i produkter.html?");
    return;
  }

  root.innerHTML = "";

  try {
    console.log("⏳ Hämtar produkter via fetchProducts()...");
    const products = await fetchProducts();

    console.log("✅ products:", products);
    console.log("✅ antal:", Array.isArray(products) ? products.length : "inte en array");

    // wrapper/grid för alla kort
    const grid = document.createElement("section");
    grid.className = "product-grid";

    for (const product of products) {
      console.log("📦 produkt:", product);

      const cardEl = new ProductCard(product).render();
      console.log("🧱 cardEl:", cardEl);

      grid.appendChild(cardEl);
    }

    root.appendChild(grid);
    console.log("✅ Render klar: grid appended");
  } catch (err) {
    console.error("❌ FEL i productsPage:", err);
    root.textContent = "Kunde inte ladda produkter.";
  }
});
