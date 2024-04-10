import HeaderHome from "../../components/Header/Home";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import { products } from "../../data/placeholder-data";

export default function Home() {
  return (
    <>
      <div className="container-fluid d-flex flex-column vh-100">
        <HeaderHome />
        <Product products={products} />
        <Navbar />
      </div>
    </>
  );
}
