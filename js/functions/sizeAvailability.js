export function applySizeAvailability(cardElement, product) {
  const sizeButtons = cardElement.querySelectorAll(".size-btn");
  console.log("sizes i produkt:", product.sizes, "knappar:", sizeButtons.length);

  sizeButtons.forEach((btn) => {
    const btnSize = btn.dataset.size;
    const available = product.sizes?.includes(btnSize);
    console.log("btnSize:", btnSize, "available:", available);

    if (!available) {
      btn.classList.add("size-unavailable");
      btn.disabled = true;
    }
  });
}
