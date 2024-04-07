export default function Login() {
  return (
    <div className="container-1 container-fluid text-center">
      <div
        className="border border-primary mb-5"
        style={{ height: "10%" }}
      ></div>
      <div className="d-grid mx-auto">
        <div>
          <h1>Entrar usando CPF</h1>
          <p className="text-uppercase opacity-50">
            Digite os números no campo abaixo
          </p>
        </div>
        <div style={{ height: "492px" }}>
          <div>
            <h2>277.840.730-89</h2>
            {/* Icon */}
          </div>
          <div
            className="col-6 mx-auto border border-primary"
            style={{ height: "412px" }}
          ></div>
          {/* "Teclado virtual" */}
        </div>
        <div className="d-grid col-5 row-2 mx-auto h-75">
          <button className="btn btn-primary">Continuar</button>
        </div>
      </div>
    </div>
  );
}
