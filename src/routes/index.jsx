import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page" element={<h1> Page 2</h1>} />
      <Route path="/page3" element={<h1>Page 3</h1>} />
      <Route path="/page4" element={<h1>Page 4</h1>} />
    </Routes>
  );
}
