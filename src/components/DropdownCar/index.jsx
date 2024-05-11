import "./styles.scss";
import Keyboard from "../Keyboard";
import { useState } from "react";

export default function DorpdownCar({ cars, setSearchTerm }) {
  return (
    <>
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-car-plate  dropdown-toggle p-2 rounded-1 d-flex align-items-center fs-5 fw-medium text-primary"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
          style={{ width: "250px", height: "65px" }}
        >
          <span className="mgc_car_2_fill fs-2 px-3"></span>
          Placa do carro
        </button>

        <div
          className="dropdown-menu bg-white w-100"
          style={{ minWidth: "400px" }}
        >
          <div className="fs-5 p-0 ps-3">Seus veículos</div>

          <div className="dropdown-divider"></div>

          {cars.length > 0 ? (
            cars?.map((car, index) => (
              <DropdownItemCar
                key={index}
                item={car}
                setSearchTerm={setSearchTerm}
              />
            ))
          ) : (
            <div className="fw-medium px-3 fs-5 text-secondary">
              Nenhum veículo encontrado!
            </div>
          )}

          <div className="dropdown-divider"></div>

          <DropdownItemModalCar />
        </div>
      </div>

      <ModalCar setSearchTerm={setSearchTerm} />
    </>
  );
}

const DropdownItemCar = ({ item, setSearchTerm }) => {
  const handleRadioChange = () => {
    setSearchTerm((prevState) => ({
      ...prevState,
      license_plate: item.license_plate,
    }));
  };

  return (
    <div className="dropdown-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="carSelection"
          value={item.license_plate}
          id={item.license_plate}
          onChange={handleRadioChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {item.license_plate}
        </label>
      </div>
    </div>
  );
};

const DropdownItemModalCar = () => {
  return (
    <div className="d-flex align-items-center justify-content-center px-2">
      <button
        type="button"
        className="fw-medium text-uppercase fs-5 d-flex align-items-center gap-2 btn btn-primary w-100"
        data-bs-toggle="modal"
        data-bs-target="#modalLicenseCar"
      >
        <span className="search-icon mgc_search_2_line fs-3"></span>
        Buscar outro
      </button>
    </div>
  );
};

const ModalCar = ({ setSearchTerm }) => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputFocus = () => {
    setShowKeyboard(true);
  };

  const handleInputBlur = () => {
    setShowKeyboard(false);
  };

  const handleSearchLicenseCar = () => {
    setSearchTerm((prevState) => ({
      ...prevState,
      license_plate: inputValue,
    }));

    setInputValue("");

    const btnCloseModal = document.getElementById("closeModalSearchLicenseCar");
    btnCloseModal.click();
  };

  return (
    <div>
      <div
        className="modal modal-bottom fade"
        id="modalLicenseCar"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-bottom">
          <div
            className="modal-content bg-white overflow-y-auto rounded-0"
            style={{ width: "100vw", height: "80vh" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setInputValue("")}
              ></button>
            </div>

            <div className="modal-body">
              <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-5">
                <span
                  className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                  style={{
                    width: "5rem",
                    height: "5rem",
                  }}
                >
                  <span className="mgc_car_3_line fs-2 icon-white"></span>
                </span>

                <div>
                  <h2 className="fw-bold fs-1 text-center">Placa do veículo</h2>
                  <p className="text-center fs-5">
                    Informe abaixo o número da placa
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: "3rem",
                }}
              >
                <div className="d-flex w-100 align-items-center justify-content-center">
                  <input
                    type="text"
                    className="form-control border border-1 rounded-1 h-100 fs-2 w-50"
                    maxLength={7}
                    aria-label="Placa do"
                    placeholder="Exemplo: BRA2E19"
                    onFocus={handleInputFocus}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                id="closeModalSearchLicenseCar"
                data-bs-dismiss="modal"
                className="btn px-4 py-3 fs-3 w-30 fs-5 fw-medium"
              >
                Cancelar
              </button>

              <button
                type="button"
                className="btn btn-primary px-5 py-3 fs-3 w-30"
                onClick={handleSearchLicenseCar}
              >
                Pesquisar veículo
              </button>
            </div>
          </div>
        </div>
      </div>

      <Keyboard
        showKeyboard={showKeyboard}
        setModelValue={setInputValue}
        handleEnterKeyboard={handleInputBlur}
        maxLength={7}
        modelValue={inputValue}
        uppercase={true}
        preventSpace={true}
      />
    </div>
  );
};
