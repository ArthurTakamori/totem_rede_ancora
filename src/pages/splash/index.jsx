import Splash from '../../assets/img/splash.png';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className='bg-primary w-100 min-vh-100'>

     
        <div className="container">

            <Link to={'/identify'} className='row'>
              <img src={Splash} alt="Imagem principal" className='img-fluid'/>
            </Link>

        </div>

      </div>
    </>
  );
}
