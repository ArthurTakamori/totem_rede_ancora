import useFetchApi from "../../composables/useFetchApi.js";

export default async function fetchProducts({
  superbusca = "",
  veiculoPlaca = "",
  pagina = 0,
  itensPorPagina = 100,
}) {
  return await useFetchApi(
    "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/produtos/query",
    {
      method: "POST",
      body: {
        veiculoFiltro: {
          veiculoPlaca,
        },
        superbusca,
        pagina,
        itensPorPagina,
      },
    }
  );
}
