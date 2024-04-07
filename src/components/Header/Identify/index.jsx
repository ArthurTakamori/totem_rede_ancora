import Logo from '../../../assets/img/logo_v1.png';
import { Link } from 'react-router-dom';

export default function HeaderIdentify(rota) {

  return (
    <>
      <div className="d-flex align-items-center justify-content-between m-4">
        <img src={Logo} alt='Logo Rede Ancora' className='brand'/>
        
        <Link to={rota.link} className='border border-primary rounded-1 bg-white fw-semibold p-3 fs-5' style={{width: '200px'}}>
          Voltar
        </Link>

      </div>
    </>
  );
}
