import { Link } from "react-router-dom";
import Title from "../../components/Title";
import DorpdownCar from "../../components/DropdownCar";

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

        <Title page={'Categorias'} />
          
        <main className="p-6 d-flex flex-column align-items-center">

          {categories.map((items, index) => (

            <div key={index} className="row">

              {items.map((category, subIndex) => (

                <Link key={subIndex} className="card-category col rounded-1 d-flex flex-column justify-content-around align-items-center p-4 m-2 fw-medium fs-5 text-center" style={{ minHeight: '250px', width: '240px' }}>

                  <span className={`fs-1 ${category.icon}`}></span>

                  {category.name}

                </Link>


              ))}

            </div>

          ))}

        </main>

      </div>
    </>
  );
}
