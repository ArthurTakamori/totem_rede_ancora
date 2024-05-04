import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HeaderHome from "../../components/Header/Home";

const Dashboard = () => {
  return (
    <div className="container-main">
      <HeaderHome />

      <main>
        <Outlet />
      </main>

      <Navbar />
    </div>
  );
};

export default Dashboard;
