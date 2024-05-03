const BEARER_TOKEN = localStorage.access_token;

export default async function fetchProducts(pagina, itensPorPagina) {

  return fetch(
    "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/produto/familias/query",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: JSON.stringify({ 
        "pagina": pagina, 
        "itensPorPagina": itensPorPagina 
      }),
    }
  ).then((data) => data.json());

}