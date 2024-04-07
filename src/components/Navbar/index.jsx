import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <div className="row">

          <Link to="/home" className="col d-flex justify-content-center">
            <span className="mgc_home_3_fill fs-1 rounded-circle border border-4 border-primary p-4"></span>
          </Link>

          <Link to="/search" className="col d-flex justify-content-center">
            <span className="mgc_search_2_line fs-1 rounded-circle border border-4 border-primary p-4"></span>
          </Link>

          <Link to="/search" className="col d-flex justify-content-center">
            <span className="mgc_car_door_line fs-1 rounded-circle border border-4 border-primary p-4"></span>
          </Link>

          <Link to="/profile" className="col d-flex justify-content-center">
            <span className="mgc_user_3_line fs-1 rounded-circle border border-4 border-primary p-4"></span>
          </Link>

        </div>
      </div>
    </>
  );
}
