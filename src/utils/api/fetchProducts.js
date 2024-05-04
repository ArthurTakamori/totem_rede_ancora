import useFetchApi from '../../composables/useFetchApi.js';

export default async function fetchProducts(superbusca, veiculoPlaca) {
  
  return await useFetchApi("https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario", {
    method: "POST",
    body: {
      veiculoFiltro: {
        veiculoPlaca,
      },
      superbusca,
      pagina: 0,
      itensPorPagina: 30,
    },
  })
}
