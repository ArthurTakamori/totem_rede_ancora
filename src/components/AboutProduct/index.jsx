import { formatCurrency } from "@/utils/formatCurrency";
import QuantityCart from "../QuantityCart";
import "./styles.scss";

const AboutProduct = ({product}) => {

  const { imagemReal, nomeProduto, marca } = product;
  console.log(product)

  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#aboutModal"
        className="mgc_add_fill btn btn-secondary bg-white border-1 p-3 rounded-1 fs-5"
      ></button>

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
                            {formatCurrency(price - discount)}
                          </span>
                          <del className="text-muted fs-5">
                            {formatCurrency(price)}
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
    </>
  );
};

export default AboutProduct;
