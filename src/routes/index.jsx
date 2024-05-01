import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
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
import { useState } from "react";

//Criando Componente Produto do Carrinho - Arthur
import ProductCard from "../components/Product/ProductCard";

export default function RoutesComponent() {
  const [products, setProducts] = useState([]);

  /* 
    {
      id: 1,
      produto
    }
  */

  // Criar uma random no superbusca ['categorias'] para quando o
  // usuario não selecionar nenhuma categoria

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/identify" element={<Identify />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="cart" element={<Cart products={products} />} />
        <Route path="profile" element={<Profile />} />
        {/* Criando Produtos do Carrinho - Arthur  */}
        <Route path="productCard" element={<ProductCard />} />
        <Route path="stored" element={<Stored />} />
      </Route>
    </Routes>
  );
}
