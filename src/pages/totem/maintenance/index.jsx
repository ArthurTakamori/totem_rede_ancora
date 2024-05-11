import Title from "@/components/Title";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaintenanceProducts from "@/components/Product/MaintenanceProducts";
import fetchProducts from "@/utils/api/fetchProducts";
import generateProductPrices from "@/utils/generateProductPrices";
import generateReplacementDate from "@/utils/generateReplacementDate";
import DropdownMaintenence from "@/components/DropdownMaintenence";

export default function Maintenance({
  user,
  setCartProducts,
  loading,
  setLoading,
}) {
  const [maintenanceProducts, setMaintenanceProducts] = useState([]);
  const [licenseCarNotFound, setLicenseCarNotFound] = useState(false);
  const [vehicle, setVehicle] = useState({});
  const { cars } = user;
  const [selectedCar, setSelectedCar] = useState(
    cars[0]?.license_plate
    // valor de index, ou nome da placa, para incluir na busca.
    // state para armazenar qual carro o cliente quer ver.
    // por padrão o primeiro do array cars (index 0).
    // pode ser alterado por um botao radio.
  );

  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedCar);
    async function fetchData() {
      setLoading(true);

      const { pageResult, vehicle } = await fetchProducts({
        itensPorPagina: 5,
        veiculoPlaca: selectedCar ?? "",
      });

      if (!pageResult) {
        setLicenseCarNotFound(true);
        return;
      }

      const data = pageResult.data;

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
  }, [cars, selectedCar]);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <Title page={`Saúde do meu veículo`} />

          <div className="d-flex gap-2 align-items-center px-4 mb-4">
            <span className="bagde-search">
              <span className="mgc_settings_3_line fs-4"></span>
              Montadora: {vehicle?.montadora ?? "--"}
            </span>
            <span className="bagde-search">
              <span className="mgc_car_3_line fs-4"></span>
              Modelo: {vehicle?.modelo ?? "--"}
            </span>
          </div>
        </div>

        <DropdownMaintenence cars={cars} setSelectedCar={setSelectedCar} selectedCar={selectedCar}/>
      </div>

      <div
        className="overflow-y-auto py-4"
        style={{
          height: "calc(100% - 22rem)",
        }}
      >
        {(() => {
          if (loading) {
            return (
              <div className="h-100 d-flex flex-column gap-5 align-items-center justify-content-center">
                <div
                  className="spinner-border text-primary"
                  style={{
                    width: "4vw",
                    height: "4vw",
                    borderWidth: "0.475rem",
                  }}
                  role="status"
                >
                  <span className="visually-hidden">Carregando...</span>
                </div>
                <small className="fs-5 fw-medium opacity-75">
                  Preparando seu pit stop virtual...
                </small>
              </div>
            );
          }

          if (licenseCarNotFound) {
            return (
              <div className="h-100 d-flex flex-column gap-5 align-items-center justify-content-center">
                <small className="fs-5 fw-medium opacity-75">
                  Veículo não encontrado!
                </small>
              </div>
            );
          }

          return (
            <MaintenanceProducts
              products={maintenanceProducts}
              setCartProducts={setCartProducts}
            />
          );
        })()}
      </div>
    </>
  );
}
