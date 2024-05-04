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
import fetchCategories from "../utils/api/fetchCategories";
import sortObject from "../utils/sortObject";

export default function RoutesComponent() {
  
  const [family, setFamily] = useState({
    
  });

  const [products, setProducts] = useState({
    id: '',
    descricao: ''
  });

  const [categories, setCategories] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      try {
        const { data: families } = await fetchCategories(0, 1000);

        const a = families.filter((family) => family.id < 36);
        setCategories(sortObject(a, 'descricao'));
          
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
        <Route path="" element={<Home family={family} setFamily={setFamily} categories={categories}/>} />
        <Route path="search" element={<Search family={family} />} />
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
