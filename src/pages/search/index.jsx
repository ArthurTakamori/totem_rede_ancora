import { useState } from "react";
import Product from "../../components/Product";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import { products as dataPlaceholder } from "../../data/placeholder-data";
import debounce from "../../utils/debounce";
import fetchProducts from "../../utils/api/fetchProducts";

export default function Search() {
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
      <div className="container-main px-4">
        <Title page={"Pesquisar"} />

        <SearchBar handleSearch={handleSearch} />

        <main className="d-flex align-items-center p-0">
          <Product products={searchedProducts} />
        </main>
      </div>
    </>
  );
}
