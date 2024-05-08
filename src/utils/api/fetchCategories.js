import useFetchApi from '@/composables/useFetchApi.js';

export default async function fetchCategories(pagina, itensPorPagina) {

  return await useFetchApi("https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/produto/familias/query", {
    method: "POST",
    body: { 
      "pagina": pagina, 
      "itensPorPagina": itensPorPagina 
    },
  })

}