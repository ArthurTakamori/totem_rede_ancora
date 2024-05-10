import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeaderHome from "@/components/Header/Home";

const Dashboard = ({ user, cartProductsCount }) => {
  return (
    <div className="container-main">
      <HeaderHome user={user} cartProductsCount={cartProductsCount} />

      <main>
        <Outlet />
      </main>

      <Navbar />
    </div>
  );
};

export default Dashboard;
