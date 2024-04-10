import Logo from '../../../assets/img/logo_v1.png';
import { Link } from 'react-router-dom';

export default function HeaderHome({page}) {

  return (
    <>
      <div>

        <header className="d-flex align-items-center justify-content-between m-4">

          <div className="d-flex align-items-center">
            <img src={Logo} alt='Logo Rede Ancora' className='brand'/>

            <div className="d-flex flex-column ms-4">
              <h1 className="fs-2">Olá, Roberto Alves</h1>
              <div>
                <span className="mgc_location_fill fs-4"></span>
                <p className="d-inline ms-2 fs-4">Rede Ancora - SP</p>
              </div>
            </div>

          </div>

          <div className="position-relative">
            <Link to="/cart" type="button" className="border border-primary p-4 rounded-circle d-flex align-items-center justify-content-center">
              <span className="mgc_shopping_cart_1_line fs-1"></span>
            </Link>
          </div>

        </header>

        <h1 className="fw-medium fs-2 p-4">{page}</h1>
      </div>
    </>
  );
}
