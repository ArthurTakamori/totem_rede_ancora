import HeaderHome from "../../components/Header/Home";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";

export default function Maintenance() {
    return (
        <>
            <div className="container-main">

                <HeaderHome />
                <Title page={'Meu veículo'} />

                <main>
                </main>

                <Navbar />

            </div>
        </>
    );
}
