import "./styles.scss";

export default function DropdownFilter({ filterOption }) {


  return (
    <div className="dropdown h-100">

      <button
        type="button"
        className="mgc_filter_line btn dropdown-toggle border border-1 rounded-1 py-0 custom"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      ></button>

      <div className="dropdown-menu bg-white overflow-y-auto vh-10" style={{ minWidth: '400px', maxHeight: '50vh' }}>
        <div>

          {/* Fazer um filtro semelhante ao do mercado livre */}

          <div className="accordion " id="accordionPanelsStayOpenExample">

            <div className="accordion-item dropdown-item p-0">
              <h2 className="accordion-header">
                <button className="accordion-button fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Linha #1
                </button>
              </h2>

              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                {filterOption.linha.map(linha =>
                  <button key={linha} className="accordion-body w-100" onClick={() => console.log(linha)}>{linha}</button>
                )}
              </div>

            </div>

            <div className="accordion-item dropdown-item p-0">
              <h2 className="accordion-header">
                <button className="accordion-button fs-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Marca #2
                </button>
              </h2>


              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">

                {filterOption.marca.map(marca => 
                <div key={marca} className="">
                  <button className="accordion-body w-100" onClick={() => console.log(marca)}>{marca}</button>
                </div>
                )}

              </div>


            </div>


          </div>



        </div>
      </div>

    </div>
  );
}

const DropdownItem = ({ item }) => {

  return (
    <div className="dropdown-item">

      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
        <label className="form-check-label" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>

    </div>
  );
};
