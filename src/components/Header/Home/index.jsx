import Logo from '../../../assets/img/logo_v1.png';
import { Link } from 'react-router-dom';
import { getUser } from '../../../state/userState';

export default function HeaderHome() {

  const user = getUser()

  return (
    <>
      <header className="d-flex align-items-center justify-content-between m-4">

        <div className="d-flex align-items-center">
          <img src={Logo} alt='Logo Rede Ancora' className='brand'/>

          <div className="d-flex flex-column ms-4">
            <h1 className="fs-3">Olá, { user.name }</h1>
            <div>
              <span className="mgc_location_fill fs-5"></span>
              <p className="d-inline ms-2 fs-5">Rede Ancora - SP</p>
            </div>
          </div>

        </div>

        <div className="position-relative">
          <Link to="/cart" type="button" className="border border-2 border-primary p-3 rounded-circle d-flex align-items-center justify-content-center">
            <span className="mgc_shopping_cart_1_line fs-2"></span>
          </Link>
        </div>

      </header>
    </>
  );
}
