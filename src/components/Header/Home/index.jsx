import Logo from "@/assets/img/logo_v1.png";
import { Link } from "react-router-dom";

export default function HeaderHome({ user, cartProductsCount }) {

  const countProducts =
    parseInt(cartProductsCount) > 99 ? "99+" : parseInt(cartProductsCount);

  return (
    <>
      <header className="d-flex align-items-center justify-content-between m-4">
        <div className="d-flex align-items-center">
          <img src={Logo} alt="Logo Rede Ancora" className="brand" />

          <div className="d-flex flex-column ms-4">
            <h1 className="fs-3">
              Olá, {user?.name ? `${`${user.name}`}` : "Motorista"}
            </h1>
            <div>
              <span className="mgc_location_fill fs-5"></span>
              <p className="d-inline ms-2 fs-5">Rede Ancora - SP</p>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <Link
            to="/totem/dashboard/cart"
            type="button"
            className="border border-2 border-primary p-3 rounded-circle d-flex align-items-center justify-content-center"
          >
            <span className="mgc_shopping_cart_1_line fs-2"></span>
          </Link>

          <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger fs-5" style={{
            top: '10px',
          }}>
            {countProducts}
            <span className="visually-hidden">Total produtos carrinho de compras</span>
          </span>
        </div>
      </header>
    </>
  );
}
