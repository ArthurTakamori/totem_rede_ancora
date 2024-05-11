import ProductCard from "@/components/Product/ProductCard";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "@/utils/formatCurrency";
import { Link } from "react-router-dom";

export default function Cart({ cartProducts, setCartProducts }) {

  const navigate = useNavigate();

  function updateQuantity(newValue, index) {
    setCartProducts(prevProducts => {
      const updatedProducts = [...prevProducts]
      updatedProducts[index] = { ...updatedProducts[index], qtd: newValue };
      return updatedProducts;
    });
  }

  function deleteProduct(index) {
    setCartProducts(prevProducts => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
  }

  const total = cartProducts.reduce((accumulator, currentValue) => accumulator + (parseInt(currentValue.qtd) * parseFloat(currentValue.discountedPrice)), 0);

  const handleNavigateDashboard = () => {
    navigate("/totem/dashboard");
  };

  return (
    <>

      <div className="d-flex flex-column align-items-start gap-4 px-4 mt-4">

        <button onClick={handleNavigateDashboard} className="fw-medium text-primary fs-4 d-flex align-items-center justify-content-center gap-2">
          <span className="mgc_arrow_left_line fs-2"></span>
          Voltar
        </button>

        <h1 className="fw-medium fs-1">
        Carrinho de compras
        </h1>

      </div>

      <div className="overflow-y-auto px-5" style={{
        height: 'calc(100% - 22rem)'
      }}>

        <div className="d-flex flex-column gap-5 py-5">

          {cartProducts.map((product, index) => (
            <ProductCard key={index}
              index={index}
              product={product}
              updateQuantity={updateQuantity}
              deleteProduct={deleteProduct}
            />
          ))}

        </div>

      </div>

      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          height: "145px",
          padding: '1.5rem 4rem'
        }}
      >
        <div>
          <span className="fs-1 fw-medium d-block block">{formatCurrency(total)}</span>
          <span className="fs-4 d-block text-uppercase">Valor total</span>
        </div>

          <Link to="/totem/stored" className="btn btn-primary w-50 fs-3">
          Finalizar pedido
          </Link>
      </div>

    </>
  );
}
