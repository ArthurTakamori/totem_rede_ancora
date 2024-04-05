import { Routes, Route } from "react-router-dom";
import Splash from "../pages/splash";
import Home from "../pages/home";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Register from "../pages/register";
import Cart from "../pages/cart";
import Search from "../pages/search";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
