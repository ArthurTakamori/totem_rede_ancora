import { useState, useEffect } from "react";
import Product from "../../components/Product";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import fetchProducts from "../../utils/api/fetchProducts";
import DorpdownCar from "../../components/DropdownCar";
import { getUser } from "../../state/userState";
import {
  uniqueOptionsFromApplications,
  uniqueOptionsFromProduct,
  extractUniqueFamilies,
} from "../../utils/uniqueOptionFilter";

export default function Search({
  activeFilter,
  setActiveFilter,
  categories,
  user,
  setUse,
}) {
  const {family, license_plate, line, } = activeFilter;
  const [products, setProducts] = useState([]);

  const filterOption = {
    linha: uniqueOptionsFromApplications(products, "linha"),
    familia: [...categories],
    categoria: extractUniqueFamilies(products, "familia"),
    marca: uniqueOptionsFromProduct(products, "marca"),
    codigoReferencia: false,
    categoriaAtiva: family.nome ?? "",
    veiculoPlaca: "",
  };

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
      } = await fetchProducts({ superbusca: family?.nome });

      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Title
          page={`${family.id ?? ""} ${
            family?.nome ?? ""
          } Acessórios para Veículos`}
        />
        <DorpdownCar cars={user.cars} productsSearch={productsSearch} />
      </div>

      <SearchBar productsSearch={productsSearch} filterOption={filterOption} />

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
