import HeaderHome from "../../components/Header/Home";
import Title from "../../components/Title";

export default function Cart() {
  return (
    <>
      <div className="container-fluid">

        <HeaderHome />
        <Title page={'Carrinho de compra'} />

        <p>Carrinho</p>
        
      </div>
    </>
  );
}
