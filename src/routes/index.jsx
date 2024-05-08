import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "@/pages/home";
import Project from "@/pages/project";
import Splash from "@/pages/totem/splash";
import HomeTotem from "@/pages/totem/home";
import Identify from "@/pages/totem/identify";
import Login from "@/pages/totem/login";
import Profile from "@/pages/totem/profile";
import Register from "@/pages/totem/register";
import Cart from "@/pages/totem/cart";
import Search from "@/pages/totem/search";
import Maintenance from "@/pages/totem/maintenance";
import Stored from "@/pages/totem/stored";
import Dashboard from "@/pages/totem/dashboard";
import sortObject from "@/utils/sortObject";
import fetchAutomaker from "@/utils/api/fetchAutomaker";
import ProductCard from "@/components/Product/ProductCard";

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

  const [searchTerm, setSearchTerm] = useState({
    automaker: {
      id: null,
      name: "",
    },
    license_plate: "",
    superbusca: "",
  });

  const [loading, setLoading] = useState(true);

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
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />

      <Route path="/totem" element={<Splash />} />
      <Route path="/totem/identify" element={<Identify />} />
      <Route path="/totem/login" element={<Login />} />
      <Route path="/totem/register" element={<Register />} />

      <Route path="/totem/dashboard" element={<Dashboard />}>
        <Route
          path=""
          element={
            <HomeTotem
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              automakers={automakers}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="search"
          element={
            <Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              user={user}
              loading={loading}
              setLoading={setLoading}
            />
          }
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
      <Route path="/totem/stored" element={<Stored />} />
    </Routes>
  );
}
