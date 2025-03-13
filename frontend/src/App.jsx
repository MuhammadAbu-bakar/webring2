import { Routes, Route, useLocation } from "react-router-dom";
import HomeHeader from "./components/HomeHeader";
import ServicesHeader from "./components/ServicesHeader";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <HomeHeader /> : <ServicesHeader />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:service1" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
