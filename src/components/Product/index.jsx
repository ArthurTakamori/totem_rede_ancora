import { formatCurrency } from "../../utils/formatCurrency";
import AboutProduct from "../AboutProduct";
import "./styles.scss";

export default function Product({ products }) {
  return (
    <ul
      className="d-flex flex-column flex-wrap gap-4 flex-grow-1 align-items-start overflow-x-auto overflow-y-none p-0"
      style={{ height: "50vh" }}
    >
      {products?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </ul>
  );
}

const Card = ({ item }) => {
  const { img, name, subTitle, price, discount } = item;
  return (
    <li
      className="card rounded-4 bg-white p-1 border-0"
      style={{
        height: "46%",
        aspectRatio: "5 / 5",
      }}
    >
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
      <div
        className="card-body p-2 d-flex flex-column justify-content-around"
        style={{ height: "40%" }}
      >
        <div>
          <h5 className="card-title mb-0 fs-5" style={{ fontWeight: "400" }}>
            {name}
          </h5>
          <p
            className="card-text opacity-75"
            style={{
              fontWeight: "300",
              marginTop: "-0.3rem",
              fontSize: ".7rem",
            }}
          >
            {subTitle}
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <span className="card-text flex-item flex-grow-1">
            <span className="text-primary text-blue-ancora-2 fw-bold me-1 fs-5">
              {formatCurrency(price - discount)}
            </span>
            <del className="text-muted" style={{ fontSize: ".7rem" }}>
              {formatCurrency(price)}
            </del>
          </span>
          <AboutProduct />
        </div>
      </div>
    </li>
  );
};
