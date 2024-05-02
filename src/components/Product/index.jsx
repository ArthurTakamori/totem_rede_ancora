import { formatCurrency } from "../../utils/formatCurrency";
import AboutProduct from "../AboutProduct";
import Amortecedor from "../../assets/img/product_cart_amortecedor.png";
import "./styles.scss";
import generateProductPrices from "../../utils/generateProductPrices";

export default function Product({ products }) {
  return (
    <ul
      className="d-flex flex-column flex-wrap gap-4 flex-grow-1 align-items-start overflow-x-auto overflow-y-none p-0 justify-content-around"
      style={{ height: "65vh" }}
    >
      {products?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </ul>
  );
}

const Card = ({ item }) => {
  const { imagemReal, nomeProduto, marca } = item;

  const { originalPrice, discountedPrice } = generateProductPrices();

  const imageURL = imagemReal
    ? `https://catalogopdtstorage.blob.core.windows.net/imagens-prd/produto/${imagemReal}`
    : Amortecedor;

  return (
    <li
      className="card rounded-2 bg-white p-1 border-0"
      style={{
        minHeight: "46%",
        aspectRatio: "4 / 5",
      }}
    >
      <div
        className="card-image-container d-flex justify-content-center align-items-center rounded-4 bg-img"
        style={{ height: "60%" }}
      >
        <img
          src={imageURL}
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
        className="card-body p-2 d-flex flex-column justify-content-around"
        style={{ height: "40%" }}
      >
        <div className="h-50">
          <h5 className="card-title mb-0 fs-5" style={{ fontWeight: "400" }}>
            {nomeProduto}
          </h5>
          <p
            className="card-text opacity-75"
            style={{
              fontWeight: "300",
              marginTop: "-0.3rem",
              fontSize: "calc(.8rem)",
            }}
          >
            {marca}
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-between h-50 gap-2">
          <span className="card-text flex-item flex-grow-1">
            <span className="text-primary text-blue-ancora-2 fw-bold me-1 fs-5">
              {formatCurrency(discountedPrice)}
            </span>
            <del className="text-muted" style={{ fontSize: ".6rem" }}>
              {formatCurrency(originalPrice)}
            </del>
          </span>
          <AboutProduct />
        </div>
      </div>
    </li>
  );
};
