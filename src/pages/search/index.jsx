import HeaderHome from "../../components/Header/Home";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import { products } from "../../data/placeholder-data";

export default function Search() {
  return (
    <>
      <div className="container-main px-4">
        <HeaderHome />

        <Title page={"Pesquisar"} />

        <SearchBar />

        <main className="d-flex align-items-center p-0">
          <Product products={products} />
        </main>

        <Navbar />
      </div>
    </>
  );
}
