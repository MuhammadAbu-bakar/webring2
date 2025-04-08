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
import AppDevPage from "./pages/AppDevPage";
import ShopifyDevPage from "./pages/ShopifyDevPage";
import WebConsultancyPage from "./pages/WebConsultancyPage";
import PerformMarketPage from "./pages/PerformMarketPage";
import WebDevPage from "./pages/WebDevPage";
import GameDevPage from "./pages/GameDevPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import ContentWritingPage from "./pages/ContentWritingPage";
import SocialMediaPage from "./pages/SocialMediaPage";


import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <HomeHeader /> : <ServicesHeader />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/web-development" element={<ServicesDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:blogId" element={<BlogDetailPage />} /> {/* New Route */}
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/our-partner" element={<OurPartnerPage />} />
        <Route path="/our-mission" element={<OurMissionPage />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/app-development" element={<AppDevPage />} />
        <Route path="/shopify-development" element={<ShopifyDevPage />} />
        <Route path="/web-consultancy" element={<WebConsultancyPage />} />
        <Route path="/perform-market" element={<PerformMarketPage />} />
        <Route path="/web-developmentt" element={<WebDevPage />} />
        <Route path="/game-development" element={<GameDevPage />} />
        <Route path="/graphic-designing" element={<GraphicDesignPage />} />
        <Route path="/content-writing" element={<GraphicDesignPage />} />
        <Route path="/social-media" element={<SocialMediaPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
