import HeaderHome from "../../components/Header/Home";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import Title from "../../components/Title";
import { products } from "../../data/placeholder-data";

export default function Search() {
  return (
    <>
      <div className="container-main">

        <HeaderHome />
        <Title page={'Pesquisar'} />

        <main>
          <Product products={products} />
        </main>
        
        <Navbar />

      </div>
    </>
  );
}
