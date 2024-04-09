import { useEffect, useState } from "react";
import HeaderIdentify from "../../components/Header/Identify";
import { hideCPF, maskCpf } from "../../utils/maskCpf";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  let formatedCpf = maskCpf(cpf);
  let notShow = hideCPF(cpf);

  const handlePhysicalKeyboardInput = (event) => {
    const { key } = event;
    console.log(key);
    if (!isNaN(key) && cpf.length < 11) setCpf(cpf + key);
    else if (key === "Backspace") setCpf(cpf.slice(0, -1));
  };

  const handleVirtualKeyboardInput = (event) => {
    console.log(cpf.length);
    if (cpf.length >= 11) return;

    const { innerText } = event.target;
    setCpf((old) => old + innerText);
  };

  const handleVirtualKeyboardDelete = () => {
    setCpf(cpf.slice(0, -1));
  };

  const handleLogin = () => {
    cpf.length === 11 && navigate("/home");
  };

  useEffect(() => {
    window.addEventListener("keydown", handlePhysicalKeyboardInput);

    return () => {
      window.removeEventListener("keydown", handlePhysicalKeyboardInput);
    };
  }, [cpf]);

  return (
    <div className="container-1 container-fluid text-center">
      <HeaderIdentify link="/identify" />

      <div className="d-grid mx-auto gap-4">
        <div>
          <h1>Entrar usando CPF</h1>
          <p className="text-uppercase opacity-50">
            Digite os números no campo abaixo
          </p>
        </div>

        <div className="d-flex align-items-center flex-column w-100 gap-2 mb-4">
          <div className="d-flex align-items-center justify-content-between w-50 p-1">
            <h3 id="cpfDisplay" className="user-select-none">
              {show ? formatedCpf : notShow}
            </h3>
            <button type="button" onClick={() => setShow(!show)}>
              <span
                className={`${
                  show ? "mgc_eye_2_line" : "mgc_eye_close_line"
                } fs-1`}
              />
            </button>
          </div>

          <div
            className="col-6 mx-auto border border-primary"
            style={{ height: "37vh" }}
          >
            <div className="h-100 bg-white">
              <div className="row align-items-center h-25">
                <div
                  className="col fs-2 fw-semibold"
                  onClick={handleVirtualKeyboardInput}
                >
                  1
                </div>
                <div
                  className="col fs-2 fw-semibold"
                  onClick={handleVirtualKeyboardInput}
                >
                  2
                </div>
                <div
                  className="col fs-2 fw-semibold"
                  onClick={handleVirtualKeyboardInput}
                >
                  3
                </div>
              </div>
              <div className="row align-items-center h-25">
                <div
                  className="col fs-2 fw-semibold"
                  onClick={handleVirtualKeyboardInput}
                >
                  4
                </div>
                <div
                  className="col fs-2 fw-semibold"
                  onClick={handleVirtualKeyboardInput}
                >
                  5
                </div>
                <div
                  className="col fs-2 fw-semibold"
                  onClick={handleVirtualKeyboardInput}
                >
                  6
                </div>
              </div>
              <div className="row align-items-center h-25">
                <div
                  className="col fs-2 fw-semibold"
                  onClick={handleVirtualKeyboardInput}
                >
                  7
                </div>
                <div
                  className="col fs-2 fw-semibold"
                  onClick={handleVirtualKeyboardInput}
                >
                  8
                </div>
                <div
                  className="col fs-2 fw-semibold"
                  onClick={handleVirtualKeyboardInput}
                >
                  9
                </div>
              </div>
              <div className="row align-items-center h-25">
                <div className="col fs-2 fw-semibold"></div>
                <div
                  className="col fs-2 fw-semibold"
                  onClick={handleVirtualKeyboardInput}
                >
                  0
                </div>
                <div
                  className="col fs-2 fw-semibold mgc_delete_back_line"
                  onClick={handleVirtualKeyboardDelete}
                />
              </div>
            </div>
          </div>
          {/* "Teclado virtual" */}
        </div>
        <div
          className="d-grid col-5 row-2 mx-auto"
          style={{ height: "3.5rem" }}
        >
          <button onClick={handleLogin} className="btn btn-primary">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
