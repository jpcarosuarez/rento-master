import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header.js";
import HomePage from "../../pages/HomePage/HomePage";
import RentaPage from "../../pages/RentaPage/RentaPage";
import WorkingPage from "../../pages/WorkingPage/WorkingPage";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import ContactPage from "../../pages/ContactPage/ContactPage.jsx";
import RentSpacePage from "../../pages/RentSpacePage/RentSpacePage.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Footer from "../Footer/Footer.jsx";
import Footeer from "../footeer/Footeer.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/rentaEspacio" element={<RentSpacePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
        <Route path="/funcionamiento" element={<WorkingPage />} />
        <Route path="/renta" element={<RentaPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path='*' element={ <NotFoundPage/>}/>
      </Routes>

      <Footeer />
    </BrowserRouter>
  );
}
