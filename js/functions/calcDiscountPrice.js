export function calcDiscountPrice(product) {
  const rabatt = product.basePrice * (product.discountPercent / 100);
  return Math.round(product.basePrice - rabatt);
}
