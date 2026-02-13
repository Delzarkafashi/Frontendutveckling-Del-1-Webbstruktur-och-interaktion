export function applyStockStatus(cardElement, product) {
  const buyBtn = cardElement.querySelector(".kop-knapp-klader");
  if (!buyBtn) return;

  if (!product.inStock) {
    buyBtn.textContent = "Ej i lager";
    buyBtn.disabled = true;
    buyBtn.classList.add("disabled-btn");
  }
}
