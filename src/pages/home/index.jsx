import { Link } from "react-router-dom";
import Title from "../../components/Title";

export default function Home({ setActiveFilter, automakers }) {
  
  const handleAutomaker = (car) => {
    const newAutomaker = {
      id: car.id,
      nome: car.descricao,
    };

    setActiveFilter((prevState) => ({
      ...prevState,
      automaker: newAutomaker,
    }));
  };

  return (
    <>
      <Title page={"Montadoras"} />

      <div
        className="overflow-y-auto px-5"
        style={{
          height: "calc(100% - 12rem)",
        }}
      >
        <div className="row g-3">
          
          {automakers.map((car, index) => (

            <div className="col col-sm-6 col-md-4 col-lg-3" 
            key={index}>

              <Link
                to="/dashboard/search"
                className="w-full card-category rounded-1 d-flex flex-column justify-content-around align-items-center p-4 fw-medium fs-5 text-center"
                style={{ minHeight: "250px" }}
                onClick={() => handleAutomaker(car)}
              >
                <span
                  className="fs-6 d-inline-block rounded-circle bg-primary text-white text-center d-flex align-items-center justify-content-center border border-primary"
                  style={{
                    height: "2rem",
                    width: "2rem",
                  }}
                >
                  {index + 1}
                </span>

                {car.descricao}

              </Link>

            </div>

          ))}
        </div>
      </div>
    </>
  );
}
