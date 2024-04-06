export default function Login() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
      <div
        className="border border-primary mb-3"
        style={{ width: "100%", height: "10%" }}
      ></div>
      <div className="flex-grow-1 text-center">
        <div>
          <h1>Entrar usando CPF</h1>
          <p>Digite os números no campo abaixo</p>
        </div>
        <div style={{ width: "386px", height: "492px" }}>
          <div>
            <p>277.840.730-89</p>
            {/* Icon */}
          </div>
          <div
            className="border border-primary"
            style={{ width: "100%", height: "412px" }}
          ></div>
          {/* "Teclado virtual" */}
        </div>
        <div>
          <button
            className="btn btn-primary mt-3"
            style={{ width: "100%", height: "103px" }}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
