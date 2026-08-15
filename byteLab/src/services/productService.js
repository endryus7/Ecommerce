// Isola a chamada de API.
export async function getProducts() {
  const response = await fetch("/db.json");

  // fetch só rejeita a Promise em falha de rede.
  if (!response.ok) {
    throw new Error("Não foi possível carregar os produtos.");
  }

  const data = await response.json();
  return data.products;
}