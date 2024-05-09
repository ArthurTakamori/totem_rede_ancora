import "./styles.scss";

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

      <ModalCar />
    </>
  );
}

const DropdownItemCar = ({ item, setSearchTerm }) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const veiculoPlaca = checked ? value : "";

    setSearchTerm((prevState) => ({
      ...prevState,
      license_plate: veiculoPlaca,
      // superbusca: "",
    }));
  };

  return (
    <div className="dropdown-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={item.license_plate}
          id="flexCheckDefault"
          onChange={handleCheckboxChange}
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
        data-bs-target="#exampleModal"
        onClick={(event) => console.log(event.target)}
      >
        <span className="search-icon mgc_search_2_line fs-3"></span>
        Buscar veículo
      </button>
    </div>
  );
};

const ModalCar = () => {
  return (
    <div
      className="modal modal-bottom fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-bottom">
        <div
          className="modal-content bg-white overflow-y-auto rounded-0"
          style={{ width: "100vw", height: "75vh" }}
        >
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
