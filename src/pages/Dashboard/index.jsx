import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HeaderHome from "../../components/Header/Home";

const Dashboard = () => {
  return (
    <div className="container-main">
      <HeaderHome />

      <main className="p-6 d-flex flex-column align-items-center">
        <Outlet />
      </main>

      <Navbar />
    </div>
  );
};

export default Dashboard;
