import { formatCurrency } from "../../utils/formatCurrency";
import "./styles.scss";

export default function Product({ products }) {
  return (
    <div className="container-fluid">
      <ul className="row gap-3 v-100">
        {products?.map((item, index) => (
          <div className="col-md-5" key={index}>
            <Card item={item} />
          </div>
        ))}
      </ul>
    </div>
  );
}

const Card = ({ item }) => {
  const { img, name, subTitle, price, discount } = item;
  return (
    <li className="card rounded-4 bg-white p-2" style={{ height: "auto" }}>
      <div
        className="card-image-container d-flex justify-content-center align-items-center rounded-4 bg-img"
        style={{ height: "15rem" }}
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
        <h5 className="card-title mb-0">{name}</h5>
        <p className="card-text opacity-75">{subTitle}</p>
        <div className="row align-items-center justify-content-between">
          <span className="card-text col-auto">
            <span className="text-primary text-blue-ancora-2 fw-bold fs-3 me-2">
              {formatCurrency(price - discount)}
            </span>
            <del className="text-muted">{formatCurrency(price)}</del>
          </span>
          <button className="mgc_add_fill btn btn-secondary col-auto bg-white border-2"></button>
        </div>
      </div>
    </li>
  );
};
