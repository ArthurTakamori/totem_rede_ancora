const BEARER_TOKEN = localStorage.access_token;

export default async function fetchProducts(superbusca, veiculoPlaca) {
  const jsonData = JSON.stringify({
    veiculoFiltro: {
      veiculoPlaca,
    },
    superbusca,
    pagina: 0,
    itensPorPagina: 30,
  });

  return fetch(
    "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: jsonData,
    }
  ).then((data) => data.json());
}

// const BEARER_TOKEN =
//   "eyJhbGciOiJSUzI1NiIsImtpZCI6IkRFQkJDQUJBMjIwQjRGOTVDOTA5NTNFMURBMTlENEUzQzFDRDFGRDciLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiIzcnZLdWlJTFQ1WEpDVlBoMmhuVTQ4SE5IOWMifQ.eyJuYmYiOjE3MTQ1OTgwNTEsImV4cCI6MTcxNDY4NDQ1MSwiaXNzIjoiaHR0cHM6Ly9zc28tY2F0YWxvZ28ucmVkZWFuY29yYS5jb20uYnIiLCJhdWQiOiJTZWFyY2hFbmdpbmVBcGkuc3RnIiwiY2xpZW50X2lkIjoiNjV0dmg2cnZuNGQ3dWVyM2hxcW0ycDhrMnB2bm01d3giLCJyb2xlIjoicmVhZCIsInNjb3BlIjpbInNlYXJjaGVuZ2luZWFwaS5zdGciXX0.EV2TBp3XPCWwBg4GRnTMbeK-EeYBXFnWgK_YQBFSt54iz5d8HV-RZa7YUWO5gTv3AK_OnFOM6tbHYfknjAPCEBhvkmALhr6IkcKWSl-F70xWJIBmg779IIcdm9ucgJuWmr0GYwt5tk-1j--vGFqzDC69Zd1SXby6FP3iKXtBVDEJR33oETFlFoQiLr1ms3vMRwZh9hoG8rkHBBHh0088YCzpVhcRxNl_EGqK_LL-TVGf_FXltNCRFn0vZso94WCRPm2PqgYOoMZ8a5QlUHLnssXI2eQbCqDi18uQLBwIcWkU89s6Lo0TVplttdGtFBg-iJTTmY_q37uZ9a2JFKdg06g1MqFExMWjuLXjdNmfqqm-pbyEroWzlVU-upYyrXjvtxSwUgVCap4rP9m1x913V61bLUX2MhmWSF4x9DXXrR8dhlZv4egKzdSnVEkxzbOrIlLPFbrY5y1Jt8qr88a7_WLfuB9oekHiHbamXi1vpax4M1GQSO4TZXlkyS0IF7sy8soPaI14iAZi_Hc5MSGTW4nMz76cQFIKnqUJxLEy7ekJM17JSSWZerSz-u1rkdGFt3RBx_7pxpwxttxq0lIio_A3Htxu1dnRP5LXX7-u4xzNuvSVT_HVU_gkgNJO9r4vsx7pPxDnE7PfArEPqTJqWQ3DerKqv0HhgLlcZb9zlx8";
