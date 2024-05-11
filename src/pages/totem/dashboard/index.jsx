import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeaderHome from "@/components/Header/Home";
import Toast from "@/components/Toast";

const Dashboard = ({ user, cartProductsCount, messageAlert }) => {
  return (
    <div className="container-main">
      <HeaderHome user={user} cartProductsCount={cartProductsCount} />

      <Toast message={messageAlert} />
      
      <main>
        <Outlet />
      </main>

      <Navbar />
    </div>
  );
};

export default Dashboard;
