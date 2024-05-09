import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "@/components/Product";
import SearchBar from "@/components/SearchBar";
import Title from "@/components/Title";
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

  const titleText = `Produtos para ${
    license_plate
      ? `o veiculo placa: ${license_plate}`
      : `a montadora: ${automaker.name}`
  }`;

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
      const {
        pageResult: { data },
      } = await fetchProducts({
        superbusca: superbusca || license_plate ? superbusca : automaker?.name,
        veiculoPlaca: license_plate,
      });

      var products = data.map((response) => {
        const { originalPrice, discountedPrice } = generateProductPrices();
        response.data.originalPrice = originalPrice;
        response.data.discountedPrice = discountedPrice;

        return response;
      })

      setProducts(products);
    }
    if (!automaker.name && !license_plate) {
      navigate("/totem/dashboard");
    }
    fetchData().finally(() => setLoading(false));
  }, [superbusca, license_plate]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <Title page={titleText} />
        <button
          onClick={handleNavigateDashboard}
          className="d-flex p-3 gap-3 align-items-center card-category rounded-1 fs-3 h-75"
        >
          Selecionar outra montadora <span className="mgc_back_fill fs-1" />
        </button>
      </div>

      <SearchBar
        user={user}
        license_plate={license_plate}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

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
