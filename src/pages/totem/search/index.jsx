import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "@/components/Product";
import SearchBar from "@/components/SearchBar";
import fetchProducts from "@/utils/api/fetchProducts";
import generateProductPrices from "@/utils/generateProductPrices";

export default function Search({
  searchTerm,
  setSearchTerm,
  user,
  loading,
  setLoading,
  setCartProducts,
}) {
  const { automaker, license_plate, superbusca } = searchTerm;
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const filteredProducts = products.filter((product) => {
    return product.data.aplicacoes.some(
      (vehicle) =>
        vehicle.montadora.toUpperCase() == automaker?.name?.toUpperCase()
    );
  });

  const handleNavigateDashboard = () => {
    setSearchTerm((prevState) => ({
      ...prevState,
      superbusca: "",
      license_plate: "",
    }));
    navigate("/totem/dashboard");
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      
      const { pageResult: { data }, vehicle } = await fetchProducts({
        superbusca: superbusca || license_plate ? superbusca : automaker?.name,
        veiculoPlaca: license_plate,
      });

      console.log(vehicle)

      // montadora

      var products = data.map((response) => {
        const { originalPrice, discountedPrice } = generateProductPrices();
        response.data.originalPrice = originalPrice;
        response.data.discountedPrice = discountedPrice;

        return response;
      })

      setProducts(products);

      if(license_plate) {
        setSearchTerm((content) => ({
          ...content,
          automaker: {
            id: "",
            name: vehicle?.montadora,
          }
        }))
      }
    }

    if (!automaker.name && !license_plate) {
      navigate("/totem/dashboard");
    }

    fetchData().finally(() => setLoading(false));
  }, [superbusca, license_plate]);

  return (
    <>
      <div className="d-flex flex-column align-items-start gap-4 px-4 mt-4">

        <button onClick={handleNavigateDashboard} className="fw-medium text-primary fs-4 d-flex align-items-center justify-content-center gap-2">
          <span className="mgc_arrow_left_line fs-2"></span>
          Voltar
        </button>

        <h1 className="fw-medium fs-1">
          Explorar produtos
        </h1>

        <div className="w-100">

          <SearchBar
            user={user}
            license_plate={license_plate}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

        </div>
        
      </div>

      <div className="d-flex gap-2 align-items-center px-4">

        <span className="bagde-search">
          <span className="mgc_settings_3_line fs-4"></span>
          Montadora: {automaker.name}
        </span>
        <span className="bagde-search">
          <span className="mgc_car_3_line fs-4"></span>
          Veículo: {license_plate ? license_plate : '--'}
        </span>
      
      </div>

      <span className="px-4 mt-5 d-block fs-3 fw-medium opacity-50">
        Resultados
      </span>

      <div
        className="overflow-y-auto"
        style={{
          height: "calc(100% - 20rem)",
        }}
      >
        {loading ? (
          <div className="h-100 d-flex flex-column gap-5 align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: '4vw', height: '4vw', borderWidth: '0.475rem'}} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <small className="fs-5 fw-medium opacity-75">Preparando seu pit stop virtual...</small>
          </div>
        ) : (
          <Product products={license_plate ? products : filteredProducts}
                   setCartProducts={setCartProducts}  />
        )}
      </div>
    </>
  );
}
