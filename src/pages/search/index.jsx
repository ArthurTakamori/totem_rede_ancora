import { useState } from "react";
import Product from "../../components/Product";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import { products as dataPlaceholder } from "../../data/placeholder-data";
import debounce from "../../utils/debounce";
import fetchProducts from "../../utils/api/fetchProducts";
import DorpdownCar from "../../components/DropdownCar";
import { getUser } from "../../state/userState";


export default function Search() {
  
  const user = getUser();
  // const [products] = useState([...dataPlaceholder]);

  const [searchedProducts, setSearchedProducts] = useState([
    ...dataPlaceholder,
  ]);

  const searchProducts = async (event) => {
    const { value } = event.target;

    const normalizedValue = value
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, " ")
      .trim();

    const {pageResult} = await fetchProducts(normalizedValue);

    const {data, vehicle} = pageResult



    console.log(data);
    setSearchedProducts(data);
  };

  const handleSearch = debounce(searchProducts, 500);

  return (
    <>
  
      <div className="d-flex justify-content-between align-items-center mb-4">

        <Title page={'Acessórios para Veículos'} />
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
