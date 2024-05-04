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
import ProductCard from "../components/Product/ProductCard";

export default function RoutesComponent() {
  
  const [family, setFamily] = useState({
    
  });

  const [products, setProducts] = useState({
    id: '',
    descricao: ''
  });

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/identify" element={<Identify />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Home family={family} setFamily={setFamily} />} />
        <Route path="search" element={<Search family={family} setFamily={setFamily} />} />
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="cart" element={<Cart products={products} />} />
        <Route path="profile" element={<Profile />} />
        {/* Criando Produtos do Carrinho - Arthur  */}
        <Route path="productCard" element={<ProductCard />} />
      </Route>
      <Route path="stored" element={<Stored />} />
    </Routes>
  );
}
