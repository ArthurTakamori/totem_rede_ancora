import { formatCurrency } from "../../utils/formatCurrency";
import "./styles.scss";

export default function Product({ products }) {
  return (
    <div className="row flex-fill">
      <ul className="card-group gap-3">
        {products?.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

const Card = ({ item }) => {
  const { img, name, subTitle, price, discount } = item;
  return (
    <li className="card text-bg-light" style={{ height: "50%" }}>
      <div
        className="card-image-container d-flex justify-content-center align-items-center"
        style={{ height: "200px" }}
      >
        <img
          src={img}
          className="card-img-top"
          alt={name}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            width: "auto",
            height: "150px",
          }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{subTitle}</p>
        <div className="row align-items-center justify-content-between">
          <span className="card-text col-auto">
            <span className="text-primary text-blue-ancora-2 fw-bold fs-5">
              {formatCurrency(price - discount)}
            </span>{" "}
            <del className="text-muted">{formatCurrency(price)}</del>
          </span>
          <button className="mgc_add_fill btn btn-secondary col-auto"></button>
        </div>
      </div>
    </li>
  );
};
