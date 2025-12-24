export class Product {
  constructor({
    id,
    name,
    category,
    season,
    colors,
    sizes,
    basePrice,
    discountPercent,
    image,
    inStock,
    description,
  }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.season = season;
    this.colors = colors;
    this.sizes = sizes;
    this.basePrice = basePrice;
    this.discountPercent = discountPercent;
    this.image = image;
    this.inStock = inStock;
    this.description = description;
  }
}
