import { Routes, Route, useLocation } from "react-router-dom";
import HomeHeader from "./components/HomeHeader";
import ServicesHeader from "./components/ServicesHeader";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import WhoWeArePage from "./pages/WhoWeArePage";
import OurPartnerPage from "./pages/OurPartnerPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import OurMissionPage from "./pages/OurMissionPage";
import ServicesDetailPage from "./pages/ServicesDetailPage";
import ContactForm from "./pages/ContactForm";


import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <HomeHeader /> : <ServicesHeader />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/web-development" element={<ServicesDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:blogId" element={<BlogDetailPage />} /> {/* New Route */}
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/our-partner" element={<OurPartnerPage />} />
        <Route path="/our-mission" element={<OurMissionPage />} />
        <Route path="/contact-form" element={<ContactForm />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
