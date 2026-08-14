export async function getProducts() {
  const response = await fetch("/db.json");

  if (!response.ok) {
    throw new Error("Não foi possível carregar os produtos.");
  }

  const data = await response.json();
  return data.products;
}
