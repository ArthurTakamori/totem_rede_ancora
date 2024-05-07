import { Link } from "react-router-dom";
import Title from "../../components/Title";

export default function Home({ setActiveFilter, categories }) {
  
  const handleFamily = (family) => {
    const newFamilyObject = {
      id: family.id,
      nome: family.descricao,
      subfamily: family.subFamilias,
    };

    setActiveFilter((prevState) => ({
      ...prevState,
      family: newFamilyObject,
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
        <div className="row justify-content-center gap-3 no-gutters pb-5">
          
          {categories.map((family, index) => (
            <Link
              to="/dashboard/search"
              key={index}
              className="card-category col-md-4 col-lg-3 rounded-1 d-flex flex-column justify-content-around align-items-center p-4 fw-medium fs-5 text-center"
              style={{ minHeight: "250px" }}
              onClick={() => handleFamily(family)}
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
              {family.descricao}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
