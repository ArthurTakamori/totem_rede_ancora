import { Link } from "react-router-dom";
import Title from "@/components/Title";
import { useEffect, useState } from "react";
import BannerImage from "@/assets/img/banner.png";
import generateAtoZ from "@/utils/generateAtoZ";
import { DropdownItemModalCar, ModalCar } from "@/components/ModalLicenseCar";

export default function HomeTotem({ setSearchTerm, automakers }) {

  const [ filterSelected, setFilterSelected ] = useState(null);
  const [ automakersFiltered, setAutomakersFiltered ] = useState(null);

  const btnModalLicenseCar = document.getElementById("btnOpenModalLicenseCar");

  const handleAutomaker = (car) => {
    const newAutomaker = {
      id: car.id,
      name: car.descricao,
    };

    setSearchTerm((prevState) => ({
      ...prevState,
      automaker: newAutomaker,
    }));
  };

  const handleClickLetterFilter = (letter) => {
    const data = automakers.filter(auto => auto.descricao.charAt(0).toUpperCase() === letter.toUpperCase());
    
    setFilterSelected(letter);
    setAutomakersFiltered(data)
  }

  const cleanFilters = () => {
    setFilterSelected(null);
  }

  const automakersData = filterSelected ? automakersFiltered : automakers;

  useEffect(() => {
    setSearchTerm((prevState) => ({ ...prevState, superbusca: "" }));
  }, []);

  return (
    <>
      <div
        className="overflow-y-auto px-5"
        style={{
          height: "calc(100% - 4rem)",
        }}
      >
        <div
          className="rounded-2 mt-4 bg-white border-0 overflow-hidden position-relative"
          style={{
            height: "32%",
            cursor: "pointer",
          }}
          onClick={() => btnModalLicenseCar.click()}
        >
          <img
            src={BannerImage}
            alt="Logo Rede Ancora"
            className="position-absolute top-0 h-100 w-100"
          />
        </div>

        <a
          href="https://jornaldocarro.estadao.com.br/carros/nova-lei-das-placas-entra-em-vigor-e-gera-fake-news-na-inernet/"
          target="_blank"
          className="fs-6 fw-medium opacity-50"
        >
          Crédito imagem placa do carro: Jornal do carro
        </a>

        <div className="mt-4">
          <Title page={"Montadoras disponíveis"} />
        </div>

        <div className="mx-4 d-flex flex-column align-items-start">
          
          <div className="row flex-grow-1 mb-4 border rounded-1 border-opacity-25 bg-white w-100">
            {generateAtoZ().map((letter, index) => {
              return <div className="col-auto flex-grow-1">
                  <button type="button" class={`d-block w-100 p-3 fw-medium fs-3 text-primary ${filterSelected === letter ? 'fw-bold text-white bg-primary' : ''}`}
                onClick={() => handleClickLetterFilter(letter)}>
                  {letter}
                </button>
              </div>
            })}
          </div>

          {(() => {
            if (filterSelected) {
              return (

                <button type="button" className="mb-4"
                        onClick={() => cleanFilters()}>
                  <span className="bagde-search">
                    <span className="mgc_close_fill fs-4"></span>
                    Limpar filtros
                  </span>
                </button>
              );
            }
          })()}
        </div>

        <div
          className="row g-3 px-4"
          style={{
            marginBottom: "8rem",
          }}
        >
          {automakersData.map((car, index) => (
            <div className="col col-sm-6 col-md-4 col-lg-3" key={index}>
              <Link
                to="/totem/dashboard/search"
                className="w-full card-category rounded-1 d-flex flex-column justify-content-around align-items-center p-4 fw-medium fs-5 text-center"
                style={{ minHeight: "220px" }}
                onClick={() => handleAutomaker(car)}
              >
                <span
                  className="fs-6 d-inline-block rounded-circle bg-primary text-white text-center d-flex align-items-center justify-content-center border border-primary"
                  style={{
                    height: "2rem",
                    width: "2rem",
                  }}
                >
                  {index + 1}
                </span>

                {car.descricao}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="d-hidden">
        <DropdownItemModalCar />
      </div>

      <ModalCar setSearchTerm={setSearchTerm} />
    </>
  );
}
