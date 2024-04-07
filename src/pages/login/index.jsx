import HeaderIdentify from "../../components/Header/Identify";

export default function Login() {
  return (
    <div className="container-1 container-fluid text-center">
      <HeaderIdentify link="/identify"/>
 
      <div className="d-grid mx-auto">
        <div>
          <h1>Entrar usando CPF</h1>
          <p className="text-uppercase opacity-50">
            Digite os números no campo abaixo
          </p>
        </div>

        <div className="d-flex align-items-center flex-column w-100 mt-4" style={{ height: "492px" }}>

          <div className="d-flex align-items-center justify-content-between mb-4 w-50 p-1">
            <h2>277.840.730-89</h2>
            
            <button type="button">
              <span className="mgc_eye_2_line fs-1"></span>
            </button>
          </div>

          <div
            className="col-6 mx-auto border border-primary"
            style={{ height: "412px" }}
          >

            <div className="h-100 bg-white">
              <div class="row align-items-center" style={{height: '33.333%'}}>
                <div className="col fs-2 fw-semibold">1</div>
                <div className="col fs-2 fw-semibold">2</div>
                <div className="col fs-2 fw-semibold">3</div>
              </div>
              <div class="row align-items-center" style={{height: '33.333%'}}>
                <div className="col fs-2 fw-semibold">4</div>
                <div className="col fs-2 fw-semibold">5</div>
                <div className="col fs-2 fw-semibold">6</div>
              </div>
              <div class="row align-items-center" style={{height: '33.333%'}}>
                <div className="col fs-2 fw-semibold">7</div>
                <div className="col fs-2 fw-semibold">8</div>
                <div className="col fs-2 fw-semibold">9</div>
              </div>
            </div>
          </div>
          {/* "Teclado virtual" */}
        </div>
        <div className="d-grid col-5 row-2 mx-auto h-75">
          <button className="btn btn-primary">Continuar</button>
        </div>
      </div>
    </div>
  );
}
