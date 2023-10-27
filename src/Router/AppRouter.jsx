import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Contacto from "../Page/Contacto";
import Inicio from "../Page/Inicio";
import QuinesSomos from "../Page/QuienesSomos";
import Registro from "../Page/Registrarse";
import ProducCard from "../Components/Card";

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="" element={<Inicio />} />
                <Route path="/ProducCard" element={<ProducCard />} />
                <Route path="/Registro" element={<Registro />} />
                <Route path="/QuinesSomos" element={<QuinesSomos />} />
                <Route path="/Contacto" element={<Contacto/>} />
            </Routes>
            <Footer />
        </Router>
    )
};

export default AppRouter;