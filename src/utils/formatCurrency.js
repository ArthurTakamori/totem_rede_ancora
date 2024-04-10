export const formatCurrency = (amount) => {
  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
