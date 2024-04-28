import { formatCurrency } from "../../utils/formatCurrency";
import "./styles.scss";

export default function Product({ products }) {
  return (
    <ul
      className="d-flex flex-column flex-wrap gap-3 flex-grow-1 overflow-x-auto overflow-y-none"
      style={{ height: "58vh", maxHeight: "58vh" }}
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
        height: "48%",
        aspectRatio: "4 / 5",
        width: `calc((58vh/2)*.7)`,
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
      <div className="card-body p-2" style={{ height: "40%" }}>
        <h5 className="card-title mb-0" style={{ fontSize: "2.2vh" }}>
          {name}
        </h5>
        <p className="card-text opacity-75" style={{ fontSize: "1.5vh" }}>
          {subTitle}
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <span className="card-text flex-item flex-grow-1">
            <span
              className="text-primary text-blue-ancora-2 fw-bold me-1"
              style={{ fontSize: "1.8vh" }}
            >
              {formatCurrency(price - discount)}
            </span>
            <del className="text-muted" style={{ fontSize: "1.2vh" }}>
              {formatCurrency(price)}
            </del>
          </span>
          <button className="mgc_add_fill btn btn-secondary bg-white border-2 p-1"></button>
        </div>
      </div>
    </li>
  );
};
