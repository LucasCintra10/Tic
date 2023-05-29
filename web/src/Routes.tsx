import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import  CadastroPatrimonio  from "./pages/CadastroPatrimonio";
import ConsultaPatrimonio from "./pages/ConsultaPatrimonio";

export const PagesRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroPatrimonio />} />
        <Route path="/consulta" element={<ConsultaPatrimonio />} />
      </Routes>
    </Router>
  );
};
