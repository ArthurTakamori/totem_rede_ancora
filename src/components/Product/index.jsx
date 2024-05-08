import { formatCurrency } from "@/utils/formatCurrency";
import LogoRedeAncora from "@/assets/img/logo_v1.png";
import "./styles.scss";
import generateProductPrices from "@/utils/generateProductPrices";
import { useState } from "react";
import QuantityCart from "../QuantityCart";

export default function Product({ products }) {

  const [ selectedProduct, setSelectedProduct ] = useState({});

  return (
    <>
      <div className="p-4">
        <div className="row row-cols-3 g-3">
          {products?.map(({ data: item }, index) => (
            <Card key={index}
                  item={item} 
                  setSelectedProduct={setSelectedProduct}/>
          ))}
        </div>
      </div>

      <ModalCart product={selectedProduct}/>
    </>
  );
}

const Card = ({ item, setSelectedProduct }) => {
  const { imagemReal, nomeProduto, marca } = item;

  const { originalPrice, discountedPrice } = generateProductPrices();

  return (
    <div className="col col-sm-6 col-md-4 col-lg-3" style={{
      minHeight: '550px'
    }}>

      <div className="rounded-2 overflow-hidden bg-white h-100">

        <div
          className="d-flex justify-content-center align-items-center rounded-2 bg-img p-3"
          style={{ height: "45%" }}
        >

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

        <div
          className="p-3 d-flex flex-column justify-content-between"
            style={{ height: "55%" }}
          >

          <div>
            <h5 className="mb-0 fs-4" style={{ fontWeight: "400" }}>
              {nomeProduto}
            </h5>
            <p
              className="card-text opacity-75 fs-5  text-uppercase"
              style={{
                fontWeight: "300",
              }}
            >
              {marca}
            </p>
          </div>

          <div className="d-flex flex-sm-wrap align-items-center justify-content-between gap-2">

            <span className="card-text flex-item flex-grow-1">
              <span className="text-primary text-blue-ancora-2 fw-bold me-1 fs-3">

                {formatCurrency(discountedPrice)}
              </span>
              <del className="text-muted" style={{ fontSize: ".rem" }}>
                {formatCurrency(originalPrice)}
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
              setSelectedProduct={setSelectedProduct}/>

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
      className="mgc_add_fill btn btn-secondary bg-white border-1 p-3 rounded-1 fs-5"
      onClick={() => setSelectedProduct(product)}
    ></button>
  )
};

const ModalCart = ({product}) => {

  const { imagemReal, nomeProduto, marca, originalPrice, discountedPrice } = product;

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
          className="modal-content bg-white rounded-0"
          style={{ width: "100vw", height: "80vh" }}
        >

          <div className="h-100 d-flex flex-column w-100  overflow-y-auto">
            
            <div className="modal-body p-0 ">
            
              <button
                type="button"
                className="btn-close position-absolute"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ 
                  fontSize: "1.5rem", 
                  padding: "0.5rem",
                  top: ".8rem",
                  right: ".8rem"
                }}
              ></button>

              <div className="h-100">

                <div
                  className="d-flex justify-content-center align-items-center rounded-1 bg-img"
                  style={{ height: "40%" }}
                >

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

                <div className="d-flex flex-column justify-content-between h-full" style={{ height: "60%" }}>

                  <div className="p-4">

                    <div className="mb-3">
                      <h5
                        className="text-primary card-title mb-0 modal-title fs-2 text-uppercase"
                      >
                        {nomeProduto}
                      </h5>
                      <p className="card-text text-uppercase opacity-75 fs-5">
                        {marca}
                      </p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-3">

                      <span className="card-text flex-item flex-grow-1">
                        <span
                          className="text-primary text-blue-ancora-2 me-1 fs-2"
                          style={{ fontWeight: "900" }}
                        >
                          {discountedPrice ? formatCurrency(discountedPrice) : '--'}
                        </span>
                        <del className="text-muted fs-5">
                          {originalPrice ? formatCurrency(originalPrice) : '--'}
                        </del>
                      </span>

                    </div>

                    <p
                      className="fs-6"
                      style={{ color: "#626262", fontWeight: "300" }}
                    >
                      {/* {discription} */}
                    </p>
                    
                  </div>

                  <div className="d-flex w-100 justify-content-between p-4">

                      <QuantityCart />

                      <button type="button" className="btn btn-primary px-5">
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
