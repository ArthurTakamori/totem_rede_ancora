import { Routes, Route } from "react-router-dom";
import Splash from "../pages/splash";
import Home from "../pages/home";
import Identify from "../pages/identify";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Register from "../pages/register";
import Cart from "../pages/cart";
import Search from "../pages/search";
import { useState } from "react";

//Criando Componente Produto do Carrinho - Arthur
import ProductCard from "../components/Product/ProductCard"

export default function RoutesComponent() {

  //Guardar qualquer dado
  // int = 0
  // boolean = true|false
  // string = 'meu nome'
  // objeto = { nome: 'meu nome' }
  const [ filter, setFilter ] = useState('all')
  
  const produtos = useState([
    {
      nome: 'Produto 1',
      descricao: 'nananna',
    },
    {
      nome: 'Produto 2',
      descricao: 'memememm',
    },
  ]);

  //Exemplo apenas
  const produtos2 = produtos.map((produto) => {
    produto.nome = 'Produto'
  });

  //Filtrar produtos search
  const produtosFiltrados = produtos.filter((produto) => {
    produto.nome === filter
  });

  console.log(produtos2);
  console.log(produtosFiltrados);

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/identify" element={<Identify />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home produtos={produtos}/>} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      {/* Criando Produtos do Carrinho - Arthur  */}
      <Route path="/productCard" element={<ProductCard />} />
    </Routes>
  );
}
