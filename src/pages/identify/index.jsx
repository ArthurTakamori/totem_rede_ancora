import { Link } from "react-router-dom";
import HeaderIdentify from "../../components/Header/Identify";

export default function Identify() {
  return (
    <div className="container-identify container-fluid text-center">
      <HeaderIdentify link="/"/>

      <section className="d-flex align-items-center justify-content-around flex-column h-50">

          <h2 className="fs-2 fw-semibold">
            Escolha como se identificar
          </h2>

          <div className="container mx-auto w-50">

            <div className="row">

              <Link to="/login" className="col rounded-1 bg-primary d-flex flex-column justify-content-around p-4 bg-white border border-primary mx-2" style={{ height: "250px" }}>
                <span className="mgc_badge_line fs-1 p-2"></span>
                <p className="fw-semibold">Entrar usando CPF</p>

              </Link>

              <Link to="/home" className="col rounded-1 d-flex flex-column justify-content-around p-4 bg-white border border-primary mx-2"
              style={{ height: "250px" }}>
                <span className="mgc_forward_2_line fs-1 p-2"></span>
                <p className="fw-semibold">Pular etapa</p>
              </Link>
            </div>

          </div>
        
      </section>

      <div className="d-flex w-100 align-items-center justify-content-center" style={{ marginBottom: "3rem" }}>
        <p className="fs-6 w-75">Utilizamos essa informação exclusivamente para identificação durante as compras, garantindo uma experiência tranquila e personalizada para você. Contamos com medidas de proteção de dados.</p>
      </div>
    </div>
  );
}