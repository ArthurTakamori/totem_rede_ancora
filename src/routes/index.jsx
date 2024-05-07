import { Routes, Route } from "react-router-dom";
import Splash from "../pages/splash";
import Home from "../pages/home";
import Identify from "../pages/identify";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Register from "../pages/register";
import Cart from "../pages/cart";
import Search from "../pages/search";
import Maintenance from "../pages/maintenance";
import Stored from "../pages/stored";
import { useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import Dashboard from "../pages/dashboard";
import fetchAutomaker from "../utils/api/fetchAutomaker";
import sortObject from "../utils/sortObject";

export default function RoutesComponent() {
  const [user, setUser] = useState({
    name: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    phone: "(11) 87654-3210",
    cpf: "876.543.210-99",
    cars: [
      {
        license_plate: "JKL-3456",
      },
    ],
  });

  const [cartProducts, setCartProducts] = useState([
    {
      name: "Amortecedor",
      description: "Modelo original",
      price: "244.50",
      qtd: "01",
    },
    {
      name: "Melhor que 2",
      description: "Modelo original",
      price: "189.50",
      qtd: "01",
    },

    {
      name: "Melhor que 2",
      description: "Modelo original",
      price: "189.50",
      qtd: "01",
    },
  ]);

  const [automakers, setAutomakers] = useState([]);

  const [activeFilter, setActiveFilter] = useState({
    automaker: "",
    license_plate: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: automakers } = await fetchAutomaker(0, 1000);

        setAutomakers(sortObject(automakers, "descricao"));
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/identify" element={<Identify />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route
          path=""
          element={
            <Home
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              automakers={automakers}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="search"
          element={<Search activeFilter={activeFilter} user={user} />}
        />
        <Route path="maintenance" element={<Maintenance />} />
        <Route
          path="cart"
          element={
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route path="profile" element={<Profile />} />
        {/* Criando Produtos do Carrinho - Arthur  */}
        <Route path="productCard" element={<ProductCard />} />
      </Route>
      <Route path="stored" element={<Stored />} />
    </Routes>
  );
}
