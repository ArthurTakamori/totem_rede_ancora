import { useState, useEffect } from "react";
import Product from "../../components/Product";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import { products as dataPlaceholder } from "../../data/placeholder-data";
import debounce from "../../utils/debounce";
import fetchProducts from "../../utils/api/fetchProducts";
import DorpdownCar from "../../components/DropdownCar";
import { getUser } from "../../state/userState";

export default function Search({family, setFamily}) {
  
  const user = getUser();
  // const [products] = useState([...dataPlaceholder]);

  const [searchedProducts, setSearchedProducts] = useState([
    ...dataPlaceholder,
  ]);

  const productsSearch = async (event) => {
    const { value } = event.target;

    const normalizedValue = value
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, " ")
      .trim();

    const { pageResult } = await fetchProducts(normalizedValue);
    
    setSearchedProducts(pageResult.data);
    familiesFilter(pageResult.data);
  };

  const familiesFilter = (products) => {
    return products.filter(
      (product) => product.data?.familia?.id === Number(family.id)
    );
  }

  const handleSearch = debounce(productsSearch, 500);

  // useEffect(() => {
  //   async function fetchData() {

  //     const { pageResult } = await fetchProducts('A', '');
  //     console.log(pageResult)

  //   }

  //   fetchData();    
  // }, [])

  return (
    <>
  
      <div className="d-flex justify-content-between align-items-center mb-4">

        <Title page={`${family.id} ${family.nome} Acessórios para Veículos`} />
        <DorpdownCar cars={user.cars}/>

      </div>

      <SearchBar handleSearch={handleSearch} />

      <div className="overflow-y-auto px-5" style={{
        height: 'calc(100% - 20rem)'
      }}>

        <Product products={searchedProducts} />

      </div>

    </>
  );
}
