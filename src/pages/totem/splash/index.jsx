import Splash from '@/assets/img/splash.png';
import { Link, useNavigate } from "react-router-dom";


export default function Home() {

  const navigate = useNavigate()

  const redirect = () => {
    navigate('/totem/identify')
  }
  return (
    <>
      <div onClick={redirect} className='container-fluid bg-primary' style={{ 
        minHeight: '100vh',
        background: `no-repeat url(${Splash}) fixed center`,
        backgroundSize: '100% 100vh',
        cursor: 'pointer'
           }}>


      </div>
    </>
  );
}
