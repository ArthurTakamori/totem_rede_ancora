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

  const [ messageAlert, setMessageAlert ] = useState('');
  
  const toastBtn = document.getElementById('toastAlertBtn')
  const toastAlert = document.getElementById('toastAlert')

  if (toastBtn) {
    toastBtn.addEventListener('click', () => {
      const toast = new bootstrap.Toast(toastAlert)

      toast.show()
    })
  }

  const [user, setUser] = useState({
    name: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    phone: "(11) 87654-3210",
    cpf: "87654321099",
    cars: [
      {
        license_plate: "JKL-3456",
      },
    ],
  });

  const [cartProducts, setCartProducts] = useState([]);

  function handleAddToCart(data) {

    const indexProductCart = cartProducts.findIndex((product) => Number(product.id) === Number(data.id));

    if(indexProductCart !== -1) {
      const productStored = cartProducts[indexProductCart];
      productStored.qtd = Number(productStored.qtd) + Number(data.qtd)
    } else {
      setCartProducts((content) => [...content, data]);
    }

    setMessageAlert('Produto adicionado ao carrinho com sucesso!')
    setTimeout(() => toastBtn.click(), 200);
    document.getElementById("#closeModalCart").click();
  }

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
      <Route path="/totem/login" element={<Login setUser={setUser} />} />
      <Route path="/totem/register" element={<Register />} />

      <Route
        path="/totem/dashboard"
        element={
          <Dashboard user={user} 
                     cartProductsCount={cartProducts.length}
                     messageAlert={messageAlert} />
        }
      >
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
              setCartProducts={handleAddToCart}
            />
          }
        />
        <Route
          path="maintenance"
          element={
            <Maintenance
              user={user}
              setCartProducts={handleAddToCart}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route
          path="profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        {/* Criando Produtos do Carrinho - Arthur  */}
        <Route path="productCard" element={<ProductCard />} />
      </Route>
      <Route path="/totem/stored" element={<Stored />} />
    </Routes>
  );
}
