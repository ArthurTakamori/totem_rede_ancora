import { useState } from "react";
import Product from "../../components/Product";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import { products as dataPlaceholder } from "../../data/placeholder-data";

export default function Search() {
  const [products] = useState([...dataPlaceholder]);

  const [searchedProducts, setSearchedProducts] = useState([
    ...dataPlaceholder,
  ]);

  const handleFindProducts = (event) => {
    const { value } = event.target;
    console.log(value);

    const filterProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.subTitle.toLowerCase().includes(value.toLowerCase())
      );
    });

    console.log(filterProducts);
    setSearchedProducts([...filterProducts]);
  };

  return (
    <>
      <div className="container-main px-4">
        <Title page={"Pesquisar"} />

        <SearchBar handleFindProducts={handleFindProducts} />

        <main className="d-flex align-items-center p-0">
          <Product products={searchedProducts} />
        </main>
      </div>
    </>
  );
}
