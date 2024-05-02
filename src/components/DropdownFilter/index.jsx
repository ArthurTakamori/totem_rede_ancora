import "./styles.scss";

export default function DropdownFilter() {


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
          {/* Fazer um filtro semelhante ao do mercado livre */}
        </div>
      </div>

    </div>
  );
}

const DropdownItem = ({ item }) => {

  return (
    <div className="dropdown-item">

      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
        <label class="form-check-label" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>

    </div>
  );
};
