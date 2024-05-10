import Title from "@/components/Title";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaintenanceProducts from "@/components/Product/MaintenanceProducts";
import fetchProducts from "@/utils/api/fetchProducts";
import generateProductPrices from "@/utils/generateProductPrices";
import generateReplacementDate from "@/utils/generateReplacementDate";

export default function Maintenance({
  user,
  setCartProducts,
  loading,
  setLoading,
}) {
  const [maintenanceProducts, setMaintenanceProducts] = useState([]);
  const [vehicle, setVehicle] = useState({});
  const [requestedCar, setRequestedCar] = useState(
    0
    // valor de index, ou nome da placa, para incluir na busca.
    // state para armazenar qual carro o cliente quer ver.
    // por padrão o primeiro do array cars (index 0).
    // pode ser alterado por um botao radio.
  );

  const { cars } = user;

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const {
        pageResult: { data },
        vehicle,
      } = await fetchProducts({
        itensPorPagina: 5,
        veiculoPlaca: cars[requestedCar].license_plate,
      });

      console.log(vehicle);
      console.log(data);

      let products = data.map((response) => {
        const { originalPrice, discountedPrice } = generateProductPrices();
        response.data.originalPrice = originalPrice;
        response.data.discountedPrice = discountedPrice;

        response.data.lastReplacement = generateReplacementDate(false);
        response.data.nextReplacement = generateReplacementDate(true);

        return response;
      });

      setMaintenanceProducts(products);
      setVehicle(vehicle);
    }

    const someLicensePlate = cars.some((car) => car.license_plate);

    if (cars.length == 0 || !someLicensePlate) {
      navigate("/totem/dashboard");
    }

    fetchData().finally(() => setLoading(false));
  }, [cars, requestedCar]);

  return (
    <>
      <Title page={`Saúde do meu veículo`} />

      <div className="d-flex gap-2 align-items-center px-4 mb-4">
        <span className="bagde-search">
          <span className="mgc_settings_3_line fs-4"></span>
          Montadora: {vehicle?.montadora}
        </span>
        <span className="bagde-search">
          <span className="mgc_car_3_line fs-4"></span>
          Modelo: {vehicle?.modelo}
        </span>
      </div>

      <div
        className="overflow-y-auto py-4"
        style={{
          height: "calc(100% - 22rem)",
        }}
      >
        {loading ? (
          <div className="h-100 d-flex flex-column gap-5 align-items-center justify-content-center">
            <div
              className="spinner-border text-primary"
              style={{ width: "4vw", height: "4vw", borderWidth: "0.475rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <small className="fs-5 fw-medium opacity-75">
              Preparando seu pit stop virtual...
            </small>
          </div>
        ) : (
          <MaintenanceProducts
            products={maintenanceProducts}
            setCartProducts={setCartProducts}
          />
        )}
      </div>
    </>
  );
}
