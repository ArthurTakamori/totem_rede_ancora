import { useState, useEffect } from "react";
import Product from "../../components/Product";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import fetchProducts from "../../utils/api/fetchProducts";

export default function Search({ activeFilter, setActiveFilter, user }) {
  const { automaker, license_plate } = activeFilter;
  const [products, setProducts] = useState([]);

  /* const filterOption = {
    linha: uniqueOptionsFromApplications(products, "linha"),
    familia: [...categories],
    categoria: extractUniqueFamilies(products, "familia"),
    marca: uniqueOptionsFromProduct(products, "marca"),
    codigoReferencia: false,
    categoriaAtiva: family.nome ?? "",
    veiculoPlaca: "",
  }; */

  // console.log(filterOption.marca)
  // console.log(filterOption.linha)
  // console.log("categorias/familia", filterOption.categoria)
  // console.log(products)

  const productsSearch = async (keyword) => {
    // const { value } = event.target;

    // const normalizedValue = keyword
    //   .trim()
    //   .replace(/[^\w\s]/gi, "")
    //   .replace(/\s+/g, " ")
    //   .toUpperCase();

    const {
      pageResult: { data },
    } = await fetchProducts(keyword);

    setProducts(data);
  };

  // const familiesFilter = (products) => {
  //   return products.filter(
  //     (product) => product.data?.familia?.id === Number(family.id)
  //   );
  // }

  useEffect(() => {
    async function fetchData() {
      const {
        pageResult: { data },
      } = await fetchProducts({ superbusca: automaker?.name });

      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Title page="Pesquisar" />

      <SearchBar
        productsSearch={productsSearch}
        user={user}
        license_plate={license_plate}
        setActiveFilter={setActiveFilter}
      />

      <div
        className="overflow-y-auto"
        style={{
          height: "calc(100% - 20rem)",
        }}
      >
        <Product products={products} />
      </div>
    </>
  );
}
