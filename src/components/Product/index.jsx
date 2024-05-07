import { formatCurrency } from "../../utils/formatCurrency";
import AboutProduct from "../AboutProduct";
import LogoRedeAncora from "../../assets/img/logo_v1.png";
import "./styles.scss";
import generateProductPrices from "../../utils/generateProductPrices";

export default function Product({ products }) {

  return (
    <div class="p-4">
      <div class="row row-cols-3 g-3">
        {products?.map(({ data: item }, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ item }) => {
  const { imagemReal, nomeProduto, marca } = item;

  const { originalPrice, discountedPrice } = generateProductPrices();


  return (
    <div className="col col-sm-6 col-md-4">

      <div class="rounded-2 overflow-hidden bg-white h-100">

        <div
          className="d-flex justify-content-center align-items-center rounded-2 bg-img p-3"
          style={{ height: "60%" }}
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
            style={{ height: "40%" }}
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
              <span className="text-primary text-blue-ancora-2 fw-bold me-1 fs-4">

                {formatCurrency(discountedPrice)}
              </span>
              <del className="text-muted" style={{ fontSize: ".rem" }}>
                {formatCurrency(originalPrice)}
              </del>
            </span>
            
            <AboutProduct />

          </div>
        </div>

      </div>

    </div>
  );
};
