import { Link } from "react-router-dom";
import HeaderHome from "../../components/Header/Home";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";

export default function Home() {

  const categories = [
    [
      {
        name: 'Pneus',
        icon: 'mgc_tyre_fill',
      },
      {
        name: 'Autopeças',
        icon: 'mgc_settings_3_fill',
      },
      {
        name: 'Elétrica',
        icon: 'mgc_engine_fill',
      },
    ],
    [
      {
        name: 'Som e vídeo',
        icon: 'mgc_volume_fill',
      },
      {
        name: 'Acessórios Externos',
        icon: 'mgc_car_3_fill',
      },
      {
        name: 'Acessórios Internos',
        icon: 'mgc_steering_wheel_fill',
      },
    ],
    [
      {
        name: 'Farol e Iluminação',
        icon: 'mgc_hight_beam_headlights_fill',
      },
      {
        name: 'Alarme e segurança',
        icon: 'mgc_lock_fill',
      },
      {
        name: 'Librificantes e aditivos ',
        icon: 'mgc_oil_fill',
      },
    ]
  ];

  return (
    <>
      <div className="container-main">

        <HeaderHome />

        <div className="d-flex justify-content-between align-items-center">

          <Title page={'Categorias'} />

          <div class="dropdown">
            <button class="dropdown-car-plate  dropdown-toggle p-2 rounded-1 d-flex align-items-center fs-5 fw-medium text-primary" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"
            style={{width: '230px', height: '65px'}}>

              <span className="mgc_car_2_fill fs-2 px-3"></span>
              Placa do carro
            </button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><button class="dropdown-item" type="button">Action</button></li>
            </ul>

          </div>
        </div>

        <main className="p-6 d-flex flex-column align-items-center">

          {categories.map((items, index) => (

            <div className="row">

              {items.map((category, index) => (

                <Link className="card-category col rounded-1 d-flex flex-column justify-content-around align-items-center p-4 m-2 fw-medium fs-5 text-center" style={{ minHeight: '250px', width: '240px' }}>

                  <span className={`fs-1 ${category.icon}`}></span>

                  {category.name}

                </Link>


              ))}

            </div>

          ))}

        </main>

        <Navbar />

      </div>
    </>
  );
}
