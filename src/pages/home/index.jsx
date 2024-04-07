import HeaderHome from "../../components/Header/Home";
import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";

export default function Home({produtos}) {
  
  return (
    <>
      <div className="container-fluid">

        <HeaderHome />
        <p>Home</p>

        <Navbar />

      </div>
    </>
  );
}
