import "./styles.scss";

export default function DropdownMaintenence({
  cars,
  setSelectedCar,
  selectedCar,
}) {
  return (
    <>
      <div className="dropdown">
        <button
          type="button"
          className="bg-white dropdown-toggle p-2 rounded-1 d-flex align-items-center fs-5 fw-medium text-primary border border-secondary border-opacity-25"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
          style={{ width: "250px", height: "65px" }}
        >
          <span className="mgc_car_2_fill fs-2 px-3"></span>
          Mudar veículo
        </button>

        <div
          className="dropdown-menu bg-white w-100"
          style={{ minWidth: "400px" }}
        >
          <div className="fs-5 p-0 ps-3">Seus veículos</div>

          <div className="dropdown-divider"></div>

          {cars ? (
            cars?.map((car, index) => (
              <DropdownItemCar
                key={index}
                item={car}
                setSelectedCar={setSelectedCar}
                selectedCar={selectedCar}
              />
            ))
          ) : (
            <div className="fw-medium px-3 fs-5 text-secondary">
              Nenhum veículo encontrado!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const DropdownItemCar = ({ item, setSelectedCar, selectedCar }) => {
  const handleCheckboxChange = (event) => {
    const { value } = event.target;

    setSelectedCar(value);
  };

  return (
    <div className="dropdown-item">
      <div className="form-check">
        <input
          className="form-check-input"
          name="carSelection"
          type="radio"
          value={item.license_plate}
          id={item.license_plate}
          onChange={handleCheckboxChange}
          checked={selectedCar === item.license_plate}
          defaultChecked={selectedCar === item.license_plate}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {item.license_plate}
        </label>
      </div>
    </div>
  );
};
