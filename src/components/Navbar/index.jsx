import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { 
      to: "/home", 
      icon_able: "mgc_home_3_fill",
      icon_disable: "mgc_home_3_line" 
    },
    { 
      to: "/search", 
      icon_able: "mgc_search_2_line",
      icon_disable: "mgc_search_2_line"
    },
    { 
      to: "/search", 
      icon_able: "mgc_car_door_line", 
      icon_disable: "mgc_car_door_line" 
    },
    { 
      to: "/profile", 
      icon_able: "mgc_user_3_fill",
      icon_disable: "mgc_user_3_line" 
    }
  ];

  return (
    <div className="p-4" style={{
      height: '135px',
      marginTop: '45px'
    }}>
      <div className="row">

        {navLinks.map((link, index) => (
          
          <Link key={index} to={link.to} className="col d-flex justify-content-center position-relative">

            <div className={`rounded-circle p-3 border border-4 d-flex justify-content-center ${location.pathname === link.to ? 'active-link border-primary' : ''}`}>

              <span className={
                `fs-3 
                ${location.pathname === link.to ? 
                    `active-icon ${link.icon_able}` : 
                    `inactive-icon ${link.icon_disable}`
                }`}></span>

            </div>

            <span className={`${location.pathname === link.to ? 'd-block' : 'd-none'} position-absolute rounded-circle bg-primary p-1`} style={{width: '.775rem', height: '.775rem', bottom: '-20px'}}></span>

          </Link>

        ))}

      </div>
    </div>
  );
}
