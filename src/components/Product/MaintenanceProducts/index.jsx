import { formatCurrency } from "@/utils/formatCurrency";
import LogoRedeAncora from "@/assets/img/logo_v1.png";
import "./styles.scss";
import { useState } from "react";
import QuantityCart from "../../QuantityCart";

export default function MaintenanceProducts({ products, setCartProducts }) {

  const [selectedProduct, setSelectedProduct] = useState({});

  return (
    <>
      <div className="p-4">
        <div className="row row-cols-3 g-5">
          {products?.map(({ data: item }, index) => (
            <Card key={index}
              item={item}
              setSelectedProduct={setSelectedProduct} />
          ))}
        </div>
      </div>

      <ModalCart product={selectedProduct} setCartProducts={setCartProducts} />
    </>
  );
}

const Card = ({ item, setSelectedProduct }) => {
  const { imagemReal, nomeProduto, marca, originalPrice, discountedPrice, codigoReferencia } = item;

  return (
    <div className="col-12 col-sm-6 col-lg-4 justify-content-center" style={{
      minHeight: '550px'
    }}>

      <div className="rounded-4 bg-white h-100 border border-secondary border-opacity-25 overflow-hidden">

        <div
          className="d-flex justify-content-center align-items-center rounded-2 px-4 pt-4"
          style={{ height: "45%" }}
        >

          <div className="bg-img h-100 w-100 d-flex align-items-center justify-content-center rounded-4 p-5">
            <img
              src={imagemReal ? imagemReal : LogoRedeAncora}
              className="card-img-top"
              alt={nomeProduto}
              style={{
                maxHeight: "70%",
                maxWidth: "100%",
                width: "auto",
                height: "auto",
              }}
            />

          </div>

        </div>

        <div
          className="py-4 px-5 d-flex flex-column justify-content-between"
          style={{ height: "55%" }}
        >

          <div>
            <h5 className="mb-0 fs-2 fw-medium">
              {nomeProduto} ({codigoReferencia})
            </h5>
            <p className="card-text opacity-75 fs-4  text-uppercase">
              {marca}
            </p>
          </div>

          <div className="d-flex flex-sm-wrap align-items-center justify-content-between gap-2 pb-4">

            <span className="card-text flex-item flex-grow-1">
              <span className="text-primary text-blue-ancora-2 fw-bold me-1 fs-1">

                {discountedPrice ? formatCurrency(discountedPrice) : '--'}
              </span>
              <del className="text-muted" style={{ fontSize: "1.5rem" }}>
                {originalPrice ? formatCurrency(originalPrice) : '--'}
              </del>
            </span>

            <ButtonModalAddCart
              product={{
                ...item,
                ...{
                  originalPrice: originalPrice,
                  discountedPrice: discountedPrice
                }
              }}
              setSelectedProduct={setSelectedProduct} />

          </div>
        </div>

      </div>

    </div>
  );
};

const ButtonModalAddCart = ({ product, setSelectedProduct }) => {

  return (
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#aboutModal"
      className="mgc_add_fill btn btn-primary bg-white border-1 p-4 rounded-1 fs-2"
      onClick={() => setSelectedProduct(product)}
    ></button>
    
  )
};

const ModalCart = ({ product, setCartProducts }) => {

  const { imagemReal, nomeProduto, marca, codigoReferencia, originalPrice, discountedPrice } = product;

  const [qtd, setQtd] = useState('01')

  const total = (parseInt(qtd) * parseFloat(product.discountedPrice));

  function handleAddToCart() {
    setCartProducts({
      ...product,
      price: total,
      qtd: qtd,
    })
  }

  return (
    <div
      className="modal modal-bottom fade"
      id="aboutModal"
      tabIndex="-1"
      aria-labelledby="aboutModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-bottom">

        <div
          className="modal-content bg-white rounded-0 position-relative"
          style={{ width: "100vw", minHeight: '60vh' }}
        >

          <div className="modal-header border-0 p-0 position-relative">
              <button
              type="button" 
              className="btn-close position-absolute" 
              id="#closeModalCart"
              data-bs-dismiss="modal" 
              aria-label="Close"
              style={{
                fontSize: "1.5rem",
                zIndex: '9999',
                right: '1rem',
                top: '1rem'
              }}
            ></button>
          </div>

          <div className="modal-body d-flex justify-content-center my-5 overflow-y-scroll">

            <div className="row justify-content-center w-100">

              <div className="h-100 col col-md-12 col-lg-8">

                <div
                  className="d-flex justify-content-center align-items-center rounded-3 bg-img p-5"
                  style={{ height: "30%" }}
                >

                  <img
                    src={imagemReal ? imagemReal : LogoRedeAncora}
                    className="card-img-top"
                    alt={nomeProduto}
                    style={{
                      maxWidth: "20%",
                    }}
                  />

                </div>

                <div className="d-flex flex-column justify-content-between h-full" style={{ height: "70%" }}>

                  <div className="p-4">

                    <div className="mb-3">
                      <h5
                        className="text-primary card-title mb-0 modal-title fs-3 text-uppercase"
                      >
                        {nomeProduto} ({codigoReferencia})
                      </h5>
                      <p className="card-text text-uppercase opacity-75 fs-5">
                        {marca}
                      </p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-3">

                      <span className="card-text flex-grow-1">
                        <span
                          className="text-primary text-blue-ancora-2 me-4 fs-2"
                          style={{ fontWeight: "900" }}
                        >
                          {discountedPrice ? formatCurrency(discountedPrice) : '--'}
                        </span>
                        <del className="text-muted fs-3">
                          {originalPrice ? formatCurrency(originalPrice) : '--'}
                        </del>
                      </span>

                    </div>


                  </div>

                  <div className="row align-items-center g-5 px-4">
                    
                    <div className="col-12 col-xl-8 d-flex gap-5 align-items-center">
                      
                      <div>
                          <span className="fs-4 d-block">Quantidade</span>
                          <QuantityCart qtd={qtd} index={0} updateQuantity={setQtd} />
                      </div>

                      <span className="fs-2 fw-medium d-block block mt-5">
                        Subtotal: {formatCurrency(total)}
                      </span>

                    </div>


                    <button type="button" 
                            className="col col-xs-12 col-md-12 col-xl-4 btn btn-primary px-5 py-3 fs-3 w-100"
                            onClick={handleAddToCart}>
                      Adicionar ao carrinho
                    </button>

                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
