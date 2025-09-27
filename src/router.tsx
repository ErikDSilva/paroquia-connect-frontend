import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LoginPage } from "./pages/login/page";
import { RegisterPage } from "./pages/register/page";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
