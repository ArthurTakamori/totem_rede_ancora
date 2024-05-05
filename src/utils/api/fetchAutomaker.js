import useFetchApi from '../../composables/useFetchApi.js';

export default async function fetchAutomaker(pagina=0, itensPorPagina=1000) {

  return await useFetchApi("https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/veiculo/montadoras/query", {
    method: "POST",
    body: { 
      pagina, 
      itensPorPagina 
    },
  })

}