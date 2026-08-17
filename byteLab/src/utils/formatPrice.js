// Formata um número pro padrão de casas decimais do Brasil
export function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}