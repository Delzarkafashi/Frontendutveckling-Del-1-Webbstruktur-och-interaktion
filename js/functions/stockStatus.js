export function applyStockStatus(cardElement, product) {
  const buyBtn = cardElement.querySelector(".kop-knapp-klader");
  if (!buyBtn) return;

  // om inte i lager → ändra knapp
  if (!product.inStock) {
    buyBtn.textContent = "Ej i lager";
    buyBtn.disabled = true;
    buyBtn.classList.add("disabled-btn");
  }
}
