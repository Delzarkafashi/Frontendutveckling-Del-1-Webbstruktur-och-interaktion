import { Product } from "../class/ProductClass.js";

console.log(" productsApi.js laddad");

export async function fetchProducts() {
  const url = "/assets/data/products-data.json";
  console.log(" fetch URL:", url);

  const res = await fetch(url);
  console.log(" res.ok:", res.ok, "status:", res.status);

  const data = await res.json();
  console.log(" raw data:", data);

  const list = Array.isArray(data) ? data : (data.products ?? []);
  console.log(" list length:", list.length);

  return list.map((item) => new Product(item));
}
