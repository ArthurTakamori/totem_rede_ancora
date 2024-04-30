import { useState } from "react";
import HeaderHome from "../../components/Header/Home";
import ProductCard from "../../components/Product/ProductCard";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { formatCurrency } from "../../utils/formatCurrency";

export default function Cart() {

  const [products, setProducts] = useState([
    {
      name: 'Amortecedor',
      description: 'Modelo original',
      price: '244.50',
      qtd: '01'
    },
    {
      name: 'Melhor que 2',
      description: 'Modelo original',
      price: '189.50',
      qtd: '01'
    }
  ])

  function updateQuantity(newValue, index) {
    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts]
      updatedProducts[index] = { ...updatedProducts[index], qtd: newValue };
      return updatedProducts; 
    });
  }

  function deleteProduct(index) {
    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1); 
      return updatedProducts;
    });
  }

  const total = products.reduce((accumulator, currentValue) => accumulator + (parseInt(currentValue.qtd) * parseFloat(currentValue.price)), 0);

  return (
    <>
      <div className="container-main">

        <HeaderHome />
        
        <Title page={'Carrinho de compra'} />

        <main>

          {products.map((product, index) => (
            <ProductCard key={index}
              index={index}
              product={product.name}
              description={product.description}
              price={product.price}
              qtd={product.qtd}
              updateQuantity={updateQuantity}
              deleteProduct={deleteProduct}
            />
          ))}

        </main>

        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            height: "145px",
            padding: '1.5rem 3rem'
          }}
        >
          <div>
            <span className="fs-1 fw-medium d-block block">{formatCurrency(total)}</span>
            <span className="fs-4 d-block text-uppercase">Valor total</span>
          </div>

          <Button name={'Finalizar pedido'} type={'submit'} />
        </div>

      </div>
    </>
  );
}
