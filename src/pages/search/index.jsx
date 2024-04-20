import HeaderHome from "../../components/Header/Home";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import { products } from "../../data/placeholder-data";

export default function Search() {
  return (
    <>
      <div className="container-fluid d-flex flex-column vh-100 position-relative">
        <HeaderHome page={"Search"} />
        <Product products={products} />
        <Navbar />
      </div>
    </>
  );
}
