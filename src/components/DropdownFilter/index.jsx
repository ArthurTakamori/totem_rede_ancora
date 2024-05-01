import "./styles.scss";

export default function DropdownFilter() {
  // const placa = true;s
  return (
    <div className="dropdown h-100">
      <button
        type="button"
        className="mgc_filter_line btn dropdown-toggle border border-1 rounded-1 py-0 custom"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      ></button>

      <div className="dropdown-menu p-4 bg-white">
        <div className="mb-3">
          <div className="form-check dropdown-item">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              // checked={placa}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Placa do veiculo
            </label>
          </div>
          <div className="form-check dropdown-item">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="producerCheck"
            />
            <label className="form-check-label" htmlFor="producerCheck">
              Fabricante
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
