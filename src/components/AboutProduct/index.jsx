import { products } from "../../data/placeholder-data";
import { formatCurrency } from "../../utils/formatCurrency";
import "./styles.scss";

const AboutProduct = () => {
  const { img, discount, name, price, subTitle, discription } = products[0];
  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#aboutModal"
        className="mgc_add_fill btn btn-secondary bg-white border-1 p-1"
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
            className="modal-content bg-white overflow-y-auto"
            style={{ width: "100vw", height: "75vh" }}
          >
            <div
              className="h-100 d-flex flex-column m-auto"
              style={{ maxWidth: "1024px" }}
            >
              <div className="modal-header border border-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ fontSize: "1.5rem", padding: "0.5rem" }}
                ></button>
              </div>
              <div className="modal-body pt-0">
                <div className="container card rounded-4 bg-white p-1 border-0 h-100">
                  <div
                    className="card-image-container d-flex justify-content-center align-items-center rounded-4 bg-img"
                    style={{ height: "60%" }}
                  >
                    <img
                      src={img}
                      className="card-img-top"
                      alt={name}
                      style={{
                        maxHeight: "70%",
                        maxWidth: "100%",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="card-body p-2" style={{ minHeight: "40%" }}>
                    <div className="mb-3">
                      <h5
                        className="card-title mb-0 modal-title fs-3 color-dark-gray"
                        style={{ color: "#272727" }}
                      >
                        {name}
                      </h5>
                      <p className="card-text opacity-75 fs-5">{subTitle}</p>
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
                      {discription}
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer border border-0 mb-3 justify-content-between align-items-end px-4">
                <div className="">
                  <span style={{ color: "#272727" }}>Quantidade</span>
                  <div>
                    <button
                      type="button"
                      className="rounded-0 rounded-start-3 btn btn-primary"
                    >
                      -
                    </button>
                    <span className="mx-2"> 04 </span>
                    <button
                      type="button"
                      className="rounded-0 rounded-end-3 btn btn-primary"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button type="button" className="btn btn-primary px-5">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProduct;
