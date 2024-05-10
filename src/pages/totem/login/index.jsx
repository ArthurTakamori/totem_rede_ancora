import { useEffect, useState } from "react";
import HeaderIdentify from "@/components/Header/Identify";
import { users } from "@/data/users.js";
import { hideCPF, maskCpf } from "@/utils/maskCpf";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [cpf, setCpf] = useState("");
  const [show, setShow] = useState(true);
  const [validCpf, setValidCpf] = useState(true);

  const navigate = useNavigate();

  const BACKSPACE = "backspace";

  const keyboard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [null, 0, BACKSPACE],
  ];

  let formatedCpf = maskCpf(cpf);
  let notShow = hideCPF(cpf);

  const handlePhysicalKeyboardInput = (event) => {
    const { key } = event;
    if (!isNaN(key) && cpf.length < 11) setCpf(cpf + key);
    else if (key === "Backspace") setCpf(cpf.slice(0, -1));
  };

  const handleVirtualKeyboardInput = (event) => {
    if (cpf.length >= 11) return;

    const { innerText } = event.target;
    setCpf((old) => old + innerText);
  };

  const handleVirtualKeyboardDelete = () => {
    setCpf(cpf.slice(0, -1));
  };

  const fetchUser = (cpf) => {
    const findUser = users.find((user) => user.cpf == cpf);

    const newUser = {
      name: "",
      email: "",
      phone: "",
      cpf: cpf,
      cars: [
        {
          license_plate: "",
        },
      ],
    };

    const user = findUser ?? newUser;

    console.log(user);

    return user;
  };

  const handleSubmitLogin = async () => {
    if (cpf.length !== 11) {
      setValidCpf(false);
      setTimeout(() => setValidCpf(true), 3000);
      return;
    }

    setUser(fetchUser(cpf));

    navigate("/totem/dashboard");
  };

  useEffect(() => {
    window.addEventListener("keydown", handlePhysicalKeyboardInput);

    return () => {
      window.removeEventListener("keydown", handlePhysicalKeyboardInput);
    };
  }, [cpf]);

  return (
    <div className="container-1 container-fluid text-center">
      <HeaderIdentify link="/totem/identify" />

      <div className="d-grid mx-auto gap-4">
        <div>
          <h1>Entrar usando CPF</h1>
          <p className="text-uppercase opacity-50">
            Digite os números no campo abaixo
          </p>
        </div>

        <div className="d-flex align-items-center flex-column w-100 gap-2 mb-4">
          <div
            className={`d-flex align-items-center justify-content-between w-50 p-1`}
          >
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
              {keyboard.map((items, index) => (
                <div key={index} className="row align-items-center h-25">
                  {items.map((key, subIndex) => (
                    <div
                      key={subIndex}
                      className="col fs-2 fw-semibold"
                      style={{ cursor: "pointer" }}
                      onClick={
                        key === BACKSPACE
                          ? handleVirtualKeyboardDelete
                          : handleVirtualKeyboardInput
                      }
                    >
                      {(() => {
                        if (key === BACKSPACE) {
                          return (
                            <span className="mgc_delete_back_fill text-center rounded-2 d-flex align-items-center justify-content-center p-2 w-100 fs-3"></span>
                          );
                        }

                        return key;
                      })()}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {!validCpf && (
          <span className="fs-3">Por favor, insira um CPF válido.</span>
        )}

        <div
          className="d-grid col-5 row-2 mx-auto"
          style={{ height: "3.5rem" }}
        >
          <button
            type="button"
            onClick={handleSubmitLogin}
            className="btn btn-primary"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
