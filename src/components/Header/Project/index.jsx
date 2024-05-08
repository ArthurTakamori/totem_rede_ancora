import FiapLogo from "@/assets/img/fiap_logo_v1.png";
import { Link } from "react-router-dom";

export default function HeaderProject() {

    return (
     <>
        <div className="d-flex justify-content-between align-items-center p-3 px-4">

            <img src={FiapLogo} alt="Logo Rede Ancora" width={'100px'}/>

            <nav>
                <ul className="d-flex gap-4">
                    <li>
                        <Link to="/" className="fw-medium">
                            Página inicial
                        </Link>
                    </li>
                    <li>
                        <Link to="/project" className="fw-medium">
                            Sobre o projeto
                        </Link>
                    </li>
                    <li>
                        <Link to="/totem" className="fw-medium">
                            Totem
                        </Link>
                    </li>
                </ul>
            </nav>

        </div> 
      </>
    );
  }
  